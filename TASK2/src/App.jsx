import { useState, useEffect } from 'react';
//I used css for the only goal of aligning "User List" and "Loading users..." texts in center
import "./App.css"

//we define a function that will allow us to fetch the users
const UserList= ()=> {
    //data that differs from one render to another is represented using useState hook
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    //result of state changing is handled using useEffect hook
    useEffect(() => {
        //as in task 1, we call asynchronous function
        const fetchUsers = async () => {
            try {
                //as in task 1, we fetch user data from the API and convert it to json format
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const jsonUserData = await response.json();
                setUsers(jsonUserData);

            }
            //in case of error mistake will be outputted and code won't stop
            catch (error) {
                console.error('Error fetching users:', error);
            }
            //in any case, loading will become false after fetching will be over or if an error outputs
            finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);
    //since "loading" in the beginning and until end of fetching process remains true, this code will get rendered first
    if (loading) {
        //"Loading users..." text will be outputted firstly, it is our indicator that data is being fetched
        return <div className="loading-text">Loading users...</div>;
    }
    //information that gets rendered
    return (
        //for data to be displayed in a list we use <ul> and <li> HTML tags
        //user id is used to output EACH USER'S email and name since ids are unique
        //I decided to use map method and take only user email and name,so that the list would look better
        <div>
            <h2> User List </h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;