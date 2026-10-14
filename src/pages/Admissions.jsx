


import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  FileText,
  CalendarDays,
  Clock3,
  GraduationCap,
  HeartHandshake,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  School,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
  BookOpen,
  MessageCircle,
  X,
} from "lucide-react";

const admissionSteps = [
  {
    number: "01",
    title: "Enquiry",
    duration: "Start here",
    icon: MessageCircle,
    description:
      "Connect with our admissions team to learn about the school, available grades and admission requirements.",
    action: "Make an enquiry",
  },
  {
    number: "02",
    title: "Application",
    duration: "Submit details",
    icon: FileText,
    description:
      "Complete the application with the student's details and the documents requested by the school.",
    action: "Prepare documents",
  },
  {
    number: "03",
    title: "Interaction / Assessment",
    duration: "Get acquainted",
    icon: Users,
    description:
      "Depending on the grade, the school may arrange an age-appropriate interaction or learning assessment.",
    action: "Understand the next step",
  },
  {
    number: "04",
    title: "Selection",
    duration: "Application review",
    icon: ClipboardCheck,
    description:
      "The admissions team reviews the application and communicates the decision and any next steps.",
    action: "Await communication",
  },
  {
    number: "05",
    title: "Enrollment",
    duration: "Welcome aboard",
    icon: GraduationCap,
    description:
      "Complete the required formalities and receive the information needed to prepare for the school year.",
    action: "Get ready for school",
  },
];

const documents = [
  "Completed admission application",
  "Student's birth certificate",
  "Recent passport-size photographs",
  "Previous school's report card, if applicable",
  "Transfer certificate, where required",
  "Parent or guardian identity and contact details",
];

const eligibility = [
  {
    icon: UserRound,
    title: "Age requirements",
    text: "Age eligibility depends on the grade and applicable education guidelines. Confirm the required age with admissions.",
  },
  {
    icon: BookOpen,
    title: "Previous schooling",
    text: "For students joining higher grades, previous academic records may be requested.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment or interaction",
    text: "An interaction or age-appropriate assessment may apply depending on the grade and school policy.",
  },
  {
    icon: Users,
    title: "Parent or guardian involvement",
    text: "Parents or guardians should be available to provide student information and complete the required formalities.",
  },
];

const faqs = [
  {
    question: "How do I begin the admission process?",
    answer:
      "Start by sending an enquiry through the form on this page. The admissions team can then guide you through grade availability, application requirements and the next steps.",
  },
  {
    question: "Which grades can I apply for?",
    answer:
      "The school showcases Primary, Middle, Secondary and Senior Secondary education. Actual grade availability for a particular academic session should be confirmed directly with the admissions team.",
  },
  {
    question: "Is an entrance test compulsory?",
    answer:
      "Assessment requirements may vary by grade and school policy. Contact the admissions team to confirm whether an assessment or interaction is required for your child's application.",
  },
  {
    question: "What documents should I prepare?",
    answer:
      "Commonly requested documents include a birth certificate, student photographs, previous academic records where applicable and a transfer certificate where required. The school will confirm the final checklist.",
  },
  {
    question: "When do admissions open?",
    answer:
      "Admission dates depend on the academic session and available seats. Please contact the school for the latest application window and important deadlines.",
  },
  {
    question: "Does submitting an enquiry confirm admission?",
    answer:
      "No. An enquiry is only the first step. Admission depends on the completed application, applicable requirements, availability and confirmation from the school.",
  },
];

