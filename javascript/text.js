
function format(command, value = null) {
    document.execCommand(command, false, value);
}

// counter
const editor = document.querySelector('.editor');
const charCounter = document.querySelector('.char-counter');
editor.addEventListener('input', () => {
    const textLength = editor.innerText.length;
    charCounter.textContent = `${textLength}/10000`;
});

function saveContent() {
    const content = editor.innerHTML;
    console.log('Saved Content: ', content);
    alert('Content saved! Check the console for the output.');
}

// toolbar
function toggleToolbar() {
    const toolbarContainer = document.querySelector('.toolbar-container');
    const toggleButton = document.querySelector('.toggle-toolbar-btn');

    toolbarContainer.classList.toggle('hidden');
    if (toolbarContainer.classList.contains('hidden')) {
        toggleButton.textContent = '•••'; 
    } else {
        toggleButton.textContent = '×';  
    }
}



// // Date
// function updateDate() {
//     const dateElement = document.getElementById('liveDate');
//     const now = new Date();

//     // Format the date (You can customize the format as needed)
//     const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
//     const formattedDate = now.toLocaleDateString('en-US', options);

//     // Get current time
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const time = `${hours}:${minutes}`;

//     // Update the content of the date element
//     dateElement.innerHTML = `${formattedDate}, ${time}`;
// }

// // Call updateDate every second
// setInterval(updateDate, 1000);

// // Initialize with the current date/time when the page loads
// updateDate();

