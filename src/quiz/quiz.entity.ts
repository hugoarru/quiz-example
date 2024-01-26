import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quiz {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 500 })
	title: string;

	@Column('text')
	description: string;

}
