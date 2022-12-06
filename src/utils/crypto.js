const { hashSync, compareSync } = require('bcrypt')

const hashPassword = (plainPassword) => {
  return hashSync(plainPassword, 10)
}

const comparePassword = (plainPassword, hashedPassword) => {
  return compareSync(plainPassword, hashedPassword)
}

module.exports = {
  hashPassword,
  comparePassword
}
