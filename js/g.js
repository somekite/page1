var g_url = "https://google.com";

var params = new URLSearchParams(window.location.search);

  if(params.has('g')) {
      var gid = params.get('g');
      document.getElementById('f1').src= g_url + '/?g=' + gid;
  }
