class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product, quantity) {
        this.items.push({ product, quantity });
        console.log(`✅ ${product.name} adicionado ao carrinho.`);
    }

    removeProduct(productName) {
        this.items = this.items.filter(item => item.product.name !== productName);
        console.log(`❌ ${productName} removido do carrinho.`);
    }

    updateQuantity(productName, quantity) {
        const item = this.items.find(item => item.product.name === productName);
        if (item) {
            item.quantity = quantity;
            console.log(`🔄 Quantidade de ${productName} atualizada.`);
        } else {
            console.log("Produto não encontrado.");
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    }

    showCart() {
        console.log("\n🛒 Seu Carrinho:");
        this.items.forEach(item => {
            console.log(`${item.product.name} - R$${item.product.price} x ${item.quantity}`);
        });
        console.log(`💰 Total: R$${this.getTotal()}\n`);
    }
}

module.exports = Cart;
