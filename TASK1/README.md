# Async API Fetch Task

## Approach Explanation

### Problem
Create an asynchronous function that fetches data from API at https://jsonplaceholder.typicode.com/posts and logs the titles of the first five posts.

### My Solution Strategy

1. I used JavaScript async/await for asynchronous code
2. Implemented try-catch block in case of errors or API failures
3. Firstly I used `fetch()` to get all posts from the API. Then I have used `slice(0, 5)` to extract first five posts. Afterwards, I used `map()` to transform posts array into titles array
4. To "log the titles", I outputted directly within the function rather than returning data

