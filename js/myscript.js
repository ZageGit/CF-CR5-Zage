let movies = JSON.parse(data); //parse JSON data

// Loop for creating div for each object and displaying its data
for (let i = 0; i < movies.length; i++) {
  $("#append").append(`<div data-likes="${
    movies[i].likes
  }" class="col-12 col-lg-6"">
  <div class="card text-white bg-dark flex-md-row mb-4 shadow-sm h-md-250">
     <div class="card-body d-flex flex-column align-items-stretch border-solid-red">
        <strong class="d-inline-block mb-2 text-white">${
          movies[i].name
        }</strong>
        <p class="card-text mb-auto">${movies[i].description}</p>
        <div class="d-flex flex-row justify-content-between align-items-center">
        <button name="${[
          i,
        ]}" type="button" class="btn btn-primary"><i style="font-size:24px" class="fa">&#xf087;</i></button> 
        <span class="h4 m-0 p-2 bg-primary rounded ">${movies[i].likes}</span>
        </div>
             
     </div>
     <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src=${
       movies[i].image
     } style="width: 200px; height: 250px;">
  </div>
</div>`);
}

$(document).ready(function () {
  // On click like Function and displaying likes
  $(".btn").on("click", function () {
    let index = $(this).attr("name");
    movies[index].likes++;
    let par = $(this).parent();
    par.find("span").text(movies[index].likes);
    let test = $(par.parent().parent().parent());
    test.attr("data-likes", movies[index].likes);
  });

  // On click sort function unfortunately works only once but the like count still works.
  $("#sort").on("click", function () {
    $("#append > div")
      .sort(function (a, b) {
        var contentA = parseInt($(a).data("likes"));
        console.log("a:" + contentA);
        var contentB = parseInt($(b).data("likes"));
        console.log("b" + contentB);
        return contentA < contentB ? 1 : contentA > contentB ? -1 : 0;
      })
      .appendTo("#append");
  });
});
