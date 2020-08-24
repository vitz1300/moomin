'use strict'
const button=document.getElementById('my-button');
const input2=document.getElementById('buzzvalue');
const input1=document.getElementById('fizzvalue');
button.addEventListener('click',()=>{  
  const boxNum =document.getElementById('box');
  const fizz=Number(input1.value);
  const buzz=Number(input2.value);
  
    boxNum.innerHTML="";
    if(fizz===0&&buzz===0){
      boxNum.textContent=`整数値を入力して下さい`;
    };

      if(Number.isInteger(fizz)&&Number.isInteger(buzz)){  
        for(let i = 1; i <= 99; i++){
          const p=document.createElement('p');
            if(i%fizz===0&&i%buzz===0){
              p.textContent=`FizzBuzz${i}`;
              boxNum.appendChild(p);  
            }else if(i%fizz===0){
              p.textContent=`Fizz${i}`;
              boxNum.appendChild(p);  
            }else if(i%buzz===0){
              p.textContent=`Buzz${i}`;
              boxNum.appendChild(p);  
            }
          };
      }else{
      boxNum.textContent=`整数値を入力して下さい`;
  };
});
  

