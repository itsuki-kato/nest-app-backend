import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Status } from "@prisma/client";

// ビルドすると自動でGraphQLに変換される(schema.gql)
@ObjectType()
export class Task {
    // Intを指定しないとGraphQL側でfloatとして認識される.
    // { name: 'name' }としてフィールドに別名をつけることも可能.
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    dueDate: string;

    @Field()
    status: Status;

    @Field({ nullable: true })
    description: string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
