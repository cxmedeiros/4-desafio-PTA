import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Restaurante {
    

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    adress: string

    @Column()
    kindOfFood: string

}
