import {BlockBash_backend} from "../../declarations/BlockBash_backend"

window.addEventListener("load",async function(){
  // console.log("finished loading");
  const currentAmount= await BlockBash_backend.checkBalance();
  document.getElementById("value").innerText=currentAmount 
})

document.querySelector("form").addEventListener("submit", async (event)=>{
  event.preventDefault()
  // console.log("submitted");
  const inputAmount=parseFloat(document.getElementById("input-amount").value)
  const outputAmount=parseFloat(document.getElementById("withdrawal-amount").value)

  // console.log(inputAmount,outputAmount);
  if (!isNaN(inputAmount)) {
  await BlockBash_backend.topUp(inputAmount)
  document.getElementById("input-amount").value=""
  }
   if (!isNaN(outputAmount)) {
  await BlockBash_backend.withdraw(outputAmount)
  document.getElementById("withdrawal-amount").value=""
   }

   await BlockBash_backend.compound();

const currentAmount= await BlockBash_backend.checkBalance();
  document.getElementById("value").innerText=Math.round(currentAmount*100) / 100;

})