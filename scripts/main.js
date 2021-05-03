// ------------------------------------------------ DRAG FUNCTIONS ------------------------------------------------- 

// These establish variables for the item to be dragged (denoted as "draggable='true'" in HTML) and the invisible 
// designated area where the item is intended to be dropped
var drag1 = document.getElementById("dragtarget1");
var drop1 = document.getElementById("droparea1");


// Listens for when the draggable item starts to be dragged and associates its id name with the drag event.
drag1.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("DraggedItemID", event.target.id);
});

// Prevents the default dragover behavior so that we can implement a specific behavior
drop1.addEventListener("dragover", function(event) {
  event.preventDefault();
});

// First, prevents the default drop behavior so that we can use our own.
// Second, appends the draggable item to the drop area as a child of that area, which makes the draggable item stay where it is placed.
drop1.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("DraggedItemID");
  event.target.appendChild(document.getElementById(data));
});

// This block of code tells the page to move to the next slide when the draggable item is dropped in the designated 
// drop area.
// The "setTimeout()" adds a delay to the location change so that the user can view what happens after the drag for 
// a couple of seconds
document.getElementById("droparea1").ondrop = function() {
    setTimeout(() => { location.href = "#second" }, 350)
};


// Same drag event for the second slide
var drag2 = document.getElementById("dragtarget2");
var drop2 = document.getElementById("droparea2");

drag2.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
});

drop2.addEventListener("dragover", function(event) {
  event.preventDefault();
});

drop2.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
});

document.getElementById("droparea2").ondrop = function() {
    document.getElementById("virus-cluster").style.display = 'none';
    document.getElementById("soap-cluster").style.visibility = 'visible';
    setTimeout(() => { location.href = "#third" }, 550)
};


// Same drag event for the third slide
var drag3 = document.getElementById("dragtarget3");
var drop3 = document.getElementById("droparea3");

drag3.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
});

drop3.addEventListener("dragover", function(event) {
  event.preventDefault();
});

drop3.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
});

document.getElementById("droparea3").ondrop = function() {
    setTimeout(() => { location.href = "#fourth" }, 350)
};


// Same drag event for the fourth slide
var drag4 = document.getElementById("dragtarget4");
var drop4 = document.getElementById("droparea4");

drag4.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
});

drop4.addEventListener("dragover", function(event) {
  event.preventDefault();
});

drop4.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
});

document.getElementById("droparea4").ondrop = function() {
    setTimeout(() => { location.href = "#fifth" }, 350)
};



// ----------------------------------------------- GOOGLE LINE GRAPHS ------------------------------------------------ 

// Creates a new chart using Google Charts.
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawWorldChart);

    // Defines a variable to hold all of the data that will be in my line graph where the first column are x-axis labels, the second column 
    // is for the blue line in the graph, and the third is for the red line in the graph. The y-axis labels adjust automatically according to 
    // the data.
      function drawWorldChart() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Total Cases', 'Total Deaths'],
          ['5/20',  5758223,      364029],
          ['6/20',  9900633,       499202],
          ['7/20',  16816035,      666498],
          ['8/20',  24489346,      837696],
          ['9/20',  32902940,      1011864],
          ['10/20',  44802066,      1194156],
          ['11/20',  61689659,      1467152],
          ['12/20',  81542307,      1817546],
          ['1/21',  100666581,      2227351],
          ['2/21',  111451628,      2530122],
          ['3/21',  125980720,      2814814],
          ['4/21',  145871034,      3140791]
        ]);

        // Defines another variable to hold all of the graph labels including the main title and where the legend will appear. "curveType: 'function'"
        // makes the line graph a curved line instead of one with defined turns according to Google Charts.
        var options = {
          title: 'Total Worldwide COVID-19 Cases and Deaths',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        // Creates a new chart and assigns it to the id "curve_chart1" in my HTML.
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart1'));

        // Executes the chart using the given data and defined options.
        chart.draw(data, options);
      }

// Same method for making the second line graph
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawUsaChart);

      function drawUsaChart() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Total Cases', 'Total Deaths'],
          ['5/20',  1684406,      104356],
          ['6/20',  2554242,       128028],
          ['7/20',  4402964,      153268],
          ['8/20',  5843612,      183499],
          ['9/20',  7020920,      206859],
          ['10/20',  8894934,      230548],
          ['11/20',  13273176,      268045],
          ['12/20',  19622350,      345737],
          ['1/21',  25745457,      441324],
          ['2/21',  28092578,      513091],
          ['3/21',  29908658,      552072],
          ['4/21',  31640226,      574156]
        ]);

        var options = {
          title: 'Total USA COVID-19 Cases and Deaths',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));

        chart.draw(data, options);
      }


// ------------------------------------------------ SLIDE 5 MODAL DISPLAY ------------------------------------------------- //

// Defines variables that are assigned to the source content to be hidden/shown and the info button that will show or hide said content.
var modal = document.getElementById("source-content");
var button = document.getElementById("info");

// Adds an event listener function for when the user performs a click action on the button. The function says that if the modal is showing
// and the user clicks the button, hide the modal and if the modal is hidden and the user clicks the button again, show the modal.
button.addEventListener("click", function(event) {
    console.log(modal.style.display)
    if (modal.style.display == "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
    },
);


// ------------------------------------------------ SLIDE 5 MODAL INFO ICON SWAP ------------------------------------------------- //

// Function for swapping the icon of the modal button when clicked. 
// First line of the function establishes a constant of reference type 'icon'
button.addEventListener('click', function() {
    const icon = this.querySelector('i');
  
    // If the class name of the icon contains fa-info-circle (the name of the icon from FontAwesome), change it to fa-times-circle when the 
    // user clicks it. 
    if (icon.classList.contains('fa-info-circle')) {
        icon.classList.remove('fa-info-circle');
        icon.classList.add('fa-times-circle');
    // If the class name of the icon is not fa-info-circle, remove the current name (which would be fa-times-circle since there are only two 
    // options) and make it fa-info-circle.
    } else {
        icon.classList.remove('fa-times-circle');
        icon.classList.add('fa-info-circle');
    }
  });
