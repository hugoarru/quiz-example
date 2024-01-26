import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [QuizModule,
		TypeOrmModule.forRoot({
			type: 'postgres',
			url: process.env.DATABASE_URL,
			synchronize: true,
			entities: [
				__dirname + '/**/*.entity.ts',
			],
			autoLoadEntities: true,
		})
	],
})
export class AppModule { }
