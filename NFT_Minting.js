//creating a global variable to hold NFTs
const NFTs=[];

// function to mint an NFT
function mintNFT(NAME, AGE, POSITION,SALARY){
    let NFT = {name:NAME, 
        age:AGE, 
        position:POSITION, 
        salary:SALARY,};
    NFTs.push(NFT);
    console.log("NFT " + NAME+ " is saved in directory ");
}

// function to list all the NFTs
function listNFTs(){
    for (let i = 0; i <NFTs.length; i++){
        console.log("\nNAME: " + NFTs[i].name);
        console.log("AGE: " + NFTs[i].age);
        console.log("POSITION: " + NFTs[i].position);
        console.log("SALARY: " + NFTs[i].salary+ "\n");
    }
}
// function to get the total number or supply of NFTs
function getTotalSupply(){
    console.log("**********");
    console.log("NFT DIRECTORY: " + NFTs.length);
    console.log("**********");
}
// printing the total number of NFTs we have minted to the console

mintNFT("Rajesh",26 ,"Junior Developer", 15);
mintNFT("Rohan", 28 ,"CTO", 150);
mintNFT("Parva", 26 ,"Senior Developer", 55);
mintNFT("Sumit", 30 ,"CFO", 130);

// calling out the functions
listNFTs();
getTotalSupply();
