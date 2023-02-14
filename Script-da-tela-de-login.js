function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin"){
        alert('sucesso');
        location.href = "https://joserobson2301.github.io/webplacestore/";
    }else{
        alert('usuario ou senha incorreta')
    }

}