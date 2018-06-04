# sha-javascript2

--- homework week 1 ---

Go to https://api.github.com/orgs/SocialHackersCodeSchool/repos, you will see a list of the repositories our SHA organization has (yes it's a lot of JSON).

You can copy the JSON and put it in a string at the top of your .js file. Print the name of the 3rd repository in the array to the console.

Make a ul with a li for each repository name (just like you did with the books in the previous assignment).
  
It should only display the modules that are actually being used in the curriculum at the moment, you of course know which those are, but if you need a reminder you can find them in our curriculum overview.

Use CSS to divide the page in two columns. 

The left column will have a list of the names for repository.
The right column should have the following information about each repository: the number of stargazers, the number of watchers, the number of forks, the language of the repository.

place the avatar_url (logo) of our organization somewhere on a nice place in your page as an image.


---- homework week 2 ----

You are going to write a SPA (Single Page Application) that uses the Github API. Make sure that your app uses a logical pattern just like this codepen.

Just like last week:

Make a website that fetches (= to get) data asynchronously.

Create a new website with external js file

Add a button (e.g. 'click me') that when clicked console.logs 'you clicked me!'

Create a function that fetches from The Github API. For example from [this page] (https://api.github.com/orgs/SocialHackersCodeSchool/repos). For help on this check this SO post

Display the data that you get from the Github API on your web page.

Now link the two together: When you click the button -> get the data from the Github API and display it on your website

Cool we are back where we left of.

Take a look at this:
https://api.github.com/repos/SocialHackersCodeSchool/CommandLine
Make a function which takes a single argument. The function should make an Fetch request to https://api.github.com/repos/SocialHackersCodeSchool/[SearchTerm] where the search term will be the argument. This argument will be the input the user has given you, so make sure that when the user clicks the button you call this function with the argument.

Make all the repositories link their own page in Github. Use the value of the key: name to make this work (hint: Github urls always look like this https://api.github.com/repos/SocialHackersCodeSchool/[repositoryName] where [repositoryName] would be replaced by the actual name of the repository, for example CommandLine). Make sure the link opens in a new tab.

Make sure you handle user input well. That means you need to think about empty input, and input that doesn't yield any results.
So Github has this really nice documentation :octocat: : Check these out for example https://developer.github.com/v3/repos/collaborators/ https://developer.github.com/v3/repos/commits/

Extend your page with an input element. This is so the user will be able to type in text.

For each repository, show (in the right column) who the contributers are. You will need to use the contributors_url for this.

!Important

Do not duplicate code! This is especially important for making requests since we are making multiple ones with different urls and we want to do different actions based on the call we are making. Here are some handles to get you started:
So write a function called makeRequest which accepts (at least) the following parameters: url and callback.
Make sure your callback is called when the request errors or when it sends a response (look at the documentation)
Your callback functions should accept two parameters so it can handle both errors: err and response. So based on your users actions (input, hovering, clicking) you want to call makeRequest with a different url and supply it with a function that handles both errors (display an error message to the user for example) and responses (render it correctly, as described below).
Make your functions small and reusable (modular)! That means create separate functions to handle certain steps.
GO WILD
Again, check out the Github API documentation to see what kind of magic stuff you can do with it.

The assignment is to implement something extra that is not in the assignment 😱 (nice and vague right?)

So for example, we have teams in our organization. You can find out who are in there and make a call to 'https://api.github.com/users/' + userInput (where userInput is a string typed into a search field by a user). You can show the users name, avatar image (not the link to the image!) and the number of public repos they have. Or you could make an API call to 'https://api.github.com/users/user/repos' to find out the public repo's they have. Or you can show how many people starred a specific repository.

Anyway, endless fun and possibilities. Need inspiration, check out the Github API documentation. Oh and please make it look nice (hint: use the stuff you learned in HTML/CSS)!


