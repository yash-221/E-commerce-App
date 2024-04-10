import React from 'react';

const SignIn = () => {
    const handleSignIn = async () => {
        try {
            const response = await fetch("https://testapi.arbsindia.com/public/api/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: "", // Example email, replace with dynamic value
                    password: "" // Example password, replace with dynamic value
                })
            });
            const data = await response.json();
            console.log(data); // Handle the response accordingly
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignIn;
