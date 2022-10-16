// Javascript for tp6

//function to load file from the URL "frontfile" into the object indetified by "whereto"

function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML += this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response  
	ajax.send();

}

window.onload = function() {
  
    loadFileInto("ingredients.html", "#ingredients ul");
   loadFileInto("equipment.html", "#equipment ul");
   loadFileInto("directions.html", "#directions ol");
  
  document.querySelector("#HeadText h1").classList.add("tp");
  
  document.querySelector("#HeadText h1").onclick = function() {
    
    this.classList.toggle("black");
  }
  
  document.querySelector(".Recipe-Col #ingredients").onclick = function() {
    
    this.classList.toggle("tpShow");
  }
  
    document.querySelector(".Recipe-Col #equipment").onclick = function() {
    
    this.classList.toggle("tpShow");
  }
    
      document.querySelector(".Recipe-Col #directions").onclick = function() {
    
    this.classList.toggle("tpShow");
  }
      
      setTimeout(function() {
        document.querySelector(".Recipe-Col #ingredients ul").innerHTML += "<li> A hunger for BREAD</li>"
      }, 100);
     
 

} // end window.onload


