import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class DummyUserRepository implements UserRepository {
  create({ firstName, lastName, email }: User) {
    return {
      firstName,
      lastName,
      email,
    };
  }
}
