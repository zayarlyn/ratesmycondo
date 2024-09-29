import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule as NestJSGraphQLModule } from '@nestjs/graphql'
// import { GraphQLJSON } from 'graphql-scalars';
import { Residence, Review, User } from '@db/entities'
import { TypeOrmModule } from '@nestjs/typeorm'
import { parse, print } from 'graphql'
import { FindOptionsSelect } from 'typeorm'
import { ResidenceListQueryResolver } from './query'
import { ObjectScalar } from './scalars'

@Module({
  imports: [
    TypeOrmModule.forFeature([Residence, Review, User]),
    NestJSGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      context: async (ctx) => {
        // TODO
        // @ts-ignore
        // const rootSs = parse(ctx.req.body.query, { noLocation: true }).definitions[0].selectionSet

        // if (rootSs.selections?.map((s) => s.name.value)[0] === 'residenceList') {
        //   const td = parse(ctx.req.body.query)
        //   const getRelations = (selectionSet, result: []) => {
        //     // @ts-ignore
        //     result = result.concat(
        //       selectionSet.selections?.map((selection) => {
        //         if (!selection.selectionSet) return selection.name.value
        //         const relationSets = selection.selectionSet?.selections
        //           // .filter((s) => s.selectionSet !== undefined)
        //           ?.map((s) => {
        //             // if (selection.name.value === 'residentList') {
        //             console.log('name', s.name.value)
        //             // }
        //             if (!s.selectionSet) return s.name.value
        //             return { [selection.name.value]: getRelations(s.selectionSet, []) }
        //           })
        //         return relationSets
        //       }),
        //     )
        //     return result
        //   }
        //   const anyway = getRelations(rootSs, [])
        //   console.log('final', anyway)
        // }

        return {
          selection: parse(ctx.req.body.query)
            //@ts-ignore
            .definitions[0].selectionSet.selections[0].selectionSet.selections.filter(
              (s) => s.selectionSet === undefined && s.name.value !== '__typename',
            )
            .map((s) => s.name.value),
        }
      },
      // FIXME: why need to be JSON and not Json?
      // resolvers: { JSON: GraphQLJSON },
      resolvers: { Object: ObjectScalar },
    }),
  ],
  providers: [ResidenceListQueryResolver],
  // controllers: [],
})
export class GraphqlModule {}

export interface MyGqlContext {
  selection: FindOptionsSelect<any>
  relations: any
}
