export default function Hero() {
  return (
    <section id="hero" className="w-full h-screen flex items-center justify-center bg-[#131313]">

        <div>

          <h1 className="hero-entrance font-semibold text-4xl md:text-6xl lg:text-7xl text-white">
            STEFAN BESONEN
          </h1>

          <div className="mt-10 flex flex-col gap-3 text-sm md:text-base lg:text-lg">
            <p className="hero-entrance hero-entrance--role font-medium text-white">Junior Full-Stack Developer</p>
            <p className="hero-entrance hero-entrance--description text-[#C6C6C6]">
              PERN-stack developer based in Arizona, USA.
            </p>
          </div>

        </div>

    </section>
  )
}