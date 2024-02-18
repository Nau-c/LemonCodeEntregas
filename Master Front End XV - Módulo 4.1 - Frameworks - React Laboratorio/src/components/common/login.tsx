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

    return (
        <>
            <form onSubmit={handleNavigation} className="bg-blue-500 p-8 rounded-lg max-w-md mx-auto mt-10">
                <h2 className="text-white text-2xl mb-6">Hello from login page</h2>

                <div className="mb-4">
                    <div className="text-white block mb-2">
                        <label>Username: </label>
                        <input
                            className="w-full px-3 py-2 border rounded"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="text-white block mb-2">Password: </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button type="submit" className="bg-white text-blue-500 px-4 py-2 rounded-full">Login</button>
            </form>
        </>
    )
}