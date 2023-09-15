document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.chocolate');
    const selectedList = document.getElementById('selected-list');
    const totalPrice = document.getElementById('total-price');
    
    let selectedChocolates = [];
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                if (selectedChocolates.length < 8) {
                    selectedChocolates.push(this.value);
                } else {
                    this.checked = false; // Prevent selecting more than 8 chocolates
                }
            } else {
                selectedChocolates = selectedChocolates.filter(choco => choco !== this.value);
            }
            updateSelectedChocolates();
        });
    });
    
    function updateSelectedChocolates() {
        selectedList.innerHTML = '';
        selectedChocolates.forEach(choco => {
            const listItem = document.createElement('li');
            listItem.textContent = choco;
            selectedList.appendChild(listItem);
        });
        calculateTotalPrice();
    }
    
    function calculateTotalPrice() {
        const pricePerChoco = 2.00; // Adjust the price per chocolate
        const total = (selectedChocolates.length * pricePerChoco).toFixed(2);
        totalPrice.textContent = `$${total}`;
    }
});
