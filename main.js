var namelist = [];
var namelistsort = [];

function add(){
    var name = document.getElementById("box").value;
    namelist.push(name);
    namelistsort.push(name);
    document.getElementById("inputer").innerHTML = namelist;
}
function sort(){
    namelistsort.sort();
    document.getElementById("inpusort").innerHTML = namelistsort;

}
function search(){
    var s= document.getElementById("searchbox").value;
    var found=0;
    var j;
    for(j=0; j<namelist.length; j++){
        if(s==namelist[j]){
            found=found+1;
        }
    }
    document.getElementById("searcher").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}