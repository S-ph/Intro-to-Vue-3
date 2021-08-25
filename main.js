const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:2234, color:"blue"},
                {id:2235, color:"green"}
            ],
            sizes: [22,24,26,28,30,34,36,40]
        }
    }
})
