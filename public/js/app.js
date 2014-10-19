(function($) {

	'use strict';
      $(document).ready(function() {
        $("#app-trigger").click(function() {
          if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
            window.location = "stacktimer://add.timer?{{encoded_url}}"
          } else {
            window.location = "http://stacktimer.com";
          }
        });

      });
})(jQuery);
