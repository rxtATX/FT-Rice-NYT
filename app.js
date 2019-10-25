$(document).ready(function() {

    
    $("#searchbutton").on("click", function(event) {
      event.preventDefault();
      var searchItem = $("#searchItem");
      var searchInput = searchItem.val();
      var numRec = $("#numRec");
      var limit = numRec.val();
      var startYear = $("#startYear");
      var beginUserInput = startYear.val();
      var endYear = $("#endYear");
      var endUserInput = endYear.val();
      
      var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
      var apiKey = "IGVkU83BPeehRdsv2VOwreMiqfAniPcA"
        var beginDate = `begin_date=${beginUserInput}0101`;
        var endDate = `end_date=${endUserInput}1231`;
        var searchTerm = `q=${searchInput}`;
        var fullUrl;
        
        if (searchInput) {
          fullUrl = queryUrl + apiKey + "&" + searchTerm;
            if (beginUserInput) {
              
                fullUrl = queryUrl + apiKey + "&" + searchTerm + "&" + beginDate;
                if (endUserInput) {
                  fullUrl = queryUrl + apiKey + "&" + searchTerm + "&" + beginDate + "&" + endDate;
                }
            } else if (endUserInput) {
              fullUrl = queryUrl + apiKey + "&" + searchTerm + "&" + endDate;
              
            }
          };
        console.log(fullUrl);

        $.ajax({
          url: fullUrl,
          method: "GET"
          
        }).then(function(data) {
          console.log(data);
          for (var i = 0; i < limit; i++) {
                var headline = data.response.docs[i].headline.main;
                var byline = data.response.docs[i].byline.original;
                var articleUrl = data.response.docs[i].web_url;
                console.log(headline, byline, articleUrl);

              }
              
              
            });
            
          });
        });