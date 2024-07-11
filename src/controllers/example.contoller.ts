import { inject, injectable } from 'inversify'
import { ApiHelperHandler, IReply, ApiHelper } from 'sarafa-lib-utils-api'
import { ExampleService } from '../service/example.service'

@injectable()
export class ExampleController {
  constructor (@inject(ExampleService) private exampleService: ExampleService) {}
  exampleController: ApiHelperHandler<{}, {}, {}, {}, IReply> = async (
    request: any,
    reply: any
  ) => {
    return ApiHelper.success(reply, { hello: 'world' })
  }
}
