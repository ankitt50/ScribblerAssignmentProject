
// variable to keep track of number of likes
var likesCount = 0;

// array to keep record of all comments added
var commentsArray = [];

//Script method to add header template
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


// Script method to add event listeners to the modal buttons
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

// dynamically adds text to the bottom div according to the saved title/body and comments

getMainBody(false);

function getMainBody(isEditable) {
  var editOrsaveBtn = getEditOrSave(isEditable);
  document.getElementById('bottom-btn-container').innerHTML='<label id="title" '+getBorderStyle(isEditable)+' contentEditable="'+isEditable+'">'+sessionStorage.getItem('title')+'</label>'+
  '<div id="author-name-row">'+
  '<label>'+sessionStorage.getItem('author')+'</label>'+
  '<button class="pink-btn" onClick="makeBlogEditable('+isEditable+')" >'+editOrsaveBtn+'</button>'+
  '</div>'+
  '<p id="body" '+getBorderStyle(isEditable)+' contentEditable="'+isEditable+'">'+sessionStorage.getItem('body')+'</p>'+
  '<div class="like-btn-container">'+
  '<button class="pink-btn" onClick="incrementLikesCount()"/>'+getLikeOrLiked()+'</button>'+
  '<p>'+getLikesText()+'</p>'+
  '</div>'+
  '<div class="comment-box-container">'+
  '<div class="comment-box-inner-container">'+
  '<textarea id="comment-box" placeholder="Leave a comment...."></textarea>'+
  '</div>'+
  '<input class="pink-btn" type="submit" value="Comment" onClick="addComment('+isEditable+')"/>'+
  '</div>'+
  getComments();
}


// changes Like button text dynamically
function getLikesText() {
  if(likesCount===1){
    return likesCount+' person likes this';
  }
  if(likesCount>0){
    return likesCount+' people like this!';
  }
  else {
    return 'Be the first one to like this!';
  }


}

// increments number of likes when like button is pressed
 function incrementLikesCount() {
   likesCount+=1;
   getMainBody(false);
 }

 // make title/body editable according to edit and save buttons
 function makeBlogEditable(isEditable) {
   if(isEditable){
    getMainBody(false);
   }
   else {
    getMainBody(true);
   }
  
 }

 // make chnages to edit and save buttons
 function getEditOrSave(isEditable) {
  if(isEditable){
    return 'Save'+'<i class="fa fa-floppy-o"></i>';
   }
   else {
    var titleBox = document.getElementById('title');
    if(titleBox!=null) {
      sessionStorage.setItem('title',titleBox.innerHTML);
    }
    var bodyBox = document.getElementById('body');
    if(bodyBox!=null) {
      sessionStorage.setItem('body',bodyBox.innerHTML);
    }
    return 'Edit'+'<i class="fa fa-pencil-square-o"></i>';
   }
 }

 // changes Like button text dynamically
 function getLikeOrLiked(){
   if(likesCount>0){
     return '<i class="fa fa-thumbs-up"></i>'+'Liked';
   }
   else {
     return '<i class="fa fa-thumbs-up"></i>'+'Like';
   }
 }

 // changes comment text dynamically whenever user adds a comment
 function getComments(){
   if (commentsArray.length<=0){
     return '<div id="comments-main-container"><label id="comments-heading">All Comments</label></div>';
   }
   else {
     var template = '';
     template+='<div id="comments-main-container">';
     template+= '<label id="comments-heading">All Comments</label>';

     commentsArray.forEach(function(index,element){
       template+='<div class="outer-comment-container">';
       template+='<div class="inner-comment-container">';
       template+='<p>'+index.toString()+'</p>';
       template+='</div>';
       template+='</div>';
     });
     template+='</div>';

     return template;

   }
 }

 // method to add a comment
 function addComment(isEditable){
   var textareaText = document.getElementById('comment-box').value;
   if(textareaText!=null && textareaText!='') {
    commentsArray.unshift(textareaText);
    getMainBody(isEditable);
   }
 }

 // dynamically change border of title/body 
 function getBorderStyle(isEditable){
   if (isEditable) {
    return 'style="border: 1px solid pink"';
   }
   else {
    return 'style="border: none"';
   }
   
 }