import { NestFactory } from '@nestjs/core';
import { MockModule } from './app.module';
import { findAvailablePort } from './misc';
import { SuccessInterceptor } from './middleware/success.interceptor';
import { GlobalExceptionFilter } from './middleware/global.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(MockModule);

  app.useGlobalInterceptors(new SuccessInterceptor());
  app.useGlobalFilters(new GlobalExceptionFilter());

  const port = await findAvailablePort(process.env.PORT ? Number(process.env.PORT) : 3000);

  await app.listen(port, 'localhost');
  console.debug(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
