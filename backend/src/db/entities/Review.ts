import { Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { Residence } from './Residence'
import { ColumnField, EntityObject } from '..'
import { Float } from '@nestjs/graphql'

@EntityObject({ entity: { name: 'review' } })
export class Review extends BaseEntity {
  @ColumnField({ column: { type: 'text' } })
  content: string

  @ColumnField({ column: { type: 'smallint' } })
  rating: number

  @ColumnField({ column: { name: 'room_size', type: 'decimal' }, fieldType: Float })
  roomSize: number

  @ColumnField({ column: { type: 'enum', enum: ['studio', '1b', '2b'] } })
  room_type: string

  @ColumnField({ column: { type: 'int' } })
  year: number

  @ColumnField({ column: { type: 'boolean' } })
  rented: boolean

  // relations
  @ColumnField({ column: { name: 'residence_id', type: 'uuid' } })
  residenceId: string

  @ColumnField({ column: { name: 'user_id', type: 'uuid' } })
  userId: string

  @ManyToOne(() => Residence, (residence) => residence.reviews)
  @JoinColumn({ name: 'residence_id' })
  residence: Residence

  @ManyToOne(() => Residence, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user: Residence
}
