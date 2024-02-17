let selectedRating = null;

document.querySelectorAll('.rating').forEach(item => {
    item.addEventListener('click', event => {
        // Remove 'selected' class from all
        document.querySelectorAll('.rating').forEach(div => {
            div.classList.remove('selected');
        });
        // Add 'selected' class to clicked one
        item.classList.add('selected');
        selectedRating = item.getAttribute('data-value');
    });
});

document.getElementById('submitRating').addEventListener('click', function() {
    if (selectedRating) {
        document.getElementById('showRating').innerText = "You selected " + selectedRating + " out of 5 ";
        document.getElementById('ratingPopup').style.display = 'block';
    } else {
        alert("Please select a rating before submitting.");
    }
});

function closePopup() {
    document.getElementById('ratingPopup').style.display = 'none';
}

// Close the modal when clicking anywhere outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('ratingPopup')) {
        closePopup();
    }
}

  