// import { data } from './mockData.mjs';
import items from './mockData.mjs';
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } from 'graphql';

console.log('\n\n\n\n\n\n\n\n\n items: ', items[0], '\n\n\n\n\n\n\n\n\n');

export const resolvers = {
  Query: {
    messages: () => {
      items: items;
    },
  },
};
