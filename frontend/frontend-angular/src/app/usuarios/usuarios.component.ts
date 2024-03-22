import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from './usuario';
import { RolesComponent } from '../roles/roles.component';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RolesComponent, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios: Usuario[] = [
  //Objetos con formato JSON
  {id:1, username: 'Bibi', password: 'bbbbbb', email:  'bibi@gmail.com', name: 'Bibi', phone: '1111', photo: 'ruta1', create_at: new Date('2024-01-01'), enabled: true, roles:[]},
  {id:2, username: 'Henry', password: 'hhhhh', email:  'henry@gmail.com', name: 'Henry', phone: '2222', photo: 'ruta2', create_at: new Date('2024-01-01'), enabled: true, roles:[]},
  {id:3, username: 'Bibi', password: 'ddddd', email:  'david@gmail.com', name: 'David', phone: '3333', photo: 'ruta3', create_at: new Date('2024-01-01'), enabled: true, roles:[]},
  {id:4, username: 'Bibi', password: 'kkkkk', email:  'miguel@gmail.com', name: 'Miguel', phone: '4444', photo: 'ruta4', create_at: new Date('2024-01-01'), enabled: true, roles:[]},
  {id:5, username: 'Bibi', password: 'mmmmm', email:  'margarita@gmail.com', name: 'Margarita', phone: '5555', photo: 'ruta5', create_at: new Date('2024-01-01'), enabled: true, roles:[]},
  ]

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


 
