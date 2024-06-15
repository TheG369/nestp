import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MunicipioModule } from './municipio/municipio.module';

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
