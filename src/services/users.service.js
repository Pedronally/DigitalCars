const fs = require('fs');
var data = fs.readFileSync(__dirname + '/../data/users.json');

const jsonUsers = JSON.parse(data)

const getUsers = async (usersId) => {
    const UsersReg = await jsonUsers.filter(i => i.id == usersId)
    return UsersReg
}

module.exports = {
    getUsers
}