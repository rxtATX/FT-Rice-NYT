$(document).ready(function() {

    
    $("#searchbutton").on("click", function(event) {
      event.preventDefault();
    console.log("I am search");
    var searchItem = $("#searchItem");
    var searchtext = searchItem.val();
    console.log(searchtext);
    var numRec = $("#numRec");
    var numtext = numRec.val();
    console.log(numtext);
    var startYear = $("#startYear");
    var starttext = startYear.val();
    console.log(starttext);
    var endYear = $("#endYear");
    var endtext = endYear.val();
    console.log(endtext);
    });

  });