var numeros = document.getElementsByClassName('num')
var btn = document.getElementById('btn')

const loteria = (min, max) => {
        const array = []
        if(min > max) {
            [min, max] = [max, min]
        }
        while (array.length < 6) {
        const fator = (max - min + 1)
        const aleatorio = parseInt(Math.random() * fator) + min
        if(array.includes(aleatorio)){
            const fator = (max - min + 1)
            const aleatorio = parseInt(Math.random() * fator) + min
        } else {
            array.push(aleatorio)
        }
        
        }
        array.sort(function(a,b) {
            if(a<b) return -1
            if(a>b) return true
        })
        for(let i = 0; i < array.length; i++) {
            numeros[i].innerHTML = array[i]
         }
         return numeros
    }


    btn.onclick = () => loteria(1,60);



