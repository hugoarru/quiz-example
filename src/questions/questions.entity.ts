import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Quiz } from 'src/quiz/quiz.entity';

@Entity()
export class Question {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 500 })
	title: string;

	@ManyToOne(() => Quiz, (quiz) => quiz.questions)
	quiz: Quiz

}
