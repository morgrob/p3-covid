var drag1 = document.getElementById("dragtarget1");
var drop1 = document.getElementById("droparea1");

/* Events fired on the drag target */

drag1.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
});

// drag.addEventListener("drag", function(event) {
//   document.getElementById("demo").innerHTML = "The p element is being dragged.";
// });


/* Events fired on the drop target */
drop1.addEventListener("dragover", function(event) {
  event.preventDefault();
//   document.getElementById("demo").innerHTML = "The p element is OVER the droptarget.";
//   event.target.style.border = "4px dotted purple";
});

drop1.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
//   document.getElementById("demo").innerHTML = "The p element was dropped.";
});

document.getElementById("droparea1").ondrop = function() {
    setTimeout(() => { location.href = "#second" }, 250)
};




var drag2 = document.getElementById("dragtarget2");
var drop2 = document.getElementById("droparea2");

/* Events fired on the drag target */

drag2.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
});

// drag.addEventListener("drag", function(event) {
//   document.getElementById("demo").innerHTML = "The p element is being dragged.";
// });


/* Events fired on the drop target */
drop2.addEventListener("dragover", function(event) {
  event.preventDefault();
//   document.getElementById("demo").innerHTML = "The p element is OVER the droptarget.";
//   event.target.style.border = "4px dotted purple";
});

drop2.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
//   document.getElementById("demo").innerHTML = "The p element was dropped.";
});

document.getElementById("droparea2").ondrop = function() {
    document.getElementById("virus-cluster").style.display = 'none';
    setTimeout(() => { location.href = "#third" }, 250)
    // location.href= "#third";
};



var drag3 = document.getElementById("dragtarget3");
var drop3 = document.getElementById("droparea3");

/* Events fired on the drag target */

drag3.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
});

// drag.addEventListener("drag", function(event) {
//   document.getElementById("demo").innerHTML = "The p element is being dragged.";
// });


/* Events fired on the drop target */
drop3.addEventListener("dragover", function(event) {
  event.preventDefault();
//   document.getElementById("demo").innerHTML = "The p element is OVER the droptarget.";
//   event.target.style.border = "4px dotted purple";
});

drop3.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
//   document.getElementById("demo").innerHTML = "The p element was dropped.";
});

document.getElementById("droparea3").ondrop = function() {
    setTimeout(() => { location.href = "#fourth" }, 250)
};


var drag4 = document.getElementById("dragtarget4");
var drop4 = document.getElementById("droparea4");

/* Events fired on the drag target */

drag4.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
});

// drag.addEventListener("drag", function(event) {
//   document.getElementById("demo").innerHTML = "The p element is being dragged.";
// });


/* Events fired on the drop target */
drop4.addEventListener("dragover", function(event) {
  event.preventDefault();
//   document.getElementById("demo").innerHTML = "The p element is OVER the droptarget.";
//   event.target.style.border = "4px dotted purple";
});

drop4.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
//   document.getElementById("demo").innerHTML = "The p element was dropped.";
});

document.getElementById("droparea4").ondrop = function() {
    setTimeout(() => { location.href = "#fifth" }, 250)
};



