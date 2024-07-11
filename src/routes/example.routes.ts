import 'reflect-metadata'
import { FastifyInstance } from 'fastify'
import { ApiHelperHandler, IReply, ApiHelper } from 'sarafa-lib-utils-api'
import { ExampleController } from '../controllers/example.contoller'
import container from '../configs/inversify.config'

export default async (app: FastifyInstance) => {
  const exampleController =
    container.resolve<ExampleController>(ExampleController)

  exampleController.exampleController
  ApiHelper.get<{}, {}, {}>(
    app,
    '/',
    exampleController.exampleController.bind(exampleController)
  )
}
