import { Module } from '@nestjs/common';
import { AuthModule } from '~/src/Modules/Auth/Infrastructure/Module/AuthModule';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
