import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { Municipio as MunicipioModel } from '@prisma/client';

@Controller('municipios')
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) {}

  @Post()
  async create(@Body() data: { nombre: string, estadoId: number }): Promise<MunicipioModel> {
    return this.municipioService.create({
      nombre: data.nombre,
      estado: { connect: { id: data.estadoId } }, 
    });
  }
  
  @Get()
  async findAll(): Promise<MunicipioModel[]> {
    return this.municipioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MunicipioModel | null> {
    return this.municipioService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: { nombre: string, estadoId: number }): Promise<MunicipioModel> {
    return this.municipioService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<MunicipioModel> {
    return this.municipioService.remove(+id);
  }

  @Get(':id/localidades')
  async findLocalidades(@Param('id') id: string) {
    return this.municipioService.findLocalidades(+id);
  }
}