function btn1(){
    let r1 = document.getElementById('1');
    r1.textContent ="FAUX"
    r1.style.backgroundColor ="red";
      
}

function btn2(){
    let r1 = document.getElementById('2');
    r1.textContent ="VRAI"
    r1.style.backgroundColor ="green";
    
      
}

function btn3(){
    let r1 = document.getElementById('3');
    r1.textContent ="FAUX"
    r1.style.backgroundColor ="red";
      
}
function btn4(){
    let r4 = document.getElementById('4');
    let r1 = document.getElementById('2').textContent;

    if(document.getElementById('r2').textContent == MAGELAN){
        r4.textContent="VRAI"
         r4.style.backgroundColor ="green";
   
    }else{
         r4.textContent="FAUX"
         r4.style.backgroundColor ="red";
   
    }
   
      
}
//cette fonction m'a permis de changer une image en cliquant sur un bouton en changeant le lien de l'image en un autre grace à la propriété .src !!!.
function  eee (){
    let va = document.getElementById('img1');
    va.src='télécharger (1).jpg';
}

//cette fonction me permet de creer un formulaire qui indique si le mot de passe saisis est valide ou non 
function pass (){
    let passe = document.getElementById('passe').value;
    let buton = document.getElementById('send');
    let mot = document.getElementById('mot');
    let actu = document.getElementById('actu');
    if ( passe == "calebbis"){
        mot.textContent='MOT DE PASSE CORRECTE'
        buton.style.backgroundColor="green";
        actu.style.visibility='unset';

    }else{
          mot.textContent='MOT DE PASSE INCORRECTE'
         buton.style.backgroundColor="red";
         buton.textContent='réesayer'
    }
}