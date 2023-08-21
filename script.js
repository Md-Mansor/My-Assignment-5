let total = 0;

function clickOnCard(target) {
    const selectedItemContainer = document.getElementById("selected-item");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li")
    li.innerText =itemName;
    selectedItemContainer.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0]

    total = parseFloat(total) + parseFloat(price);
    document.getElementById("totalPrice").innerText = total.toFixed(2);

}
function applyDiscount() {
    const couponCodeInput = document.getElementById("couponCode");
    const couponCode = couponCodeInput.value;

    if (couponCode === "SELL200") {
        const discountPercentage = 20;  // 20% discount
        const discountAmount = total * (discountPercentage / 100);

        if (total >= 200) {
            total -= discountAmount;


            const discountDisplay = document.getElementById("discountDisplay");
            discountDisplay.innerText = discountAmount.toFixed(2);

            const finalPriceDisplay = document.getElementById("finalPrice");
            finalPriceDisplay.innerText = total.toFixed(2);

        } else {
            // Clear the discount display if the total is not eligible for a discount
            const discountDisplay = document.getElementById("discountDisplay");
            discountDisplay.innerText = "00.00";

            const finalPriceDisplay = document.getElementById("finalPrice");
            finalPriceDisplay.innerText = total.toFixed(2);
        }

    }
}