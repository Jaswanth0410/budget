const transactionForm = document.getElementById('transactionForm');
const transactionTable = document.getElementById('transactionTable');
const tbody = transactionTable.getElementsByTagName('tbody')[0];

transactionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (type && name && amount) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${type}</td>
            <td>${name}</td>
            <td>$${amount}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        tbody.appendChild(newRow);

        // Clear form fields
        document.getElementById('type').value = '';
        document.getElementById('name').value = '';
        document.getElementById('amount').value = '';
    }
});

tbody.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const row = event.target.parentNode.parentNode;
        tbody.removeChild(row);
    }
});
