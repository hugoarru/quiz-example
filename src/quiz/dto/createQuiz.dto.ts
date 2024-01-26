import { CreateQuestiontDto } from "src/questions/dto/createQuestion.dto";

export class CreateQuiztDto {
	title: string;
	description: string;
	questions: CreateQuestiontDto[];
}
