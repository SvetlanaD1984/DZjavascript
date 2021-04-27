function loadScript(src, callback) {
    let el = document.createElement('script');
    el.src = src;
    el.type = 'text/javascript';
    el.onload = callback;

    document.body.appenChild(el);
}


loadScript('/src/datecalc.js', function(script) {

  loadScript('/src/timer.js', function(script) {

      })

});

