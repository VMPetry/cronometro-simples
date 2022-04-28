let milissegundos = 0
let segundos = 0
let minutos = 0
let horas = 0
let intervalo = 0


function doisDigitos(digitos) {
    if (digitos < 10) {
      return ('0' + digitos)
    } else {
      return (digitos)
    }
  }

function start() {
    contador()
    intervalo = setInterval(contador, 10)
}

function pause() {
    clearInterval(intervalo)
    
}

function stop() {
    clearInterval(intervalo)
    segundos = 0
    minutos = 0
    document.getElementById('visor').innerText = '00:00:00:00'

}

function contador() {
    milissegundos++
    if (milissegundos == 100) {
        milissegundos = 0
        segundos++
    }

    if (segundos == 60) {
        segundos = 0
        minutos++
        

        if (minutos == 60) {
            minutos = 0
            horas++
        }
        

    }
    document.getElementById('visor').innerText=doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos) + ':' + doisDigitos(milissegundos)
}