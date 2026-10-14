
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Microscope,
  Palette,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  Users,
  Volleyball,
  Languages,
  Calculator,
  Atom,
  Compass,
  BookMarked,
} from "lucide-react";

const academicLevels = [
  {
    id: "primary",
    number: "01",
    label: "Primary",
    grades: "Grades I – V",
    title: "Building strong foundations.",
    description:
      "A joyful introduction to learning where curiosity, confidence and essential skills grow together.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85",
    color: "bg-[#E7F4E9]",
    iconColor: "text-[#28764E]",
    subjects: ["English", "Mathematics", "Environmental Studies", "Languages", "Art & Craft"],
    focus: ["Reading & communication", "Number confidence", "Creative exploration"],
  },
  {
    id: "middle",
    number: "02",
    label: "Middle School",
    grades: "Grades VI – VIII",
    title: "Curiosity becomes understanding.",
    description:
      "Students connect ideas across subjects, learn to ask better questions and begin thinking independently.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=85",
    color: "bg-[#EAF0FC]",
    iconColor: "text-[#5277BA]",
    subjects: ["English & Languages", "Mathematics", "Science", "Social Science", "Computer Studies"],
    focus: ["Problem-solving", "Collaborative projects", "Independent thinking"],
  },
  {
    id: "secondary",
    number: "03",
    label: "Secondary",
    grades: "Grades IX – X",
    title: "Turning knowledge into capability.",
    description:
      "A structured academic experience that develops subject mastery, analytical skills and exam readiness.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
    color: "bg-[#FFF0DF]",
    iconColor: "text-[#B77B38]",
    subjects: ["Languages", "Mathematics", "Science", "Social Science", "Information Technology"],
    focus: ["Conceptual clarity", "Assessment practice", "Time management"],
  },
  {
    id: "senior",
    number: "04",
    label: "Senior Secondary",
    grades: "Grades XI – XII",
    title: "Preparing for what comes next.",
    description:
      "Deeper subject exploration helps students prepare for higher education, career choices and lifelong learning.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85",
    color: "bg-[#F4EAF8]",
    iconColor: "text-[#9164A7]",
    subjects: ["Science", "Commerce", "Humanities", "Languages", "Elective Subjects"],
    focus: ["Advanced subject study", "Career exploration", "Research & presentations"],
  },
];

const curriculumAreas = [
  {
    icon: Languages,
    title: "Languages & Communication",
    description: "Reading, writing, speaking and expressing ideas with clarity.",
    tag: "Expression",
  },
  {
    icon: Calculator,
    title: "Mathematics",
    description: "Logical reasoning, numerical fluency and practical problem-solving.",
    tag: "Reasoning",
  },
  {
    icon: Atom,
    title: "Science",
    description: "Understanding the world through observation, experiments and inquiry.",
    tag: "Discovery",
  },
  {
    icon: Compass,
    title: "Social Sciences",
    description: "Exploring history, geography, society, citizenship and the world around us.",
    tag: "Perspective",
  },
  {
    icon: BookMarked,
    title: "Humanities & Commerce",
    description: "Developing an understanding of people, society, business and economic ideas.",
    tag: "Application",
  },
  {
    icon: Microscope,
    title: "Technology & Digital Skills",
    description: "Building digital awareness, responsible technology use and future-ready skills.",
    tag: "Innovation",
  },
];

const teachingMethods = [
  {
    icon: Brain,
    number: "01",
    title: "Concept-first learning",
    description:
      "Build understanding through clear explanations, examples and real-world connections.",
  },
  {
    icon: Users,
    number: "02",
    title: "Collaborative learning",
    description:
      "Group activities and discussions help students listen, share ideas and work as a team.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Learning by doing",
    description:
      "Projects, practical activities and guided exploration connect knowledge with experience.",
  },
  {
    icon: Target,
    number: "04",
    title: "Continuous feedback",
    description:
      "Regular practice and constructive feedback help identify strengths and areas for improvement.",
  },
];

