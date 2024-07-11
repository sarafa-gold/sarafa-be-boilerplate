import { inject, injectable } from 'inversify'
import { ExampleRepo } from '../repo/example.repo'

@injectable()
export class ExampleService {
  constructor (@inject(ExampleRepo) private testRepo: ExampleRepo) {}
}
