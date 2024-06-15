import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente, Prisma } from '@prisma/client';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async create(@Body() data: Prisma.ClienteCreateInput): Promise<Cliente> {
    return this.clienteService.create(data);
  }

  @Get()
  async findAll(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cliente | null> {
    return this.clienteService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Prisma.ClienteUpdateInput): Promise<Cliente> {
    return this.clienteService.update(Number(id), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Cliente> {
    return this.clienteService.remove(Number(id));
  }
}
