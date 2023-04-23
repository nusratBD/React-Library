import { useLoaderData } from "react-router-dom";

const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div>
            <h1>This is Our Home: {tShirts.length}</h1>
        </div>
    );
};

export default Home;