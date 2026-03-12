import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="border-t border-border py-10 my-12">
      <div className="max-w-lg mx-auto text-center">
        <h3 className="text-xl font-serif italic font-bold text-foreground mb-6">
          Sign up for the Spotlight Newsletter:
        </h3>
        <form
          className="flex gap-0"
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address *"
            className="flex-1 px-4 py-2.5 border border-border bg-background text-sm font-body focus:outline-none focus:ring-1 focus:ring-ring"
            required
          />
          <button
            type="submit"
            className="bg-destructive text-destructive-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wider font-body hover:opacity-90 transition-opacity"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
