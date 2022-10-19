

 async function connectToMetamsk(){
   let account = await ethereum.request({method: 'eth_requestAccounts'}); // to connect metamask
   alert("account is"+account)
}

window.onload = async () => {
    let contractAddress = "0x196f89292227B1743c3EdbBEAb92eb1B5e137b9E"; // should be changed on each deployement
    let abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_candidateName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_courseName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_date",
                    "type": "string"
                }
            ],
            "name": "addNewCertificate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "certificates",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "candidateName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "courseName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]  // should be changed on each deployement
    
    web3 = new web3(ethereum) // creating instance of web3,Second Web3 should be start with capital it denotes the web3 from cdn
    MyContract = new web3.eth.contract(abi, contractAddress) // creating instance of contract with web3, web3.eth[module].contract(abi,address)
}


async function issueCertificate(){
    let certificateId = document.getElementById("certificateID").value //getting field values from HTML
    let courseName = document.getElementById("courseName").value
    let candidateName = document.getElementById("candidateName").value
    let grade = document.getElementById("grade").value
    let date = document.getElementById("date").value
    let trxReciept = await MyContract.methods.addNewCertificate(certificateId, candidateName, courseName, grade, date).send( {from: ethereum.selectedAddress})
    // lINE95 passing the data smart contract function)
    console.log(trxReciept)
};

function getCertificate(){

}
