import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
       <PopularProducts />
      {/*<SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe /> */}
    </main>
  );
};

export default App;
