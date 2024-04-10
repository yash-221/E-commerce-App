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
            if (resp.status === true) {
                console.log(resp.msg)
                setMessage(resp.msg)
                return true
            } else if (resp.status === false) {
                console.error(resp.msg)
                setMessage(resp.msg)
                return false;
            }
        } catch (error) {
            console.error("error", error)
        }
    }

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
            if (resp.status === true) {
                console.log(resp.msg)
                setMessage("Login SuccessFul")
                return true
            } else if (resp.status === false) {
                console.error(resp.msg)
                setMessage("Login Failed")
                return false;
            }
        } catch (error) {
            console.error("error", error)
        }
    }

    const signup = async () => {
        try {
            const response = await fetch("https://testapi.arbsindia.com/public/api/signup", {
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
            if (resp.status === true) {
                console.log(resp.msg)
                setMessage("Signup SuccessFul")
                return true
            } else if (resp.status === false) {
                console.error(resp.msg)
                setMessage("Signup Failed")
                return false;
            }
        } catch (error) {
            console.error("error", error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const publicSearchUserResp = await publicSearch()

        if (publicSearchUserResp === true) {
            console.log(email)
            await signin()

        } else if (publicSearchUserResp === false) {
            console.log("Public Search Failed")
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
                <label htmlFor="email" style={{ fontSize: '20px' }}>Email:</label><br />
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br />
                <label htmlFor="password" style={{ fontSize: '20px' }}>Password:</label><br />
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br /><br />
                <button type="submit">Login</button>
                <button type="button" onClick={signup}>Signup</button>
            </form>
            <div>{message}</div>
        </div>
    );
}

export default Login;
