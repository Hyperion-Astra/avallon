const Services = () => {
    return (
      <section id="services" className="p-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Wealth Management</h3>
            <p className="mt-2">Tailored strategies for wealth growth and preservation.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Loan Solutions</h3>
            <p className="mt-2">Custom loan options designed for flexible terms.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Investment Planning</h3>
            <p className="mt-2">Expert guidance to maximize returns and minimize risks.</p>
          </div>
        </div>
      </section>
    );
  }

export default Services;