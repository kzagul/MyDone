/*Vue.config.debug = true; 
Vue.config.devtools = true;*/
let webstore = new Vue({
    el: '#Site_title',
    data: {
        siteName: "Vue.js Pet Depot",
        showProduct: true,
        order: {
            firstName: "",
            lastName: ""
        },
        product:{
            id: 1001,
            title: "CatFood, 25lb bag",
            description: "A 25 pound bag of <em>irresistible</em>, organic goodness for your cat.",
            price: 10000,
            image: "i.jpeg",
            availableInventory: 5
        },
        cart: []
    },
        filters:{
            formatPrice: function(price) {
                if (!parseInt(price)) { return ""; } // проверка на тип Int
                if (price > 99999) {	//#D
                    var priceString = (price / 100).toFixed(2);	//#E
                    var priceArray = priceString.split("").reverse();	//#F
                    var index = 3;	//#F
                    while (priceArray.length > index + 3) {	//#F
                        priceArray.splice(index + 3, 0, ",");	//#F
                        index += 4;	//#F
                    }	//#F
                    return "$" + priceArray.reverse().join("");	//#G
                } else {
                    return "$" + (price / 100).toFixed(2);	//#H
                }
            }

        },
        methods: {
            addToCart: function(){
                this.cart.push(this.product.id)
            },
            showCheckout: function() {
                this.showProduct = this.showProduct ? false : true;
            }

        },
        computed: {
            fullName: function() {
                return [this.firstName, this.lastName].join(" ");
            },
            cartItemCount: function() {
                return this.cart.length || "";
            },
            canAddToCart: function() {
                return this.product.availableInventory > this.cartItemCount;
            }
        }
});
