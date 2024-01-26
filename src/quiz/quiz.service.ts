import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuiztDto } from './dto/createQuiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionsService } from 'src/questions/questions.service';

@Injectable()
export class QuizService {

	constructor(
		@InjectRepository(Quiz)
		private quizRepository: Repository<Quiz>,
		private questionService: QuestionsService,
	) { }

	async create(quiz: CreateQuiztDto) {
		const quizCreated = this.quizRepository.create()
		quizCreated.title = quiz.title;
		quizCreated.description = quiz.description;
		await this.quizRepository.insert(quizCreated)
		quizCreated.questions = await this.questionService.createMany(quiz.questions);

		await this.quizRepository.save(quizCreated)
		return quizCreated;
	}

	findAll() {
		return this.quizRepository.find();
	}

	findOneById(id: number) {
		return this.quizRepository.findOne({
			where: { id: id }, relations: {
				questions: true
			}
		})
	}
}
