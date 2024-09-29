import { Field, FieldOptions, ObjectType } from '@nestjs/graphql'
import { Column, ColumnOptions, Entity, type EntityOptions } from 'typeorm'

// class decorator
export function EntityObject({ entity }: { entity?: EntityOptions } = {}) {
  return function (target: Function) {
    Entity(entity)(target)
    ObjectType()(target)
  }
}

// property decorator
export function ColumnField({
  column,
  field,
  fieldType,
}: { column?: ColumnOptions; field?: FieldOptions; fieldType?: any } = {}) {
  return function (target: any, propertyKey: string) {
    Column(column)(target, propertyKey)
    Field(fieldType ? () => fieldType : undefined, field)(target, propertyKey)
  }
}
