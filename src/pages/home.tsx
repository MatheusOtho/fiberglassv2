import { useEffect } from "react";

import Hero from "./home/hero"
import Carrossel from "./home/carrossel"
import Personalizados from "./home/personalizado"
import Categorias from "./home/categorias"
import Destaques from "./home/destaques"
import { Helmet } from 'react-helmet-async';

function Home() {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  return (
    <>
      <Helmet>
        <title>FiberGlass Móveis | Móveis em Fibra de Vidro</title>
      </Helmet>
        <main className="max-w-[1600px] m-auto">
          
            <Hero/>
            <Carrossel/>
            <Personalizados/>
            <Categorias/>
            <Destaques/>
        </main>
    </>
  );
}

export default Home;
