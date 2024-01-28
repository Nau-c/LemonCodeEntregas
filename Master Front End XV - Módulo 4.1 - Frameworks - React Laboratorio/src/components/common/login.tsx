import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");


    const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    if (username === "admin" && password === "admin") {
        navigate("/list");
    }
    // } else if (username !== "" && password !== "") {
    //     alert("Invalid credentials");

    // };

    return (
        <>
            <form onSubmit={handleNavigation}>
                <h2>Hello from login page</h2>

                <div>
                    <div>
                        <label>Username: </label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button type="submit">Login</button>
            </form>
        </>
    )
}