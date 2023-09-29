import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
// import Gallery from "../../components/gallery/Gallery";

import logements from "../../datas/annonces.json";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <div className="home_gallery">
          {logements.map((logement) => {
            return (
              <Card
                image={logement.cover}
                title={logement.title}
                id={logement.id}
                key={logement.id}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
