function hide() {

tbLinks=new Array();
contentDivs = new Array();

function getFirstChildWithTagName(element,tagName){
	tabLink = new Array();
      for(var i=0;i<element.childNodes.length;i++) {
		var y=tabLink.length;
		if(element.childNodes[i].nodeName==tagName) { tabLink[y]=element.childNodes[i];} 
		}
    }
	
function getHash(url){
      var hashPos = url.lastIndexOf("#");
      return url.substring(hashPos + 1);
    }
	
tabListItems=document.getElementById("tabs");
ListItems= tabListItems.getElementsByTagName('li');
for(var i=0;i<ListItems.length;i++)
 {
getFirstChildWithTagName(ListItems[i],'A'); 
}
	
	for(var i=0;i<tabLink.length;i++) 
	{
	 attr=tabLink[i].getAttribute('href');
	 id=getHash(attr);
	 tbLinks[i]=id;
     contentDivs[i] = document.getElementById(id); 
	}
	
	  function showTab() {

	  this.style.backgroundColor="white";
	  this.style.color="black";
	  
	  var x = getHash(this.getAttribute('href'));
	  for(var c=0;c<contentDivs.length;c++) 
		{		
		contentDivs[c].style.display="none"; 
		}
	  for(var i=0;i<tbLinks.length;i++)
	  {
	  if(tbLinks[i]==x){
	  document.getElementById(x).style.display="block"; 
	  }
	  }
	 }
	 
	  function css(){
	  this.style.backgroundColor="blue";
	  this.style.color="white";
	  }
	  
		var i = 0;
		if(i == 0) 
		{
		for(var x=1;x<contentDivs.length;x++) 
		{		
		contentDivs[x].style.display="none"; 
		}
		} 
		
		for(id in tabLink) {
        tabLink[id].onmouseover = showTab;
		tabLink[id].onmouseout = css;
        }
	 } 
window.onload=hide;
	
	