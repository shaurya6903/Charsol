import { useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <p className="text-xs font-body">
          This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you wish.
        </p>
        <button
          onClick={() => setVisible(false)}
          className="bg-accent text-accent-foreground px-4 py-1.5 text-xs font-semibold font-body rounded hover:opacity-90 transition-opacity flex-shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
