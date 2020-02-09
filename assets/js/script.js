let email = 'cvn.camila@gmail.com';
console.log(email);
console.log('O seu email é: ' + email);

email = 'teste@teste.com.br'
console.log(`O seu email é: ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('O botão foi clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O mousee stá sobre o formulário');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mousee stá fora do formulário');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();
    
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    console.log(email, password);
});

