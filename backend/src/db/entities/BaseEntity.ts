// prettier-ignore
import { Field, ObjectType } from '@nestjs/graphql';
import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { EntityObject } from '..'

@EntityObject()
export class BaseEntity {
  // postgresql gen uuid itself
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @Field({ nullable: true })
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date
}

// export class BaseVendorEntity extends BaseEntity {
//   @Column({ name: 'vendor_id' })
//   vendorId: string
// }
