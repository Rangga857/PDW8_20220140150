document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const size = document.querySelector('input[name="size"]:checked') ? document.querySelector('input[name="size"]:checked').value : '';
        const tshirtCodes = [];
        document.querySelectorAll('input[name^="STSAB"]:checked').forEach(function(checkbox) {
            tshirtCodes.push(checkbox.value);
        });
        let message = `Anda telah mengisi form dengan:\n\n`;
        message += `Nama: ${name}\n`;
        message += `Ukuran: ${size}\n`;
        message += `Kode T-Shirt: ${tshirtCodes.join(', ') || 'Tidak ada'}`;

        alert(message);
    });
});

const showRulesButton = document.getElementById('showRulesButton');
const rulesParagraph = document.getElementById('rules');
showRulesButton.addEventListener('click', function() {
    if (rulesParagraph.style.display === 'none') {
        rulesParagraph.style.display = 'block';
        showRulesButton.textContent = 'Hide Rules';
    } else {
        rulesParagraph.style.display = 'none';
        showRulesButton.textContent = 'Show Rules';
    }
});