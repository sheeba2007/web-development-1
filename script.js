// Tracking if the user has already requested password reset today
let hasRequestedToday = false;
let resetRequestTime = localStorage.getItem("resetRequestTime");

if (resetRequestTime) {
    const currentDate = new Date().toISOString().split('T')[0]; // Get only date part (YYYY-MM-DD)
    const storedDate = resetRequestTime.split('T')[0];
    
    if (currentDate === storedDate) {
        hasRequestedToday = true;
    }
}

document.getElementById('reset-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const contact = document.getElementById('contact').value;
    
    if (hasRequestedToday) {
        document.getElementById('warning').style.display = 'block';
        return;
    }

    // Simulate sending the reset link (You can replace this with an API call)
    alert(`Reset link sent to ${contact}`);
    
    // Store the reset request time in localStorage to track the date
    localStorage.setItem("resetRequestTime", new Date().toISOString());

    // Prevent further requests for today
    hasRequestedToday = true;
    document.getElementById('warning').style.display = 'none';
});

document.getElementById('generatePassword').addEventListener('click', function() {
    const randomPassword = generateRandomPassword();
    document.getElementById('randomPasswordDisplay').innerText = `Generated Password: ${randomPassword}`;
});

function generateRandomPassword() {
    const length = 12;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // No numbers or special characters
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    return password;
}
