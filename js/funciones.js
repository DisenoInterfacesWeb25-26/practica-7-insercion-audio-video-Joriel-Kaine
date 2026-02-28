function accionPlay() {
	if(!medio.paused && !medio.ended) {
		medio.pause();
		play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
	}
	else {
		medio.play();
		play.value='||';
    document.body.style.backgroundColor = 'grey';
	}
}
function accionReiniciar() {
	medio.currentTime = 0; //Usar propiedad .currentTime
	medio.play(); //Reproducir el vídeo
	play.value = '||'; //Cambiar el valor del botón a ||
}
function accionRetrasar() {
	if (medio.currentTime > 5) {
		medio.currentTime -= 5;
	} //Usar propiedad .curentTime
	else {
		medio.currentTime = 0;
	} //Contemplar que no existen valores negativos
}
function accionAdelantar() {
	if (medio.currentTime < medio.duration - 5) {
		medio.currentTime += 5;
	}
	else {
		medio.currentTime = medio.duration;
	} //Contemplar que no existen valores mayores a medio.duration
}
function accionSilenciar() {
	if (!medio.muted) {
		medio.muted = true;
		silenciar.value = 'Escuchar';
	}
	else {
		medio.muted = false;
		silenciar.value = 'Silenciar';
	} //Utilizar medio.muted = true; o medio.muted = false;
}
function accionMasVolumen() {
	if (medio.volume < 1) {
		medio.volume += 0.1;
	}
	else {
		medio.voluem = 1;
	} //Contemplar que el valor máximo de volumen es 1
}
function accionMenosVolumen() {
	if (medio.volume > 0) {
		medio.volume -= 0.1;
	}
	else {
		medio.volume = 0;
	} //Contemplar que el valor mínimo de volumen es 0
}

function iniciar() {
	medio=document.getElementById('medio');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);