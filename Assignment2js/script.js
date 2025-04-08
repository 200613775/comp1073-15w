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
        this.price = this.calculatePrice(size);  // Calculate price based on the size
    }

    // Calculate price based on size (Small: $4.75, Large: $6.25)
    calculatePrice(size) {
        const sizePrices = {
            small: 4.75,
            large: 6.25
        };

        // Return the price based on selected size
        return sizePrices[size] || 0;
    }

    // Get the total price of the smoothie order
    getTotalPrice() {
        return this.price.toFixed(2);  
    }
serveIt() {
    // Create a element for image
    const smoothieImage = document.createElement("img");

    // according to size set the path
    let smoothieImagePath = ""; 
    if (this.size === "small") {
        smoothieImagePath = "images/smoothie-small.png";  
    } else if (this.size === "large") {
        smoothieImagePath = "images/smoothie-large.jpg";  
    }

    // Set src attribute
    smoothieImage.setAttribute("src", smoothieImagePath);
    smoothieImage.setAttribute("alt", `A ${this.size} smoothie`);

    // set the size
    let smoothieSize;
    switch (this.size) {
        case "small":
            smoothieSize = "110"; 
            break;
        case "large":
            smoothieSize = "130"; 
            break;
        default:
            smoothieSize = "115"; 
    }

    smoothieImage.setAttribute("height", smoothieSize); 
    smoothieImage.setAttribute("title", `A ${this.size} smoothie`); 

    // into the output section append the smoothie
    output.appendChild(smoothieImage);
}
}

// Add event listener for the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  

    // Get the details of the customer like the name
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;

    // Get the selected size
    const sizeElements = document.getElementsByName('size');
    let size = '';
    for (const element of sizeElements) {
        if (element.checked) {
            size = element.value;
        }
    }

    // size is required so if they don't select a size return to output that they can select a size
    if (!size) {
        output.textContent = 'You can select a size for your smoothie.';
        return;
    }

    // Get selected flavours for the smoothie
    const flavourElements = document.getElementsByName('flavour');
    const selectedFlavours = [];
    for (const element of flavourElements) {
        if (element.checked) {
            selectedFlavours.push(element.value);
        }
    }

    // Get selected toppings for the smoothie
    const toppingElements = document.getElementsByName('topings');
    const selectedToppings = [];
    for (const element of toppingElements) {
        if (element.checked) {
            selectedToppings.push(element.value);
        }
    }

    // Create a new object for the smoothie order
    const smoothie = new SmoothieOrder(firstname, lastname, size, selectedFlavours, selectedToppings);

    // Get the total price
    const totalPrice = smoothie.getTotalPrice();

    // Display the smoothie order and total price
    output.textContent = `
        ${firstname} ${lastname} ordered a ${size} smoothie.
        Flavours: ${selectedFlavours}
        Toppings: ${selectedToppings}
        Total Price: ${totalPrice}
    `;
    // display the image
    smoothie.serveIt();
});
