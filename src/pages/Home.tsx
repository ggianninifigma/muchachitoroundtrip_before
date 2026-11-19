import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/Button";
import { asset } from "../lib/asset";
import "./Home.css";

const concerts = [
  {
    venue: "Es Claustre",
    city: "Maó, Menorca",
    date: "Fri · Jul 31, 2026",
  },
  {
    venue: "La Tiñosa & Más",
    city: "Puerto del Carmen, Lanzarote",
    date: "Sat · Aug 8, 2026",
  },
  {
    venue: "Festiletras",
    city: "Aldea do Couto, Ponteceso",
    date: "Sat · Aug 22, 2026",
  },
];

export function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <img
            className="hero__mark"
            src={asset("/images/calavera_fileteblanco.avif")}
            alt=""
            aria-hidden
          />
          <p className="eyebrow">Sonido RumbaOrleans</p>
          <h1 className="hero__title">Muchachito Bombo Infierno</h1>
          <p className="hero__lede">
            Barcelona street rumba, swing and raw soul. Four studio records, one
            man-orchestra, and a whole lot of noise since 2004.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The band</p>
            <h2>Who is Muchachito?</h2>
          </div>
          <div className="bio">
            <div className="bio__text">
              <p>
                Muchachito is Jairo Perera, born in Santa Coloma de Gramenet. He
                learned his trade busking in the street, then with his first
                band Trimelón. In 2004 he founded Bombo Infierno and recorded
                three albums: <em>Vamos que nos vamos</em>,{" "}
                <em>Visto lo Visto</em> and <em>Idas y vueltas</em>.
              </p>
              <p>
                In 2016 he recorded his fourth record as Muchachito,{" "}
                <em>El Jiro</em>. In 2023 Muchachito Bombo Infierno released{" "}
                <em>Qué puede salir mal</em>, mixed by Ferris Aromí and
                Muchachito. He is still out there, on the road.
              </p>
            </div>
            <figure className="bio__figure">
              <img
                src={asset("/images/muchachito_portrait.jpg")}
                alt="Muchachito playing his signature “13” guitar"
              />
              <figcaption>Jairo Perera — Muchachito</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section featured">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <p className="eyebrow">Merch</p>
              <h2>Featured products</h2>
            </div>
            <Link to="/shop" className="featured__all">
              View all →
            </Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} location="home-featured" />
            ))}
          </div>
        </div>
      </section>

      <section id="tour" className="section tour">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">On the road</p>
            <h2>Upcoming concerts</h2>
          </div>
          <ul className="tour-list">
            {concerts.map((c) => (
              <li key={c.venue} className="tour-row">
                <div className="tour-row__date">{c.date}</div>
                <div className="tour-row__venue">
                  <strong>{c.venue}</strong>
                  <span className="text-muted">{c.city}</span>
                </div>
                <Button variant="secondary">Tickets</Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
