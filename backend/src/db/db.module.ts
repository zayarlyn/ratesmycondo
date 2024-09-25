import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '',
      port: 0,
      username: '',
      password: '',
      database: '',
      entities: [],
      // logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class DbModule {}
