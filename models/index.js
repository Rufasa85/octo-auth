const User = require("./User");
const Lunch = require("./Lunch");

User.hasMany(Lunch);
Lunch.belongsTo(User);

module.exports = {
    User,
    Lunch
}