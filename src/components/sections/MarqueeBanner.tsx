const items = [
  "Corporate Gifting",
  "★",
  "Healthcare Hampers",
  "★",
  "Luxury Curation",
  "★",
  "Festival Collections",
  "★",
  "Wedding Gifting",
  "★",
  "IVF Journey Kits",
  "★",
  "Executive Gifts",
  "★",
  "Custom Branding",
  "★",
  "Pan-India Delivery",
  "★",
];

export function MarqueeBanner() {
  return (
    <div className="bg-purple-600 py-3 overflow-hidden">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-4 font-accent text-xs tracking-widest uppercase ${
              item === "★" ? "text-gold" : "text-gold-champagne"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
