import crypto from 'crypto';


//CREATING A "HASH"
const myDataHash = 'Hello, This is LegendaryCode Password';
const hash = crypto.createHash('sha256');
const myHash = hash.update(myDataHash);
const myDigest = myHash.digest('hex');
console.log(`Cryptographic Result: ${myDigest}`);

// RESULT:  Cryptographic Result: e7c15c5c9e515a63a005f4d83cf7071e74606aff6435175f5759fdf5f6f8eec1






//randomBytes
crypto.randomBytes(256 , (err, buf) => {
    if(err) throw err;
    console.log(`${buf.length} Bytes of random data: ${buf.toString('hex')}`); 
});
// RESULT:  256 Bytes of random data: 9a528e209d8ecc1bc8093c3a9047b695c0a5c99ee847bdceb109c629f84cbdc512927159708625e16ecc7cebe0afe200e471d1022b11596f338d71f72eb16fade9226505de08797ae185d932c20f163324b94db769e032bd5c015377363227da106550b16fd93bf844afec88da31215b661e52442ffd582ef214f7ac8d59e86970153f24cf1d386d2d8e805a614c7128b5c50a2c6aa1411122973bd595586de2b573fa36eb8de544cfb4a4af25654beba8ea4c70f23f99e1aac97d7c0979238207723c05263d5ad46ab4f218a24a198572b1dd4e5f2b2fd61b6327838defa745629a56db93ece543d2ec4ba2bfe8db7b30f3a18f6b2e9859192f1ef16559aeb5








/**
 *  HOW TO "encrypt" AND "decrypt" DATA ..
 * createCipheriv(encrypt) & createDecipheiv (decrypt)
 */

//createCipheriv(encrypt) & createDecipheiv (decrypt)
//Algorithm
const algorithm = 'aes-256-cbc';
//The key
const key = crypto.randomBytes(32);
//The iv
const iv  =  crypto.randomBytes(16);


//TO ENCRYPT(OR GET OUR "cipher" text)
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hi, legendaryCode, THis is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(`ENCRYPTED VALUE: ${encrypted}`);
// RESULT: ENCRYPTED VALUE: 8adfb2777543d796282dc66687c75eab426b568670d182338a759eb4d547b7467da5f09385f6583dff7c69d9ece07718


//TO DECRYPT()
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted,  'hex' , 'utf8');
decrypted += decipher.final('utf8');
console.log(`DECRYPTED VALUE: ${decrypted}`);
// RESULT: ENCRYPTED VALUE:  DECRYPTED VALUE: Hi, legendaryCode, THis is a secret message
