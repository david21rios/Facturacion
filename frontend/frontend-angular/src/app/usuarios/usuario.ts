import {Role} from "../roles/role";

export class Usuario {
    id: number;
    username: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    photo: string;
    create_at: Date;
    enabled: boolean; 
    roles: Role[];
    


    constructor(){
        this.id = 0;
        this.username = "";
        this.password = "";
        this.email = "";
        this.name = "";
        this.phone = "";
        this.photo = "";
        this.create_at = new Date;
        this.enabled = false;
        this.roles = [];

    }
}
