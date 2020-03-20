* Modulo 4 JS Assincrono

Conceito de AJAX: requisição assincrona que realizamos em algum Back-end.

Ao inves de recarregar a pagina para trazer as novas informaçoes do servidor usamos o ajax que nao precisa recarregar a pagina

Conceito de Promises são codigos que não vão influenciar na linha do tempo do nosso codigo JS, são funções que vão devolver valor de resultado de sucesso ou erro só depois de um tempo e por isso não precisamos nos preocupar quando este valor será retornado pois nosso JS continuara executando normalmente.

A Classe Promise nos permite trabalhar com a estrutura do .then e .catch para trabalhar com codigo assincrono no JS.

Estrutura da promise
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

minhaPromise()
    .then(function(response) {  // se a condicao do codigo 200 for atendida com sucesso ele ira invocar o .then (que invoca a function(response))
        console.log(response);  //se deu tudo certo ele exibira o JSON da URL no console 
        //aqui seria o melhor lugar para colocar algum codigo que depende do retorno do XHR pois ele só seria executado após a requisicao.
    })
    .catch(function(error) { //ja se o xhr.readyonstatechange chamar o reject da promise ele invocara esse .catch e ai podemos exibir alguma mensagem de erro ou dar alguma tratativa
        console.warn(error);
    });  

