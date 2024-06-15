export class CreateClienteDto {
   nombre: string;
   apellidos: string;
   rfc: string;
   email: string;
   telefono: string;
   estatus?: boolean;
    direccion: {
    calle: string;
    numeroExt: string;
    numeroInt: string;
    codigoPostal: string;
    localidadId: number;
  };
}
