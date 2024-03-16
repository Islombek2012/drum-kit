let drums = document.querySelectorAll('.drum')

drums.forEach((btn)=>{
      btn.addEventListener('click', ()=>{
            let key = btn.textContent
            playing(key)
            pressed(key)
      });
});


document.addEventListener('keypress', (el)=>{
      let key = el.key
      playing(key)
      pressed(key)
})

function playing(key){
      switch (key) {
            case 'w':
                  let music = new Audio("./sounds/crash.mp3")
                  music.play()
                  break;
            case 'a':
                  let music2 = new Audio("./sounds/kick-bass.mp3")
                  music2.play()
                  break;
            case 's':
                  let music3 = new Audio("./sounds/snare.mp3")
                  music3.play()
                  break;
            case 'd':
                  let music4 = new Audio("./sounds/tom-1.mp3")
                  music4.play()
                  break;
            case 'j':
                  let music5 = new Audio("./sounds/tom-2.mp3")
                  music5.play()
                  break;
            case 'k':
                  let music6 = new Audio("./sounds/tom-3.mp3")
                  music6.play()
                  break;
            case 'l':
                  let music7 = new Audio("./sounds/tom-4.mp3")
                  music7.play()
                  break;
      
            default:
                  console.log("error");
                  break;
      }
}

function pressed(par){
      let activeBtn = document.querySelector(`.${par}`);
      activeBtn.classList.add('pressed')
      setInterval(()=>{
      activeBtn.classList.remove('pressed')
      },100)
}
