const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "0933a592-dc95-4520-9572-cbd8e7a8d40c");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});


// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

//   if (!webhookUrl) {
//     return res.status(500).json({ error: 'Webhook URL not configured' });
//   }

//   try {
//     const response = await fetch(webhookUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(req.body),
//     });

//     if (response.ok) {
//       res.status(200).json({ success: true });
//     } else {
//       res.status(response.status).json({ error: 'Failed to send to Zapier' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }