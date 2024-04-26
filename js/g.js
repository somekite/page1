var g_url = "https://togint.com";

var params = new URLSearchParams(window.location.search);

  if(params.has('g')) {
      var gid = params.get('g');
      document.getElementById('f1').src= g_url + '/g/' + gid;
  }
