import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DireccionModule } from './direccion/direccion.module';

@Module({
  imports: [DireccionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
