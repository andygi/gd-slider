#sliderGekode v 1

it's simple horizzontal slider where you put inside every kind of elements you want.
I ever allway spend a lot of time to found a slider where can put inside not only images but div and videos or more. But when I have found it difficult to used it and integrate with my html code because they usually use a jquery to create elements like arrows etc.

My aim is display and use the code into the page without add the new from jquery, with real division between design (html, images and css) and code (jquery).

In that way it easy and quickly developing in html.

##HOW TO USE

in slider.html there are three examples with different options and sizes.

###call the plugin:

    <script type="text/javascript" src="js/jquery-1.9.0.min.js"></script>
    <script type="text/javascript" src="js/sliderGd.js"></script>
    <script>
        $(document).ready( function() {
            $('#NAME_SLIDER').sliderGekode({
                nItemsMove : 4  //how many items move per click
            });
        });
    </script>

###You have to use the same structure for all sliders with different id:

    <div id="NAME_SLIDER">
        <div class="navbar">
            <div class="arrow lft"><</div>
            <div class="arrow rgt">></div>
        </div>
        <div class="visual">
            <div class="items">
                <!-- insert here your code -->
              
                <!-- end your code -->
            </div>
        </div>
    </div>
