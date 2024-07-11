import 'reflect-metadata'
import { Container } from 'inversify'
import { ExampleController } from '../controllers/example.contoller'
import { ExampleRepo } from '../repo/example.repo'
import { ExampleService } from '../service/example.service'

const container = new Container()

container.bind<ExampleService>(ExampleService).toSelf()
container.bind<ExampleRepo>(ExampleRepo).toSelf()
container.bind<ExampleController>(ExampleController).toSelf()

export default container
