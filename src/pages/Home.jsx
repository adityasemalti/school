
"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Bus,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Heart,
  Laptop,
  Library,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";

const strengths = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Academic Excellence",
    description:
      "A thoughtfully designed curriculum that builds strong foundations and prepares students for tomorrow.",
  },
  {
    icon: Heart,
    number: "02",
    title: "Learning with Care",
    description:
      "Every child is understood, encouraged and supported to discover their own strengths.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Safe & Secure Campus",
    description:
      "A welcoming, secure environment where students feel confident to learn, explore and grow.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Beyond the Classroom",
    description:
      "Sports, creativity, leadership and collaboration shape confident, well-rounded individuals.",
  },
];

const academics = [
  {
    level: "01",
    title: "Primary School",
    grades: "Grades I – V",
    description:
      "Building curiosity, essential skills and a lifelong love of learning.",
    color: "bg-[#EAF3FF]",
    iconColor: "text-[#3569B7]",
    icon: BookOpen,
  },
  {
    level: "02",
    title: "Middle School",
    grades: "Grades VI – VIII",
    description:
      "Discovering new interests through exploration, collaboration and critical thinking.",
    color: "bg-[#E9F5EF]",
    iconColor: "text-[#2D7956]",
    icon: Microscope,
  },
  {
    level: "03",
    title: "Secondary School",
    grades: "Grades IX – X",
    description:
      "Developing subject mastery, confidence and independent thinking.",
    color: "bg-[#FFF0E4]",
    iconColor: "text-[#B56B32]",
    icon: GraduationCap,
  },
  {
    level: "04",
    title: "Senior Secondary",
    grades: "Grades XI – XII",
    description:
      "Preparing for higher education, career choices and the wider world.",
    color: "bg-[#F0EAFE]",
    iconColor: "text-[#7955B4]",
    icon: Laptop,
  },
];

const facilities = [
  {
    icon: Laptop,
    title: "Smart Classrooms",
    text: "Interactive learning powered by modern educational technology.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: Microscope,
    title: "Science Laboratories",
    text: "Hands-on experiments that turn questions into discoveries.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: Library,
    title: "Learning Library",
    text: "A welcoming space to read, research and imagine.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: Trophy,
    title: "Sports & Wellness",
    text: "Building teamwork, discipline and healthy habits every day.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
  },
];

const notices = [
  {
    category: "ADMISSIONS",
    date: "15 OCT",
    title: "Admissions open for the upcoming academic session",
    text: "Discover our learning programmes and begin your admission inquiry.",
    color: "bg-[#E9F5EF] text-[#2D7956]",
  },
  {
    category: "ACADEMICS",
    date: "18 OCT",
    title: "Parent–Teacher Interaction Day",
    text: "Connect with our faculty to discuss your child's learning journey.",
    color: "bg-[#EAF3FF] text-[#3569B7]",
  },
  {
    category: "EVENTS",
    date: "24 OCT",
    title: "Annual inter-house sports meet",
    text: "A celebration of sportsmanship, teamwork and determination.",
    color: "bg-[#FFF0E4] text-[#B56B32]",
  },
];

const events = [
  {
    day: "24",
    month: "OCT",
    type: "SPORTS",
    title: "Inter-House Sports Meet",
    text: "A day of teamwork, energy and friendly competition.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
  },
  {
    day: "31",
    month: "OCT",
    type: "CULTURE",
    title: "Colours of Culture",
    text: "Celebrating traditions, creativity and our diverse community.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
  },
  {
    day: "08",
    month: "NOV",
    type: "LEARNING",
    title: "Young Innovators Expo",
    text: "Student ideas, inspiring experiments and exciting discoveries.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",
  },
];

