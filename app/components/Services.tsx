import Image from "next/image";

const services = [
  { src: "/rodents.webp", title: "Rodents" },
  { src: "/cockroaches.webp", title: "Bugs / Cockroaches" },
  { src: "/wasps.webp", title: "Wasps / Hornets" },
  { src: "/termites.webp", title: "Termites" },
  { src: "/insects.webp", title: "Insects" },
  { src: "/pests.webp", title: "pests!", highlight: true },
];

export default function Services() {
  return (
    <section className="py-10 sm:py-16">
      <p className="text-sm font-semibold text-[#1D4ED8]">
        Servicing Residential and Commercial Customers
      </p>
      <h2 className="mt-2 text-3xl font-extrabold text-[#0B1630] sm:text-4xl">
        Exterminator Partner Services
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-44 w-full">
              <Image
                src={service.src}
                alt={`${service.title} pest control service`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </div>
            <h3 className="px-6 py-5 text-base font-semibold text-[#0B1630]">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}