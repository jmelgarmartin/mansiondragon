import { NestFactory } from '@nestjs/core';
import { AppModule } from "./Modules/App/Infrastructure/Module/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();
