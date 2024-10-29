// script.js
const navLinks = document.querySelector('.nav-links');

document.querySelector('.logo').addEventListener('click', () => {
    navLinks.classList.toggle('open');
});




//Slider
let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const slider = document.querySelector('.slider');
    
        function showSlide(index) {
            const totalSlides = slides.length;
            currentSlide = index;
    
            // Calculate the translation amount
            const translateX = -currentSlide * (100 / totalSlides); // Get the translate value
            slider.style.transform = `translateX(${translateX}%)`; // Apply transform
    
            // Add 'active' class for visibility
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === currentSlide) {
                    slide.classList.add('active'); // Add active class to the current slide
                }
            });
        }
    
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length; // Cycle through slides
            showSlide(currentSlide);
        }
    
        setInterval(nextSlide, 2000); // Change slide every 3 seconds





//Script Carts

function calculatePrice(productNumber, pricePerUnit, isWholesale = false) {
    var quantity = parseInt(document.getElementById(`quantity${productNumber}`).value); // Get quantity as an integer
    var errorElement = document.getElementById(`error${productNumber}`);
    var totalPriceElement = document.getElementById(`total-price${productNumber}`);
    // Check if it's a wholesale product and the quantity is less than 5
    if (isWholesale === true && quantity < 5) {
        errorElement.innerText = "Minimum order for wholesale is 5 units.";
        totalPriceElement.innerText = ''; // Clear total price if error exists
        return; // Stop the function from calculating the price
    } else {
        errorElement.innerText = ''; // Clear the error message if conditions are met
    }

    // Calculate the total price
    var totalPrice = pricePerUnit * quantity;
    totalPriceElement.innerText = totalPrice; // Display the total price
}

// // Function to show confirmation message after adding to cart
// function addToCart(productNumber) {
//     document.getElementById(`confirmation${productNumber}`).style.display = 'block';
//     setTimeout(() => {
//         document.getElementById(`confirmation${productNumber}`).style.display = 'none';
//     }, 3000); // Hide the message after 3 seconds
// }




//Order Detials
// Function to show the modal for order details
function openModal(productNumber) {
    document.getElementById("orderModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}
function submitOrder() {
    // Capture the customer details
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;

    // Capture product details (these could come from other parts of the form or page)
    var productNumber = document.getElementById("summaryProductNumber").innerText; // Assuming product number is displayed elsewhere
    var quantity = document.getElementById("summaryQuantity").innerText; // Assuming quantity is already available
    var totalPrice = document.getElementById("summaryTotalPrice").innerText; // Assuming price is already calculated

    // Check if any required field is empty
    if (!name || !address || !contact || !email) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Populate the summary section with user details
    document.getElementById("summaryName").innerText = name;
    document.getElementById("summaryAddress").innerText = address;
    document.getElementById("summaryContact").innerText = contact;
    document.getElementById("summaryEmail").innerText = email;
    
    // Populate the summary with product details
    document.getElementById("summaryQuantity").innerText = quantity;
    document.getElementById("summaryTotalPrice").innerText = totalPrice;
    document.getElementById("summaryProductNumber").innerText = productNumber;

    // Optionally, you can hide the form and show the summary
    document.getElementById("orderForm").style.display = 'none';
    document.getElementById("orderSummary").style.display = 'block';
}




function redirectTocustomerinfo(productNumber) {
    // Get quantity and total price based on the product number
    const quantity = parseInt(document.getElementById(`quantity${productNumber}`).value);
    const totalPrice = document.getElementById(`total-price${productNumber}`).innerText;

    // Construct the URL with query parameters
    const url = `/products/customerinfo.html?productNumber=${productNumber}&quantity=${quantity}&totalPrice=${totalPrice}`;
    
    // Redirect to the customer info page
    window.location.href = url;
}
