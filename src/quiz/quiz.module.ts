import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { Quiz } from './quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsModule } from 'src/questions/questions.modules';

@Module({
	imports: [
		TypeOrmModule.forFeature([Quiz]),
		QuestionsModule,
	],
	controllers: [QuizController],
	providers: [QuizService],
})
export class QuizModule { }
