"use strict";
import jwt from "jsonwebtoken";
import passport from "./strategy.js";

const login = (req, res) => {
  console.log("rq", req.body);
  passport.authenticate(
    "local",
    { session: false },
    async (err, user, info) => {
      try {
        console.log("controller info", info);
        if (err || !user) {
          throw new Error(info.message);
        }
        req.login(user, { session: false }, async (err) => {
          if (err) {
            throw new Error(err);
          }
          // generate a signed son web token with the contents of user object and return it in the response
          const token = jwt.sign(user, "asd123");
          return res.json({ user, token });
        });
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
    }
  )(req, res);
};

module.exports = {
  login,
};
