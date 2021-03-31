let number = 0;
let pic1 = document.getElementById('ii1');
let pic2 = document.getElementById('ii2');
let pic3 = document.getElementById('ii3');
let pic4 = document.getElementById('ii4');
let pic5 = document.getElementById('ii5');
let pic6 = document.getElementById('ii6');
let pic7 = document.getElementById('ii7');
let pic8 = document.getElementById('ii8');
let pic9 = document.getElementById('ii9');
let message = document.getElementById('message');
        
pic1.addEventListener('click', setMessage);
pic2.addEventListener('click', setMessage);
pic3.addEventListener('click', setMessage);
pic4.addEventListener('click', setMessage);
pic5.addEventListener('click', setMessage);
pic6.addEventListener('click', setMessage);
pic7.addEventListener('click', setMessage);
pic8.addEventListener('click', setMessage);
pic9.addEventListener('click', setMessage);

    
function setMessage() {
    number++;
    console.log(number);
    message.innerHTML = `<p>Ваши очки: ${number}</p>`;
}
    