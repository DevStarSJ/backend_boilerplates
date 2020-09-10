import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Loggly } from 'winston-loggly-bulk'
import winston from 'winston'
import L from 'lodash'

winston.add(new Loggly({
  token: process.env.LOGGLY_KEY || '',
  subdomain: 'genoplan',
  tags: ['NestJS'],
  json: true
}))

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // console.log('context =>', context)
    // console.log('next =>', next)


    const response = context.switchToHttp().getResponse()

    // console.log('response =>', response)

    console.log('headers => ', L.get(context, 'args.0.headers'))
    console.log('url => ', L.get(context, 'args.0.url'))
    console.log('method => ', L.get(context, 'args.0.method'))
    console.log('params => ', L.get(context, 'args.0.params'))
    console.log('query => ', L.get(context, 'args.0.query'))
    console.log('body => ', L.get(context, 'args.0.body'))
    
    console.log('statusCode => ', L.get(context, 'args.1.statusCode'))

    console.log('response headers =>', response.getHeaders())
    // const body = await next.handle().pipe(a => a).toPromise()
    // console.log('response body =>', body)

    const logData = {
      request: {
        path: L.get(context, 'args.0.url'),
        method: L.get(context, 'args.0.method'),
        headers: L.get(context, 'args.0.headers'),
        params: L.get(context, 'args.0.params'),
        query: L.get(context, 'args.0.query'),
        body: L.get(context, 'args.0.body'),
      },
      response: {
        status: L.get(context, 'args.1.statusCode'),
        headers: response.getHeaders(),
      }
    }

    // return body
    return next.handle().pipe(tap(data => {
      logData.response['body'] = data
      winston.log('info', logData)

      console.log(logData)
      // return { data }
    }))
  }
}
