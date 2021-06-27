function toggleMenu(){
    var menuToggle = document.querySelector('.menuToggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

}
let more = document.querySelectorAll('.more');
for(let i=0;i<more.length;i++){
    more[i].addEventListener('click',function(){
        more[i].parentNode.classList.toggle('active');
    });
}