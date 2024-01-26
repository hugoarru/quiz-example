import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuiztDto } from './dto/createQuiz.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizService {

	constructor(
		@InjectRepository(Quiz)
		private quizRepository: Repository<Quiz>,
	) { }

	async create(quiz: CreateQuiztDto) {
		const quizCreated = this.quizRepository.create()
		quizCreated.title = quiz.title;
		quizCreated.description = quiz.description;
		await this.quizRepository.insert(quizCreated)

		return quizCreated;
	}

	findAll() {
		return this.quizRepository.find();
	}
}
