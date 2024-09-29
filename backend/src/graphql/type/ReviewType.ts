import { Field, InputType, ObjectType } from '@nestjs/graphql'

import { BaseType } from './BaseType'
import { Review } from '@db/entities'

@ObjectType()
export class ReviewType extends Review {}
