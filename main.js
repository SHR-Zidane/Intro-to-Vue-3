const app = Vue.createApp({
    data() {
        return{
            product: 'Socks',

            description: 'chaussettes en coton',

            image: './assets/images/socks_green.jpg',

            inventory: 8,

            details: ['50% cotton', '30% wool', '20% polyester'],

            onSale: true,

            variants: [
                { id:2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id:2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],

            size: [
                {id:1, size: 'S'},
                {id:2, size: 'M'},
                {id:3, size: 'L'},
                {id:4, size: 'XL'}
            ],

            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeToCart() {
            this.cart -= 1
        }
    }
});