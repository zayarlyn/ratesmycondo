import { Residence } from '@db/entities'
import { Args, Context, Query, Resolver } from '@nestjs/graphql'

import { MyGqlContext } from '../graphql.module'
import { ResidenceType } from '../type'
import { BaseListQueryResolver, QArgs } from './BaseListQuery'

@Resolver()
export class ResidenceListQueryResolver extends BaseListQueryResolver {
  entity = Residence

  @Query(() => [ResidenceType])
  async residenceList(@Args() args: QArgs, @Context() ctx: MyGqlContext): Promise<ResidenceType[]> {
    // return this.findAll({ orderProducts: { product: true } }, args, ctx)
    return this.findAll({ reviews: true }, args, ctx)
  }
}
