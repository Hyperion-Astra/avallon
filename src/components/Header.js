import React from "react";
import '../hero_styles.css';

const Header = () => {
  return (
    <header id="website-header" className="!z-[2000] transition-colors duration-300 sticky top-0 bg-transparent text-gray-900">
      <div className="relative z-10 grid items-center lg:gap-6 xl:gap-10 mx-auto pt-6 pb-6 container" style={{ gridTemplateColumns: "auto auto auto" }}>
        <div className="col-span-2 lg:col-span-1">
          <a className="grid max-w-full" href="/">
            <h2 className="heading-small lg:heading-medium max-w-full whitespace-nowrap overflow-hidden overflow-ellipsis" style={{ fontFamily: "var(--header-logo-fontFamily)", fontWeight: "var(--header-logo-fontWeight)", width: "69.75px" }}>Avallon</h2>
          </a>
        </div>
        <div className="hidden lg:flex items-center justify-end gap-10 lg:col-span-2">
          <div className="hidden lg:flex items-center flex-shrink-0 gap-4">
            <a className="button md border-2 border-solid bg-transparent text-gray-900" href="/">Contact us</a>
          </div>
        </div>
        <div className="ml-auto lg:hidden">
          <button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="block h-5 w-5">
              <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Secure Your Financial Future</h1>
        <p className="hero-text">
          Discover tailored investment and loan solutions designed to help you achieve your financial goals. 
          Partner with Avallon and experience expert guidance every step of the way.
        </p>
        <a href="#" className="hero-button">Explore Services</a>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default HomePage;
