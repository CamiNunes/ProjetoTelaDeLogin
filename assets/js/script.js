document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();
    
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    };

    if(!json.email){ //Se não tem nada dentro docampo email
        console.error("O campo de email deve ser preenchido");
    } else if(!json.password){
        console.error("O campo de senha deve ser preenchido");    
    } else{
        console.info("Dados enviados com sucesso!");
    }


/*    console.log(json);

    let stringJSON = JSON.stringify(json);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log(jsonParse);*/
});

