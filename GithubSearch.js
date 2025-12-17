var search = document.getElementById("GHsearch");
var tab = document.getElementById("link");
var tab1 = document.getElementById("link1");
const a = if(!(search === ("" || " "))) ? "https://api.github.com/search/users?q=" + search : undefined;
   
function submit(search){
  if(!(search === ("" || " "))) {
    tab.href = a;
    tab1.href = a;
  } else {
      alert("Field cannot be whitespace or null!");
    }
}
  //for both: display results on page, doesn't switch tabs, meaning  DOESN'T WORK
function RepoSub(search){
  if(!(search === ("" || " "))) {
    tab.href = a;
    tab1.href = a;
  }else {
    alert("Field cannot by whitespace or null!");
  }
}
