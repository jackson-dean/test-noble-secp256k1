const EC = require("elliptic").ec;
const secp = require("@noble/secp256k1");

const seedHex =
  "caf797541983d115976714b8fb33720439e0790a6186106016d427c128b4e7e35e7f9dd8e2b0b8ccd08a50de574f9b6233e52fcec32a5bcd8e005e38f5dcd572";

// elliptic key pair
const ec = new EC("secp256k1");
const ecKeys = ec.keyFromPrivate(seedHex);
const publicKey = ecKeys.getPublic("hex");

// secp256k1 key pair
const privkey = secp.utils.hashToPrivateKey(seedHex);
const privkeyHex = secp.utils.bytesToHex(privkey);
const pubkkey = secp.getPublicKey(privkey);

console.log("elliptic priv key hex: ", ecKeys.getPrivate("hex"));
console.log("secp256k priv key hex: ", privkeyHex);
console.log("ellpitic pub key hex : ", publicKey);
console.log("secp256k pub key hex : ", secp.utils.bytesToHex(pubkkey));
