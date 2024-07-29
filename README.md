# NFT Minting Application

This is a simple JavaScript-based application to mint and manage NFTs (Non-Fungible Tokens). The application allows you to create NFTs with specific attributes and provides functionality to list all created NFTs and display the total supply.

## Features

- Mint new NFTs with attributes: `name`, `age`, `position`, and `salary`.
- List all minted NFTs.
- Get the total number of minted NFTs.

## Code Structure

- `NFTs`: A global array to hold the minted NFTs.
- `mintNFT(NAME, AGE, POSITION, SALARY)`: Function to mint a new NFT and add it to the `NFTs` array.
- `listNFTs()`: Function to list all the minted NFTs with their attributes.
- `getTotalSupply()`: Function to display the total number of minted NFTs.

## Usage

1. **Minting an NFT:**
    ```javascript
    mintNFT("Rajesh", 26, "Junior Developer", 15);
    mintNFT("Rohan", 28, "CTO", 150);
    mintNFT("Parva", 26, "Senior Developer", 55);
    mintNFT("Sumit", 30, "CFO", 130);
    ```

2. **Listing all NFTs:**
    ```javascript
    listNFTs();
    ```

3. **Getting the total supply of NFTs:**
    ```javascript
    getTotalSupply();
    ```

## Example

Here is an example of how to use the application:

```javascript
// Minting NFTs
mintNFT("Rajesh", 26, "Junior Developer", 15);
mintNFT("Rohan", 28, "CTO", 150);
mintNFT("Parva", 26, "Senior Developer", 55);
mintNFT("Sumit", 30, "CFO", 130);

// Listing all NFTs
listNFTs();

// Getting the total supply of NFTs
getTotalSupply();
```

Expected output:

```sh
NFT Rajesh is saved in directory 
NFT Rohan is saved in directory 
NFT Parva is saved in directory 
NFT Sumit is saved in directory 

NAME: Rajesh
AGE: 26
POSITION: Junior Developer
SALARY: 15

NAME: Rohan
AGE: 28
POSITION: CTO
SALARY: 150

NAME: Parva
AGE: 26
POSITION: Senior Developer
SALARY: 55

NAME: Sumit
AGE: 30
POSITION: CFO
SALARY: 130

**********
NFT DIRECTORY: 4
**********
```

## Running the Application

To run this application, you will need to use [Remix IDE](https://remix.ethereum.org/). 

1. Open Remix IDE in your web browser.
2. Create a new file and copy the JavaScript code into this file.
3. Save the file with a `.js` extension.
4. Open the JavaScript VM in Remix IDE.
5. Run the script by clicking on the "Run" button.

## Contact

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/om-mishra-a62991289).
