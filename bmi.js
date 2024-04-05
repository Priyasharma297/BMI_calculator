const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=document.querySelector('#height').value;
    const weight=document.querySelector('#weight').value;
    const result=document.querySelector('#result');
    if(height==' '||height<0||isNaN(height)){
         result.innerHTML=`NOT VALID !!!`;
    }
    else if(weight==' '||weight<0||isNaN(weight)){
        result.innerHTML=`NOT VALID !!!`;
   }
   else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`;
   }
})