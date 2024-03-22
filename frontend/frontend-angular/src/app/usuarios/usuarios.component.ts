import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from './usuario';
import { RolesComponent } from '../roles/roles.component';
import { USUARIOS } from './usuarios.json';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RolesComponent, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  
  usuarios: Usuario[] = []; 

  constructor() { }

  ngOnInit (): void {
    this.usuarios = USUARIOS;
  }

  editarUsuario(usuario: Usuario) {
    // Aquí puedes implementar la lógica para editar el usuario
    // Por ejemplo, redirigir a una página de edición
    console.log('Editar usuario:', usuario);
  }
  
  eliminarUsuario(usuario: Usuario) {
    // Aquí puedes implementar la lógica para eliminar el usuario
    // Por ejemplo, filtrar el usuario de la lista de usuarios
    this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
    console.log('Usuario eliminado:', usuario);
  }

}
