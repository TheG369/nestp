import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from '@prisma/client';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async create(@Body() createClienteDto: any): Promise<Cliente> {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  async findAll(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cliente | null> {
    return this.clienteService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClienteDto: any): Promise<Cliente> {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Cliente> {
    return this.clienteService.remove(+id);
  }
}