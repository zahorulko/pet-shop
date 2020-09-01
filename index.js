new Vue({
    el: '#app',

    beforeCreate: function() {
        console.log("before create");
    },

    created: function() {
       axios.get('products.json').then((Response) => {this.products=Response.data.products;
        console.log("hello from JSON");
        })
    },

    methods: {
        addToCard: function(aProduct) {
            this.cart.push(aProduct.id);
        },

        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },

        submitForm: function() {
            alert('your order is done');
        },
        
        checkRating: function(n, myProduct) {
            return myProduct.rating - n >= 0;
        },

        canAddToCard(aProduct) {
            return aProduct.availablelnventory > this.cartCount(aProduct.id);
        },

        cartCount: function(id) {
            var count = 0;
            for(var i = 0; i < this.cart.length; i++) {
                if(this.cart[i] === id) {
                    count++;
                }
            };
            return count;
        },

        cartItemCount: function() {
            return this.cart.length || "";
        },

       

    },
    
    computed: {

        fullName: function() {
            return [this.firstName, this.lastName].join(' ');
        },

        area: function() {
            return this.length * this.width;
        },

        soretedProducts() {
            if(this.products.length > 0) {
                let productArray = this.products.slice(0);
                function compare(a, b) {
                    if(a.title.toLowerCase() < b.title.toLowerCase())
                        return -1;
                    if(a.title.toLowerCase() > b.title.toLowerCase())
                        return 1;
                    return 0;
                }
                return productArray.sort(compare);
            }
            else{console.log('brak products from json')};
        },

    },

    data: {
        states: {
            AR: "Arizona",
            CO: "Columbia",
            NY: "NewYork",
            CA: "California",
            ND: "Newada",
            MC: "Mexico",

        },
        order: {
            state: "",
            firstName: "",
            lastName: "",
            address: "",
            state: "",
            postcode: "",
            city: "",
            gift: "11111",
            sendGift: "Send gift",
            dontSendGift: "dontSendGift",
            deliv: 'ddddd',
            business: 'ul. Matejki 11a',
            home: 'ul. Gronowa 61',
        },
        showProduct: true,
        sitename: 'Vue.js   Pet Depot',
        firstName: "Oleh",
        lastName: "Zahorulko",
        length: 5,
        width: 3,

        product: {
            id: 1001,
            title: "Some text about product Cat foods",
            description: "А 25 pound bag of <em>irresistiЬle</em>,"+
            "organic goodness for your cat.",
            price: 999999,
            image: "img/bart.jpeg",
            availablelnventory: 10,
            rating: 3,
        },

        products: [],

        filters: {
            formatPrice: function(price){
                if(!parseInt(price))
                return "";
                
                if(price > 99999){
                    var priceString = (price / 100).toFixed(2);
                    var priceArray = priceString.split("").reverse();
                    var index = 3;
                    while(priceArray.length > index + 3){
                        priceArray.splice(index+3, 0, ",");
                        index += 4;
                    }
                    return "$" + priceArray.reverse().join("");
                }else {
                    return "$" + (price /100).toFixed(2);
                }
            }
        },

        cart: [],
       

       
       
        
    },
    

    
    
});






