/* =========================================================
   NAVBAR TOGGLE (MOBILE)
========================================================= */
function toggleMenu() {
    const menu = document.querySelector("nav ul");
    if (menu) {
        menu.classList.toggle("open");
    }
}


/* =========================================================
   FORM VALIDATION
========================================================= */
document.addEventListener("submit", function (e) {
    const form = e.target;
    const inputs = form.querySelectorAll("input[required], textarea[required], select[required]");

    for (let input of inputs) {
        if (!input.value.trim()) {
            alert("Please fill all required fields");
            input.focus();
            e.preventDefault();
            return;
        }
    }

    // Extra check for signup page (password match)
    const password = form.querySelector("input[type='password']");
    const confirmPassword = form.querySelectorAll("input[type='password']")[1];

    if (password && confirmPassword) {
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match");
            e.preventDefault();
        }
    }
});


/* =========================================================
   DASHBOARD TABLE INTERACTION
========================================================= */
document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row => {
        row.addEventListener("click", () => {
            const campaign = row.cells[0]?.innerText;
            if (campaign) {
                alert("Selected Campaign: " + campaign);
            }
        });
    });
});