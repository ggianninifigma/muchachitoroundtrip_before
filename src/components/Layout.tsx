import { Link, NavLink, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { asset } from "../lib/asset";
import "./Layout.css";

export function Layout() {
  const { itemCount } = useCart();

  return (
    <div className="layout">
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__brand" aria-label="Home">
            <img
              src={asset("/images/muchachito_logo_rojo.avif")}
              alt="Muchachito Bombo Infierno"
            />
          </Link>
          <nav className="site-nav">
            <NavLink to="/" end className="site-nav__link">
              Home
            </NavLink>
            <NavLink to="/shop" className="site-nav__link">
              Shop
            </NavLink>
            <NavLink to="/cart" className="site-nav__link site-nav__cart">
              Cart
              {itemCount > 0 && (
                <span className="site-nav__badge">{itemCount}</span>
              )}
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p>© 2026 Muchachito Bombo Infierno · Sonido RumbaOrleans</p>
          <p className="text-muted">
            Internal demo storefront · not an official store
          </p>
        </div>
      </footer>
    </div>
  );
}
