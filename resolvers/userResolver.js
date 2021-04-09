import { AuthenticationError } from "apollo-server-express";

export default {
  Query: {
    login: async (parent, args, { req, res }) => {
      // inject username and password to req.body for passport
      req.body = args;
      try {
        const authResponse = await login(req, res);
        return {
          // ...authResponse.user would work here
          id: authResponse.user.id,
          username: authResponse.user.username,
        };
      } catch (e) {
        throw new AuthenticationError(e.message);
      }
    },
  },
};
