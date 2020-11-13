// init
AOS.init();

const navigation = document.querySelector('.nav');
const toggle = document.querySelector('.toggle');
const close = document.querySelector('.toggle .fas');
toggle.addEventListener('click', function(){
navigation.classList.toggle('active');
toggle.classList.toggle('active');

});

const akun = document.querySelector('.nav ul .imgAcc');
console.log(akun);
const emoji = document.querySelector('.nav ul .account');
emoji.addEventListener('click', function() {
    akun.classList.toggle('accountable');
})











