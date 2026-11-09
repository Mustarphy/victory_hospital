export default function ServicesHero() {
  return (
    <section aria-labelledby="services-heading" className="px-4 pt-4 sm:px-6 md:pt-6">
      <div className="mx-auto grid max-w-site overflow-hidden rounded-3xl md:grid-cols-2">
        <div className="relative isolate flex min-h-80 flex-col justify-center bg-brand-900 px-6 py-12 md:min-h-135 md:px-12 lg:px-16">
          <img
            src="/images/hospital/victory-specialist-hospital-building.jpg"
            width="986"
            height="1080"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 -z-10 size-full object-cover object-[50%_40%] mix-blend-multiply"
          />
          <h1 id="services-heading" className="enter-up text-[2.75rem] leading-tight font-bold text-white md:text-[3.5rem]">
            Medical Services
          </h1>
          <p style={{ '--enter-delay': '120ms' }} className="enter-up mt-5 max-w-xl text-lg leading-relaxed font-light text-white/90">
            Victory Specialist Hospital brings family, maternal, children&apos;s and surgical care
            together under one roof, with our own laboratory and pharmacy on site. Explore the
            services available to you and your family.
          </p>
        </div>
        <img
          src="/images/services/consultation.jpg"
          width="1400"
          height="933"
          alt="A clinician in scrubs talks a patient through information on a tablet"
          decoding="async"
          className="enter-image hidden size-full object-cover object-[45%_50%] md:block"
        />
      </div>
    </section>
  )
}
