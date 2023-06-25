let namee = "Ewata Nicholas Olajide";
let nameS= namee.split("");
let nameEl= document.getElementById('name');

let nick = "Hollas";
let nickS= nick.split("");
let nickEl= document.getElementById('nick');

let role = "Full Stack Web Developer";
let roleS = role.split("");
let roleEl = document.getElementById('role');

let qt1= "One may stray from the path of a man.";
let str = qt1.split("");
let strEl= document.getElementById('post');

let qt2= "One may stray from the path of a woman."
let str1 = qt2.split("");
let strEl1 = document.getElementById("post1");

let qt3= "But there is no straying from the path of a HUMAN!!!"
let str2 = qt3.split("");
let strEl2 = document.getElementById("post2");

let qt4= "One Piece - Mr 2, Bon Clay Sama";
let str3 = qt4.split("");
let strEl3 = document.getElementById("post3");

function animateText(textArr, el, callback) {
  let i = 0;

  function displayText() {
    if (i < textArr.length) {
      el.textContent += textArr[i];
      i++;
      setTimeout(displayText, 100);
    } else {
      if (callback) {
        callback();
      }
    }
  }

  displayText();
}

animateText(nameS, nameEl, function() {
  animateText(nickS, nickEl, function() {
    animateText(roleS, roleEl, function() {
      animateText(str, strEl, function() {
        animateText(str1, strEl1, function() {
          animateText(str2, strEl2, function() {
            animateText(str3, strEl3);
          });
        });
      });
    })
  });
}); //animation function for text display

function clicker() {
  let v = document.getElementById("readMore"), change = document.getElementById("clicker"),
  int = document.getElementById("intro");
  if (v.style.display === "none") {
    v.style.display ="block";
    change.textContent = "Show Less"

    //to modify font size when clicked
    int.style.fontSize = "18px"
  } else {
    v.style.display ="none"
    change.textContent = "read more"
  }

  
} //display function in about section

function hideOnMobile() {
  change = document.getElementById("clicker");
  if (window.innerWidth<768) {
    change.style.display = 'none';
  } else {
    change.style.display = 'block';
  }
}

window.addEventListener('resize', hideOnMobile)

//openImage function
// let openImage = (src) =>{
//   //create modal overlay element
//   const overlay = document.createElement('div');
//   overlay.classList.add('overlay');

//   //image element
//   const fullImage = document.createElement('img');
//   fullImage.src = src;

//   //append to overlay
//   overlay.appendChild(fullImage);

//   //append overlay to doc body
//   document.body.appendChild(overlay);

//   //event listener to close overlay
//   overlay.addEventListener('click', (e)=>{
//     if(e.target === overlay){
//       closeImage();
//     }
//   });
// }

const gallImage = document.querySelectorAll('.images'); //get all images in the images class

//attaching  click event listener to each image for full viewing effect
gallImage.forEach(image => {
  image.addEventListener('click', () =>{
    //source code of clicked image
    const src = image.querySelector('img').src;

    //open image in full
    openImage(src);
  });
});



function closeImage() {
  //remove overlay from doc body
  const overlay = document.querySelector('.overlay');
  overlay.parentNode.removeChild(overlay);
}

document.getElementById('contactForm').addEventListener('submit', (e)=> {
  e.preventDefault();

  let name = document.getElementById('name').value,
  email = document.getElementById('email').value,
  mes = document.getElementById('message').value;

  if (name === '' || email === '' || mes === '') {
    alert('Please fill in all fields');
    return;
  }
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
})

document.getElementById('navbar-toggle').addEventListener('change', function(){
  let menu = document.querySelector('.menu');

  if (this.checked) {
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
  }
})