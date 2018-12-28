

function search()
{
    let usrSearch = $("#siteSearch").val();
    console.log(usrSearch);

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+ usrSearch +"&api_key=UGaHBz7ShEXQrdI05caBOm29kmO3402T&limit=5");
    xhr.done(function(data) {

    let imageSrc = data.data[0].images.original.url;

    let x = "";
    for (let items of data.data) {
        console.log(items.images.original.url); 

        x += `<img id="myImg" src = "${items.images.original.url}" width = "107" height= "98"> \n`;
        console.log(x);

        //document.querySelector(".showImg").innerHTML =  x;

      }
      
document.querySelector(".showImg").innerHTML =  x;
    
});
}





