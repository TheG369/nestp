import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadoModule } from './estado/estado.module';
import { PrismaService } from './prisma/prisma.service';
import { MunicipioModule } from './municipio/municipio.module';
import { LocalidadModule } from './localidad/localidad.module';
import { ClienteModule } from './cliente/cliente.module';
import { DireccionModule } from './direccion/direccion.module';

@Module({
  imports: [EstadoModule, MunicipioModule, LocalidadModule, ClienteModule, DireccionModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
