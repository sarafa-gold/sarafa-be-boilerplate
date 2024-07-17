import async from 'async'

import HandlerBase from 'sarafa-svc-node-handler-base'
import { CmdOptions } from 'sarafa-svc-node-wrk'
import exampleRoutes from '../routes/example.routes'

class HttpHandler extends HandlerBase {
  constructor (conf: any, cmdOptions: CmdOptions) {
    super({}, cmdOptions as any)
    this.init()
    this.start(() => console.log('START'))
  }

  _init () {
    this.servicesArgs = [
      {
        library: 'sarafa-svc-fastify',
        name: 'sarafaSvcFastify',
        opts: {
          logger: true,
          trustProxy: true,
          disableRequestLogging: true,
          port: 3649
        },
        delayStart: true
      }
    ]
  }

  _start (cb: (err?: Error | null, results?: any) => void) {
    this.services.sarafaSvcFastify.register('customFn', [{customFn: exampleRoutes, config: { prefix: "/api/auth"}}])
    this.services.sarafaSvcFastify.start()
  }

  _stop (cb: (err?: Error | null, results?: any) => void): void {}
}

export default HttpHandler
