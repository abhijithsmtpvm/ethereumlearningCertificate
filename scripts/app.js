

 async function connectToMetamsk(){
   let account = await ethereum.request({method: 'eth_requestAccounts'});
   alert("account is"+account)
}