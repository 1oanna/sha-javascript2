(function() {

    //CHRIS - I removed the placeholder JSON you had up here because you store
    // the one that you return. I've also added a little bit of code lower down
    // that makes the Alert work when you haven't fetched yet.
    var allRepos = undefined;

    // It's best to keep all const at the top of the page
    const detailsDisplay = document.getElementById("detailsDisplay");
    const divData = document.getElementById("dataDisplay");
    const btn1 = document.getElementById("btn1");
    const btnSearch = document.getElementById("btnSearch");
    const txtSearch = document.getElementById("q");

    // CHRIS - These URLs are repeated in the code so it's good form to put them at
    // the top of the page in a const
    const baseUrl = "https://api.github.com/repos/SocialHackersCodeSchool/";
    const initialUrl = "https://api.github.com/orgs/SocialHackersCodeSchool/repos";

    //CHRIS - Here, I've moved all the addEventListener functions to the top of the page
    // This is just good style for the code and doesn't affect functionality
    btn1.addEventListener("click", function(e) {
        console.log("btn 1 clicked");

        //show user pls wait
        divData.innerHTML = 'fetching repos ...';

        getUrl(initialUrl)
            .then(function(data) {
                //console.log(data);
                //keeping them for the search
                allRepos = data;
                displayData(data);
            });
    });

    btnSearch.addEventListener("click", function(e) {
        doSearch();
    });

    //bonus - trap enter on search
    //CHRIS - This is awesome
    txtSearch.addEventListener("keydown", function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            doSearch();
            return;
        }
    })

    //use for all buttons with one listener - js bubble event
    divData.addEventListener("click", function(e) {
        const trg = e.target;

        //check if this is the proper element
        if (trg.className == "btnDetails") {
            const repoAttr = trg.getAttribute("data-repo");

            fetchAndDisplayDetails(repoAttr);
        }
    });

    function getUrl(url) {
        return fetch(url)
            .then(function(resp) {
                return resp.json();
            });
    }

    function displayData(repos) {
        //remove pls wait msg
        divData.innerHTML = '';

        repos.forEach(function(R) {
            const itm = document.createElement('div');
            itm.className = "repoItem";
            itm.innerHTML = '<button class="btnDetails" data-repo="' + R.name + '">Details</button>';
            itm.innerHTML += '<a href="' + R.html_url + '" class="repoLink" target="_blank">' + R.name + ' (open page)</a>';
            divData.appendChild(itm);
        });
    }

    function displayDetails(data) {
        let strData = JSON.stringify(data);
        //make it nicer, replace them all , with ,+line feed
        strData = strData.replace(/,/g, ",<br>");
        detailsDisplay.innerHTML = '<div>' + strData + '</div>';
    }

    //CHRIS - I've changed this function a little so it just takes the Repository name
    // It then concatinates the baseUrl and the Repository name to get the whole URL
    function fetchAndDisplayDetails(url) {
        url = baseUrl + url;
        //show user pls wait
        detailsDisplay.innerHTML = 'Just a sec pls...';

        getUrl(url)
            .then(function(data) {
                //console.log(data);
                //this is json, convert to test in order to show
                displayDetails(data);
            });
    }

    function doSearch() {
        //do search when the user inputs a name in the box
        //CHRIS - I've added a condition to the If Statement here that
        // if allRepos is undefined (e.g. it hasnt been fetched yet)
        // then you should show the alert message
        if (allRepos === undefined || allRepos.length == 0) {
            alert("no data yet - fetch first");
            return;
        }

        //if the user doesn't write anything and
        if (txtSearch.value == "") {
            alert("please try again, fill in something first, before you press Search");
            return;
        }

        //try to match repo string
        const filteredRepos = allRepos.filter(function(R) {
            return R.name === txtSearch.value
        });

        //CHRIS - This type of error checking is really great. It's called
        // "Defensive Programming" and it a great skill that you're already doing!
        if (filteredRepos.length == 0) {
            alert("repo not found");
            return;
        }

        //here - repo found!
        fetchAndDisplayDetails(txtSearch.value);
    }

})()