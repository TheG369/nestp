import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadosModule } from './estados/estados.module';
import { PrismaService } from './prisma/prisma.service';
import { MunicipiosModule } from './municipios/municipios.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { ClientesModule } from './clientes/clientes.module';
import { DireccionesModule } from './direcciones/direcciones.module';

@Module({
  imports: [EstadosModule, MunicipiosModule, LocalidadesModule, ClientesModule, DireccionesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
