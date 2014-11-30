$.get('https://api.themoviedb.org/3/movie/now_playing?api_key=7ec33b65e6d70b7984f9af387e80fb63',function(data) {
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

          $.get('https://api.themoviedb.org/3/search/movie?api_key=7ec33b65e6d70b7984f9af387e80fb63&query='+res,function(data) {
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

  $.get('https://api.themoviedb.org/3/movie/now_playing?api_key=7ec33b65e6d70b7984f9af387e80fb63',function(data) {
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
  
  // $('.main').children('.wholeThing').append($(this).parent().next().contents());
});

$('.main').on('click','.av',function() {
  var obj = {};
  $.each($(this).parent().siblings().children(),function(index,value) {
     if (value.innerHTML.length <= 3) {
     
      obj.avg = value.innerHTML;
       //we got the numbers for avg.
      /*value.innerHTML.sort(function(a,b) {
        if (a>b) {
          return 1;
        }
        if (b < a) {
          return -1;
        }
        return 0;
      

      })
      console.log(value.innerHTML);*/
     }
  
  });
  console.log(obj); 
  console.log()
});
