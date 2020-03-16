
//Referenciando os elementos que serão usados
var listElement = document.querySelector('#app ul'); //Buscando dentro da DIV com ID APP o elemento UL
var inputElement = document.querySelector('#app input'); //Buscnado dentro da DIV do ID APP o elemento input
var buttonElement = document.querySelector('#app button'); //Buscando dentro da div o elemento button

//Array que armazena os TODOS que serao usados nos li
var todos= [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

//Funcao que renderiza os TODOS da array cadastrado
function renderTodos(){
    listElement.innerHTML = ''; //Limpa o <ul> excluindo os outros TODOS ja cadastrados

    for(todo of todos){       //percorre a array todos 
        var todoElement = document.createElement('li');  
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');  //a Cerquilha é para nao ter efeito nenhum no HREF

        var pos = todos.indexOf(todo);   //com base no texto da array ele retorna a posicao do item para a variavel pos
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos + ')');  
            //atributo onclick do a href Excluir passando como parametro a funcao deleteTodo(posicao_da_array) 
        
        var linkText = document.createTextNode('Excluir');
        
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        
        listElement.appendChild(todoElement);
    }
}

renderTodos();  //exibe a array todos

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value= '';
    renderTodos();
}

buttonElement.onclick = addTodo;  //acao do botao de adicionar

function deleteTodo(pos){
    todos.splice(pos, 1); //Metodo splice remove uma quantidade de itens de uma array baseado na posicao passada;
                    //onde array.splice(posicao, quantidade de itens)     array.splice(3, 1); removera o 4 item da array
    renderTodos();

}