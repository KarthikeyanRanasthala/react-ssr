import { Link } from "react-router-dom";
import { useEffect } from "react";

const AnotherPage = () => {
    useEffect(() => {
        console.log("useEffect in Another Page")
    }, [])

    return (
        <>
            <h1>Another Page</h1>
            <Link to="/">To Index page</Link>
        </>
    )
};

export default AnotherPage;