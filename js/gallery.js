/* gallery.js */

function upDate(previewPic){
    console.log("Event triggered: upDate");
    console.log("Source: " + previewPic.src);
    console.log("Alt: " + previewPic.alt);

    // Change background image
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";

    // Change text
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
    console.log("Event triggered: unDo");

    // Reset background image
    document.getElementById("image").style.backgroundImage = "url('')";

    // Reset text
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

// Add tabindex attributes dynamically on page load
function addTabFocus(){
    console.log("Event triggered: addTabFocus");

    let previews = document.querySelectorAll(".preview");
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute("tabindex", "0");
    }
}
