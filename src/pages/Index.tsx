import { Link } from "react-router-dom";
import { useEffect } from "react";

const IndexPage = () => {
    useEffect(() => {
        console.log("useEffect in Index Page")
    }, [])

    return (
        <>
            <h1>Index Page</h1>
            <Link to="/another">To Another page</Link>
        </>
    )
};

export default IndexPage;