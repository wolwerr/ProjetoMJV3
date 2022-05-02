export interface Coment {
    id: number;
    name: string;
    email: string;
    password?: string;
    coment: string;
    inclusionDate: Date | string;
    validRegistration: boolean;
}
