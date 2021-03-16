
    // MIXITUP
    var mixer = mixitup('.grid-portfolio-container');
    // SCROLLIFY 
    
    $(function() {
          $.scrollify({
            section : ".scrollify",
            setHeights: false,
            updateHash: false,
          });
        });
    // HUMBURGER MENU
    function openMenu() {
        document.getElementById('navBar').style.height = "100%";
    }
    function closeMenu() {
        document.getElementById('navBar').style.height = "0";
    }
   
    //SMOOTH SCROLL
    
    $(function(){
        $('.menu-item a, .down a').on('click',function(){
            $('html, body').animate({
                scrollTop: $($.attr(this,'href')).offset().top
            },1200);
            return false;
        });
    });