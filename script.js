let count = 0;

const btn = document.getElementById('actionBtn');
const status = document.getElementById('status');

// Add click event listener
btn.addEventListener('click', performAction);

function performAction() {
    count++;

    // FEEDBACK: Add yellow click effect
    btn.classList.add('click-feedback');
    setTimeout(() => btn.classList.remove('click-feedback'), 200);

    // Update status
    status.textContent = `Processed ${count} time${count !== 1 ? 's' : ''}`;

    // CONSTRAINT & SIGNIFIER
    if (count >= 3) {
        btn.disabled = true;
        btn.classList.add('constrained', 'disabled-signifier');
        status.textContent = 'Limit reached (3 clicks max)';
        status.style.borderColor = '#dc3545';
    }
}