
var SlideContentAdder = function() {
      
    this.next = function() {

        var contentAdder = $('.slide.current .contentAdder');

        // If it's hidden initially then show the first one
        if( $(contentAdder).hasClass('hidden') ) {

            $(contentAdder).fadeIn(function() {
                $(contentAdder).removeClass('hidden');
            });

        } else {

          var current = $('.slide.current .contentAdder .current');
          var index = $(current).index();
          var next = $('.slide.current .contentAdder .addable:eq('+(index+1)+')');
            
          if( $(next).length > 0 ) {
              $(next).fadeIn(function() {
                  $(current).removeClass('current');
                  $(next).fadeIn().addClass('current').addClass('shown');
              });
          }

        }

    };
      
    this.handleKeys = function(e) {

        if (/^(input|textarea)$/i.test(e.target.nodeName)) return;

        switch (e.keyCode) {
            case 40: // down arrow
                this.next(); break;
        }

    };

    var _this = this;
    document.addEventListener('keydown', function(e) { _this.handleKeys(e); }, false);

}

$(function() {
  var contentAdder = new SlideContentAdder();
});
