import HandlerBase from 'sarafa-svc-node-handler-base'
import { CmdOptions } from 'sarafa-svc-node-wrk'

class HttpHandler extends HandlerBase {

    constructor(conf: any, cmdOptions: CmdOptions) {
        super({}, cmdOptions as any)
        console.log("C", cmdOptions)
        this.start(() => console.log("START"))
    }

    _start(cb: (err?: Error | null, results?: any) => void) {
        console.log("PROSS start")
    }
}

export default HttpHandler