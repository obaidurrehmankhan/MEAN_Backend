const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: 'mongodb://localhost:27017/mean-angular', // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: 'mean-angular' // Database name
}
