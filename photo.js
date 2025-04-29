var fullimgbox =document.getElementById("fullimgbox")
var fullimg=document.getElementById("fullimg")

function openn(src){
    console.log("Opening image");
    fullimg.src=src
    fullimgbox.style.display="flex"

}
function closee(){
    fullimgbox.style.display="none"
}