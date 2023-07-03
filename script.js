function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "none" ) {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  }

  window.addEventListener("load", function() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.display = "none";
  });
  
  
  
  
  
  

