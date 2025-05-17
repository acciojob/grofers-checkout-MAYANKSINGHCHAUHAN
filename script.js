const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Create an element with id="ans" to display the total
const ansElement = document.createElement("div");
ansElement.id = "ans";
document.body.appendChild(ansElement);

const getSum = () => {
  // Get all price elements
  const prices = document.querySelectorAll(".price");
  let total = 0;

  // Calculate the sum of prices
  prices.forEach(price => {
    total += parseInt(price.textContent) || 0; // Handle non-numeric cases
  });

  // Display total in #ans element
  ansElement.textContent = `Total Price: Rs ${total}`;
};

getSumBtn.addEventListener("click", getSum);