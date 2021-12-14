
        const items = [
            {
                    id: 0,
                    nome: "MEL AROEIRA"+"<br>"+"<br>"+"<br>",
                    img: "./img/MEL 0.jpg",
                    quantidade: 0
                },
                {
                    id: 1,
                    nome: "MEL DE CIPÓ TIMBÓ"+"<br>"+"<br>",
                    img: "./img/MEL1.jpg",
                    quantidade: 0
                },
                {
                    id: 2,
                    nome: "MEL DE JUREMA"+"<br>"+"<br>",
                    img: "./img/MEL2.jpg",
                    quantidade: 0
                },
                {
                    id: 3,
                    nome: "MEU DE EUCALIPTO"+"<br>"+"<br>",
                    img: "./img/MEL3.jpg",
                    quantidade: 0
                },
                {
                    id: 4,
                    nome: "MEL SILVESTRE"+"<br>"+"<br>",
                    img: "./img/MEL4.jpg",
                    quantidade: 0
                },
                {
                    id: 5,
                    nome: "FLORADA NÃO DEFINIDA",
                    img: "./img/MEL5.jpg",
                    quantidade: 0
                },
               
                
    
                
    
            ]
              //mudar para função dps
        
              function inicializarLoja() {
                var containerprodutos = document.getElementById("produtos");
               // percorrer os itens da array com for
                items.map((val) => {
                    containerprodutos.innerHTML += `
    
    
                    <div class = "mel-single">
                        <img src= "`+ val.img+`" />
                        <p> `+val.nome+`</p>
                        <a key="`+val.id+`" href="#">Adicionar ao Carrinho</a>
                    </div>        
                    
                    
                    
                    ` ;
                })
            }
            
            inicializarLoja();
    
    
            // depois trocar por orcamento
            atualizarCarrinho = () => { 
                var containerCarrinho = document.getElementById('carrinho');
                containerCarrinho.innerHTML = "";
                items.map((val) => {
                    if(val.quantidade > 0){
                    containerCarrinho.innerHTML += `
    
                    <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
                  
                    
                    
                    
                    ` ;
                      }
                })
    
            }
            var links = document.getElementsByTagName('a');
    
            for(var i = 0; i < links.length; i++){
                links[i].addEventListener("click", function(){
                    let key = this.getAttribute('key');
                    items[key].quantidade++;
                    atualizarCarrinho();
                    return false;
                })
            }
    
    