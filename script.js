let activeTab = null;

// Make sure default tab is visible
document.getElementById("defaultOpen").click();

let chatbotOpen = false; // Track the chatbot's state

// Function for switching between tabs
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var pageElement = document.getElementById(pageName);

    if (pageElement === activeTab) {
        // Don't change appearance if clicking the active tab
        pageElement.style.display = "block";
        off(); // Call off() to hide elements
    } else {
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
            tablinks[i].style.color = "black";
        }

        elmnt.style.backgroundColor = color;
        elmnt.style.color = "black";
        pageElement.style.display = "block";
        activeTab = pageElement;
    }
}

// Chatbot overlay function
function toggleChatbot() {
    const askAbout = document.getElementById("askAbout");
    const askAboutText = document.getElementById("askAboutText");
    const tabs = document.getElementById("tabs");

    if (chatbotOpen) {
        askAbout.style.display = "none";
        askAboutText.style.display = "none";
        tabs.style.display = "none";
    } else {
        askAbout.style.display = "block";
        askAboutText.style.display = "block";
        tabs.style.display = "block";
    }

    chatbotOpen = !chatbotOpen; // Toggle chatbot's state
}
