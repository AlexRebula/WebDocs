var WebDocs;
(function (WebDocs) {
    var ViewModels;
    (function (ViewModels) {
        var Home;
        (function (Home) {
            Home.ActiveDataModel = ko.observable({});
            
            function Init(model) {
                
                Home.ActiveDataModel(ko.mapping.fromJS(model)); 

                // Calling document ready event handler at this point is not optimal, but it does its job.
                // We do this because above we call the initModel function that renders KO data.
                // So when KO finishes rendering, only then can we initialize other jQuery plugins.
                $(document).ready(function () {

                    var headerPadding = parseInt($("section").css("padding-top"), 10) + 50;
            
                    var uglyFix = parseInt($('header').css('margin-top'),10) - 202;  
                    var headerHeight = $(window).height();

                   // var startOffsetTop = $(".buy-book-wrapper").offset().top;

                    $(window).scroll(function(){
                        
                        var currentOffsetTop = $("body").offset().top;

                        if($(window).scrollTop() >= $(".scrollspy").offset().top) {
                            $("nav").addClass("affix");
                        } else {
                            $("nav").removeClass("affix");
                        }   
                        
                    });

                });
            }

            // reveal Init function
            Home.Init = Init;

        })(Home = ViewModels.Home || (ViewModels.Home = {}));
    })(ViewModels = WebDocs.ViewModels || (WebDocs.ViewModels = {}));
})(WebDocs || (WebDocs = {}));
