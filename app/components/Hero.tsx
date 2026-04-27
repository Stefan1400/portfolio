export default function Hero() {
  return (
    <section id="hero" className="w-full h-screen flex items-center justify-center bg-[#131313]">

        <div>

          <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-white">
            STEFAN BESONEN
          </h1>

          <div className="mt-10 flex flex-col gap-3 text-sm md:text-base lg:text-lg">
            <p className="font-medium text-white">Full stack developer</p>
            <p className="text-[#C6C6C6]">
              I build clean, minimal, user-focused web applications.
            </p>
          </div>

        </div>

    </section>
  )
}