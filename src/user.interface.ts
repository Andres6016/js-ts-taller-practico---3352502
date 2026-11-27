// src/interfaces/user.interface.ts

export enum Role {
    ADMIN = "ADMINISTRADOR",
    INSTRUCTOR = "INSTRUCTOR",
    LEARNER = "APRENDIZ"
}

export interface User {
    readonly id: number;
    name: string;
    email: string;
    role: Role;
    isActive: boolean;
    age?: number; // Propiedad opcional
}

s