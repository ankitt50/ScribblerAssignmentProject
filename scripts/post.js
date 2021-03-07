getheader();
function getheader() {

    document.getElementById('top-header-container').innerHTML='<div id="header-left">'+
'<label id="main-heading">ScriBBler</label>'+
'<label id="heading-subtext">Explore, Imagine, Create</label>'+
'</div>'+
'<div id="header-right">'+
'<button class="sign-btn" data-bs-toggle="modal" data-bs-target="#signUpModal">Sign Up</button>'+
'<button class="sign-btn" data-bs-toggle="modal" data-bs-target="#signInModal">Sign In</button>'+
'</div>';

}

getModal('signUpModal');
getModal('signInModal');

function getModal(modalName) {
    var exampleModal = document.getElementById(modalName);
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever');
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyInput = exampleModal.querySelector('.modal-body input');

  //modalTitle.textContent = 'New message to ' + recipient
  if(modalName === 'signInModal') {
      modalTitle.textContent = 'Welcome Back!';
  }
  if(modalName === 'signUpModal') {
    modalTitle.textContent = 'Get started';
  }
  if(modalName === 'createPostModal') {
      modalTitle.textContent = 'Pen Your Post';
  }
  
  modalBodyInput.value = recipient;
});

}
getMainBody(false,'one persone has liked this');

function getMainBody(isEditable,text) {
  document.getElementById('bottom-btn-container').innerHTML='<h3 contentEditable="'+isEditable+'">'+sessionStorage.getItem('title')+'</h3>'+
  '<div id="author-name-row">'+
  '<h5>'+sessionStorage.getItem('author')+'</h5>'+
  '<input type="submit" value="Edit"/>'+
  '</div>'+
  '<p contentEditable="'+isEditable+'">'+sessionStorage.getItem('body')+'</p>'+
  '<input type="submit" value="Like"/>'+
  '<p>'+text+'</p>';

}