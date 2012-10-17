count = 0;
str = "";
function load(json) {
	console.log(json);
	
	q = json.q;
	for (j=0; j < q.length; j++)
	{
		repos = parse(q[j]);
		for (i=0; i < repos.length; i++)
		{
			processRepo(repos[i]);
		}
	}
	
	str += "total count : " + count + " repositories"
	
	document.getElementById("demo").innerHTML=str;

	
}

function parse(data) {
  //var meta = json.meta
  //console.log(meta)
  //var data = singleQuery.data
  var repos = data.repositories
  return repos;
}

function processRepo(repo)
{
	if (repo.size == "0") return; //clear empty repos
	
	count++;
	
	//avin2:SensorKinect - PrimeSensor Modules for OpenNI
	//$1---:$2---------  - $3---------
	var ghPrefix = "https://github.com/";
	var userPath = ghPrefix + repo.owner + "/"
	var repoPath =  userPath + repo.name + "/";
					
	//$1
	str += //document.write(
	"<p>" +
	"<a href=" + "\"" + userPath + "\"" +
	// "class=\"user-link-mention\"" +
	">" +  //end <a>
	repo.owner +
	"</a>" +
	
	":" +
	
	//$2
	"<a href=" + "\"" + repoPath + "\"" +
	// "class=\"repo-link-mention\"" +
	">" +  //end <a>
	repo.name +
	"</a>" +
	
	" - " + 
	
	//$3
	repo.description + 
	//"<br/>" +
	"</p>"
	// ) //closes - document.write(
	;
	
	
	
}