const activities = [
  {
    icon: FlaskConical,
    title: "Science & Discovery",
    description: "Experiments, demonstrations and curiosity-led projects.",
    bg: "bg-[#E6F3EA]",
    color: "text-[#28764E]",
  },
  {
    icon: Palette,
    title: "Arts & Creativity",
    description: "Art, music, performance and opportunities for expression.",
    bg: "bg-[#F8EAF0]",
    color: "text-[#A85277]",
  },
  {
    icon: Volleyball,
    title: "Sports & Fitness",
    description: "Movement, teamwork, discipline and a healthy competitive spirit.",
    bg: "bg-[#FFF0DE]",
    color: "text-[#B87C34]",
  },
  {
    icon: Rocket,
    title: "Clubs & Leadership",
    description: "Student-led initiatives, presentations and collaborative challenges.",
    bg: "bg-[#E9EDFC]",
    color: "text-[#5C70BB]",
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
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#18362C] sm:text-4xl lg:text-[46px]">
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

export default function Academics() {
  const [activeLevel, setActiveLevel] = useState("primary");
  const selectedLevel =
    academicLevels.find((level) => level.id === activeLevel) ||
    academicLevels[0];

  return (
    <main className="overflow-hidden bg-[#FCFDFB] text-[#20332D]">
      {/* Hero */}
      <section className="relative px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24">
        <div className="absolute right-0 top-0 -z-0 h-[400px] w-[400px] rounded-full bg-[#E9F4EB] blur-[100px]" />

        <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold text-[#829087]">
              <a href="/" className="transition hover:text-[#28764E]">Home</a>
              <ChevronRight size={13} />
              <span className="text-[#28764E]">Academics</span>
            </div>

            <Eyebrow>Learn with purpose</Eyebrow>

            <h1 className="max-w-[650px] text-[43px] font-semibold leading-[1.08] tracking-[-0.065em] text-[#18362C] sm:text-6xl lg:text-[68px]">
              Knowledge today.
              <br />
              <span className="text-[#287A55]">Possibilities tomorrow.</span>
            </h1>

            <p className="mt-7 max-w-[520px] text-[15px] leading-8 text-[#6B7972] sm:text-[17px]">
              Every learner has a different way of discovering the world.
              Our academic approach aims to build strong foundations,
              encourage independent thinking and prepare students for what
              comes next.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#academic-levels"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#176747] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#10553A]"
              >
                Explore Academics
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E0E9E2] bg-white px-5 py-4 text-sm font-bold text-[#345345] transition hover:border-[#A9CDB3]"
              >
                Our Curriculum
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E7EDE8] pt-6">
              <span className="flex items-center gap-2 text-xs font-semibold text-[#61736A]">
                <CheckCircle2 size={16} className="text-[#32805B]" />
                Strong foundations
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold text-[#61736A]">
                <CheckCircle2 size={16} className="text-[#32805B]" />
                Whole-child learning
              </span>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="overflow-hidden rounded-[28px] border-[7px] border-white shadow-[0_25px_80px_-25px_rgba(35,74,53,0.22)] sm:rounded-[34px]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=90"
                alt="Students learning in a classroom"
                className="h-[350px] w-full object-cover sm:h-[460px] lg:h-[520px]"
              />
            </div>

            <div className="absolute -bottom-6 left-4 max-w-[260px] rounded-2xl border border-[#E8EFE9] bg-white p-4 shadow-xl shadow-emerald-900/[0.07] sm:-left-7 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F4EA] text-[#28764E]">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#294639]">Learning for life</p>
                  <p className="mt-1 text-[11px] text-[#839087]">Skills beyond the classroom</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-8 flex h-[74px] w-[74px] items-center justify-center rounded-[22px] bg-[#176747] text-white shadow-xl sm:-right-5 sm:h-[90px] sm:w-[90px]">
              <div className="text-center">
                <Sparkles size={24} className="mx-auto" />
                <p className="mt-1.5 text-[9px] font-bold uppercase tracking-widest">Explore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic levels */}
      <section id="academic-levels" className="scroll-mt-24 border-y border-[#E5ECE6] bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionTitle
            eyebrow="Your learning journey"
            title="One journey. Four stages of growth."
            text="Explore how each stage supports students as their knowledge, confidence and independence develop."
            center
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {academicLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level.id)}
                className={`rounded-full px-4 py-3 text-xs font-bold transition sm:px-5 ${
                  activeLevel === level.id
                    ? "bg-[#176747] text-white shadow-md shadow-emerald-900/10"
                    : "border border-[#E2EAE3] bg-white text-[#63746A] hover:border-[#B7D6C0]"
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid overflow-hidden rounded-[26px] border border-[#E3EBE4] bg-[#F7F9F6] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[480px]">
              <img
                src={selectedLevel.image}
                alt={`${selectedLevel.label} students`}
                className="absolute inset-0 h-full w-full object-cover transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173B30]/75 via-[#173B30]/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">
                  {selectedLevel.grades}
                </span>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {selectedLevel.label}
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold tracking-[0.2em] text-[#91B89B]">
                  STAGE {selectedLevel.number}
                </span>
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${selectedLevel.color} ${selectedLevel.iconColor}`}>
                  <BookOpen size={21} />
                </div>
              </div>

              <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-[#234334] sm:text-3xl">
                {selectedLevel.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#748178]">
                {selectedLevel.description}
              </p>

              <div className="mt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#7D8D82]">
                  Learning focus
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedLevel.focus.map((focus) => (
                    <span
                      key={focus}
                      className="rounded-full border border-[#DFE9E0] bg-white px-3 py-2 text-[11px] font-semibold text-[#557061]"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t border-[#E2EAE3] pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#7D8D82]">
                  Key subject areas
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selectedLevel.subjects.map((subject) => (
                    <div key={subject} className="flex items-center gap-2 text-xs font-medium text-[#536B5D]">
                      <CheckCircle2 size={14} className="shrink-0 text-[#4D9868]" />
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-[10px] leading-5 text-[#9BA69E]">
            Grade structure, subjects and available streams should be aligned
            with the school's officially approved curriculum.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionTitle
              eyebrow="What we learn"
              title="A curriculum that connects ideas to life."
              text="A balanced curriculum brings together essential academic disciplines, practical understanding and the ability to think critically."
            />
            <div className="flex items-center gap-3 rounded-2xl border border-[#E4EBE5] bg-white p-4 sm:p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#28764E]">
                <BookMarked size={23} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#345345]">Connected learning</p>
                <p className="mt-1 text-xs leading-5 text-[#829087]">
                  Knowledge, skills and real-world application working together.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {curriculumAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group rounded-[22px] border border-[#E4EBE5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B9D8C1] hover:shadow-xl hover:shadow-emerald-900/[0.04] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5ED] text-[#28764E] transition duration-300 group-hover:bg-[#176747] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#B1BFB5]">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#78A087]">
                    {area.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-[#294639]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#7A8880]">
                    {area.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#8B9C90] transition group-hover:text-[#28764E]">
                    Explore and discover
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching methodology */}
      <section className="bg-[#F3F7F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="How we teach"
                title="Less memorising. More meaningful learning."
                text="We aim to make the classroom an active learning space where students participate, experiment, discuss and reflect."
              />

              <div className="mt-8 overflow-hidden rounded-[22px]">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85"
                  alt="Teacher engaging with students in a classroom"
                  className="h-[250px] w-full object-cover sm:h-[310px]"
                />
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#E0E9E1] bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#28764E]">
                  <Brain size={20} />
                </div>
                <p className="text-xs leading-6 text-[#6D7D72]">
                  The goal is to help students understand <strong className="text-[#345345]">why</strong> something works, not only remember <strong className="text-[#345345]">what</strong> it is.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {teachingMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <article
                    key={method.number}
                    className="group flex gap-4 rounded-[22px] border border-[#E3EBE4] bg-white p-5 transition duration-300 hover:border-[#B8D8C1] sm:gap-5 sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF5ED] text-[#28764E] transition group-hover:bg-[#176747] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-[#294639]">{method.title}</h3>
                        <span className="text-[10px] font-bold tracking-widest text-[#A4B4A8]">{method.number}</span>
                      </div>
                      <p className="mt-2 text-[13px] leading-6 text-[#7A8880]">{method.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionTitle
            eyebrow="Beyond textbooks"
            title="Space to discover what makes you, you."
            text="School life is also about finding a passion, learning to collaborate and discovering new strengths outside traditional lessons."
            center
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <article
                  key={activity.title}
                  className="group rounded-[22px] border border-[#E4EBE5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/[0.04] sm:p-7"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${activity.bg} ${activity.color} transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105`}>
                    <Icon size={25} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold tracking-tight text-[#294639]">
                    {activity.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#7A8880]">
                    {activity.description}
                  </p>
                  <div className="mt-6 h-px w-full bg-[#E8EEE9]" />
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#728579]">
                    <Sparkles size={14} className="text-[#4E9768]" />
                    Learning beyond lessons
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic achievements */}
      <section className="bg-[#173B30] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A5D8B5]">
                <Trophy size={16} /> Academic excellence
              </div>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl lg:text-[46px]">
                Celebrate the effort. Recognise the progress.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/65">
                Achievement is more than a final score. It includes steady
                improvement, asking thoughtful questions, solving difficult
                problems and having the confidence to try again.
              </p>

              <a
                href="/#contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-4 text-sm font-bold text-[#214D37] transition hover:-translate-y-1 hover:bg-[#EAF5ED]"
              >
                Learn About Our School
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-6 sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#B6E5C4]">
                  <BookOpen size={23} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">Academic Growth</h3>
                <p className="mt-2 text-xs leading-6 text-white/55">
                  Building strong concepts, effective study habits and a
                  commitment to continuous improvement.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-6 sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#B6E5C4]">
                  <Trophy size={23} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">Recognition</h3>
                <p className="mt-2 text-xs leading-6 text-white/55">
                  Celebrating student effort, participation, milestones and
                  accomplishments.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-6 sm:p-7 sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#B6E5C4]">
                    <GraduationCap size={23} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Preparing for the next step</h3>
                    <p className="mt-2 text-xs leading-6 text-white/55">
                      Developing the knowledge, confidence and decision-making
                      skills students need for higher education and future
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 border-t border-white/10 pt-5 text-[10px] leading-5 text-white/40">
            Official examination results, awards, rankings and achievement
            figures can be added here once verified school records are available.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-[#DDEFE2] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-10 -top-24 h-72 w-72 rounded-full border-[45px] border-white/30" />
          <div className="absolute -bottom-32 right-[25%] h-72 w-72 rounded-full border-[45px] border-white/20" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <Eyebrow>Start the journey</Eyebrow>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#183B2B] sm:text-5xl">
                Every great future starts with learning.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#597665] sm:text-base">
                Discover how EAK International School can support your child's
                learning journey, interests and ambitions.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/#admissions"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#176747] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#10553A]"
              >
                Explore Admissions
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#B8D5C0] bg-white/70 px-6 py-4 text-sm font-bold text-[#28563D] transition hover:bg-white"
              >
                Contact Us <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
