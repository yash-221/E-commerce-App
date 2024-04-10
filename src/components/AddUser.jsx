// AddUser.js

const addUser = async (firstName, email, password) => {
    try {
        const response = await fetch("https://testapi.arbsindia.com/public/api/public-add-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name: firstName,
                email: email,
                password: password
            })
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error adding user:", error);
        return { status: false, msg: "An error occurred while adding the user." };
    }
};

export default addUser;
