/**
 * Get modal elements
 * Get modal button
 */
var modal = document.getElementById('parcel-modal');
var openButton = document.getElementById('modal-button');
var closeButton = document.getElementsByClassName('close-button')[0];

/**
 * Create event listeners
 */
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

/**
 * Function definitions
 */
function openModal() {
  modal.style.display = 'block';
  // console.log('File loaded successfully');
}

function closeModal() {
  modal.style.display = 'none';
  // console.log('122');
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
