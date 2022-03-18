import { Module } from '@nestjs/common';
import { AuthModule } from '~/src/Modules/Auth/Infrastructure/Module/AuthModule';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
