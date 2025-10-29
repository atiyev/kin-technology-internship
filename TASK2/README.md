# React User List Component Task

## Approach Explanation

### Problem
Build a React component that fetches a list of users from https://jsonplaceholder.typicode.com/users when it mounts and displays them in a list. Include a loading indicator while the data is being fetched.

### My Solution Strategy

1. I implemented `useState` for users data and loading status
2. I used `useEffect` for API calls
3. I added try/catch/finally for error management
4. I added loading indicator during data fetch using simple text. Condition used is that loading text is outputted only when loading variable is equal to true. Until all the promises within async function are fulfilled, loding remains true. After all the promises are resolved, loading becomes equal to false and the loading text is not outputted anymore
5. I used `fetch()` to get all posts from the API. Afterwards, I used `map()` to output each user's email and name referring to their id, using `key={user_id}` 
6. I used `<ul>` and `<li>` tags for list rendering
7. CSS was used only for text alignment 

## How to Run
1. Navigate to the Task2 directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to the local URL shown in the terminal (usually `http://localhost:5173`)


