let btn_play, btn_stop;

window.onload = ()=>{
   sound = new Howl({
  src: ['https://res.cloudinary.com/dg69yok0y/video/upload/v1694142490/Music/y2mate.com_-_Lamborghini_Aventador_SVJ_Launch_control_and_revs_Big_Flames_novitec_c9jblb.mp3']
});
  
  btn_play = document.getElementById("btn_play");
  btn_stop = document.getElementById("btn_stop");
  btn_play. addEventListener("click", reproducir);
  btn_stop. addEventListener("click", detener);
  
}

function reproducir(event){
   btn_play.classList.add("ocultar");
     btn_stop.classList.remove("ocultar");
 sound.play();
}

function detener(event){
   btn_play.classList.remove("ocultar");
    btn_stop.classList.add("ocultar");
  sound.stop();
}