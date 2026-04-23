export default function Hero() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center bg-[#131313]">
      <h1 className="text-4xl font-semibold">STEFAN BESONEN</h1>

      <div className="w-full px-12 mt-10 flex flex-col gap-3 justify-center">
         <p className="font-medium">Full stack developer</p>
         <p className="text-[#C6C6C6] w-7/8">I build clean, minimal, user-focused web applications.</p>
      </div>
    </section>
  )
}