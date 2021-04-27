// import { Howl } from './howler.js';


window.onload = function() {
let sound = new Howl({
 src: ['./audio/song.mp3'],
});
}


setInterval(timer, 1000);

 function timer(timer_1) {

  timer_1 = document.getElementById("time").innerHTML;

if(timer_1) {

if(timer_1 !== 'stop' )  {

if(timer_1 !== '0' ) {

  timer_1 = timer_1 - 1;

document.getElementById("time").innerHTML = timer_1;

} else {


  sound.play(); 

  document.getElementById("wave").innerHTML = 'stop';
  


}

}

}

}