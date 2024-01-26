import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './questions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forFeature([Question])
	],
	providers: [QuestionsService],
	exports: [QuestionsService],
})
export class QuestionsModule { }

