import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DireccionService } from './direccion.service';
import { Direccion } from '@prisma/client';

@Controller('direcciones')
export class DireccionController {
  constructor(private readonly direccionService: DireccionService) {}

  @Post()
  async create(@Body() createDireccionDto: any): Promise<Direccion> {
    return this.direccionService.create(createDireccionDto);
  }

  @Get()
  async findAll(): Promise<Direccion[]> {
    return this.direccionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Direccion | null> {
    return this.direccionService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDireccionDto: any): Promise<Direccion> {
    return this.direccionService.update(+id, updateDireccionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Direccion> {
    return this.direccionService.remove(+id);
  }
}