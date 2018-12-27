
getData();
    
    function getData() {

    fetch("https://api.myjson.com/bins/1h3vb3")
        .then(function (response) {
            response.json()
                .then(function (data) {
                
                var arr= data.books;
                
                getBooksData(arr);
                 //searchBook();
                searchFunction();
                })
       
        })
        .catch(function (error) {
            console.log(error)
        })
}

function getBooksData(arr){
var output = '';

            for( var i in arr){
               
             output +=
                
    '<div class = " item flip-container">' +
                 '<div class = "col flipper">' +
                 '<div class="front">'+
                 
                '<img class = "image " src ="' + arr[i].portada + '">'+ 
                  '</div>'+
                
              '<div class = "info back">'  +
               
                 '<p> '+arr[i].titulo+' </p>'
                 +'<p> '+arr[i].descripcion+' </p>'+ 
                   '<a href="'+arr[i].detalle+' data-fancybox data-caption="This image has a caption">' +
                 '<button id = "btn" type = "button"> more info' + 
                 '</button>'+ '</a>'+
                 '</div>'+
                 '</div>'+ 
              '</div>' ;     
           
            
             }
   document.getElementById("bookContainer").innerHTML= output;
 
}

//function searchBook(){
//var searchBar = document.getElementById("search-input");
//searchBar.addEventListener("keyup",function (e){
//    var term = e.target.value.toLowerCase();
//    var list = document.querySelector("#bookContainer");
//    var books= list.getElementsByclassName("info");
//    console.log(books);
//    Array.from(books).forEach(function(book){
//        
//        var title = book.firstElementChild.textContent;
//        if (title.toLowerCase().indexOf(term)!= -1){
//           book.style.display= "block";
//            }else{
//                 book.style.display= "none";
//            }
//    })
//    
//})
//}
function searchFunction(){
$(document).ready(function(){
  $("#search-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
}