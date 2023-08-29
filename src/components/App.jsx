import React from "react";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import Data from "./data";
import Text from "./Text"

function App (){
    return <div>
        <Header/>
        { Data.map((data) => (
            <Product head={data.head} price={data.price} units={data.units} image={data.image}/>
        )) }
        <Text/>
       <Footer/>
    </div>
};

export default App;