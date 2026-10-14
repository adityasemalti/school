
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bus,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Dumbbell,
  FlaskConical,
  HeartPulse,
  Laptop,
  Library,
  Monitor,
  Music,
  ShieldCheck,
  Sparkles,
  Trophy,
  Utensils,
  Wifi,
  X,
} from "lucide-react";

const facilities = [
  {
    id: "classrooms",
    number: "01",
    title: "Smart Classrooms",
    category: "LEARNING SPACES",
    description:
      "Bright, spacious classrooms supported by modern teaching tools that make every lesson more engaging and interactive.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85",
    icon: Monitor,
    features: ["Digital learning support", "Comfortable seating", "Well-lit spaces"],
    size: "large",
  },
  {
    id: "science",
    number: "02",
    title: "Science Laboratories",
    category: "DISCOVER & EXPLORE",
    description:
      "Dedicated practical learning spaces where students explore scientific concepts through experiments and guided activities.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
    icon: FlaskConical,
    features: ["Hands-on experiments", "Practical learning", "Supervised activities"],
  },
  {
    id: "computer",
    number: "03",
    title: "Computer Laboratory",
    category: "DIGITAL LEARNING",
    description:
      "A technology-focused environment that introduces students to computing, digital literacy and essential technology skills.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    icon: Laptop,
    features: ["Computer-based learning", "Digital skills", "Guided practice"],
  },
  {
    id: "library",
    number: "04",
    title: "Library & Reading Zone",
    category: "A WORLD OF KNOWLEDGE",
    description:
      "A welcoming reading environment that encourages curiosity, independent learning and a lifelong love for books.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
    icon: Library,
    features: ["Reading resources", "Quiet study spaces", "Independent learning"],
  },
  {
    id: "sports",
    number: "05",
    title: "Sports & Recreation",
    category: "MOVE WITH PURPOSE",
    description:
      "Spaces for physical activity, teamwork and healthy competition that help students build confidence beyond the classroom.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
    icon: Dumbbell,
    features: ["Physical activities", "Team sports", "Fitness and coordination"],
  },
  {
    id: "auditorium",
    number: "06",
    title: "Auditorium & Activities",
    category: "EXPRESS YOURSELF",
    description:
      "A space for school assemblies, cultural programmes, presentations and celebrations that bring the school community together.",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=85",
    icon: Music,
    features: ["School assemblies", "Cultural programmes", "Student performances"],
  },
];

const campusServices = [
  {
    icon: Utensils,
    title: "Cafeteria",
    description:
      "A dedicated dining space designed to make mealtimes comfortable and enjoyable for students.",
    tag: "EVERYDAY COMFORT",
  },
  {
    icon: HeartPulse,
    title: "Health & First Aid",
    description:
      "A student well-being focused setup for basic first aid and appropriate assistance when needed.",
    tag: "STUDENT WELL-BEING",
  },
  {
    icon: Bus,
    title: "School Transport",
    description:
      "Transport arrangements designed to support convenient school commutes, subject to route availability.",
    tag: "EASIER COMMUTES",
  },
  {
    icon: ShieldCheck,
    title: "Campus Safety",
    description:
      "A safety-conscious environment supported by school supervision and clearly defined procedures.",
    tag: "CARE & SECURITY",
  },
];

const gallery = [
  {
    title: "Spaces to Learn",
    subtitle: "A focused learning environment",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=85",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Ideas in Action",
    subtitle: "Learning beyond textbooks",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=85",
    className: "",
  },
  {
    title: "A Place to Explore",
    subtitle: "Curiosity at every step",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=85",
    className: "",
  },
];

const faqs = [
  {
    question: "Can parents visit the school campus?",
    answer:
      "Parents can contact the school office to enquire about campus visits and arrange a suitable time, subject to school policies.",
  },
  {
    question: "Is school transportation available?",
    answer:
      "Transport availability can vary by route and location. Please contact the school office to confirm routes, timings and applicable charges.",
  },
  {
    question: "How can I get more information about a facility?",
    answer:
      "Contact the school office or visit the campus to enquire about specific facilities, their availability and the arrangements for students.",
  },
  {
    question: "Does the school provide hostel accommodation?",
    answer:
      "Hostel availability has not been confirmed for this sample website. Please contact the school directly for accurate information.",
  },
];

