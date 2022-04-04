import React from "react";

const Home = () => {
    return (
        <div>
            <div>I'm the VERY VERY home component</div>
            <button onClick={() => console.log("Hello there!")}>Click me!</button>
        </div>
    );
}

export default Home;