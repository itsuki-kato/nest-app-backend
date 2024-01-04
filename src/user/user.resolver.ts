import { Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './model/user.model';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  
}
