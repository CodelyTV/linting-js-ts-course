import { User } from "./User";

export abstract class UserRepository {
  abstract create(data: User): User;
}
