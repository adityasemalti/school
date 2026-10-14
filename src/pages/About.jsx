
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Heart,
  Lightbulb,
  Target,
  Compass,
  GraduationCap,
  ShieldCheck,
  Users,
  Trophy,
  Sparkles,
  Quote,
  ChevronRight,
  Play,
  CheckCircle2,
  Building2,
  Leaf,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    number: "01",
    title: "Compassion",
    text: "Leading with kindness, empathy and respect for every individual.",
    color: "bg-[#FCEEEB]",
    iconColor: "text-[#BD7165]",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Curiosity",
    text: "Encouraging questions, fresh ideas and a lifelong love of discovery.",
    color: "bg-[#FFF3DE]",
    iconColor: "text-[#B98236]",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Integrity",
    text: "Doing what is right with honesty, responsibility and courage.",
    color: "bg-[#E7F3EA]",
    iconColor: "text-[#28764E]",
  },
  {
    icon: Users,
    number: "04",
    title: "Community",
    text: "Growing together through inclusion, collaboration and shared purpose.",
    color: "bg-[#EAF0FC]",
    iconColor: "text-[#5075B6]",
  },
];

const milestones = [
  {
    year: "Our Beginning",
    title: "A vision for better education",
    text: "EAK International School begins with a simple ambition: to create a learning environment where every child feels seen, supported and inspired.",
    side: "left",
  },
  {
    year: "Our Approach",
    title: "Learning beyond textbooks",
    text: "A balanced educational philosophy brings academic foundations together with creativity, communication and character development.",
    side: "right",
  },
  {
    year: "Our Community",
    title: "Growing together",
    text: "Students, families and educators work together to build a welcoming community rooted in trust, respect and shared growth.",
    side: "left",
  },
];

const highlights = [
  {
    icon: BookOpen,
    title: "Purposeful Learning",
    text: "Learning experiences designed to build understanding, not just memorisation.",
  },
  {
    icon: Heart,
    title: "Individual Attention",
    text: "Recognising that every learner has different strengths, interests and needs.",
  },
  {
    icon: Sparkles,
    title: "Holistic Growth",
    text: "Making room for academics, creativity, physical activity and wellbeing.",
  },
];

function Eyebrow({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DCE9E0] bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#397554]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#32845A]" />
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#18362C] sm:text-4xl lg:text-[47px]">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-sm leading-7 text-[#748178] sm:text-base">
          {text}
        </p>
      )}
    </div>
  );
}