const testimonials = [
  {
    quote:
      "What we value most is how the school focuses on our child's confidence, curiosity and character, alongside academics.",
    name: "A Parent",
    role: "Parent of a Primary School Student",
    initials: "P",
  },
  {
    quote:
      "The teachers encourage us to ask questions, try new things and learn from our mistakes. It makes learning exciting.",
    name: "A Student",
    role: "Middle School Student",
    initials: "S",
  },
  {
    quote:
      "The balance between studies, activities and personal growth is exactly what we wanted for our child.",
    name: "A Parent",
    role: "Parent of a Senior Student",
    initials: "P",
  },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.19em] text-emerald-800">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#172C28] sm:text-4xl lg:text-[48px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#697873] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function Brand({ light = false }) {
  return (
    <a href="/" className="flex shrink-0 items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#176747] text-white shadow-sm">
        <GraduationCap size={24} strokeWidth={1.8} />
      </div>
      <div>
        <p
          className={`text-[16px] font-extrabold leading-tight tracking-[-0.04em] ${
            light ? "text-white" : "text-[#173B30]"
          }`}
        >
          EAK International
        </p>
        <p
          className={`mt-1 text-[9px] font-bold uppercase tracking-[0.23em] ${
            light ? "text-white/55" : "text-[#87938D]"
          }`}
        >
          School · Learn to lead
        </p>
      </div>
    </a>
  );
}

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const navItems = [
    ["Home", "/"],
    ["About", "/about"],
    ["Academics", "/academics"],
    ["Facilities", "/facilities"],
    ["Campus Life", "/events"],
    ["Contact", "/contact"],
  ];

  return (
    <main id="home" className="min-h-screen overflow-hidden bg-[#FCFDFB] text-[#20332D]">


      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1fr_1.03fr] lg:gap-14 lg:px-12 lg:pb-24 lg:pt-20">
          <div className="relative z-10 animate-fade-up">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#DCE9E0] bg-white px-4 py-2.5 shadow-sm shadow-emerald-900/[0.03]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E5F5EA] text-[#176747]">
                <Sparkles size={13} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#456B59]">
                A brighter future begins here
              </span>
            </div>

            <h1 className="max-w-[650px] text-[44px] font-semibold leading-[1.08] tracking-[-0.065em] text-[#18362C] sm:text-6xl lg:text-[70px]">
              Little steps.
              <br />
              <span className="relative inline-block text-[#287A55]">
                Big possibilities.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 360 13"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C92 2 251 1 356 7"
                    stroke="#B4DEC2"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-[510px] text-[15px] leading-8 text-[#6B7972] sm:text-[17px]">
              At EAK International School, we nurture curious minds, kind hearts
              and confident learners — preparing every child to make a
              meaningful difference in the world.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/admissions"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#176747] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition duration-300 hover:-translate-y-1 hover:bg-[#10553A] hover:shadow-xl"
              >
                Begin Your Journey
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E1E9E3] bg-white px-6 py-4 text-sm font-bold text-[#345345] transition hover:border-[#9CC8AA] hover:bg-[#F7FBF8]"
              >
                Discover Our School
                <ArrowDownRight size={17} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#E8EDE9] pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#61736A]">
                <CheckCircle2 size={16} className="text-[#32805B]" />
                Child-centred learning
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#61736A]">
                <CheckCircle2 size={16} className="text-[#32805B]" />
                Holistic development
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -right-4 -top-5 h-32 w-32 rounded-full bg-[#DCEFE1] blur-2xl sm:-right-8 sm:-top-8" />
            <div className="absolute -bottom-7 -left-5 h-36 w-36 rounded-full bg-[#F4EAD9] blur-2xl" />

            <div className="relative">
              <div className="overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_25px_80px_-25px_rgba(35,74,53,0.24)] sm:rounded-[34px] sm:border-[8px]">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=90"
                  alt="Bright and welcoming school campus"
                  className="h-[350px] w-full object-cover transition duration-700 hover:scale-[1.035] sm:h-[470px] lg:h-[535px]"
                />
                <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-[#122A20]/45 via-transparent to-transparent sm:rounded-[26px]" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="max-w-[260px]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
                      Our learning philosophy
                    </p>
                    <p className="mt-2 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                      A place to belong.
                      <br />
                      A place to become.
                    </p>
                  </div>
                  <a
                    href="#about"
                    aria-label="Discover our school"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#176747] transition hover:scale-110"
                  >
                    <ArrowUpRight size={21} />
                  </a>
                </div>
              </div>

              <div className="absolute -left-3 top-7 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-xl shadow-[#254C36]/10 backdrop-blur sm:-left-8 sm:top-12 sm:p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F4E9] text-[#26754D]">
                  <Heart size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#294639]">Every child matters</p>
                  <p className="mt-1 text-[10px] text-[#819087]">Learning with purpose</p>
                </div>
              </div>

              <div className="absolute -bottom-6 right-3 rounded-2xl border border-white bg-white p-4 shadow-xl shadow-[#254C36]/10 sm:-right-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF2DE] text-[#A96B28]">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#294639]">Learn. Grow. Thrive.</p>
                    <p className="mt-1 text-[10px] text-[#819087]">Every day, a new possibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-[#E7EDE8] bg-white">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 divide-x divide-y divide-[#E7EDE8] px-5 sm:grid-cols-4 sm:divide-y-0 sm:px-8 lg:px-12">
            {[
              ["01", "Curiosity first", "A love for learning"],
              ["02", "Every child", "A unique journey"],
              ["03", "Values always", "Character matters"],
              ["04", "Future ready", "Skills for life"],
            ].map(([number, title, sub]) => (
              <div key={number} className="flex items-center gap-3 px-3 py-5 sm:py-6 lg:gap-4 lg:px-6">
                <span className="text-xs font-extrabold text-[#72A989]">{number}</span>
                <div>
                  <p className="text-sm font-bold text-[#294639]">{title}</p>
                  <p className="mt-1 text-[11px] text-[#87948C]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="The EAK difference"
              title="More than a school."
              description="We bring together inspiring teaching, meaningful experiences and a community that helps every learner find their potential."
            />
            <a
              href="#about"
              className="group inline-flex shrink-0 items-center gap-2 self-start pb-1 text-sm font-bold text-[#236A48] transition hover:text-[#12452E] md:self-auto"
            >
              What makes us different
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.number}
                  className="group rounded-[22px] border border-[#E7EDE8] bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-[#BEDCC7] hover:shadow-[0_18px_45px_-25px_rgba(28,83,52,0.23)] sm:p-7"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5ED] text-[#26764D] transition duration-300 group-hover:scale-105 group-hover:bg-[#176747] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-[#BCC9C0]">{item.number}</span>
                  </div>
                  <h3 className="mt-8 text-[18px] font-bold tracking-tight text-[#264538]">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#7A8880]">{item.description}</p>
                  <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#E3EBE5] text-[#6D9C7D] transition group-hover:border-[#176747] group-hover:bg-[#176747] group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 bg-[#F3F7F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[26px] sm:rounded-[32px]">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85"
                alt="Students enjoying a positive learning environment"
                className="h-[340px] w-full object-cover sm:h-[490px]"
              />
            </div>
            <div className="absolute -bottom-6 right-4 max-w-[245px] rounded-2xl border border-white bg-white p-5 shadow-xl shadow-emerald-900/10 sm:-right-5 sm:p-6">
              <p className="text-3xl font-semibold tracking-tight text-[#246C49]">Every day</p>
              <p className="mt-2 text-xs leading-5 text-[#738178]">
                An opportunity to discover something new and become a little more confident.
              </p>
            </div>
            <div className="absolute -left-3 -top-4 -z-0 h-24 w-24 rounded-3xl border border-[#D3E5D8] sm:-left-6 sm:-top-6 sm:h-32 sm:w-32" />
          </div>

          <div className="pt-3 lg:pt-0">
            <SectionHeading
              eyebrow="Welcome to EAK"
              title="Growing minds. Shaping futures."
              description="Education should do more than prepare students for exams. It should prepare them for life."
            />
            <p className="mt-6 text-[14px] leading-7 text-[#748178]">
              EAK International School is built around a simple belief: every child deserves an environment where they feel valued, challenged and inspired. Our approach brings academic learning, personal development and real-world skills together.
            </p>
            <p className="mt-4 text-[14px] leading-7 text-[#748178]">
              Through caring educators, engaging lessons and opportunities beyond the classroom, we aim to help students become thoughtful individuals, responsible citizens and lifelong learners.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {[
                "Individual attention",
                "Learning by doing",
                "Strong values",
                "Confident learners",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5 text-[12px] font-semibold text-[#405D4C] sm:text-[13px]">
                  <CheckCircle2 size={17} className="shrink-0 text-[#39845A]" />
                  {text}
                </div>
              ))}
            </div>

            <a
              href="#academics"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#176747] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#10553A]"
            >
              Get to Know EAK
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section id="academics" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Learning for every stage"
            title="Every age. Every possibility."
            description="A supportive learning journey that evolves with your child — from foundational skills to future-focused thinking."
            centered
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {academics.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.level}
                  className="group overflow-hidden rounded-[22px] border border-[#E7EDE8] bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#214A30]/[0.07]"
                >
                  <div className={`relative flex h-[155px] items-center justify-center ${item.color}`}>
                    <span className="absolute left-5 top-5 text-[11px] font-extrabold tracking-[0.16em] text-[#6E8A79]">{item.level} / 04</span>
                    <div className={`flex h-[76px] w-[76px] items-center justify-center rounded-[24px] bg-white/80 shadow-sm transition duration-300 group-hover:scale-110 ${item.iconColor}`}>
                      <Icon size={34} strokeWidth={1.5} />
                    </div>
                    <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-[#789084]">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#799184]">{item.grades}</span>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-[#264538]">{item.title}</h3>
                    <p className="mt-3 min-h-[66px] text-[13px] leading-6 text-[#7A8880]">{item.description}</p>
                    <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#28744D] transition hover:gap-3">
                      Explore learning <ArrowRight size={15} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-[22px] bg-[#173B30] p-6 sm:flex-row sm:items-center sm:p-8 lg:px-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A6D7B6]">Our approach</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">Strong foundations. Open minds. Bright futures.</h3>
              <p className="mt-2 text-sm text-white/60">Academic rigour balanced with creativity, wellbeing and character.</p>
            </div>
            <a href="/admissions" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#1A5439] transition hover:bg-[#E7F5EB]">
              Find your programme <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="scroll-mt-24 bg-[#F3F7F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Spaces that inspire"
              title="Room to learn. Space to grow."
              description="Thoughtfully designed spaces make every day an opportunity to explore, experiment, move and create."
            />
            <a href="#contact" className="group inline-flex shrink-0 items-center gap-2 self-start pb-1 text-sm font-bold text-[#236A48] transition hover:text-[#12452E] md:self-auto">
              Explore our campus <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {facilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group grid overflow-hidden rounded-[22px] border border-[#E3EAE4] bg-white sm:grid-cols-[0.92fr_1fr]">
                  <div className={`relative min-h-[210px] overflow-hidden ${index % 2 === 0 ? "sm:order-1" : "sm:order-2"}`}>
                    <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10291C]/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[#26764D] shadow-sm">
                      <Icon size={21} />
                    </div>
                  </div>
                  <div className={`flex flex-col justify-center p-6 sm:p-7 ${index % 2 === 0 ? "sm:order-2" : "sm:order-1"}`}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#7EA18A]">Our facilities</span>
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-[#264538]">{item.title}</h3>
                    <p className="mt-3 text-[13px] leading-6 text-[#7A8880]">{item.text}</p>
                    <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#28744D]">
                      Discover more <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              [Bus, "Safe Transport", "A dependable journey to and from school."],
              [Users, "Student Wellbeing", "A caring, inclusive school community."],
              [Zap, "Technology & Innovation", "Digital tools that enrich learning."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-[#E3EAE4] bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#26764D]">
                  <Icon size={21} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#345345]">{title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-[#7A8880]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's message */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[28px] bg-[#173B30] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
              alt="Representative school leadership portrait"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15392A]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-lg font-bold text-white">The Principal</p>
              <p className="mt-1 text-xs text-white/70">School Leadership</p>
            </div>
          </div>

          <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <Quote size={36} className="text-[#8BC7A0]" />
            <p className="mt-6 text-[25px] font-medium leading-[1.4] tracking-[-0.04em] text-white sm:text-[31px]">
              “Our purpose is not simply to educate students, but to help them discover who they can become.”
            </p>
            <p className="mt-6 text-sm leading-7 text-white/65">
              At EAK International School, we believe every child carries extraordinary potential. Our responsibility is to provide the guidance, encouragement and opportunities that help that potential flourish — academically, socially and emotionally.
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#C2E9CF]">
                <GraduationCap size={23} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Principal's Office</p>
                <p className="mt-1 text-xs text-white/50">EAK International School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="rounded-[26px] border border-[#E4EBE5] bg-white p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Celebrating progress"
                  title="Every milestone matters."
                  description="We celebrate the effort, resilience and curiosity that help our students keep moving forward."
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  [Award, "Academic Growth", "Recognising dedication, progress and a passion for learning."],
                  [Trophy, "Sports & Teamwork", "Celebrating perseverance, fair play and team spirit."],
                  [Sparkles, "Creative Thinking", "Giving original ideas and student innovation a stage."],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-2xl bg-[#F4F8F4] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#28764E] shadow-sm">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-sm font-bold text-[#345345]">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#7A8880]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-7 border-t border-[#E7EDE8] pt-5 text-[11px] leading-5 text-[#929D95]">
              Our school profile and achievements will be updated with verified institutional information.
            </p>
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="bg-[#F3F7F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="The school bulletin"
              title="The latest from EAK."
              description="Important updates and announcements to help families stay connected with school life."
            />
            <a href="#events" className="group inline-flex shrink-0 items-center gap-2 self-start text-sm font-bold text-[#236A48] sm:self-auto">
              All updates <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {notices.map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[#E4EBE5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/[0.04] sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className={`rounded-full px-3 py-1.5 text-[9px] font-extrabold tracking-[0.13em] ${item.color}`}>{item.category}</span>
                  <span className="text-[11px] font-bold tracking-wide text-[#839188]">{item.date}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight text-[#2C493A]">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-[#7A8880]">{item.text}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#28744D]">
                  Read announcement <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Life at EAK"
            title="Learning happens everywhere."
            description="From the playing field to the stage and the science lab, there is always something to look forward to."
          />

          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {events.map((event) => (
              <article key={event.title} className="group overflow-hidden rounded-[22px] border border-[#E5ECE6] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/[0.06]">
                <div className="relative h-[220px] overflow-hidden">
                  <img src={event.image} alt={event.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10291C]/40 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-[58px] w-[55px] flex-col items-center justify-center rounded-xl bg-white text-[#275B40] shadow-lg">
                    <span className="text-xl font-extrabold leading-none">{event.day}</span>
                    <span className="mt-1 text-[9px] font-bold tracking-[0.16em]">{event.month}</span>
                  </div>
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-extrabold tracking-[0.15em] text-[#2C6545] backdrop-blur">{event.type}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold tracking-tight text-[#2C493A]">{event.title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#7A8880]">{event.text}</p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#28744D]">
                    Event details <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F3F7F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <SectionHeading
            eyebrow="Our community speaks"
            title="A journey we take together."
            description="A supportive school community makes the difference. We value the trust and partnership of every family."
          />

          <div className="rounded-[26px] border border-[#E1EAE2] bg-white p-7 sm:p-10">
            <div className="flex items-center justify-between">
              <div className="flex gap-1 text-[#D49A42]">
                {[1, 2, 3, 4, 5].map((n) => <Star key={n} size={16} fill="currentColor" strokeWidth={1} />)}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#9BA69E]">
                Community voices
              </span>
            </div>

            <Quote size={34} className="mt-7 text-[#C0DFC9]" />
            <p className="mt-4 min-h-[108px] text-xl font-medium leading-8 tracking-[-0.025em] text-[#365444] sm:text-[23px]">
              “{testimonials[activeTestimonial].quote}”
            </p>

            <div className="mt-8 flex flex-col justify-between gap-5 border-t border-[#E7EDE8] pt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F4EB] text-sm font-extrabold text-[#28764E]">
                  {testimonials[activeTestimonial].initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#345345]">{testimonials[activeTestimonial].name}</p>
                  <p className="mt-1 text-[11px] text-[#87948C]">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.role}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${index === activeTestimonial ? "w-7 bg-[#28764E]" : "w-2 bg-[#D8E4DA] hover:bg-[#A9CDB3]"}`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-5 text-[10px] leading-5 text-[#9BA69E]">
              Illustrative sample testimonials for the frontend assignment; replace with approved, genuine feedback before launch.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-[#DDEFE2] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-10 -top-24 h-72 w-72 rounded-full border-[45px] border-white/30" />
          <div className="absolute -bottom-32 right-[25%] h-72 w-72 rounded-full border-[45px] border-white/20" />
          <div className="relative z-10 grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[700px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDCC7] bg-white/60 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#28764E]">
                <Sparkles size={14} /> Your child's next chapter
              </div>
              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#183B2B] sm:text-5xl lg:text-[56px]">
                Their future is full of possibilities.
              </h2>
              <p className="mt-5 max-w-[570px] text-sm leading-7 text-[#597665] sm:text-base">
                Take the first step towards a school experience built on curiosity, confidence and care. We would love to help you discover if EAK is the right fit for your family.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#176747] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#10553A]">
                Admission Inquiry <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#B8D5C0] bg-white/70 px-6 py-4 text-sm font-bold text-[#28563D] transition hover:bg-white">
                <Phone size={16} /> Talk to our team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section id="contact" className="scroll-mt-24 px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-4 sm:grid-cols-3">
          <a href="mailto:admissions@eakschool.example" className="group flex items-center gap-4 rounded-2xl border border-[#E5ECE6] bg-white p-5 transition hover:border-[#BEDCC7]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#26764D]">
              <Mail size={21} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#345345]">Email us</p>
              <p className="mt-1 break-all text-xs text-[#7A8880]">admissions@eakschool.example</p>
            </div>
            <ArrowUpRight size={16} className="ml-auto shrink-0 text-[#92A297] transition group-hover:text-[#28764E]" />
          </a>
          <a href="tel:+910000000000" className="group flex items-center gap-4 rounded-2xl border border-[#E5ECE6] bg-white p-5 transition hover:border-[#BEDCC7]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#26764D]">
              <Phone size={21} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#345345]">Call our office</p>
              <p className="mt-1 text-xs text-[#7A8880]">Contact details to be updated</p>
            </div>
            <ArrowUpRight size={16} className="ml-auto shrink-0 text-[#92A297] transition group-hover:text-[#28764E]" />
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-[#E5ECE6] bg-white p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#26764D]">
              <MapPin size={21} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#345345]">Visit our campus</p>
              <p className="mt-1 text-xs text-[#7A8880]">School address to be updated</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
