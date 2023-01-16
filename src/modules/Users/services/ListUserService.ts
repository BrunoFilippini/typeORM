import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Users';

import UsersRepository from '../typeorm/repositories/UsersRepository';

class ListUsersService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = usersRepository.find();

    return users;
  }
}

export default ListUsersService;
