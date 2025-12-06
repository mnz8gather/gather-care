import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import type { GeneralResponse } from 'typescriptset-tsdown/trustful';

@Injectable()
export class SuccessInterceptor<T, R> implements NestInterceptor<T, GeneralResponse<R>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<GeneralResponse<R>> {
    return next.handle().pipe(
      map((data: GeneralResponse<R>) => ({
        ...data,
        code: 1001,
        message: 'success',
      })),
    );
  }
}
