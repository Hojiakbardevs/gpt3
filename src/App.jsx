import React from "react";
import Navbars from "./Components/Navbars";
import { Gradient_bg } from "./style";
import Header from "./Containers/header";
import Brand from "./Components/Brand";
import Whatgpt from "./Containers/whatgpt";
import Posibilty from "./Containers/posibilty";
import Cta from "./Components/Cta";
import Blog from "./Containers/blog";
import Footer from "./Containers/footer";

const App = () => {
  return (
    <div>
      <Gradient_bg className="section__padding">
        <Navbars />
        <Header />
      </Gradient_bg>
      <Brand />
      <Whatgpt />
      <Posibilty />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
