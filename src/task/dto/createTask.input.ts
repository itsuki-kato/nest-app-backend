import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty } from 'class-validator';

// mutationの引数として利用するために@inputTypeデコレータを指定する.
@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsDateString()
  dueDate: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int)
  userId: number
}
