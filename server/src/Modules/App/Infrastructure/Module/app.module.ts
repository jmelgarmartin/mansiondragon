import { Module } from '@nestjs/common';
import { AuthModule } from '~/src/Modules/Auth/Infrastructure/Module/AuthModule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