export default function Facilities() {
  const [activeFacility, setActiveFacility] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const selectedFacility = facilities.find(
    (facility) => facility.id === activeFacility
  );

  return (
    <main className="overflow-hidden bg-[#fcfdfb] text-[#173b30]">
      {/* HERO */}
      <section className="relative px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-12 lg:pt-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9e9dd] bg-white px-4 py-2 text-xs font-bold tracking-[0.15em] text-[#327b54] shadow-sm">
              <Sparkles size={14} />
              OUR CAMPUS & FACILITIES
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[4.2rem]">
              More than a school.
              <span className="mt-2 block text-[#43865b]">
                A place to grow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#66776d] sm:text-lg">
              Great learning needs the right environment. Explore the spaces
              designed to encourage discovery, creativity, confidence and
              everyday growth at EAK International School.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#explore-facilities"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#1f573c] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#17442f] hover:shadow-lg"
              >
                Explore Our Facilities
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#campus-gallery"
                className="inline-flex items-center gap-2 rounded-xl border border-[#dce6dd] bg-white px-6 py-4 text-sm font-semibold transition hover:border-[#8ab69a] hover:bg-[#f5faf6]"
              >
                View Gallery
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#e6ece6] pt-6 text-sm text-[#64766a]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#4b9664]" />
                Learning-focused spaces
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#4b9664]" />
                Holistic development
              </span>
            </div>
          </div>

          <div className="relative animate-fade-up lg:pl-3">
            <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full bg-[#dcefe0] blur-3xl" />
            <div className="absolute -bottom-8 -left-7 h-40 w-40 rounded-full bg-[#e7f0d9] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#e5eee5] p-2 shadow-[0_24px_70px_-35px_rgba(31,87,60,0.4)]">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=90"
                alt="Modern school campus building"
                className="h-[390px] w-full rounded-[1.6rem] object-cover sm:h-[470px] lg:h-[540px]"
              />

              <div className="absolute inset-x-2 bottom-2 rounded-b-[1.6rem] bg-gradient-to-t from-[#102f23]/90 via-[#102f23]/40 to-transparent px-6 pb-7 pt-24 sm:px-8 sm:pb-9">
                <p className="text-xs font-bold tracking-[0.2em] text-[#d2ead7]">
                  THE EAK EXPERIENCE
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Room to discover.
                  <br />
                  Space to become.
                </h2>
              </div>
            </div>

            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-[#e3ece4] bg-white p-4 shadow-xl sm:right-8 sm:p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f3e9] text-[#327b54]">
                <BookOpen size={23} />
              </div>
              <div>
                <p className="text-sm font-bold">Learn by doing</p>
                <p className="mt-1 text-xs text-[#77867b]">
                  Beyond the classroom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-[#e7ede6] bg-white px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3 sm:gap-8">
          {[
            {
              icon: BookOpen,
              title: "Academic Spaces",
              text: "Designed to support focused learning.",
            },
            {
              icon: Trophy,
              title: "Beyond Academics",
              text: "Opportunities to explore interests and talents.",
            },
            {
              icon: HeartPulse,
              title: "Everyday Well-being",
              text: "Comfort, care and student support.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf6ee] text-[#43865b]">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#748176]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MAIN FACILITIES */}
      <section
        id="explore-facilities"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.2em] text-[#43865b]">
                BUILT FOR BETTER LEARNING
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Every space has
                <span className="text-[#43865b]"> a purpose.</span>
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[#718075]">
                From hands-on experiments to quiet reading corners, explore
                the facilities that can make school life more meaningful.
              </p>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#718075]">
              Select a facility to explore its highlights and learning
              opportunities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <button
                  type="button"
                  key={facility.id}
                  onClick={() => setActiveFacility(facility.id)}
                  className={`group overflow-hidden rounded-[1.6rem] border border-[#e4ebe3] bg-white text-left transition duration-300 hover:-translate-y-1.5 hover:border-[#bdd9c3] hover:shadow-[0_20px_50px_-30px_rgba(31,87,60,0.4)] ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                        index === 0 ? "h-64 sm:h-80" : "h-60"
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102f23]/65 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-[#28583d] backdrop-blur">
                      {facility.category}
                    </span>

                    <span className="absolute bottom-5 left-5 text-sm font-semibold tracking-[0.18em] text-white/80">
                      {facility.number}
                    </span>

                    <div className="absolute bottom-4 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#245c3e] transition duration-300 group-hover:rotate-45 group-hover:bg-[#dff0e2]">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf6ee] text-[#43865b]">
                        <Icon size={21} />
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {facility.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#718075]">
                      {facility.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {facility.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-[#f3f7f2] px-3 py-2 text-xs font-medium text-[#587361]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[#edf0eb] pt-5 text-sm font-semibold text-[#327b54]">
                      Explore facility
                      <ChevronRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAMPUS SERVICES */}
      <section className="bg-[#f0f6ef] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[#43865b]">
              THE LITTLE THINGS MATTER
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Care beyond the classroom.
            </h2>
            <p className="mt-4 leading-7 text-[#718075]">
              A supportive school experience includes the services and
              arrangements that help students feel cared for throughout the
              day.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {campusServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-[1.5rem] border border-[#e0e9df] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf4eb] text-[#327b54] transition group-hover:bg-[#1f573c] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <p className="mt-7 text-[10px] font-bold tracking-[0.15em] text-[#6b9b77]">
                    {service.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#748176]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="campus-gallery"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#43865b]">
                A CLOSER LOOK
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Life around our campus.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#748176]">
              A glimpse into the spaces where ideas grow, friendships form and
              new interests take shape.
            </p>
          </div>

          <div className="grid auto-rows-[220px] gap-4 sm:auto-rows-[250px] md:grid-cols-3 md:grid-rows-2">
            {gallery.map((item) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[1.5rem] bg-[#e8efe7] ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102f23]/85 via-[#102f23]/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-xs font-semibold tracking-[0.12em] text-[#d3ead8]">
                    EAK CAMPUS
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs leading-5 text-[#849187]">
            Note: These are illustrative stock photographs. Replace them with
            actual EAK International School campus images before publishing.
          </p>
        </div>
      </section>

      {/* HOSTEL OPTIONAL SECTION */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#1f573c] px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-5 -top-12 h-52 w-52 rounded-full border border-white/10" />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-[#d6efdc]">
                <Wifi size={13} />
                MADE FOR STUDENT GROWTH
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                The right environment makes a difference.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Want to learn more about a particular facility, campus
                arrangement or student service? Our school team can help you
                find the information you need.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#1f573c] transition hover:-translate-y-1 hover:bg-[#eaf4eb]"
            >
              Contact Our School
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#e7ede6] bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#43865b]">
              QUICK ANSWERS
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Questions about our facilities?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#748176]">
              Here are a few things parents may want to know before visiting
              the campus.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#327b54] hover:text-[#1f573c]"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="divide-y divide-[#e8eee7] border-y border-[#e8eee7]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                  >
                    <span className="text-sm font-semibold leading-6 sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#43865b] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-5 opacity-100 sm:pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-sm leading-7 text-[#748176]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACILITY DETAILS MODAL */}
      {selectedFacility && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#10251b]/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveFacility(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="facility-modal-title"
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[1.7rem] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102f23]/60 to-transparent" />

              <button
                type="button"
                aria-label="Close facility details"
                onClick={() => setActiveFacility(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#173b30] transition hover:bg-[#eaf4eb]"
              >
                <X size={19} />
              </button>

              <span className="absolute bottom-5 left-6 rounded-full bg-white/95 px-3 py-2 text-[10px] font-bold tracking-[0.14em] text-[#327b54]">
                {selectedFacility.category}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h2
                id="facility-modal-title"
                className="text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {selectedFacility.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#718075]">
                {selectedFacility.description}
              </p>

              <h3 className="mt-7 text-sm font-semibold">
                Facility highlights
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {selectedFacility.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl bg-[#f3f8f2] p-3 text-sm text-[#456550]"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#43865b]"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1f573c] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#17442f]"
              >
                Enquire about facilities
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
