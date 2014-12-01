window.API = (function() {
  var key = '7ec33b65e6d70b7984f9af387e80fb63';
  var api = 'https://api.themoviedb.org/3/';
  var now_playing = api + 'movie/now_playing?api_key=' + key;
  var search = api + 'search/movie?api_key=' + key + '&query=';
  var auth = {api_key: key}; 

  var getLatest = function(callback) {
    $.get(now_playing,callback);
  };

  var getSearch = function(query,callback) {
    $.get(search+query,callback);
  }

  return {
    getLatestMovies: getLatest,
    getLatestSearch: getSearch,
    api: api,
    key: key
  }
})()