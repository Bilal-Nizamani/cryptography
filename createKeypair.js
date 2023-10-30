const crypto = require("crypto");
const fs = require("fs");

const geneRateKeypair = () => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: "top secret",
    },
  });

  try {
    fs.writeFileSync("public-key.pem", publicKey);
    fs.writeFileSync("private-key.pem", privateKey);

    console.log("File has been saved.");
  } catch (error) {
    console.error(err);
  }
};
geneRateKeypair();
