var drag = document.getElementById("dragtarget1");
var drop = document.getElementById("droparea1");

/* Events fired on the drag target */

drag.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
});

drag.addEventListener("drag", function(event) {
  document.getElementById("demo").innerHTML = "The p element is being dragged.";
});


/* Events fired on the drop target */
drop.addEventListener("dragover", function(event) {
  event.preventDefault();
  document.getElementById("demo").innerHTML = "The p element is OVER the droptarget.";
  event.target.style.border = "4px dotted purple";
});

drop.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "The p element was dropped.";
});

document.getElementById("droparea1").ondrop = function() {
    location.href= "#second";
};