import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { Review } from './Review'
import { ColumnField, EntityObject } from '..'

@EntityObject({ entity: { name: 'user' } })
export class User extends BaseEntity {
  @ColumnField()
  name: string

  @ColumnField({ column: { type: 'varchar', length: 100 } })
  email: string

  @ColumnField({ column: { type: 'varchar', length: 10 } })
  phone: string

  @ColumnField({ column: { name: 'country_code', type: 'varchar', length: 2 } })
  countryCode: string

  @ColumnField({ column: { name: 'passport_id', type: 'varchar', length: 36 } })
  passportId: string

  // relations
  @ColumnField({ column: { type: 'uuid', name: 'auth_user_id' } })
  authUserId: string

  @OneToMany(() => Review, (review) => review.residence)
  reviews: Review[]
}
