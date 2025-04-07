const output = document.getElementById('output');

// Create a class for the smoothie order
class SmoothieOrder {
    // Constructor for the class
    constructor(firstName, lastName, size, flavours, toppings) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.size = size;
        this.flavours = flavours;
        this.toppings = toppings;
    }

    // Get the description of the smoothie order
    getDescription() {
        let flavoursList = this.flavours;
        let toppingsList = this.toppings;
        return `${this.firstName} ${this.lastName} gave an order for a ${this.size} size smoothie with ${flavoursList} flavours and ${toppingsList} toppings.`;
    }
}

// Add event listener for the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the details of the customer like name
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;

    // Get the information about the size
    const sizeElements = document.getElementsByName('size');
    let size = '';
    for (const element of sizeElements) {
        if (element.checked) {
            size = element.value;
        }
    }

    // Get selected flavours
    const flavourElements = document.getElementsByName('flavour');
    const selectedFlavours = [];
    for (const element of flavourElements) {
        if (element.checked) {
            selectedFlavours.push(element.value);
        }
    }

    // Get selected toppings
    const toppingElements = document.getElementsByName('topings');
    const selectedToppings = [];
    for (const element of toppingElements) {
        if (element.checked) {
            selectedToppings.push(element.value);
        }
    }

    // Create a new object for the smoothie order
    const smoothie = new SmoothieOrder(firstname, lastname, size, selectedFlavours, selectedToppings);

    // Show the description of the order
    const smoothieDescription = smoothie.getDescription();
    output.textContent = `${smoothieDescription}`;
});
