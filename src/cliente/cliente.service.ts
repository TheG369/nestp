import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Cliente, Prisma } from '@prisma/client';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ClienteCreateInput): Promise<Cliente> {
    return this.prisma.cliente.create({
      data: {
        nombre: data.nombre,
        apellidos: data.apellidos,
        rfc: data.rfc,
        email: data.email,
        telefono: data.telefono,
        estatus: data.estatus ?? true, // Estatus por defecto es activo (true)
        direccion: {
          create: {
            localidad: {
              connect: { id: data.direccion[0].localidadId },
            },
            calle: data.direccion[0].calle,
            numeroExt: data.direccion[0].numeroExt,
            numeroInt: data.direccion[0].numeroInt,
            cp: data.direccion[0].cp,
          },
        },
      },
    });
  }

  async findAll(): Promise<Cliente[]> {
    return this.prisma.cliente.findMany({
      include: {
        direccion: {
          include: {
            localidad: {
              include: {
                municipio: {
                  include: {
                    estado: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<Cliente | null> {
    return this.prisma.cliente.findUnique({
      where: { id },
      include: {
        direccion: {
          include: {
            localidad: {
              include: {
                municipio: {
                  include: {
                    estado: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async update(id: number, data: Prisma.ClienteUpdateInput): Promise<Cliente> {
    return this.prisma.cliente.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Cliente> {
    return this.prisma.cliente.delete({
      where: { id },
    });
  }
}
