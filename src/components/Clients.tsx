import Image from "next/image";
import Reveal from "./Reveal";
import LogoMark from "./LogoMark";

const CLIENTS = [
  { country: "United States", city: "San Francisco", img: "/usa.jpg" },
  { country: "England", city: "London", img: "/england.jpg" },
  { country: "Türkiye", city: "Istanbul", img: "/istanbul.jpg" },
  { country: "Singapore", city: "Singapore", img: "/singapore.jpg" },
];

export default function Clients() {
  return (
    <section className="container-rt py-[clamp(3rem,1.9rem+4.4vw,5.5rem)]">
      <Reveal className="text-center">
        <p className="eyebrow">
          <LogoMark className="size-[0.85em]" /> Global network
        </p>
        <h2 className="mx-auto mt-5 text-balance font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
          We serve worldwide
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CLIENTS.map((c, i) => (
          <Reveal key={c.country} delay={i * 90}>
            <article className="group relative aspect-[3/5] min-h-[26rem] overflow-hidden rounded-2xl">
              <Image
                src={c.img}
                alt={`${c.city}, ${c.country}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              {/* Dark gradient so the label stays legible */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/10 to-ink/30" />
              <div className="absolute inset-x-0 top-0 p-6">
                <p className="font-mono text-2xs uppercase tracking-[0.2em] text-paper/70">
                  {c.city}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-paper">
                  {c.country}
                </h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
