const ContactForm = () => {
    return (
      <section id="contact" className="p-16 bg-white text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form className="mt-6 max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded shadow hover:bg-blue-600">Send Message</button>
        </form>
      </section>
    );
  }

export default ContactForm;