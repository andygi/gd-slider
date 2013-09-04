/* sliderGekode v 1.0
 * simple horizzontal slider
 * by Andrea (Andy) Greco / 2013
 * http://www.gekkode.co.uk
 *
 *licence under GDU
 */

(function($) {
    
    $.fn.sliderGekode = function(options) {

        var settings = $.extend({
                nItemsMove : 1 //how many items move per click
            }, options);
        
        
        this.each( function() {

            var slider = $(this).attr("id");
            var itemsNum = $("#"+slider+" .items").children("div").length + 1;
            var widthItem = $("#"+slider+" .items").children("div").outerWidth();
            var visualArea = widthItem*settings.nItemsMove;
            var posStatic = $("#"+slider+" .items").position();
            var widthVisual = $("#"+slider+" .visual").outerWidth();
            var nItems = Math.round(widthVisual/widthItem);

            //check if show or not the arrows
            //left
            if (posStatic.left == 0) {
                $("#"+slider+" .lft").css({display:"none"});
            }
            //right
            if (settings.nItemsMove == (itemsNum-1)) {
                $("#"+slider+" .rgt").css({display:"none"});
            }
            
            //create items loader
            $("#"+slider+" .items").css({width:(itemsNum*widthItem)});
            
            //move left
            $("#"+slider+" .lft").click(function(){
              var position = $("#"+slider+" .items").position();
              var delta = -(widthItem*(itemsNum-(nItems+1)));
              var deltaHide = -(widthItem*(itemsNum-(nItems)));
              var increase =  "+="+(visualArea)+"px";
              
              if (position.left < 0) {
                $("#"+slider+" .items").animate({"left": increase}, "slow");
                $("#"+slider+" .rgt").css({display:"block"});
              }
              
              if (position.left == -visualArea) {
                $("#"+slider+" .lft").css({display:"none"});
              }
              
            });
            
            //move right
            $("#"+slider+" .rgt").bind("click.sliderGekode", function(){
              var position = $("#"+slider+" .items").position();
              var delta = -(widthItem*(itemsNum-(nItems+1)));
              var deltaHide = -(widthItem*(itemsNum-(nItems+settings.nItemsMove+1)));
              var decrease =  "-="+(visualArea)+"px";
              
              if (position.left > delta) {
                $("#"+slider+" .items").animate({"left": decrease}, "slow");
              } else {
                
              }
              if (position.left <= deltaHide) {
                $("#"+slider+" .rgt").css({display:"none"});
              }
              if (position.left > -visualArea) {
                $("#"+slider+" .lft").css({display:"block"});
              }
            });
            
        });
    }
    
}(jQuery));