import Link from "next/link";

export default function PageHero({ title }) {
  return (
    <section className="relative w-full h-[200px] md:h-[250px] flex items-center justify-center">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gallery-1.webp')",
        }}
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white">

        <div className="uppercase tracking-widest text-sm md:text-base mb-2">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold">
          {title}
        </h2>

      </div>

    </section>
  );
}