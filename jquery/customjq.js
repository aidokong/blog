$(document).ready(function() {
    $('.logo__main').hover(
      function() { 
        $('.logo__primary').hide();
        $('.logo__secondary').show();
      },
      function() { 
        $('.logo__primary').show();
        $('.logo__secondary').hide();
      }
    );

    $('.read-more').click(function(e){
        e.preventDefault();
        var $this = $(this);
        var $content = $this.next('.more-content');
        $content.slideToggle(400, function(){
            if($content.is(':visible')){
                $this.text('Read Less');
            } else {
                $this.text('Read More');
            }
        });
    });

   
});