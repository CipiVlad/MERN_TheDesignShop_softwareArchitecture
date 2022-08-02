const { UserDAO } = require("../db-access");

function showAllUser() {
    return UserDAO
    .findAll()
    .then(usersArray => usersArray.map(user => ({
        _id: user._id,
        name: user.name,
        email: user.email,
    })))
}

module.exports = {
    showAllUser
}