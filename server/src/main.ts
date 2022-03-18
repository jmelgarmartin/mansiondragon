import { NestFactory } from '@nestjs/core';
import { AppModule } from './Modules/App/Infrastructure/Module/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
