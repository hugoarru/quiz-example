import { Injectable } from '@nestjs/common';
import { Question } from './questions.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestiontDto } from './dto/createQuestion.dto';

@Injectable()
export class QuestionsService {

	constructor(
		@InjectRepository(Question)
		private questionsRepository: Repository<Question>,
	) { }

	async createMany(questions: CreateQuestiontDto[]) {
		const questionsCreated = questions.map((question) => {
			const questionCreated = this.questionsRepository.create()
			questionCreated.title = question.title;

			return questionCreated;
		})
		await this.questionsRepository.insert(questionsCreated);

		return questionsCreated;
	}
}
