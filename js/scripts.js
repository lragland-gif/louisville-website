function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var p, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (p = 0; p < tabcontent.length; p++) {
      tabcontent[p].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (p = 0; p < tablinks.length; p++) {
      tablinks[p].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  // show/hide packet information Name/Email

  function showHide() {
    var checkbox = document.getElementById("chk");
    var hiddeninputs = document.getElementsByClassName ("hidden");

    for (var t = 0; t != hiddeninputs.length; t++) {
      if (checkbox.checked) {
           hiddeninputs[t].style.display = "block";
       }
     }
  }
 