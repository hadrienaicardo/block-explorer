const express = require("express");
const app = express();
const cors = require("cors");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes, hexToBytes, toHex } = require("ethereum-cryptography/utils");
const { secp256k1 } = require("ethereum-cryptography/secp256k1")
const port = 3042;
app.use(cors());
app.use(express.json());


app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

