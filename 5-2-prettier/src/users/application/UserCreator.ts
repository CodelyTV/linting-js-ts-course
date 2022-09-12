import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class UserCreator {
  constructor(private readonly userRepository: UserRepository) {}

  async create(data: User): Promise<{ success: boolean; data: User }> {
    const user = this.userRepository.create(data);

    return {
      success: true,
      data: user,
    };
  }
}
