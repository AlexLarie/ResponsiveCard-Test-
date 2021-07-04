function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
   document.querySelector('body').classList.add('webp');
   }else{
      document.querySelector('body').classList.add('no-webp');
   }
});

function changeOpacity(e){
   e.classList.add('active')
   
   console.log(e.childNodes[1].childNodes[1].childNodes[1])
   
}
function removeOpacity(e){
   e.classList.remove('active')
}

let menuItems = document.querySelectorAll('.menu__item');
menuItems.forEach((e)=>{
   e.addEventListener('mouseover', () => changeOpacity(e))
   e.addEventListener('mouseleave', () => removeOpacity(e))
})



//burger

// let burger = document.getElementById('burger');
// let menu = document.querySelector('.menu__list');
// burger.addEventListener('click', ()=>{
//    burger.classList.toggle('active');
//    menu.classList.toggle('active');
// })