const initialForm = {
  parentName: "",
  email: "",
  phone: "",
  studentName: "",
  grade: "",
  message: "",
};

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

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-[#405B4B]">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-[#DFE8E0] bg-[#FBFCFA] px-4 py-3.5 text-sm text-[#294639] outline-none transition placeholder:text-[#A1ACA4] focus:border-[#6AA77C] focus:bg-white focus:ring-4 focus:ring-[#DCEFE0]/70";

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [showPreview, setShowPreview] = useState(false);
  const [formError, setFormError] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setFormError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.parentName.trim() ||
      !form.phone.trim() ||
      !form.studentName.trim() ||
      !form.grade
    ) {
      setFormError("Please complete all required fields before continuing.");
      return;
    }

    // Frontend prototype only: no data is sent or stored.
    setShowPreview(true);
  };

  const resetForm = () => {
    setShowPreview(false);
    setForm(initialForm);
    setFormError("");
  };

  return (
    <main className="overflow-hidden bg-[#FCFDFB] text-[#20332D]">
      {/* Hero */}
      <section className="relative px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24">
        <div className="absolute right-0 top-0 -z-0 h-[400px] w-[400px] rounded-full bg-[#E9F4EB] blur-[100px]" />

        <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold text-[#829087]">
              <a href="/" className="transition hover:text-[#28764E]">
                Home
              </a>
              <ChevronRight size={13} />
              <span className="text-[#28764E]">Admissions</span>
            </div>

            <Eyebrow>Your child's next chapter</Eyebrow>

            <h1 className="max-w-[680px] text-[43px] font-semibold leading-[1.08] tracking-[-0.065em] text-[#18362C] sm:text-6xl lg:text-[68px]">
              A bright future
              <br />
              <span className="text-[#287A55]">starts with a step.</span>
            </h1>

            <p className="mt-7 max-w-[520px] text-[15px] leading-8 text-[#6B7972] sm:text-[17px]">
              Choosing a school is an important family decision. We aim to
              make the admissions journey clear, supportive and easy to
              navigate — from your first enquiry to your child's first day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#176747] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#10553A]"
              >
                Apply / Enquire Now
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#admission-process"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E0E9E2] bg-white px-5 py-4 text-sm font-bold text-[#345345] transition hover:border-[#A9CDB3]"
              >
                View the Process
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E7EDE8] pt-6">
              <span className="flex items-center gap-2 text-xs font-semibold text-[#61736A]">
                <CheckCircle2 size={16} className="text-[#32805B]" />
                Clear next steps
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold text-[#61736A]">
                <CheckCircle2 size={16} className="text-[#32805B]" />
                Parent-friendly guidance
              </span>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="overflow-hidden rounded-[28px] border-[7px] border-white shadow-[0_25px_80px_-25px_rgba(35,74,53,0.22)] sm:rounded-[34px]">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=90"
                alt="Students learning together at school"
                className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[510px]"
              />
            </div>

            <div className="absolute -bottom-6 left-4 max-w-[260px] rounded-2xl border border-[#E8EFE9] bg-white p-4 shadow-xl shadow-emerald-900/[0.07] sm:-left-7 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F4EA] text-[#28764E]">
                  <HeartHandshake size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#294639]">
                    We're here to help
                  </p>
                  <p className="mt-1 text-[11px] text-[#839087]">
                    Every question matters
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-8 flex h-[74px] w-[74px] items-center justify-center rounded-[22px] bg-[#176747] text-white shadow-xl sm:-right-5 sm:h-[90px] sm:w-[90px]">
              <div className="text-center">
                <GraduationCap size={25} className="mx-auto" />
                <p className="mt-1.5 text-[9px] font-bold uppercase tracking-widest">
                  Welcome
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick information */}
      <section className="border-y border-[#E5ECE6] bg-white px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-5 sm:grid-cols-3 sm:gap-0">
          {[
            {
              icon: MessageCircle,
              title: "Start with an enquiry",
              text: "Tell us about your child's needs.",
            },
            {
              icon: FileText,
              title: "Know what to prepare",
              text: "Review the documents checklist.",
            },
            {
              icon: CalendarDays,
              title: "Confirm the dates",
              text: "Get the latest admission schedule.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 sm:px-6 lg:px-10 ${
                  index !== 0 ? "sm:border-l sm:border-[#E5ECE6]" : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#28764E]">
                  <Icon size={21} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#294639]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#87948C]">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Admission process */}
      <section
        id="admission-process"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1320px]">
          <SectionTitle
            eyebrow="The admission journey"
            title="Five steps. A clearer path forward."
            text="Here is a simple overview of how the admission process can work. The admissions team will confirm the exact requirements for your chosen grade."
            center
          />

          <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-[27px] hidden h-px bg-[#DDE9DF] lg:block" />

            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="relative">
                  <div className="relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-2xl border border-[#DCE9E0] bg-white text-[#28764E] shadow-sm">
                    <Icon size={23} />
                  </div>

                  <div className="mt-5 rounded-[22px] border border-[#E4EBE5] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#B9D8C1] hover:shadow-lg hover:shadow-emerald-900/[0.04] sm:p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#80A88B]">
                        STEP {step.number}
                      </span>
                      <span className="rounded-full bg-[#F1F6F1] px-2 py-1 text-[9px] font-semibold text-[#718578]">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-snug text-[#294639]">
                      {step.title}
                    </h3>
                    <p className="mt-3 min-h-[112px] text-[12px] leading-6 text-[#7A8880]">
                      {step.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[#28764E]">
                      <Check size={13} />
                      {step.action}
                    </div>
                  </div>

                  {index < admissionSteps.length - 1 && (
                    <div className="absolute right-[-10px] top-[18px] z-20 hidden text-[#A5B9AA] lg:block">
                      <ChevronRight size={18} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-[#F3F7F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionTitle
              eyebrow="Before you apply"
              title="Is your child ready to apply?"
              text="Eligibility depends on the grade, applicable guidelines and the school's admission policy. Use these points as a starting checklist."
            />

            <div className="mt-8 rounded-[22px] bg-[#173B30] p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#B6E5C4]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                Need clarity on eligibility?
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Contact the admissions team to confirm grade-specific age
                criteria, seat availability and any assessment requirements.
              </p>
              <a
                href="#enquiry"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#B6E5C4] transition hover:text-white"
              >
                Ask the admissions team
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {eligibility.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-[#E0E9E1] bg-white p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#28764E]">
                      <Icon size={21} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#B2C1B5]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-[#294639]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-6 text-[#7A8880]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Get prepared"
              title="Your admission document checklist."
              text="Preparing commonly requested documents ahead of time can make the application process easier. The final checklist may differ by grade."
            />

            <div className="mt-8 rounded-[24px] border border-[#E4EBE5] bg-white p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#E7EDE8] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#28764E]">
                    <ClipboardCheck size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#294639]">
                      Documents to prepare
                    </h3>
                    <p className="mt-1 text-[11px] text-[#87948C]">
                      Checklist for parents
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#F0F7F1] px-3 py-1.5 text-[10px] font-bold text-[#28764E]">
                  {documents.length} items
                </span>
              </div>

              <div className="space-y-3">
                {documents.map((document) => (
                  <div key={document} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#4B9565]"
                    />
                    <p className="text-[13px] leading-6 text-[#536B5D]">
                      {document}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-xl bg-[#F6F8F5] p-4 text-[11px] leading-6 text-[#7A8880]">
                Please confirm which documents are mandatory with the school.
                Do not send original documents unless the school specifically
                instructs you to do so.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[26px] bg-[#E9F3EA] p-6 sm:p-8 lg:p-10">
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border-[28px] border-white/40" />
            <div className="relative z-10">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85"
                  alt="School application papers and study materials"
                  className="h-[210px] w-full object-cover sm:h-[270px]"
                />
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#234334]">
                A little preparation goes a long way.
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#718379]">
                Keep the student's information and relevant academic records
                handy. If you are unsure about a document, ask before
                submitting your application.
              </p>

              <a
                href="#enquiry"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#176747] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#10553A]"
              >
                Start an Enquiry <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dates */}
      <section className="border-y border-[#E5ECE6] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionTitle
            eyebrow="Plan ahead"
            title="Important dates & admission updates."
            text="Admission windows and deadlines can change. Confirm the current schedule with the school before planning your application."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-[#E4EBE5] bg-[#F8FAF7] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#28764E] shadow-sm">
                  <CalendarDays size={21} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7B9B85]">
                  Admission window
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#294639]">
                Contact for dates
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#7A8880]">
                Ask when applications open for your preferred grade and session.
              </p>
            </div>

            <div className="rounded-[22px] border border-[#E4EBE5] bg-[#F8FAF7] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#28764E] shadow-sm">
                  <Clock3 size={21} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7B9B85]">
                  Next steps
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#294639]">
                Confirm deadlines
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#7A8880]">
                Check application submission, interaction and enrollment dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section
        id="enquiry"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Take the first step</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#18362C] sm:text-4xl lg:text-[48px]">
              Let's talk about your child's future.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#748178]">
              Share a few basic details and preview your enquiry. This
              demonstration form does not send or save information.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: MessageCircle,
                  title: "Friendly guidance",
                  text: "Understand the process before applying.",
                },
                {
                  icon: FileText,
                  title: "Know your requirements",
                  text: "Get clarity on grade-specific documents.",
                },
                {
                  icon: CalendarDays,
                  title: "Plan with confidence",
                  text: "Confirm dates and availability directly.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#28764E]">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#345345]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#87948C]">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-[#E3EBE4] bg-white p-5">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F7F3] text-[#6C8975]">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#345345]">
                    Prefer to speak to someone?
                  </p>
                  <p className="mt-1 text-xs leading-6 text-[#87948C]">
                    Add the school's official phone number and email here so
                    parents can contact the admissions office directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[26px] border border-[#E3EBE4] bg-white p-5 shadow-[0_20px_70px_-35px_rgba(35,74,53,0.18)] sm:p-8 lg:p-10">
            {!showPreview ? (
              <>
                <div className="mb-7 flex items-start justify-between gap-4 border-b border-[#E7EDE8] pb-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#77A185]">
                      Admission enquiry
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#234334]">
                      Tell us about your family.
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-[#87948C]">
                      Fields marked * are required for this prototype.
                    </p>
                  </div>
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#28764E] sm:flex">
                    <School size={24} />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Parent / Guardian Name *">
                      <input
                        name="parentName"
                        value={form.parentName}
                        onChange={updateField}
                        className={inputClass}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />
                    </Field>

                    <Field label="Phone Number *">
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={updateField}
                        className={inputClass}
                        placeholder="Enter phone number"
                        type="tel"
                        autoComplete="tel"
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Student's Name *">
                      <input
                        name="studentName"
                        value={form.studentName}
                        onChange={updateField}
                        className={inputClass}
                        placeholder="Enter student's name"
                        required
                      />
                    </Field>

                    <Field label="Email Address">
                      <input
                        name="email"
                        value={form.email}
                        onChange={updateField}
                        className={inputClass}
                        placeholder="you@example.com"
                        type="email"
                        autoComplete="email"
                      />
                    </Field>
                  </div>

                  <Field label="Grade Applying For *">
                    <select
                      name="grade"
                      value={form.grade}
                      onChange={updateField}
                      className={inputClass}
                      required
                    >
                      <option value="">Select a grade</option>
                      <option value="Primary">Primary School</option>
                      <option value="Middle">Middle School</option>
                      <option value="Secondary">Secondary School</option>
                      <option value="Senior Secondary">Senior Secondary</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </Field>

                  <Field label="Anything you'd like to ask?">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={updateField}
                      className={`${inputClass} min-h-[110px] resize-y`}
                      placeholder="Share questions about grades, eligibility or the process..."
                      rows={4}
                    />
                  </Field>

                  {formError && (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
                    >
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#176747] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#10553A]"
                  >
                    Preview Enquiry
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-[10px] leading-5 text-[#9BA69E]">
                    Frontend demo only. This form does not transmit or store
                    the information you enter.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7F4EA] text-[#28764E]">
                  <CheckCircle2 size={28} />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#77A185]">
                  Preview ready
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#234334] sm:text-3xl">
                  Your enquiry preview
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#748178]">
                  This is a local preview of the details entered. Nothing has
                  been sent to EAK International School.
                </p>

                <div className="mt-7 space-y-0 rounded-2xl border border-[#E3EBE4] bg-[#F8FAF7] p-5">
                  {[
                    ["Parent / Guardian", form.parentName],
                    ["Phone", form.phone],
                    ["Student", form.studentName],
                    ["Email", form.email || "Not provided"],
                    ["Grade", form.grade],
                    ["Message", form.message || "No message added"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[105px_1fr] gap-3 border-b border-[#E5ECE6] py-3 last:border-b-0"
                    >
                      <span className="text-xs font-semibold text-[#849188]">
                        {label}
                      </span>
                      <span className="break-words text-sm font-medium text-[#345345]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-[#E9DDBE] bg-[#FFF9EA] p-4 text-xs leading-6 text-[#806C42]">
                  Prototype notice: this is not an admission application
                  submission or confirmation of admission.
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setShowPreview(false)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#DDE8DF] bg-white px-5 py-3.5 text-sm font-bold text-[#345345] transition hover:bg-[#F5F8F5]"
                  >
                    Edit Details
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#176747] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#10553A]"
                  >
                    Start Again <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F3F7F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="Good to know"
              title="Questions parents often ask."
              text="A few quick answers to help you understand the admissions journey before getting in touch."
            />

            <div className="mt-7 rounded-2xl border border-[#E0E9E1] bg-white p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#28764E]">
                <MessageCircle size={21} />
              </div>
              <h3 className="mt-4 text-sm font-bold text-[#345345]">
                Still have a question?
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#87948C]">
                The school's admissions team can clarify grade availability,
                deadlines and document requirements.
              </p>
              <a
                href="#enquiry"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#28764E]"
              >
                Send an enquiry <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden rounded-[18px] border bg-white transition ${
                    isOpen ? "border-[#BDD9C5]" : "border-[#E2EAE3]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="flex items-start gap-3">
                      <span className="mt-0.5 text-[10px] font-extrabold tracking-widest text-[#86AC91]">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-bold leading-6 text-[#345345]">
                        {faq.question}
                      </span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#668573] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-12 text-[13px] leading-7 text-[#7A8880] sm:px-6 sm:pb-6 sm:pl-[58px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-[#DDEFE2] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-10 -top-24 h-72 w-72 rounded-full border-[45px] border-white/30" />
          <div className="absolute -bottom-32 right-[25%] h-72 w-72 rounded-full border-[45px] border-white/20" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <Eyebrow>Take the next step</Eyebrow>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#183B2B] sm:text-5xl">
                Let's make the first step count.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#597665] sm:text-base">
                Start with an enquiry and learn more about the admission
                process, requirements and available grades.
              </p>
            </div>

            <a
              href="#enquiry"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#176747] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#10553A]"
            >
              Apply Now
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
