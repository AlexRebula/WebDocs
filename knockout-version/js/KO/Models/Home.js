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
            chapters: [
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
                    '<div class="alert alert-success" role="alert">'+
                        'Using WebDocs is really easy. Basically all you need to do is to download the WebDocs source from my '+
                        '<a href="https://github.com/AlexRebula/WebDocs" target="_blank">WebDocs Github repository</a> and edit the <kbd>Home.js</kbd> file. ' +
                        'In just a few words this is it.' +
                    '</div>' +
                    '<p>' +
                        'You will find the file in the <kbd>/js/KO/Models</kbd> folder. There you\'ll see ' +
                        'a JSON data structure named <code>Home</code> representing the whole content of the final documentation. ' +
                        'This is the model that KnockoutJS binds to HTML. Using KnockoutJS templates the chapters and subchapters ' +
                        'are dinamicaly created. ' +
                    '</p>' +
                    '<p>' +
                        'The Home data model consists of two properties: <b>intro</b> and <b>chapters</b>. Let\'s examine both '+
                        'of them and see how to use them.' +
                    '</p>'
                    ,
                    
                items: [
                    {
                        title: "<code>intro</code> property",
                        classes: "",
                        id: "intro",
                        href: "#intro",
                        content: '' +
                            '<p>' +
                                'The <code>intro</code> property defines what you want to show in the introduction of your ' +
                                'documentation. We are of course talking about the first thing the user or the reader sees ' +
                                'when he or she first opens your documentation. The properties for which you need to provide ' +
                                'the values are: <b>title</b>, <b>subtitle</b>, <b>author</b> and <b>createdOn</b>.' +
                            '</p>'
                    },
                    {
                        title: "<code>chapters</code> property ",
                        classes: "",
                        id: "Chapters",
                        href: "#Chapters",
                        content: '' +
                            '<p>' +
                                'Each chapter has two obvious properties which are <b>title</b> and <b>content</b>. There is not much ' +
                                'that we need to say about the <code>title</code> property, since it is pretty much self-explanatory. ' +
                                'The <code>content</code> property on the other hand can be used and interpreted in different ways. ' +
                                'You can in theory insert any HTML structure in there, however in order for you to make the best use of ' +
                                'WebDocs it is suggested you follow my instructions below.' +
                            '</p>' +

                            '<p>' +
                                'Then we have two navigation properties: <b>id</b> and <b>href</b>. It is important you always use ' +
                                'unique values for those last two properties and you should never forget prefix the <code>href</code> ' +
                                'property with the <code>#</code> sign. ' +
                            '</p>' +

                            '<p>'+
                                'So, let\'s try to better explain the four properties above.' +
                            '</p>' +

                            '<h3><code>title</code> and <code>content</code> properties</h3>' +

                            '<p>' +
                                'As already mentioned in the introduction, the <code>title</code> property does not need to be explained. ' +
                                'Instead let\'s rather focus on the <code>content</code> propety, because it can be subject of different ' + 
                                'interpretation. ' +
                            '</p>' +

                            '<p>' +
                                'When creating this web theme I thought that having multi levels of documentation can become difficult to '+
                                'follow, so I made a web theme that encourages this idea of a two level or the most three-level documentation ' +
                                'only. However since this is not nevessarily what everyone agrees with and since it may sometimes be hard to ' +
                                'have 4 levels the most, you can edit the <code>content</code> property in such a manner that allows ' +
                                'more levels of sub-chapters. The navigation will always go as far as two levels, however one chapter ' +
                                'can have up to 5 levels. More than that is not even advised.' +
                            '</p>' +

                            '<p>' +
                                'Write paragraphs using <code>&lt;p&gt;</code> tags and divide chapters in the <code>content</code> property ' +
                                'with title tags, <b>ALWAYS starting with <code>&lt;h3&gt;</code> and continue with <code>&lt;h4&gt;</code> and <code>&lt;h5&gt;</code></b>.' +
                                'If you are still confused, see the text you are reading in the source code and you\'ll imediatelly get the idea.' +
                            '<p>' +

                            '<p>' +
                                '' +
                            '<p>' +

                            '<h3><code>id</code> and <code>href</code> properties</h3>' +

                            '<p>' +
                                'As said, always use ' +
                                'unique values for those two properties and you should never forget to prefix the <code>href</code> ' +
                                'property with the <code>#</code> sign. For example if the <code>id</code> property has the value ' +
                                '<code>Chapters</code> then the <code>href</code> property should have the <code>#Chapters</code> ' +
                                'value. This is a feature that is very important for the spy-scroll navigation to work.' +
                            '</p>'

                    },
                    {
                        title: "CSS and Components",
                        classes: "",
                        id: "cssAndComponents",
                        href: "#cssAndComponents",
                        content: '' +
                            '<p>' +
                                'Since the WebDocs theme uses the <a href="http://getbootstrap.com/" target="_blank">Twitter Bootstrap</a> framework you basically use ANYTHING that you can find you their ' +
                                'great documentation which was in fact the main inspiration for creating the WebDocs theme.' + 
                            '</p>'
                    }
                ]               
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
                        '</br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>' +
                    '</p>',

                items: []               
            }]
        };

    })(Models = WebDocs.Models || (WebDocs.Models = {}));
})(WebDocs || (WebDocs = {}));