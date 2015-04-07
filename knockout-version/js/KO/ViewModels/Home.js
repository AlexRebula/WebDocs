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
