var modal = document.getElementById('signin-modal');
var triggerModal = document.getElementById('modal-trigger');


// event listeners
triggerModal.addEventListener('click', openModal);
window.addEventListener('click', clickOutside);


// event listeners function
function openModal() {
  modal.style.display = 'block';
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
