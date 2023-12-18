
import bcrypt from 'bcrypt'

const workFactor = 8;
var password = "siddhrtj"


const hash = "$2b$08$WRnFPLKIOrGLEDOB5QQ5IeQsXAyTxKlorF49akp6rPd6pAVsxdFnu"
bcrypt.compare(password, hash, function(err, result) {
    // Password matched
    if (result) {
      console.log("Password verified");
    }
    // Password not matched
    else {
      console.log("Password not verified");
    }
  });