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
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response  
  ajax.send();

}


// new recipe object //

function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {

  this.recipeName = recipeName;
  this.contributer = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;

  this.displayRecipe = function() {
    //h1 Super Easy Rosemary Bread//
    document.querySelector("#HeadText h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributer;
    document.querySelector("#HeadText").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
  }
}

SuperEasyRosemaryBread = new Recipe("Super Easy Rosemary Bread", "Coffroth", "https://images.unsplash.com/photo-1621265040752-58815f16ca6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80.jpg", "ingredients.html", "equipment.html", "directions.html");

FluffyFrenchToast = new Recipe("Fluffy French Toast", "Analysse Palomares", "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg", "FToast-ingredients.html", "FToast-equipment.html", "FToast-directions.html");

BasicCrepes = new Recipe("Basic Crepes", "Zakiya Pruitt", "https://images.unsplash.com/photo-1485962307416-99…lfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80.jpg", "Crepes-ingredients.html", "Crepes-equipment.html", "Crepes-directions.html");



window.onload = function() {

  document.querySelector("#firstRecipe").onclick = function() {
    SuperEasyRosemaryBread.displayRecipe();
  }

  document.querySelector("#secondRecipe").onclick = function() {
    FluffyFrenchToast.displayRecipe();
  }

  document.querySelector("#thirdRecipe").onclick = function() {
    BasicCrepes.displayRecipe();
  }

} // end window.onload