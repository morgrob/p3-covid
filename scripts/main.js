var drag1 = document.getElementById("dragtarget1");
var drop1 = document.getElementById("droparea1");

drag1.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
});

drop1.addEventListener("dragover", function(event) {
  event.preventDefault();
});

drop1.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
});

document.getElementById("droparea1").ondrop = function() {
    setTimeout(() => { location.href = "#second" }, 350)
};



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


google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawWorldChart);

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

        var options = {
          title: 'Total Worldwide COVID-19 Cases and Deaths',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart1'));

        chart.draw(data, options);
      }

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

var modal = document.getElementById("source-content");
var button = document.getElementById("info");

button.addEventListener("click", function(event) {
    console.log(modal.style.display)
    if (modal.style.display == "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
    },
    false
);

button.addEventListener('click', function() {
    const icon = this.querySelector('i');
    const text = this.querySelector('span');
  
    if (icon.classList.contains('fa-info-circle')) {
        icon.classList.remove('fa-info-circle');
        icon.classList.add('fa-times-circle');
    } else {
        icon.classList.remove('fa-times-circle');
        icon.classList.add('fa-info-circle');
    }
  });
