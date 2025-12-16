 var search = document.getElementById("GHsearch");
  var tab = document.getElementById("link");
    function submit(search){
        if(!(search === ("" || " "))) {
            tab.href = "api.github.com/search/users?q=" + search; 
    
        }
        else {
            alert("Field cannot be whitespace or null!");
        }
    }
  //for both: display results on page, doesn't switch tabs, meaning  DOESN'T WORK
  function RepoSub(search){
    if(!(search === ("" || " "))) {
      tab.href = "https://api.github.com/search/repositories?q=" + search;
    }else {
      alert("Field cannot by whitespace or null!");
    }
  }
