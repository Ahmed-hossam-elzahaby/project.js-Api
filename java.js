var myhttp= new XMLHttpRequest();
var allpost=[];

myhttp.open("GET","https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50")
myhttp.send();

myhttp.addEventListener("readystatechange",function(){


if(myhttp.readyState==4)
{
allpost=JSON.parse(myhttp.response).results;
displayposts()
}



})
function displayposts(){
var cartona=``;
for(var i =0; i<allpost.length;i++){
cartona+=`
<div class="col-md-3   text-center  ">
<img    class="w-100"   src="https://image.tmdb.org/t/p/w500${allpost[i].poster_path}" />
<h4    >${allpost[i].title}</h4>
<p>${allpost[i].overview}</p>
</div>
`
}
document.getElementById("rowData").innerHTML = cartona;

}
