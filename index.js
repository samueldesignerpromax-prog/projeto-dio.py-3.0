const readline = require("readline");
const Cart = require("./cart");
const Product = require("./product");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cart = new Cart();

function menu() {
    console.log("=== 🛍 Shopee Cart Simulator ===");
    console.log("1 - Adicionar Produto");
    console.log("2 - Remover Produto");
    console.log("3 - Atualizar Quantidade");
    console.log("4 - Ver Carrinho");
    console.log("5 - Sair");

    rl.question("Escolha uma opção: ", (option) => {
        switch(option) {
            case "1":
                rl.question("Nome do produto: ", (name) => {
                    rl.question("Preço: ", (price) => {
                        rl.question("Quantidade: ", (quantity) => {
                            const product = new Product(name, parseFloat(price));
                            cart.addProduct(product, parseInt(quantity));
                            menu();
                        });
                    });
                });
                break;

            case "2":
                rl.question("Nome do produto para remover: ", (name) => {
                    cart.removeProduct(name);
                    menu();
                });
                break;

            case "3":
                rl.question("Nome do produto: ", (name) => {
                    rl.question("Nova quantidade: ", (quantity) => {
                        cart.updateQuantity(name, parseInt(quantity));
                        menu();
                    });
                });
                break;

            case "4":
                cart.showCart();
                menu();
                break;

            case "5":
                console.log("👋 Saindo...");
                rl.close();
                break;

            default:
                console.log("Opção inválida.");
                menu();
        }
    });
}

menu();
