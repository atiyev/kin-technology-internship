
// we create an async function
const getTitles = async () => {
    //if there are no errors, the code will run
    try{
        //users are fetched from JSON placeholder using promise with await. First promise is fulfilled when we get the users fetched
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        //we get readable stream from previous response and use json method on it. After promise is fulfilled we have the user data in json
        const jsonUserPosts = await response.json();


        //we use "map" higher order function on the json data to return user titles array that are stored in json.
        //we use "slice" array method to return only first five titles from the array
        const userTitleArray = jsonUserPosts.slice(0,5).map(user => {
            return user.title;
        })
        //we write output within the function because otherwise the code would not wait for all promises to be fulfilled and would try to output UserTitleArray without getTitles being processed first.
        console.log(userTitleArray);
    }
        //if error arises it will be handled and code will still run
    catch(error) {
        console.error("Failed to fetch posts:", error);
    }


}
//log first five titles by calling the function
getTitles();