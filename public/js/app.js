(function($) {

	'use strict';
      $(document).ready(function() {

        function msToTime(s) {
          var ms = s % 1000;
          s = (s - ms) / 1000;
          var secs = s % 60;
          s = (s - secs) / 60;
          var mins = s % 60;
          var hrs = (s - mins) / 60;

          return hrs + ':' + mins + ':' + secs + '.' + ms;
        }

        $(".timer-time").each(function(index, element) {
          var $this = $(element);
          $this.text(msToTime($this.text()));
        });

        $("#app-trigger").click(function() {
          if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
            window.location = "stacktimer://add.timer?{{encoded_url}}"
          } else {
            alert("Sorry, StackTimer doesn't exist on your platform.");
            window.location = "http://stacktimer.com";
          }
        });

      });
})(jQuery);
