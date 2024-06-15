import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadosModule } from './estado/estado.module';
import { PrismaService } from './prisma/prisma.service';
import { MunicipiosModule } from './municipio/municipio.module';
import { LocalidadesModule } from './localidad/localidad.module';
import { ClientesModule } from './cliente/cliente.module';
import { DireccionesModule } from './direccion/direccion.module';

@Module({
  imports: [EstadoModule, MunicipioModule, LocalidadModule, ClienteModule, DireccionModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
