export function ContactForm() {
    return (
      <section className="p-10">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" className="border p-2" />
          <input type="email" placeholder="Your Email" className="border p-2" />
          <textarea placeholder="Your Message" className="border p-2"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
        </form>
      </section>
    );
  }