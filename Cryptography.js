const { createHash } = require('crypto');

// Create a string hash

function hash(input) {
    return createHash('sha256').update(input).digest('base64');
}


let password = 'hi-mom!';
const hash1 = hash(password);
console.log(hash1)
