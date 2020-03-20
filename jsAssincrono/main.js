//Criando promises

var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        //os parametros resolve e reject tambem sao funcoes, o seus valores serao retornado conforme o status da solicitacao, 
        //usaremos o resultado da funcao resolve se foi um sucesso(200) e retornaremos o reject caso tenha falhado(nao sucesso)
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/henriqueritter');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            //para saber se esta requisicao obteve sucesso verificamos se o codigo da requisicao e 200 se for e sucesso
            if(xhr.readyState === 4){
                if(xhr.status === 200){ //requisicao sucesso
                    resolve(JSON.parse(xhr.responseText));
                    //se o codigo de retorno for 200(sucesso) devera chamar a funcao resolve passando o valor do texto coletado pelo xhr para o Json.parse
                } else { //se o codigo nao for de sucesso(200) retorna uma mensagem de erro.
                    reject('Erro na requisicao');
                }
            }
        }
    });
}

var resultado = minhaPromise();
console.log(resultado);