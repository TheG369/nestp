import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadoModule } from './estado/estado.module';

@Module({
  imports: [EstadoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
