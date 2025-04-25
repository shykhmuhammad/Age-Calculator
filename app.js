function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Please select your date of birth.");
        return;
    }

    const birthDate = new Date(dob).getTime();
    const currentDate = new Date().getTime();
    const ageInMilliseconds = currentDate - birthDate;
    const age = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));

    document.getElementById('result').innerText = `Your Age is: ${age} years`;
}
