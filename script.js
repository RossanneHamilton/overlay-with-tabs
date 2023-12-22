function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color and change text color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "white"; // Set text color back to white for all tabs
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Set the specific color and text color for the button used to open the tab content
    elmnt.style.backgroundColor = color;
    elmnt.style.color = "black"; // Change text color to black for the clicked tab
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();