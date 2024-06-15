import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { Estado as EstadoModel } from '@prisma/client';

@Controller('estado')
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  @Post()
  async create(@Body() data: { nombre: string }): Promise<EstadoModel> {
    return this.estadoService.create(data);
  }

  @Get()
  async findAll(): Promise<EstadoModel[]> {
    return this.estadoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EstadoModel | null> {
    return this.estadoService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: { nombre: string }): Promise<EstadoModel> {
    return this.estadoService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<EstadoModel> {
    return this.estadoService.remove(+id);
  }

  @Get(':id/municipios')
  async findMunicipios(@Param('id') id: string) {
    return this.estadoService.findMunicipios(+id);
  }
}