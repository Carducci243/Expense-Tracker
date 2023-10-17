let balance=document.querySelector('.balance');
let nameEl=document.querySelector('.name-input');
let amount=document.querySelector('.amount-input');
 const addBtn=document.querySelector('.add-btn-el');

 let expenses={ balance:200, 
                name:'',
                amount:0}

addBtn.addEventListener('click',()=>{

    expenses.name=nameEl.value
    expenses.amount=amount.value 
   
    calculateExp();
})

let calculateExp=()=>{
    
    let balanceRemainder=expenses.balance-expenses.amount
    console.log(balanceRemainder)
    balance.innerText=`Balance:${balanceRemainder}`
}

calculateExp();