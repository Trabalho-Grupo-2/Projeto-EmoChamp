import API_URL from './config.js'

export const AuthService = {

    async registerPatient(user) {
        const response = await fetch(`${API_URL}/patients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:
                JSON.stringify({
                    name: user.name,
                    email: user.email,
                    password: user.password
                })
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(handleResponses(response.status));
        }
    },
    async registerPsychologist(user) {
        const response = await fetch(`${API_URL}/psychologists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:
                JSON.stringify({
                    name: user.name,
                    email: user.email,
                    password: user.password
                })
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(handleResponses(response.status));
        }
    },
}

function handleResponses(code) {
    let message = "";
    switch (code) {
        case 400:
            message = "Username already exists.";
            break;
        case 401:
            message = "Wrong credentials";
            break;
        case 404:
            message = "User not found";
            break;
        case 500:
            message = "Internal server error";
            break;
        default:
            message = "Unkown message";
            break;
    }
    return message;
}

export default AuthService;