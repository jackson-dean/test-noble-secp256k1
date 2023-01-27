const EC = require("elliptic").ec;
const secp = require("@noble/secp256k1");
const bs58check = require("bs58check");
const assert = require("assert");

const seedHex =
  "caf797541983d115976714b8fb33720439e0790a6186106016d427c128b4e7e3";
const desoMainNetPrefix = [0xcd, 0x14, 0x0];

// elliptic key pair
const ec = new EC("secp256k1");
const ecKeys = ec.keyFromPrivate(seedHex);
const ecPubKeyCompressed = ecKeys.getPublic().encode('array', true);
const ecDesoPubKey = new Uint8Array([...desoMainNetPrefix, ...ecPubKeyCompressed]);
const ecBs58CheckPubKey = bs58check.encode(ecDesoPubKey);


// secp256k1 key pair
const noblePubKeyCompressed = secp.getPublicKey(seedHex, true);
const nobleDesoPubKey = new Uint8Array([...desoMainNetPrefix, ...noblePubKeyCompressed]);
const nobleBs58CheckPubKey = bs58check.encode(nobleDesoPubKey);

assert(ecBs58CheckPubKey === nobleBs58CheckPubKey, "Public keys do not match");

console.log("the base58 encoded public keys match 🎉");
console.log("elliptic pub key bs58: ", ecBs58CheckPubKey);
console.log("secp256k pub key bs58: ", nobleBs58CheckPubKey);
