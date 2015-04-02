var WebDocs;
(function(WebDocs) {
    var Models;
    (function(Models) {

        Models.Home = {
            intro: {
                title: 'Web Docs: KnockoutJS version',
                subtitle: 'A modern, responsive front-end theme for documentation, built using Twitter Bootstrap and KnockoutJS',
                author: 'Aleksander Rebula',
                createdOn: 'April 2, 2015'
            },
            sections: [
            {
                title: "Introduction",
                classes: "",
                id: "introduction",
                href: "#introduction",
                content: ''+
                    '<p>' +
                       '<kbd>WebDocs</kbd> is a <b>modern, responsive front-end theme for documentation</b>, built using <a href="http://getbootstrap.com/" target="_blank">Twitter Bootstrap</a>. This version '+
                       'uses <a href="http://knockoutjs.com/" target="_blank">KnockoutJS</a> for <b>two-way data binding</b> and has an easy-to-use <b>spy-scroll navigation</b>.' +
                    '<p>' +

                    '<p>' +
                        'It is very useful if you need to have your own well written, easy-to-read and navigate documentation on a website thus simply accessed using a web browser. It is perfect '+
                        'if you need to move it around by copy/pasting the files, not worrying about the back-end. Because <b>this theme uses only front-end technologies such as HTML, CSS and JavaScript</b>.' +
                    '</p>' +

                    '<div class="alert alert-info" role="alert">'+
                        '<b>DISCLAIMER!</b> This theme was originally intended for those that do understand at least the basics of JavaScript and do know how to edit ' +
                        'a JSON structure, so you might want to consider if it fits you before you start using it.' +
                    '</div>'
                    ,
                items: [
                    {
                        title: "Motivation For Creating WebDocs",
                        classes: "",
                        id: "motivation",
                        href: "#motivation",
                        content: ''+
                            '<p>' +
                                'There is no better feeling when a project is done and sent to production. However the work is not properly done until the documentation for that project is finished ' +
                                'as well. So what\'s left is to start writing and documenting, right? ' + 
                            '</p>' +

                            '<p>' +
                                'But when was the last time you saw a really well written and styled documentation at your company? ' +
                                'Is there any specific way of writing the documentation set or do you just open a text editor and start writing as you fit to be right? Do you choose your own layout or do you have any ' +
                                'layout prepared ahead just for you to re-use? Or, in case you are a code developer, is it enough to document your code directly in your code using comments? ' +
                                'Does the documentation have to be saved in a Word or Open Office document or does it have to be available on a website?' +
                            '</p>' +

                            '<p>' +
                                'Those are all questions I was asking myself many times before I started writing my documentation. <b>Then I saw the '+
                                '<a href="http://getbootstrap.com/getting-started/">Twitter Bootstrap</a> web documentation</b> and decided that whenever my hands will be free to choose any form of ' +
                                'documentation layout I\'ll simply go for the <b>web documentation</b> with a nice <b>spy-scroll functionality</b> and '+
                                '<a href="http://getbootstrap.com/components/" target="_blank">CSS components</a> that make reading much easier and interesting. ' +                                
                            '</p>' +

                            '<p>' +
                                'Then I decided to create a web theme that I will be able to re-use every time I need to document something. Of course I wanted to <b>avoid dealing with CSS, HTML and ' +
                                'JavaScript every time I need to write the content</b>, so that\'s where I thought KnockoutJS will come in handy with MVVM and two-way data binding. So as a result of this ' +
                                'I can now <b>simply focus on writing the content without even thinking about the layout</b>. With <kbd>WebDocs</kbd> I simply applied well known patterns for dividing concerns. ' +
                                'And I love it. Hopefully you will find it useful as well.' +
                            '</p>' +

                            '<div class="alert alert-info" role="alert">'+
                                '<b>DISCLAIMER!</b> I understand that this version of <kbd>WebDocs</kbd> might not be perfect for everyone, because in order to edit the text content you need to <b>directly edit the JSON object in '+
                                'a static file</b>. However I believe this can be extremely helpful to others developers like me, by having a static content file with a JSON object, containing the '+
                                'structure and text. This makes it easy to move around by simply copying and pasting the files. This way <b>the web browser is everything the user needs to read your documentation</b>. ' +
                                'No Word, no OpenOffice or any other text editor needs to be installed locally on your computer. ' +
                            '</div>'


                    },
                    {
                        title: "Who is it for",
                        classes: "",
                        id: "whoIsItFor",
                        href: "#whoIsItFor",
                        content: ''+
                            '<p>'+
                                'Everyone is welcome to use this theme anywhere, for free, because it is MIT licenced. The only thing I\'d kindly ask of you if you could reference me in your '+
                                'credits section. Of course you don\'t have to, but it would make me very happy. :) However I would still like to point out that this theme was originally meant for ' +
                                'web developers as myself thus for anyone with at least some basic HTML, JavaScript and CSS knowledge. Knowing those technologies is of course NOT a must, but ' +
                                'it will be a bit easier for you to jump straight into writing your own documentation.' +
                            '<p>' +

                            '<p>'+
                                'It is perfect for those that need to move the project around by copy/pasting the files, not worrying about the back-end. Because this theme uses only front-end '+
                                'technologies such as HTML, CSS and JavaScript.' +
                            '<p>'
                    }
                ]               
            },
            {
                title: "How to use it",
                classes: "",
                id: "howToUseIt",
                href: "#howToUseIt",
                content: ''+
                    '<div class="alert alert-info" role="alert">'+
                        'Sorry, writing this chapter is still in progress, however I can still give you a head\'s up. In the <kbd>/js/KO/Models/Home.js</kbd> file you will find the content. Edit, save ' +
                        'and refresh the documentation in your web browser to see  the changes.' + 
                    '</div>',
                    
                items: []               
            },
            {
                title: "Credits",
                classes: "",
                id: "credits",
                href: "#credits",
                content: ''+
                    '<p><kbd>WebDocs</kbd> would not exist in this form without other extremely talented individuals and great open source tools and projects available on Github. This chapter is dedicated to all of them.' +
                    'In case you see I forgot to include a missing name or product, please do not hesitate do contact me so I can fix that. I\'ll really appreciate that.<p>' +

                    '<p>' +
                            '<b>Twitter Bootstrap</b></br>' +
                            '<kbd>WebDocs</kbd> uses the <a href="">Twitter Bootstrap</a> HTML, CSS, and JS framework which makes this Web theme modern and responsive. When using <kbd>WebDocs</kbd> and writing your own documentation you '+
                            'can simply re-use every single CSS style or HTML component from the Twitter Bootstrap framework.' +
                        '</p>' +

                        '<p>' +
                            '<b>KnockoutJS</b></br>' +
                            'The <kbd>WebDocs</kbd> theme version you are currently viewing uses <a href="http://knockoutjs.com/" target="_blank">KnockoutJS</a> for two-way '+
                            'data binding which basicaly is the reason that makes this theme practical. It makes possible to simply edit a JSON data structure and voila! There is your fancy documentation.' +
                        '</p>' +                        

                        '<p>' +
                            '<b>Codrops</b></br>' +
                            'A great thank you goes to the Codrops team. <kbd>WebDocs</kbd>\' layout was inspired by one of their projects that shows how to create intro effects for '+
                            'articles. Here\'s their <a href="http://tympanus.net/Development/ArticleIntroEffects/" target="_blank">DEMO</a> and here the '+
                            '<a href="http://tympanus.net/codrops/2014/05/22/inspiration-for-article-intro-effects/" target="_blank">ARTICLE</a> ' +
                        '</p>',

                items: []               
            },
            {
                title: "Contact",
                classes: "",
                id: "contact",
                href: "#contact",
                content: ''+
                    '<p>' +
                        'I would love to hear from you in case you have any opinion, suggestion or anything that you\'d like to share with me.' +                        
                    '</p>' +

                    '<p>' +
                        'You can also <a href="https://github.com/AlexRebula/WebDocs" target="_blank">fork this project on Github</a>. ' +
                    '</p>' +

                    '<p>' +
                        'Find more about me on <a href="http://www.alexrebula.com" target="_blank">my official website</a> or <a href="https://twitter.com/alexrebula" target="_blank">follow me on Twitter</a>. ' +
                    '</p>',

                items: []               
            }]
        };

    })(Models = WebDocs.Models || (WebDocs.Models = {}));
})(WebDocs || (WebDocs = {}));