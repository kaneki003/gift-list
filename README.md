# Gift List

## Overview

"Gift List" is a blockchain-based application that determines whether a person is included in a special list. If the person's name is found within the list, they are eligible to receive a gift. This project utilizes Merkle trees for efficient data management and verification within the blockchain.

## Project Description

The main functionality of "Gift List" is to verify the presence of a person's name in a large dataset using Merkle trees. This data structure allows for the consolidation of thousands of names into a single hash string on the server side.

On the client side, a proof is generated which contains the least amount of information required to reconstruct the root hash, typically in the order of `log(N)` where `N` is the number of elements in the list. This proof is then sent to the server, which verifies the computed root hash against the actual root hash stored in the database, thus confirming the person's presence in the list.

In this system, the client acts as the prover, while the server takes on the role of the verifier.

## Client

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an HTTP request to the server.

Think of the client as the _prover_ here. It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on the server. 

## Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request.

Think of the server as the _verifier_ here. It needs to verify that the `name` passed by the client is in the `MERKLE_ROOT`. If it is, then we can send the gift! 

## Dependencies
 `npm install`  
 `npm i ethereum-cryptography`