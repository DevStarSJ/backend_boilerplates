import {
  ExecutionContext,
  Injectable,
  NestInterceptor,
  CallHandler,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { init } from '@sentry/node'
import * as Sentry from '@sentry/minimal'

require('@sentry/tracing') // 선언만

init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
})

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  intercept( context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        tap(null, (exception) => {
          Sentry.captureException(exception)
        }),
      )
  }

}