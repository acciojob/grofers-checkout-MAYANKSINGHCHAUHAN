function calculateTotal() {
    let prices = document.querySelectorAll(".prices");
    let total = 0;

    // Calculate total price
    prices.forEach(price => {
        total += parseFloat(price.innerText);
    });

    // Check if total row already exists and update it
    let totalRow = document.getElementById("totalRow");
    if (totalRow) {
        totalRow.innerHTML = `<td colspan="2"><strong>Total Price: $${total.toFixed(2)}</strong></td>`;
    } else {
        // Create a new row for total price
        let newRow = document.createElement("tr");
        newRow.id = "totalRow";
        newRow.innerHTML = `<td colspan="2"><strong>Total Price: $${total.toFixed(2)}</strong></td>`;

        // Append to the table
        document.getElementById("groceryTable").appendChild(newRow);
    }
}
