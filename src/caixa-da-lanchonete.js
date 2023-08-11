
class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        //Separa os nomes das quantidades
        const itemsNames = itens.map((item)=>item.split(",")[0]);
        const itemsQuant = itens.map((item)=>item.split(",")[1]);
               
        //Cria objetos com o nome e a quantidade
        const pedidosSet = new Set();
        for(let i = 0; i< itens.length;i++){

            const itemDopedido={
                name: itemsNames[i],
                quant: itemsQuant [i],
                preco: this.obterPreco(itemsNames[i])
            }
            //Armazena em um Set para evitar repetição
            pedidosSet.add(itemDopedido);
        }

        if( pedidosSet.has("chantily")  ||pedidosSet.has("queijo")   ){
        if(pedidosSet.has("chantily")){
            let validacao = this.validarCafe(pedidosSet)

            if(validacao === false){
                return "Item extra não pode ser pedido sem o principal";
            }
            else{
             return  this.valorFinal(metodoDePagamento,pedidosSet)

            }

        }
        if(pedidosSet.has("queijo")){
            let validacao = this.validarSanduiche(pedidosSet)

            if(validacao === false){
                return "Item extra não pode ser pedido sem o principal";
            }
            else{
               return this.valorFinal(metodoDePagamento,pedidosSet)
            }
        }
}
else{


console.log("O valor final: "+ this.valorFinal(metodoDePagamento,pedidosSet)   )
}

        console.log(pedidosSet)

        return "";
    
    }
        valorFinal(formaDePagamento,pedidos){
            switch (formaDePagamento) {
                case "dinheiro":
                    let soma = 0;
                   pedidos.forEach((pedido)=>soma += pedido.quant * pedido.preco)  
                    soma = soma - (soma *0.05 ) 
                return soma;
                

        }
    }


        validarCafe(pedidosSet){
            return pedidosSet.has("cafe")
        }
        validarSanduiche(pedidosSet){
            return pedidosSet.has("sanduiche")
        }


    obterPreco(itemName) {
        switch (itemName) {
            case "cafe":
                return 3.00;
            case "chantily":
                //extra
                return 1.50;
            case "suco":
                return 6.20;
            case "sanduiche":
                return 6.50;
            case "queijo":
                //extra
                return 2.00;
            case "salgado":
                return 7.25;
            case "combo1":
                return 9.50;
            case "combo2":
                return 7.50;
            default:
                return 0; 
        }
    }




}

export { CaixaDaLanchonete };

const caixa = new CaixaDaLanchonete();

caixa.calcularValorDaCompra("dinheiro",['cafe,1','chantily,1'])