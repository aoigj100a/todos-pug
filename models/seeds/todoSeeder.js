const Todo = require("../todo");
const User = require("../user");
const db = require("../../config/mongoose");

const SEED_USER = {
  name: "root",
  email: "root@example.com",
  password: "12345678",
};

db.once("open", () => {
  User.create({
    name: SEED_USER.name,
    email: SEED_USER.email,
    password: SEED_USER.password,
  })
    .then((user) => {
      const userId = user._id;
      return Promise.all(
        Array.from({ length: 10 }, (_, i) =>
          Todo.create({ name: `name-${i}`, userId })
        )
      );
    })
    .then(() => {
      console.log("done.");
      process.exit();
    });
});
