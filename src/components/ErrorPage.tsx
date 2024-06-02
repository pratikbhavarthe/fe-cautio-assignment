import React from "react";

const ErrorPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Whoops!</h1>
                <p className="text-lg">Apologies, an error occurred unexpectedly.</p>
            </div>
        </div>
    );
};

export default ErrorPage;