import { Element } from "react-scroll";
import { Contact, Formations, Home, Services } from "../sections";

const Main = () => {
  return (
    <>
      <Element name="home">
        <Home />
      </Element>
      <Element name="formations">
        <Formations />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Main;
