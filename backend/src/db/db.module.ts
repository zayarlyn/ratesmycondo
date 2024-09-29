import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Residence, Review, User } from './entities'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: '',
      // port: 0,
      // username: '',
      // password: '',
      // database: '',
      entities: [Residence, Review, User],
      // logging: true,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DbModule {}
