import "../src/styles/styles.css";
import "./App.css";
import Available from "./components/Available";
import Footer from "./components/Footer";
import HeaderComponent from "./components/HeaderComponent";
import Hero from "./components/Hero";
import MetodeDelivery from "./components/maincontent/MetodeDelivery";
import SchduleDelivery from "./components/maincontent/SchduleDelivery";
import StatusDelivery from "./components/maincontent/StatusDelivery";
import Track from "./components/maincontent/Track";

import Superiority from "./components/Superiority";
import Testimony from "./components/Testimony";

function App() {
  return (
    <div className="mainApp">
      <HeaderComponent />
      <Hero />
      <Track />
      <Superiority />
      <MetodeDelivery />
      <StatusDelivery />
      <SchduleDelivery />
      <Testimony />

      <Available />
      <Footer />
    </div>
  );
}

export default App;
