const app = Vue.createApp({
    data() {
        return{
            product: 'Socks',

            brand: 'Vue Mastery',

            description: 'chaussettes en coton',

            image: './assets/images/socks_green.jpg',

            inventory: 10,

            details: ['50% cotton', '30% wool', '20% polyester'],

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

            cart: 0,
        }
    },
    methods: {
        addToCart() {
            if(this.cart < this.inventory){
                this.cart += 1
            }

        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeToCart() {
            if(this.cart > 0){
                this.cart -= 1
            }

        }
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
});