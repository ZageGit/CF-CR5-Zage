let movies = JSON.parse(data);

function printContent(content)
{
    $("append").text("");
for (let i = 0; i < content.length; i++) {
  $("#append").append(`<div class="col-md-6">
  <div class="card text-white bg-dark flex-md-row mb-4 shadow-sm h-md-250">
     <div class="card-body d-flex flex-column align-items-stretch border-solid-red">
        <strong class="d-inline-block mb-2 text-white">${content[i].name}</strong>
        <p class="card-text mb-auto">${content[i].description}</p>
        <div class="d-flex flex-row justify-content-between align-items-center">
        <button name="${[i]}" type="button" class="btn btn-primary"><i style="font-size:24px" class="fa">&#xf087;</i></button> 
        <span id="likecount${[i]}" class="h4 m-0 p-2 bg-primary rounded ">${content[i].likes}</span>
      </div>
             
     </div>
     <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src=${content[i].image} style="width: 200px; height: 250px;">
  </div>
</div>`);
}
};
printContent(movies);

sortKeyValueArray = (arr, key) => {
    return arr.sort((a, b) => {
        return a[key] - b[key];
    });
};



$(document).ready(function(){
$(".btn").on('click', function(){
    let index = $(this).attr("name");
    movies[index].likes++;
    $("#likecount"+index).text(movies[index].likes);
});

$("#sort").on('click', function(){

    sortKeyValueArray(movies, "likes");

    printContent(movies);

});


sortKeyValueArray(movies, "likes");

})


