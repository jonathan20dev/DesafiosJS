async function getUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function displayUserData(userId) {
    const data = await getUserData(userId);
    console.log(data);
}

displayUserData(1);