document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const form = this;
    const phone = form.querySelector('input[name="number"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();

    // Validate phone number
    const phonePattern = /^[0-9+\-\s()]{8,20}$/;

    // Validate email
    //const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phonePattern.test(phone)) {
        alert("❌ Please enter a valid phone number.");
        return;
    }

   /* if (!emailPattern.test(email)) {
        alert("❌ Please enter a valid email address.");
        return;
   }*/

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            alert(
                "✓ Message sent successfully!\n\n" +
                "Thank you for contacting CasaPack Egypt. " +
                "We will get back to you as soon as possible."
            );

            form.reset();
        } else {
            alert("❌ Something went wrong. Please try again.");
        }

    } catch (error) {
        alert("❌ Something went wrong. Please check your internet connection and try again.");
    }
});