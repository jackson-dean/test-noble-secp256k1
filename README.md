Testing compatibility between elliptic and @noble/secp256k1 packages

Generates a key pair with both libs from the same seed.

After cloning, run it to see the keys logged to the console:
```sh
npm i
npm run start

elliptic priv key hex:  68246782977024910cf956b6574e896b0d1b4402b0afa43901fbd77a42643710
secp256k priv key hex:  331bfed6b0f3f5a6a4606b6f5281fb718e39876ef4ca886b5c2f583233ed39b3
ellpitic pub key hex :  04b238b523427a862b564f3e9790f54676baad4b7ad38697aa4af62bcd52b809b4228c253a08e7af0126890e14b5b9be8789e7f411ed6af965560b9048b232cbdb
secp256k pub key hex :  048384acf37f092ca716267bc1622f4b5697364748e318bbe43273a875c520c7f936c56bdd8e09d7686b47c119a4758da62b9d0fc1cf87af6f7c471c07e5265fd2
```
