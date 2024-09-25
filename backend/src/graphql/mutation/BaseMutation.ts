// prettier-ignore
import { Resolver } from '@nestjs/graphql';
import { InjectDataSource } from '@nestjs/typeorm'
import { DataSource, QueryRunner } from 'typeorm'
import { GraphQLError } from 'graphql'

import { Customer, Order, OrderProduct, Product, Staff } from '@db/entities'

@Resolver()
export class BaseMutationResolver {
  entities = { OrderProduct, Product, Order, Staff, Customer }

  constructor(@InjectDataSource() private dataSource?: DataSource) {}

  async withTransaction(mutationFunc: any) {
    const runner = this.dataSource.createQueryRunner()
    await runner.connect()
    await runner.startTransaction()

    try {
      const result = await mutationFunc(runner)
      await runner.commitTransaction()
      return result
    } catch (e) {
      await runner.rollbackTransaction()
      return new GraphQLError(e)
    } finally {
      // you need to release query runner which is manually created:
      await runner.release()
    }
  }

  async doSoftDelete(runner: QueryRunner, entity: any, id: number) {
    await runner.manager.softDelete(entity, id)
    return { id }
  }

  // only handle create/delete, pls do update in dedicated mutation
  async saveRelations(runner: QueryRunner, parent: any, _relations: MRelations) {
    return Promise.all(
      _relations.map(async (relation) => {
        const { records: _records, entityName, parentIdColName } = relation
        // inject parentId foreign key
        const records = _records.map((r) => ({ [parentIdColName]: parent.id, ...r }))

        const entity = this.entities[entityName]
        // prettier-ignore
        await runner.manager.softDelete(entity, records.filter((r) => !r.deleted))
        await runner.manager.save(entity, records.filter((r) => !r.deleted))
        // prettier-ignore
      }),
    )
  }
}

// @InputType()
// export class MRelationInputType {
//   @Field()
//   id: number

//   @Field({ nullable: true })
//   deleted?: boolean
// }

export interface MutationResponse {
  id: number
}

// records can have extra attributes
export type MRelations = { entityName: any; parentIdColName: string; records: { id?: number; deleted?: boolean }[] }[]
