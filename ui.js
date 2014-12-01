(function() {
  

  API.getLatestMovies(function(data) {
        var context = [];
        data.results.forEach(function(x) {
          var ans = {};
          
          ans.title = x.title;
          ans.date = x.release_date;
          ans.average = x.vote_average;
          ans.image = 'https://image.tmdb.org/t/p/w185' + x.poster_path;
          ans.link = "https://www.themoviedb.org/movie/" + x.id +"-" + x.title.split(" ").join("-") + x.title;
          context.push(ans); 
        }); 

        var source   = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var html    = template({movies:context});
        $('.main').append(html);
         $('.img').hide();
         $('.favs').hide();
        
  });
  $('.main').on('click','.title',function(e) {
          $(this).children().next().toggle();    
  });
  $('.main').on('click','#searchButton', function() {
          var res = document.getElementById('searchBox').value;
          document.getElementById('searchBox').value = ""; 

          API.getLatestSearch(res,function(data) {
                  $('.entry').html('');
                  var context = [];
                  data.results.forEach(function(x) {
                    var ans = {};
                    ans.title = x.title;
                    ans.date = x.release_date;
                    ans.average = x.vote_average;
                    ans.image = 'https://image.tmdb.org/t/p/w185' + x.poster_path;
                    ans.link = "https://www.themoviedb.org/movie/" + x.id +"-" + x.title.split(" ").join("-") + x.title;
                    context.push(ans); 
                  }); 
                 
                 var source   = $("#entry-template").html();
                 var template = Handlebars.compile(source);
                 var html    = template({movies:context});
                 $('.main').append(html);
                 $('.img').hide();
                 $('.favs').show();
                  
          });       
  });
  $('.main').on('click','.favs',function() {
    // console.log(this.parentElement.parentElement.innerHTML);
    $('.entry').html('');

    API.getLatestMovies(function(data) {
          var context = [];
          console.log(data);
          data.results.forEach(function(x) {
            var ans = {};
            
            ans.title = x.title;
            ans.date = x.release_date;
            ans.average = x.vote_average;
            ans.image = 'https://image.tmdb.org/t/p/w185' + x.poster_path;
            ans.link = "https://www.themoviedb.org/movie/" + x.id +"-" + x.title.split(" ").join("-") + x.title;
            context.push(ans); 
          }); 

          var source   = $("#entry-template").html();
          var template = Handlebars.compile(source);
          var html    = template({movies:context});
          $('.main').append(html);
          $('.img').hide();
          $('.favs').hide();
          
    }); 
    console.log($(this));
    
    $('.main').children(':last-child').append($(this).parent().parent().contents());
  
    
  });  
})()

















