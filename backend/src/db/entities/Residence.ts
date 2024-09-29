import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { Review } from './Review'
import { Field, ObjectType } from '@nestjs/graphql'
import { ColumnField, EntityObject } from '..'

@EntityObject({ entity: { name: 'residence' } })
export class Residence extends BaseEntity {
  @ColumnField({ column: { type: 'varchar', length: 100 } })
  name: string

  @ColumnField({ column: { type: 'text' } })
  description: string

  @ColumnField({ column: { type: 'text', name: 'map_url' } })
  mapUrl: string

  @ColumnField({ column: { type: 'varchar', length: 2, name: 'country_code' } })
  countryCode: string

  @ColumnField({ column: { type: 'enum', enum: ['townhouse', 'apartment', 'condo'] } })
  type: string

  // relations
  @Field(() => [Review], { nullable: true })
  @OneToMany(() => Review, (review) => review.residence)
  reviews: Review[]
}
