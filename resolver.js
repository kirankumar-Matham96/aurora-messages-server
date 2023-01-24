import { getMessages } from "./khorosFetcher.js";
export const resolvers = {
  Query: {
    messages: async () => {
      // TODO: add limit to messages
      try {
        const response = await getMessages()
        return response?.data
      } catch (err) {
        console.log(err)
        return err
      }
    }
  },
};
