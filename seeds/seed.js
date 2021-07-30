const sequelize = require("../config/connection");
const db = require("../models");

const seedMe = async () => {
  await sequelize.sync({ force: true });
  await db.User.bulkCreate([
    {
      username: "joejoe",
      email: "joe@joe.joe",
      password: "password"
    },
    {
      username: "Louis",
      email: "Louis@joe.joe",
      password: "password1"
    },
    {
      username: "cats",
      email: "cats@joe.joe",
      password: "weLoveSalmon123"
    }
  ]);

  await db.Lunch.bulkCreate([
      {
          description:"rawSpinach",
          UserId:1
      },
      {
          description:"nothing",
          UserId:1
      },
      {
          description:"cat food",
          UserId:3
      },
    ]);
    console.log('seeded');
    process.exit(0);
};

seedMe()
