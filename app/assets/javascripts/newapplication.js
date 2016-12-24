
    $(document).ready(function () {
      $('#simple-menu').sidr({
        timing: 'ease-in-out',
        speed: 200,
        displace: false
      });
      $('.icon-close').click(function() {
          $.sidr('close');
      });
    });

    $( window ).resize(function () {
      $.sidr('close', 'sidr');
    });

