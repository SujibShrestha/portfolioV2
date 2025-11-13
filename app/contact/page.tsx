import React from "react";

export const metadata = {
  title: "Contact | Sujib Shrestha",
  description: "Get in touch with Sujib Shrestha — let's build something great together.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center  text-foreground px-6 py-20 relative overflow-hidden">
        
      {/* 🧭 Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-4 ">
        Get in Touch
      </h1>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl">
        I’d love to hear from you — whether it’s a collaboration, project idea, or just a friendly hello!
      </p>

     
      <form
        action="/api/contact" // replace with your Formspree or backend endpoint
        method="POST"
        className="w-full max-w-md bg-card/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:shadow-primary/30"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary outline-none transition-all duration-300"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary outline-none transition-all duration-300"
            placeholder="your@email.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary outline-none transition-all duration-300 resize-none"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-primary text-background font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
        >
          Send Message
        </button>
      </form>
      <div className="text-center text-sm text-muted-foreground mt-8">
        Or reach me directly at{" "}
        <a
          href="mailto:sujeeb98@gmail.com"
          className="text-primary hover:underline"
        >
          sujeeb98@gmail.com
        </a>
      </div>
    </section>
  );
}
