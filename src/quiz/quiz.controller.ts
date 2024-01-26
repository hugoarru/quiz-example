import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateQuiztDto } from './dto/createQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

	constructor(private quizService: QuizService) { }

	@Get()
	async findAll() {
		return this.quizService.findAll();
	}

	@Get(':id')
	async findOne(@Param() params: { id: string }) {
		return this.quizService.findOneById(parseInt(params.id))
	}

	@Post()
	async create(@Body() quiz: CreateQuiztDto) {
		try {
			const quizCreated = await this.quizService.create(quiz);
			return quizCreated;
		} catch (error) {
			console.error(error)
			throw error;
		}

	}
}
