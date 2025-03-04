jQuery(document).ready(function ($) 
{
    var options = 
    {
        $AutoPlay: true,                                   
        $AutoPlaySteps: 1,                                  
        $AutoPlayInterval: 4000,                           
        $PauseOnHover: 1,                                   

        $ArrowKeyNavigation: true,                                  
        $SlideEasing: $JssorEasing$.$EaseOutQuint,          
        $SlideDuration: 1000,                               
        $MinDragOffsetToSlide: 20,                         
        $SlideSpacing: 0,                                   
        $DisplayPieces: 1,                                  
        $ParkingPosition: 0,                               
        $UISearchMode: 1,                                   
        $PlayOrientation: 1,                                
        $DragOrientation: 1,                               

        $ArrowNavigatorOptions:
        {                                                     
            $Class: $JssorArrowNavigator$,                  
            $ChanceToShow: 2,                              
            $AutoCenter: 2,                                 
            $Steps: 1,                                      
            $Scale: false                                   
        },

        $BulletNavigatorOptions: 
        {                                                
            $Class: $JssorBulletNavigator$,                      
            $ChanceToShow: 2,      
            $AutoCenter: 1,                                 
            $Steps: 1,                                      
            $Lanes: 1,                                      
            $SpacingX: 12,                                  
            $SpacingY: 4,                                  
            $Orientation: 1,                                
            $Scale: false
        }
    };

    //Make the element 'slider1_container' visible before initialize jssor slider.
    $("#slider1_container").css("display", "block");
    var jssor_slider1 = new $JssorSlider$("slider1_container", options);

    //responsive code begin
    function ScaleSlider() {
        var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
        if (parentWidth) {
            jssor_slider1.$ScaleWidth(parentWidth);
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});
