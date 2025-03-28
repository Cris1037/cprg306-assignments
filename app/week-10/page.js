"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context";

// Import React and the useUserAuth hook

const Page = () => {
    // Get the user object and authentication functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <div className="flex flex-col place-items-center gap-4 ">
            {user === null ? (
                // If the user is not logged in, display the login button
                <button className="m-2 bg-blue-500 text-white py-2 rounded w-40 text-center" onClick={gitHubSignIn}>Login with GitHub</button>
            ) : (
                // If the user is logged in, display the welcome message, logout button, and shopping list link
                <div className="flex flex-col place-items-center gap-4">
                    <p className="text-2xl">
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <button className="m-2 bg-blue-500 text-white py-2 rounded w-40" onClick={firebaseSignOut}>Logout</button>
                    <a className="bg-blue-500 text-white py-2 rounded w-40 text-center" href="./week-9/shopping-list">Go to Shopping List</a>
                </div>
            )}
        </div>
    );
};

export default Page;