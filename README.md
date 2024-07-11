# Structure followed:

## Each microservice will have :
`sarafa-be-boilerplate/src/worker.ts`
This starts the node process
`sarafa-be-boilerplate/src/handlers/handler.ts`
This is base class which handles starting /stoping the services and  initiallizing any data. It extends sarafa-be-boilerplate/src/handlers/handler.ts HandlerBase this is responsible for background logic to init services and create instances at global handler level. These services can be used or overridden in handler. Services are directly  imported and instantiated and we just need to pass opts, name, library or customHandlers

In _start we can register routes/ plugins etc or start service if the service is delayStarted
I have used inversify to handle dependency injection and it can be seem in config.

All the base repos, utils and workers used in boilerplate repo are here
https://github.com/sarafa-gold/sarafa-svc-base
https://github.com/sarafa-gold/sarafa-svc-fastify
https://github.com/sarafa-gold/sarafa-svc-node-handler-base
https://github.com/sarafa-gold/sarafa-svc-node-wrk
https://github.com/sarafa-gold/sarafa-lib-utils-api

## npm packages

https://www.npmjs.com/package/sarafa-svc-node-wrk
https://www.npmjs.com/package/sarafa-svc-node-handler-base
https://www.npmjs.com/package/sarafa-svc-fastify
https://www.npmjs.com/package/sarafa-svc-base (Used in sarafa-svc-fastify. Base for all services)
https://www.npmjs.com/package/sarafa-lib-utils-api


# Fastify based node js microservice

## Using dependency injection with inversify.js
    Bind the classes to inject with the container in inversify.config.ts

## ApiHelper:
    Can be used to send the specific fixed response to client
    Use the APIHelper .get /put /post /delete sattic methods, and the types need to be added for the params /body and query strings expected from user
    Has static methods such as success / callfailed / missingparameters