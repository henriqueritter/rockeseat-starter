//Para começar uma requisicao AJAX, começamos definindo uma variavel como new XMLHttpRequest();

var xhr = new XMLHttpRequest();
//esta classe é que vai nos dar acesso a funcionalidade de recuperar uma informação de um servidor.

//Para buscar uma informação utilizamos o metodo open do XMLHttpRequest passando os parametros
//xhr.open('METODO/GET/POST', 'http://link.com.br');
//xhr.send(null);  //envia 
xhr.open('GET', 'https://api.github.com/users/henriqueritter');
xhr.send(null);
//se olhar no console na aba Network podemos ver que aconteceu uma requisicao para a API do github

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){   //Se o valor da resposta for igual a 4 (que é o valor de que a requisicao retornou)
        console.log(JSON.parse(xhr.responseText));  //exibe no console.log a informacao do servidor.
    }
}