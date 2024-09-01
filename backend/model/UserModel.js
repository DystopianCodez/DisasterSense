const database = require("../database/database.js");
const randomstring = require("randomstring");
var uuid = require("uuid-random");

class UserModel {
  async register(firstName, lastName, emailAddress, password) {
    let object = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      password: password,
      location: {
        latitude: undefined,
        longitude: undefined,
      },
      accountIdentity: {
        uuid: uuid().toUpperCase(),
        linkCode: randomstring.generate(5),
      },
      relativeGroup: [],
    };

    try {
      await database.manage("insert", "users", object);
      console.log("Successfully Added User!");
    } catch (err) {
      console.log(err);
    }
  }

  async login(emailAddress, password) {
    let object = {
      emailAddress: emailAddress,
      password: password,
    };
    return await database.manage("find", "users", object);
  }
}

module.exports = UserModel;
