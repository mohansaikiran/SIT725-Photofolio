// Function to add animation class after a delay
function animateWords() {
    const words = document.querySelector('.animate');
    words.classList.add('animate-onload');
    words.style.visibility = 'visible';
}

// Trigger the animation after the page loads
window.addEventListener('load', function () {
    setTimeout(animateWords, 300); // Delay of 1 second (1000 milliseconds)
});

async function postLandingData() {
    const newUser = {
        id: 2,
        name: "Likitha",
        role: "Photog",
        age: 25,
    }
    try {
        const resp = await fetch('/landing/add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });
        const data = await resp.json();

        console.log("Data from server ::", data);
    } catch(error) {
        console.log("Error creating User", error);
    }
}

async function fetchLandingData() {
    try {
        const resp = await fetch('/landing/get', { method: 'GET'});
        const data = await resp.json();

        console.log("Data from server ::", data);
    } catch(error) {
        console.log("Error getting Data", error);
    }
}

async function updateData() {
    const updateData = {
        role: "Client",
    }
    try {
        const resp = await fetch('/landing/update/1', { 
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        });
        const data = await resp.json();

        console.log("Data from server ::", data);
    } catch(error) {
        console.log("Error getting Data", error);
    }
}

async function deleteData() {
    try {
        const resp = await fetch('/landing/delete/2', {method: 'DELETE'});
        const data = await resp.json();

        console.log("Data from server ::", data);
    } catch(error) {
        console.log("Error getting Data", error);
    }
}

// postLandingData();
updateData();
// deleteData();
fetchLandingData();