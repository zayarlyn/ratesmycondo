import { Field, InputType, ObjectType } from '@nestjs/graphql'

import { BaseType } from './BaseType'
import { Residence } from '@db/entities'

@ObjectType()
export class ResidenceType extends Residence {}
