window.API = (function() {
  var key = '7ec33b65e6d70b7984f9af387e80fb63';
  var now_playing = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + key;
  var search = 'https://api.themoviedb.org/3/search/movie?api_key=' + key;
  var auth = {api_key: key}; 

  var getLatest = function(callback) {
    $.get(now_playing,callback);
  };

  var getSearch = function(callback) {
    $.get(search,callback);
  }

  return {
    getLatestMovies: getLatest,
    getLatestSearch: getSearch,
    api: api,
    key: key
  }
})()