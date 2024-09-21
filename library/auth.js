// bcryptjs is pureJS and bcrypt has dependencies with c++
const bcrypt = require("bcryptjs"); // for encrypting passwords

// this function will take the password from the client (req.body.password) and encrypt it.
const hashing = async (value) => {
  try {
    // generating salt
    const salt = await bcrypt.genSalt(10);

    // hasing with generated salt and value.
    const hash = await bcrypt.hash(value, salt);
    return hash;
  } catch (err) {
    console.log("Bcrypt hash error", err);
  }
};

// this function will take the provided password and encryted password from the DB and compare it.
const hashCompare = async (currentPwd, hashedPwd) => {
  try {
    // this is return true or false.
    return await bcrypt.compare(currentPwd, hashedPwd);
  } catch (err) {
    console.log("bcrypt compare error", err);
  }
};

module.exports = { hashing, hashCompare };