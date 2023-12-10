import { Field, Int, ObjectType } from "@nestjs/graphql";

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
    status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

    @Field({ nullable: true })
    description: string
}
