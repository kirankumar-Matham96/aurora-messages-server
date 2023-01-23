import { data } from './mockData';
export const resolvers = {
  Query: {
    messages: () => data.items,
  },
};