export default function About() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <main className="overflow-hidden bg-[#FCFDFB] text-[#20332D]">
      {/* Hero */}
      <section className="relative px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24">
        <div className="absolute right-0 top-0 -z-0 h-[400px] w-[400px] rounded-full bg-[#E9F4EB] blur-[100px]" />

        <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold text-[#829087]">
              <a href="/" className="transition hover:text-[#28764E]">Home</a>
              <ChevronRight size={13} />
              <span className="text-[#28764E]">About Us</span>
            </div>

            <Eyebrow>Our story, our purpose</Eyebrow>

            <h1 className="max-w-[650px] text-[43px] font-semibold leading-[1.08] tracking-[-0.065em] text-[#18362C] sm:text-6xl lg:text-[68px]">
              Education with
              <br />
              <span className="text-[#287A55]">a bigger purpose.</span>
            </h1>

            <p className="mt-7 max-w-[510px] text-[15px] leading-8 text-[#6B7972] sm:text-[17px]">
              Every great journey begins with a belief. At EAK International
              School, ours is that education should help children become not
              just successful learners, but thoughtful human beings.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#our-story"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#176747] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#10553A]"
              >
                Discover Our Story
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#our-values"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E0E9E2] bg-white px-5 py-4 text-sm font-bold text-[#345345] transition hover:border-[#A9CDB3]"
              >
                What We Believe
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E7EDE8] pt-6">
              <span className="flex items-center gap-2 text-xs font-semibold text-[#61736A]">
                <CheckCircle2 size={16} className="text-[#32805B]" />
                Child-centred approach
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold text-[#61736A]">
                <CheckCircle2 size={16} className="text-[#32805B]" />
                Learning for life
              </span>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="overflow-hidden rounded-[28px] border-[7px] border-white shadow-[0_25px_80px_-25px_rgba(35,74,53,0.22)] sm:rounded-[34px]">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=90"
                alt="Students learning and growing together"
                className="h-[360px] w-full object-cover sm:h-[480px] lg:h-[530px]"
              />
            </div>

            <div className="absolute -bottom-6 left-4 max-w-[260px] rounded-2xl border border-[#E8EFE9] bg-white p-4 shadow-xl shadow-emerald-900/[0.07] sm:-left-7 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F4EA] text-[#28764E]">
                  <Heart size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#294639]">A school that cares</p>
                  <p className="mt-1 text-[11px] text-[#839087]">Every learner. Every day.</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-8 flex h-[74px] w-[74px] items-center justify-center rounded-[22px] bg-[#176747] text-white shadow-xl shadow-emerald-900/15 sm:-right-5 sm:h-[90px] sm:w-[90px]">
              <div className="text-center">
                <Sparkles size={24} className="mx-auto" />
                <p className="mt-1.5 text-[9px] font-bold uppercase tracking-widest">Discover</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="border-y border-[#E5ECE6] bg-white px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-5 sm:grid-cols-3 sm:gap-0">
          {[
            ["01", "A clear purpose", "Education that shapes character."],
            ["02", "A caring community", "A place where every voice matters."],
            ["03", "A world of possibilities", "Skills and values for the future."],
          ].map(([num, title, text], index) => (
            <div
              key={num}
              className={`flex items-center gap-4 sm:px-6 lg:px-10 ${
                index !== 0 ? "sm:border-l sm:border-[#E5ECE6]" : ""
              }`}
            >
              <span className="text-xs font-extrabold tracking-widest text-[#83B394]">{num}</span>
              <div>
                <h3 className="text-sm font-bold text-[#294639]">{title}</h3>
                <p className="mt-1 text-xs text-[#87948C]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* School story */}
      <section id="our-story" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Where it all begins"
              title="A story built around possibility."
              text="Our story is rooted in the belief that the right learning environment can change how a child sees themselves — and the world around them."
            />

            <div className="mt-7 space-y-4 text-sm leading-7 text-[#748178]">
              <p>
                EAK International School represents a vision of education that
                places children at the centre of everything. We aim to combine
                strong academic foundations with the freedom to ask questions,
                explore interests and develop a sense of responsibility.
              </p>
              <p>
                Beyond textbooks and examinations, we want learning to inspire
                curiosity, build confidence and encourage students to treat
                others with respect. Every experience is an opportunity to
                discover a new strength or perspective.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#E4EBE5] bg-[#F5F8F5] p-5 sm:p-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#28764E] shadow-sm">
                  <Compass size={23} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#345345]">Our guiding belief</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#7A8880]">
                    When children feel safe to explore, encouraged to question
                    and supported to grow, learning becomes a lifelong journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-[#DDE9DF] sm:left-[19px]" />

            <div className="space-y-8 sm:space-y-10">
              {milestones.map((item, index) => (
                <article key={item.year} className="relative pl-8 sm:pl-14">
                  <span className="absolute left-[-5px] top-1 flex h-[11px] w-[11px] items-center justify-center rounded-full bg-[#32805B] ring-[5px] ring-[#E8F3EA] sm:left-[14px]" />

                  <div className="rounded-[22px] border border-[#E6ECE7] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BEDCC7] hover:shadow-lg hover:shadow-emerald-900/[0.04] sm:p-7">
                    <span className="inline-flex rounded-full bg-[#EAF5ED] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#28764E]">
                      {item.year}
                    </span>
                    <h3 className="mt-4 text-xl font-bold tracking-tight text-[#294639] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-7 text-[#7A8880]">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-7 pl-8 text-[10px] leading-5 text-[#98A39B] sm:pl-14">
              This school story is illustrative assignment content. Replace it
              with the institution's verified founding history and dates.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and mission */}
      <section className="bg-[#F3F7F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionTitle
            eyebrow="Our direction"
            title="A vision for tomorrow. A purpose for today."
            text="Our vision guides where we want to go. Our mission shapes what we do every day to help learners get there."
            center
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[26px] bg-[#173B30] p-7 sm:p-10 lg:p-12">
              <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border-[30px] border-white/[0.05] transition-transform duration-700 group-hover:scale-110" />
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#B6E5C4]">
                  <Target size={28} />
                </div>
                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A5D8B5]">Our vision</p>
                <h3 className="mt-3 max-w-md text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                  To inspire a generation that makes the world better.
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/65">
                  We aspire to nurture confident, compassionate and capable
                  individuals who think independently, embrace diversity and
                  contribute positively to their communities.
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-[#C5E8CE]">
                  <Sparkles size={16} /> Looking beyond today
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-[26px] border border-[#E1EAE2] bg-white p-7 sm:p-10 lg:p-12">
              <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border-[30px] border-[#EAF4EC] transition-transform duration-700 group-hover:scale-110" />
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF5ED] text-[#28764E]">
                  <Compass size={28} />
                </div>
                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#679A79]">Our mission</p>
                <h3 className="mt-3 max-w-md text-2xl font-semibold leading-snug tracking-tight text-[#234334] sm:text-3xl">
                  To make every learning experience meaningful.
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#748178]">
                  We strive to create an inclusive, engaging learning
                  environment that supports academic growth, encourages
                  curiosity, builds character and respects every learner's
                  individual potential.
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-[#28764E]">
                  <Heart size={16} /> Making a difference every day
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="our-values" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionTitle
              eyebrow="What guides us"
              title="Values that live beyond the classroom."
              text="Character is built through everyday choices. These principles guide the way we learn, work and grow together."
            />

            <div className="flex flex-wrap gap-2 lg:justify-end">
              {values.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => setActiveValue(index)}
                  className={`rounded-full px-4 py-2.5 text-xs font-bold transition ${
                    activeValue === index
                      ? "bg-[#176747] text-white shadow-md shadow-emerald-900/10"
                      : "border border-[#E4EBE5] bg-white text-[#61736A] hover:border-[#B8D8C2]"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon;
              const active = activeValue === index;

              return (
                <button
                  key={item.number}
                  onClick={() => setActiveValue(index)}
                  className={`group rounded-[22px] border p-6 text-left transition duration-300 sm:p-7 ${
                    active
                      ? "border-[#B8D9C1] bg-[#F4F9F5] shadow-lg shadow-emerald-900/[0.04]"
                      : "border-[#E6ECE7] bg-white hover:-translate-y-1 hover:border-[#C9DECE]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color} ${item.iconColor}`}>
                      <Icon size={23} />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-[#BAC7BD]">{item.number}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-[#294639]">{item.title}</h3>
                  <p className="mt-3 min-h-[72px] text-[13px] leading-6 text-[#7A8880]">{item.text}</p>
                  <div className={`mt-5 flex items-center gap-2 text-xs font-bold transition ${active ? "text-[#28764E]" : "text-[#92A197]"}`}>
                    Our guiding principle
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principal */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[28px] border border-[#E3EBE4] bg-white lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[350px] overflow-hidden bg-[#E4EEE5] sm:min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85"
              alt="Representative school leadership portrait"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15392A]/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xl font-bold text-white">The Principal</p>
              <p className="mt-1 text-xs text-white/75">School Leadership</p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <Eyebrow>A message from our principal</Eyebrow>
            <Quote size={34} className="mt-2 text-[#9BCBA9]" />

            <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.04em] text-[#234334] sm:text-3xl">
              “Let us help every child find the confidence to become their best self.”
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#748178]">
              <p>
                Dear Parents and Students, at EAK International School, we
                believe that education is a partnership between the school,
                the family and the learner. Our role is to provide a caring
                environment where curiosity is encouraged and effort is valued.
              </p>
              <p>
                We strive to help every student develop a strong academic
                foundation, a sense of responsibility and the confidence to
                navigate an ever-changing world. Together, we can make each
                school day an opportunity to grow.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-[#E7EDE8] pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF5ED] text-[#28764E]">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#345345]">Principal's Office</p>
                <p className="mt-1 text-xs text-[#87948C]">EAK International School</p>
              </div>
            </div>
            <p className="mt-5 text-[10px] leading-5 text-[#9BA69E]">
              Illustrative message and portrait; replace with the verified
              principal's name, photograph and approved message.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements and statistics */}
      <section className="bg-[#173B30] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A5D8B5]">
                <Trophy size={15} /> Progress worth celebrating
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                Every achievement starts with an opportunity.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">
                We celebrate academic effort, sporting spirit, creative
                thinking and the small daily victories that build confidence
                and character.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Academic", "Progress", BookOpen],
                ["Sports", "Participation", Trophy],
                ["Personal", "Growth", Heart],
              ].map(([title, label, Icon]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
                  <Icon size={24} className="text-[#A6DAB5]" />
                  <p className="mt-6 text-lg font-bold text-white">{title}</p>
                  <p className="mt-1 text-xs text-white/55">{label}</p>
                  <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-[#85C49A]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5 text-[10px] leading-5 text-white/40">
            Verified student counts, academic results, awards and institutional
            statistics should be added here when official information is available.
            No unverified figures are presented as school facts.
          </div>
        </div>
      </section>

      {/* Campus overview */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow="A place to belong"
                title="A campus designed for discovery."
                text="A positive learning environment is about more than classrooms. It is about the spaces, people and experiences that make students feel welcome and ready to explore."
              />

              <div className="mt-8 space-y-5">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#28764E]">
                        <Icon size={21} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#345345]">{item.title}</h3>
                        <p className="mt-1.5 text-[13px] leading-6 text-[#7A8880]">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a href="/#facilities" className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#28744D]">
                Explore our facilities
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 pt-8 sm:space-y-4 sm:pt-12">
                <div className="overflow-hidden rounded-[22px]">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85"
                    alt="Bright learning space"
                    className="h-[180px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[245px]"
                  />
                </div>
                <div className="rounded-[22px] bg-[#E9F4EB] p-5 sm:p-6">
                  <Leaf size={25} className="text-[#28764E]" />
                  <p className="mt-4 text-base font-bold text-[#294639]">Room to flourish</p>
                  <p className="mt-2 text-xs leading-5 text-[#718379]">Spaces that support wellbeing and exploration.</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-[22px] bg-[#FFF2E2] p-5 sm:p-6">
                  <Building2 size={25} className="text-[#B57A39]" />
                  <p className="mt-4 text-base font-bold text-[#5A4933]">Made for learning</p>
                  <p className="mt-2 text-xs leading-5 text-[#8B7D6B]">A welcoming environment for young minds.</p>
                </div>
                <div className="overflow-hidden rounded-[22px]">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=85"
                    alt="School building and campus environment"
                    className="h-[220px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[10px] leading-5 text-[#9BA69E]">
            Campus photographs are illustrative. Replace them with authentic
            photographs of EAK International School's campus and facilities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-[#DDEFE2] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-18">
          <div className="absolute -right-10 -top-24 h-72 w-72 rounded-full border-[45px] border-white/30" />
          <div className="absolute -bottom-32 right-[25%] h-72 w-72 rounded-full border-[45px] border-white/20" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <Eyebrow>Your journey starts here</Eyebrow>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#183B2B] sm:text-5xl">
                Get to know the EAK difference.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#597665] sm:text-base">
                Discover our learning approach, explore the campus and take the
                first step towards your child's next chapter.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="/#admissions" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#176747] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#10553A]">
                Explore Admissions
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#B8D5C0] bg-white/70 px-6 py-4 text-sm font-bold text-[#28563D] transition hover:bg-white">
                Contact Us <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
