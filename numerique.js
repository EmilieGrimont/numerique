function suitNum(){
let resultat = document.getElementById('nombre').value
for (let a = 0; a <= resultat; a++){
    document.getElementById('text').innerHTML +=a
}
}
document.getElementById('valid').addEventListener('click',suitNum)