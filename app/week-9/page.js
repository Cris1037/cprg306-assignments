"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context";

// Import React and the useUserAuth hook

const Page = () => {
    // Get the user object and authentication functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <div>
            {user === null ? (
                // If the user is not logged in, display the login button
                <button onClick={gitHubSignIn}>Login with GitHub</button>
            ) : (
                // If the user is logged in, display the welcome message, logout button, and shopping list link
                <div>
                    <p>
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <button onClick={firebaseSignOut}>Logout</button>
                    <a href="./week-9/shopping-list">Go to Shopping List</a>
                </div>
            )}
        </div>
    );
};

export default Page;