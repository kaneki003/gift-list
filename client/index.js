const axios = require('axios');
const niceList = require('../utils/niceList.json');
const serverUrl = 'http://localhost:1225';
const MerkleTree = require('../utils/MerkleTree');

const merkleTree = new MerkleTree(niceList);


function get_proof(name){
  const index = niceList.findIndex(n => n === name);
  const proof = merkleTree.getProof(index);
  return proof;
}

async function main() {


  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: 'Norman Blac',
    proof: get_proof('Norman Block')
  });

  console.log({ gift });
}

main();