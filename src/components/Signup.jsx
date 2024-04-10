import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const publicSearch = async () => {
        try {
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
            if (response.ok) {
                if (resp.status === true) {
                    console.log(resp.msg);
                    setMessage(resp.msg);
                    return true;
                } else {
                    console.error(resp.msg);
                    setMessage(resp.msg);
                    return false;
                }
            } else {
                throw new Error("Public Search request failed");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while searching for the user.");
            return false;
        }
    };

    const signin = async () => {
        try {
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
            if (response.ok) {
                if (resp.status === true) {
                    console.log(resp.msg);
                    setMessage("Login Successful");
                    return true;
                } else {
                    console.error(resp.msg);
                    setMessage("Login Failed");
                    return false;
                }
            } else {
                throw new Error("Signin request failed");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while signing in.");
            return false;
        }
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const publicSearchUserResp = await publicSearch();
       
        if (publicSearchUserResp === true) {
            const signedinStatus = await signin();

            // If you have API for Signup (or adduser) then add it here
            // if (signedinStatus === false) {
            //     console.log(email);
            //     // If you have API for Signup (or adduser) then add it here
            //     const signupStatus = await addUser();
            // } else {
            //     console.log("Public Search Failed");
            // }

        } else {
            console.log("Public Search Failed");
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
                <label htmlFor="email" style={{ fontSize: '20px' }}>Email:</label><br />
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br />
                <label htmlFor="password" style={{ fontSize: '20px' }}>Password:</label><br />
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br /><br />
                <button type="submit">Submit</button>
            </form>
            <div>{message}</div>
        </div>
    );
};

export default Login;
