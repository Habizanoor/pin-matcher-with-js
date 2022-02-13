function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
        // console.log(pin);
    }
    else{
        console.log('got 3 digit call it again.');
        return getPin();
    }
}

function generatePin(){
    
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const displayNumber = document.getElementById('display-number');
    if(isNaN(number)){
        if(number == 'C'){
            displayNumber.value = '';
        }
    }
    else{
        
        const previousNumber = displayNumber.value;
        const newNumber = previousNumber + number;
        displayNumber.value = newNumber;
    }
    
});

function varifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('display-number').value;
    const successMessage = document.getElementById('notify-success');
    const failedError = document.getElementById('notify-failed');
    if(pin == typedNumbers){
        
        successMessage.style.display = 'block';
        failedError.style.display = 'none';
    }
    else{
        
        failedError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}