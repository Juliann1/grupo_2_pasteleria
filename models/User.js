const fs = require('fs')
const User = {
    fileName: './data/users.json',
    findAll() {
        return JSON.parse(fs.readFileSync(this.fileName))
    },
    findByEmail(email) {
        return this.findAll().find(user => user.email === email)
    }
}

module.exports = User