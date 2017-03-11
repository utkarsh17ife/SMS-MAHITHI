
(function(){
// Get the modal
var modal = document.getElementById('myModalpopUp');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('showpopUp');
var modalImg = document.getElementById("img01popUp");
var captionText = document.getElementById("captionpopUp");
img.onmouseover = function(){
    modal.style.display = "block";
    modalImg.src = "https://xmindshare.s3.amazonaws.com/preview/html-tag-elements-euuke-1344775276192.jpg";
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closepopUp")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
})()
