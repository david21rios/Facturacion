import { Injectable } from '@angular/core';
import { USUARIOS } from '../usuarios/usuarios.json'
import { Usuario } from '../usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  usuarios: Usuario[] = [];

  constructor() { }

  getUsuarios(): Usuario[]{
    return USUARIOS;
  }

}
