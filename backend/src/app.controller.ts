// import { Customer, Order, ORDER_STATUS_ENUM, OrderProduct, Product, Staff } from '@db/entities'
import { Residence, Review, User } from '@db/entities'
import { faker } from '@faker-js/faker'
import { Controller, Get, Response } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, Repository } from 'typeorm'

@Controller('/')
export class AppController {
  constructor(
    @InjectRepository(Residence) private residence: Repository<Residence>,
    @InjectRepository(Review) private review: Repository<Review>,
    @InjectRepository(User) private user: Repository<User>,
  ) {}
  @Get('/seed')
  async seed() {
    await this.review.delete({})
    await this.residence.delete({})

    const sampleResidences = Array.from({ length: 5 }).map(() => ({
      name: faker.company.name(),
      description: faker.lorem.sentence(),
      mapUrl: faker.internet.url(),
      type: faker.helpers.arrayElement(['townhouse', 'apartment', 'condo']),
      countryCode: faker.location.countryCode('alpha-2').toLowerCase(),
    }))
    const residences = await this.residence.save(sampleResidences)

    const sampleUsers = Array.from({ length: 3 }).map(() => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      mapUrl: faker.internet.url(),
      countryCode: faker.location.countryCode('alpha-2').toLowerCase(),
      passportId: faker.airline.flightNumber(),
      authUserId: faker.string.uuid(),
    }))

    const users = await this.user.save(sampleUsers)

    const sampleReviews = Array.from({ length: 15 }).map(() => ({
      rating: faker.number.int({ min: 0, max: 10 }),
      content: faker.lorem.paragraph(),
      roomSize: faker.number.float({ min: 20, max: 100 }),
      year: faker.number.int({ min: 2016, max: new Date().getFullYear() }),
      room_type: faker.helpers.arrayElement(['studio', '1b', '2b']),
      rented: faker.helpers.arrayElement([true, false]),
      residenceId: faker.helpers.arrayElement(residences).id,
      userId: faker.helpers.arrayElement(users).id,
    }))
    const reviews = await this.review.save(sampleReviews)

    return 'seeded!!'
  }
}
