import React, { useState } from 'react';

const Login = () => {
    const [first_name, setfirst_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // State to track loading state
    const [emailExists, setEmailExists] = useState(false); // State to track whether email exists

    const publicSearch = async () => {
        try {
            console.log("Searching for user with email:", email);
            const response = await fetch("https://testapi.arbsindia.com/public/api/public-search-users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                })
            });

            const resp = await response.json();
            console.log("Search response:", resp);
            if (response.ok) {
                setEmailExists(resp.status); // Set emailExists state based on response
                setMessage(resp.msg);
            } else {
                throw new Error("Public Search request failed");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while searching for the user.");
        }
    };
    
    const signin = async () => {
        try {
            console.log("Signing in with email:", email);
            const response = await fetch("https://testapi.arbsindia.com/public/api/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const resp = await response.json();
            console.log("Signin response:", resp);
            if (response.ok) {
                if (resp.status === true) {
                    setMessage("Login Successful");
                    const token = resp.data.token;
                    // Store token securely, e.g., in HTTP-only cookies
                } else {
                    setMessage("Login Failed");
                }
            } else {
                throw new Error("Signin request failed");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while signing in.");
        }
    };

    const addUser = async () => {
        try {
            console.log("Adding user with email:", email);
            const response = await fetch("https://testapi.arbsindia.com/public/api/public-add-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  first_name:first_name,
                    email: email,
                    password: password
                })
            });

            const resp = await response.json();
            console.log("Add user response:", resp);
            if (response.ok) {
                setMessage("User added successfully");
            } else {
                throw new Error("Add User request failed");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while adding the user.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading state to true while submitting form
        
        try {
            await publicSearch();

            if (emailExists) {
                await signin();
            } else {
                await addUser();
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred.");
        } finally {
            setLoading(false); // Reset loading state after API call
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Login</h2>

            <label htmlFor="first_name" style={{ fontSize: '20px' }}>Name:</label><br />
                <input type="text" id="first_name" name="first_name" value={first_name} onChange={(e) => setfirst_name(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br />
            <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>

                <label htmlFor="email" style={{ fontSize: '20px' }}>Email:</label><br />
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br />
               <label htmlFor="password" style={{ fontSize: '20px' }}>Password:</label><br />
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br /><br />
                   
                {emailExists && (
                    <>
                        <label htmlFor="password" style={{ fontSize: '20px' }}>Password:</label><br />
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br /><br />
                    </>
                )}
                <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
            </form>
            <div>{message}</div>
        </div>
    );
};

export default Login;
