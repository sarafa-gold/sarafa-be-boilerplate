import { inject, injectable } from 'inversify'
import { ApiHelperHandler, IReply, ApiHelper } from 'sarafa-lib-utils-api'
import { ExampleService } from '../service/example.service'

@injectable()
export class ExampleController {
  constructor (@inject(ExampleService) private testService: ExampleService) {}
  testController: ApiHelperHandler<{}, {}, {}, {}, IReply> = async (
    request,
    reply
  ) => {
    return ApiHelper.success(reply, { hello: 'world' })
  }
}
