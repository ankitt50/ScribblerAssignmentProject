getheader();
getModal('signUpModal');
getModal('signInModal');
var authors = ['Srishti Gupta','Colby Fayock','Yazeed Bzadough','Cedd Burge','Srishti Gupta','Ankit Tripathi','Saksham tripathi'];
var title = ['\'let\' me be a \'const\'(ant), not a \'var\'(iable)!</h5>','What is linting and how can it save you time?','How to Get More Views on Your Tech Blog','How to write easily describable code','Everything you should know about \'module\' & \'require\' in Node.js','testing the functionality','testing odd blogs'];
var body = [
    'Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.',
    'One of the biggest challenges in software development is time. It\'s something we can\'t easily get more of, but linting can help us make the most out of the time we have.',
    'If you\'re a developer with a Twitter account, you\'ve already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.',
    'When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.',
    'Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you\'ve created a module named xyz.','Testing Testing  testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing',
    'testing odd blogs,esting odd blogsesting odd blogsesting odd blogsesting odd blogsesting odd blogsesting odd blogsesting odd blogs',
];
getMainBody();
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

function getMainBody() {
    if(authors.length%2!=0) {
        document.getElementById('postlist-main-body-container').innerHTML+='<div class="container">';
        for(var i=0;i<authors.length-1;i+=2) {
            document.getElementById('postlist-main-body-container').innerHTML+='<div class="row justify-content-md-center">'+
      '<div class="col">'+
      '</div>'+
      '<div class="col-md-auto">'+
        '<div id="card-outer-container" class="card mb-3" style="max-width: 450px;">'+
            '<div class="row g-0">'+
              '<div class="col-md-4">'+
                '<h5 class="card-author">'+authors[i]+'</h5>'+
              '</div>'+
              '<div class="col-md-8">'+
                '<div class="card-body">'+
                  '<h5 id="card-title-inline" class="card-title">'+title[i]+'</h5>'+
                  '<i id="card-icon-inline'+i+'"'+' class="fas fa-trash"></i>'+
                  '<p class="card-text">'+body[i]+'</p>'+
                  '<div align="right"><i id="card-dot-icon-inline'+i+'"'+' class="fas fa-ellipsis-h"></i></div>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
      '</div>'+

      '<div class="col">'+
      '</div>'+

      '<div class="col-md-auto">'+
        '<div id="card-outer-container" class="card mb-3" style="max-width: 450px;">'+
            '<div class="row g-0">'+
              '<div class="col-md-4">'+
                '<h5 class="card-author">'+authors[i+1]+'</h5>'+
              '</div>'+
              '<div class="col-md-8">'+
                '<div class="card-body">'+
                  '<h5 id="card-title-inline" class="card-title">'+title[i+1]+'</h5>'+
                  '<i id="card-icon-inline'+(i+1)+'" class="fas fa-trash"></i>'+
                  '<p class="card-text" >'+body[i+1]+'</p>'+
                  '<div align="right"><i id="card-dot-icon-inline'+(i+1)+'"'+' class="fas fa-ellipsis-h"></i></div>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
      '</div>'+
      '<div class="col">'+
      '</div>'+
   '</div>';
        }


        document.getElementById('postlist-main-body-container').innerHTML+='<div class="row justify-content-md-center">\
        <div class="col">\
        </div>\
        <div class="col-md-auto">\
          <div id="card-outer-container" class="card mb-3" style="max-width: 450px;">\
              <div class="row g-0">\
                <div class="col-md-4">\
                  <h5 class="card-author">'+authors[i]+'</h5>\
                </div>\
                <div class="col-md-8">\
                  <div class="card-body">\
                    <h5 id="card-title-inline" class="card-title">'+title[i]+'</h5>\
                    <i id="card-icon-inline'+i+'"'+' class="fas fa-trash"></i>\
                    <p class="card-text">'+body[i]+'</p>\
                    <div align="right"><i id="card-dot-icon-inline'+i+'"'+' class="fas fa-ellipsis-h"></i></div>\
                  </div>\
                </div>\
              </div>\
            </div>\
        </div>\
        <div class="col">\
        </div>\
        <div class="col">\
        </div>\
      </div>'+
  '</div>';

    }
    else {
        document.getElementById('postlist-main-body-container').innerHTML+='<div class="container">';
        for(var i=0;i<authors.length-2;i+=2) {
            document.getElementById('postlist-main-body-container').innerHTML+='<div class="row justify-content-md-center">'+
      '<div class="col">'+
      '</div>'+
      '<div class="col-md-auto">'+
        '<div id="card-outer-container" class="card mb-3" style="max-width: 450px;">'+
            '<div class="row g-0">'+
              '<div class="col-md-4">'+
                '<h5 class="card-author">'+authors[i]+'</h5>'+
              '</div>'+
              '<div class="col-md-8">'+
                '<div class="card-body">'+
                  '<h5 id="card-title-inline" class="card-title">'+title[i]+'</h5>'+
                  '<i id="card-icon-inline'+i+'" class="fas fa-trash"></i>'+
                  '<p class="card-text">'+body[i]+'</p>'+
                  '<div align="right"><i id="card-dot-icon-inline'+i+'"'+' class="fas fa-ellipsis-h"></i></div>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
      '</div>'+

      '<div class="col">'+
      '</div>'+

      '<div class="col-md-auto">'+
        '<div id="card-outer-container" class="card mb-3" style="max-width: 450px;">'+
            '<div class="row g-0">'+
              '<div class="col-md-4">'+
                '<h5 class="card-author">'+authors[i+1]+'</h5>'+
              '</div>'+
              '<div class="col-md-8">'+
                '<div class="card-body">'+
                  '<h5 id="card-title-inline" class="card-title">'+title[i+1]+'</h5>'+
                  '<i id="card-icon-inline'+(i+1)+'" class="fas fa-trash"></i>'+
                  '<p class="card-text" >'+body[i+1]+'</p>'+
                  '<div align="right"><i id="card-dot-icon-inline'+(i+1)+'"'+' class="fas fa-ellipsis-h"></i></div>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
      '</div>'+
      '<div class="col">'+
      '</div>'+
   '</div>';
        }


        document.getElementById('postlist-main-body-container').innerHTML+='<div class="row justify-content-md-center">'+
        '<div class="col">'+
        '</div>'+
        '<div class="col-md-auto">'+
          '<div id="card-outer-container" class="card mb-3" style="max-width: 450px;">'+
              '<div class="row g-0">'+
                '<div class="col-md-4">'+
                  '<h5 class="card-author">'+authors[i]+'</h5>'+
                '</div>'+
                '<div class="col-md-8">'+
                  '<div class="card-body">'+
                    '<h5 id="card-title-inline" class="card-title">'+title[i]+'</h5>'+
                    '<i id="card-icon-inline'+i+'" class="fas fa-trash"></i>'+
                    '<p class="card-text">'+body[i]+'</p>'+
                    '<div align="right"><i id="card-dot-icon-inline'+i+'"'+' class="fas fa-ellipsis-h"></i></div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
        '</div>'+
  
        '<div class="col">'+
        '</div>'+
  
        '<div class="col-md-auto">'+
          '<div id="card-outer-container" class="card mb-3" style="max-width: 450px;">'+
              '<div class="row g-0">'+
                '<div class="col-md-4">'+
                  '<h5 class="card-author">'+authors[i+1]+'</h5>'+
                '</div>'+
                '<div class="col-md-8">'+
                  '<div class="card-body">'+
                    '<h5 id="card-title-inline" class="card-title">'+title[i+1]+'</h5>'+
                    '<i id="card-icon-inline'+(i+1)+'" class="fas fa-trash"></i>'+
                    '<p class="card-text" >'+body[i+1]+'</p>'+
                    '<div align="right"><i id="card-dot-icon-inline'+(i+1)+'"'+' class="fas fa-ellipsis-h"></i></div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
        '</div>'+
        '<div class="col">'+
        '</div>'+
     '</div>'+
     '</div>';

    }
}


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

for (var i=0;i<authors.length;i++) {
  document.getElementById('card-icon-inline'+i.toString()).addEventListener("click", function(event){
    alert('delete pressed');
    });
}

for (var i=0;i<authors.length;i++) {
  document.getElementById('card-dot-icon-inline'+i.toString()).addEventListener("click", function(event){
    alert('dot pressed');
    });
}


