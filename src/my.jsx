import React, { useEffect, useState } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    

    const PublicSearchUusers = async ()=> {
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

            const res = await response.json();
            if (res.status === true) {
                console.log(res.msg);
                setMessage(res.msg);
                return true;

            } else if(res.status === false) {
                console.error(res.msg);
                setMessage(res.msg);
                return false;
            }
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    }

    const SignIn = async ()=> {
        try {
            const response = await fetch("https://testapi.arbsindia.com/public/api/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const res = await response.json();
            console.log(res);
            if (res.status === true) {
                console.log(res.msg);
                setMessage(res.msg);
                const token = res.data.token
                localStorage.setItem("token", token);

                return true;

            } else if(res.status === false) {
                console.error(res.msg);
                setMessage(res.msg);
                return false;
            }
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    }

    const handleSubmit = async (event) => {
        console.log("hello");
        event.preventDefault();
        const public_search_user_res = await PublicSearchUusers()

        if(public_search_user_res === true){
            console.log(email);
            await SignIn()
        } else if (public_search_user_res === false){
            console.log(
                "adduserbali api chala dena"
            );
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Login</h2>
            <form noValidate autoComplete='false' onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
                <label htmlFor="name" style={{ fontSize: '20px' }}>Name:</label><br />
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br />
                <label htmlFor="email" style={{ fontSize: '20px' }}>Email:</label><br />
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br />
                <label htmlFor="password" style={{ fontSize: '20px' }}>Password:</label><br />
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br /><br />
                <button type="submit">Submit</button>
            </form>
            <div>{message}</div>
        </div>
    );
}

export default Login;
