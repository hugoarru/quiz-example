import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Question } from 'src/questions/questions.entity';

@Entity()
export class Quiz {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 500 })
	title: string;

	@Column('text')
	description: string;

	@OneToMany(() => Question, (question) => question.quiz)
	questions: Question[]

}
