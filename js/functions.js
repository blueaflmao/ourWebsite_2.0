function pageInit()
{
    artButtonClick();
    homeButtonClick();
    introButtonClick();
}

function artButtonClick()
{
    var linkToArt = document.createElement("a");
    linkToArt.setAttribute("class", "naviLink");
    linkToArt.href = "Artwork.html";
    linkToArt.innerHTML = "ARTWORKS";

    var artButton = document.getElementsByClassName("naviMenu")[4];
    artButton.appendChild(linkToArt);
}


function homeButtonClick()
{
    var linkToHome = document.createElement("a");
    linkToHome.setAttribute("class", "naviLink");
    linkToHome.href = "OurWebsiteV2.html";
    linkToHome.innerHTML = "MAIN PAGE";

    var homeButton = document.getElementsByClassName("naviMenu")[0];
    homeButton.appendChild(linkToHome);
}


function introButtonClick()
{
    var linkToIntro = document.createElement("a");
    linkToIntro.setAttribute("class", "naviLink");
    linkToIntro.href = "Introduction.html";
    linkToIntro.innerHTML = "INTRODUCTION";

    var introButton = document.getElementsByClassName("naviMenu")[1];
    introButton.appendChild(linkToIntro);
}