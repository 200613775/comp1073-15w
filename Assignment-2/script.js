const output = document.getElementById('output');
// create a class for the smoothie order
class SmoothieOrder {
    // create a constructors for the the class
    constructor(firstName, lastName, size, flavours, toppings) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.size = size;
        this.flavours = flavours;
        this.toppings = toppings;
    }

    // get the description of the smoothie order
    getDescription(){
        let flavoursList = this.flavours;
        let toppingsList = this.toppings;
        returm `${this.firstName} ${this.lastName} give a order ${this.size}size smoothie with${flavoursList} flavour and ${toppingsList}topping.`;
    }
};

// add eventListener for the form submission
FormData.addEventListenet('submit', function(event)) {
    event.preventDefault();
}
