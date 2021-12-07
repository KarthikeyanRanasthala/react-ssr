import { useEffect } from "react";

const IndexPage = () => {
    useEffect(() => {
        console.log("useEffect in Index Page")
    }, [])

    return (
        <>
            <h1>Index Page</h1>
        </>
    )
};

export default IndexPage;