$(document).ready(function(){
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript'; // Any API or URL where you want to get News

    $.getJSON(url,function(data){
        var current_news = '';
        var news = data.hits;

        $('#read_news').on('click',function(){
          current_news = news[Math.floor(Math.random() * news.length)];
          $('#newsbody').html('<a target="_BLANK" href="' + current_news.url +' ">' + current_news.title + '</a>');
          $('#author_name').html('@'+current_news.author);

          
          $('#read_news').html('Show me One More News');
        });
    });
});
