
var SlideContentSwitcher = function() {
      
    this.prev = function() {

        var current = $('.slide.current .contentSwitcher .current');
        var index = $(current).index();
        var prev = $('.slide.current .contentSwitcher .switchable:eq('+(index-1)+')');

        if( $(prev).length > 0 ) {
            $(current).fadeOut('fast',function() {
                $(prev).fadeIn('fast',function() {
                    $(current).removeClass('current');
                    $(prev).addClass('current');
                });
            });
        }

    };

    this.next = function() {

        var contentSwitcher = $('.slide.current .contentSwitcher');

        // If it's hidden initially then just show it for the first time
        if( $(contentSwitcher).hasClass('hidden') ) {

            $(contentSwitcher).fadeIn(function() {
                $(contentSwitcher).removeClass('hidden');
            });

        } else {

          var current = $('.slide.current .contentSwitcher .current');
          var index = $(current).index();
          var next = $('.slide.current .contentSwitcher .switchable:eq('+(index+1)+')');
            
          if( $(next).length > 0 ) {
              $(current).fadeOut('fast',function() {
                  $(next).fadeIn('fast',function() {
                      $(current).removeClass('current');
                      $(next).fadeIn().addClass('current');
                  });
              });
          }

        }

    };
      
    this.handleKeys = function(e) {

        if (/^(input|textarea)$/i.test(e.target.nodeName)) return;

        switch (e.keyCode) {
            case 38: // up arrow
                this.prev(); break;
            case 40: // down arrow
                this.next(); break;
        }

    };

    var _this = this;
    document.addEventListener('keydown', function(e) { _this.handleKeys(e); }, false);

}

$(function() {
  var contentSwitcher = new SlideContentSwitcher();
});
