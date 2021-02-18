window.addEventListener('DOMContentLoaded', function(){
     var formularz = document.forms[0]; //tabela z wszystkimi formularz
     var nick = formularz['nick'];
     var password = formularz['pass'];
     var password_confirm = formularz['pass2'];

    var error = document.getElementById('error');

    formularz.addEventListener('submit', (e)=>{
          e.preventDefault()

          if(nick.value == ''){
           error.innerText = "Pusty nick!";
            //widoczne w konsoli  console.log('pusty nick');
          }
        

          else if(nick.value.length <= 3){
            error.innerText = "nick za krótki";


          else if(password.value == '' || password_confirm.value == ''){
            error.innerText = "Puste hasło";
            // console.log('puste hasło');
          }

          else if(password.value != password_confirm.value){
            error.innerText = "Hasła nie są takie same!";
            //console.log('hasła się nie zgadzają');
          }
          else{
            formularz.submit();
          }

    });     //wiedziec kiedy sie ktos odwola ?
});