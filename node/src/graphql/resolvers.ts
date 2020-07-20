import { getManager } from 'typeorm';
import { User } from '../entity/User';

const resolvers = {
	Query: { users: async () => await getManager().getRepository(User).find() }
};

export default resolvers;
