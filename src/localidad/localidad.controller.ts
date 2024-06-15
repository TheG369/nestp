import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LocalidadService } from './localidad.service';
import { Localidad as LocalidadModel } from '@prisma/client';

@Controller('localidad')
export class LocalidadController {
  constructor(private readonly localidadService: LocalidadService) {}

  @Post()
  async create(@Body() data: { nombre: string, municipioId: number }): Promise<LocalidadModel> {
    return this.localidadService.create({
      nombre: data.nombre,
      municipio: { connect: { id: data.municipioId } },
    });
  }

  @Get()
  async findAll(): Promise<LocalidadModel[]> {
    return this.localidadService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<LocalidadModel | null> {
    return this.localidadService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: { nombre: string, municipioId: number }): Promise<LocalidadModel> {
    return this.localidadService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<LocalidadModel> {
    return this.localidadService.remove(+id);
  }
}