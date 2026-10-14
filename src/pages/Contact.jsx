
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
//   Facebook,
//   Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
//   Twitter,
  User,
  X,
} from "lucide-react";
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const contactDetails = [
  {
    icon: Phone,
    label: "Call our school",
    value: "+91 98765 43210",
    description: "Speak with our school office",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "info@eakschool.example",
    description: "Send us your enquiries",
    href: "mailto:info@eakschool.example",
  },
  {
    icon: MapPin,
    label: "Visit our campus",
    value: "EAK International School",
    description: "Sample address, Dehradun, Uttarakhand, India",
    href: "#school-location",
  },
];

const officeHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 3:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 12:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const enquiryTypes = [
  "General Enquiry",
  "Admissions",
  "Academics",
  "School Facilities",
  "Transport",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "General Enquiry",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.phone.trim() && !/^[+()\d\s-]{7,18}$/.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please write your message.";
    } else if (form.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fcfdfb] text-[#173b30]">
      {/* HERO */}
      <section className="relative px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-12 lg:pt-14">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#e4f2e5] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9e9dd] bg-white px-4 py-2 text-xs font-bold tracking-[0.15em] text-[#327b54] shadow-sm">
              <MessageCircle size={14} />
              WE'RE HERE TO HELP
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-[4.25rem]">
              Let's start a
              <span className="mt-2 block text-[#43865b]">conversation.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#6e7d72] sm:text-lg">
              Have a question about admissions, academics or life at EAK
              International School? We're here to help you find the answers
              and guide you in the right direction.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#1f573c] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#17442f] hover:shadow-lg"
              >
                Send an Enquiry
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#school-location"
                className="inline-flex items-center gap-2 rounded-xl border border-[#dce6dd] bg-white px-6 py-4 text-sm font-semibold transition hover:border-[#8ab69a]"
              >
                <MapPin size={17} />
                Find Our School
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3 border-t border-[#e6ece6] pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf4eb] text-[#43865b]">
                <Clock3 size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">School office hours</p>
                <p className="mt-1 text-xs text-[#78867b]">
                  Monday to Friday · 8:00 AM – 3:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-[#e3f0d8] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#e5eee5] p-2 shadow-[0_24px_70px_-35px_rgba(31,87,60,0.4)]">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1300&q=90"
                alt="School campus building"
                className="h-[350px] w-full rounded-[1.6rem] object-cover sm:h-[450px]"
              />

              <div className="absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-[#102f23]/85 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-9">
                <p className="text-xs font-bold tracking-[0.2em] text-[#d2ead7]">
                  EAK INTERNATIONAL SCHOOL
                </p>
                <h2 className="mt-3 max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Every great journey begins with a conversation.
                </h2>
              </div>
            </div>

            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-[#e3ece4] bg-white p-4 shadow-xl sm:right-8 sm:p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf4eb] text-[#327b54]">
                <ShieldCheck size={23} />
              </div>
              <div>
                <p className="text-sm font-bold">Parent-first support</p>
                <p className="mt-1 text-xs text-[#77867b]">
                  Here to answer your questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="border-y border-[#e7ede6] bg-white px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-start gap-4 rounded-2xl border border-[#e7ede6] bg-[#fcfdfb] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#bdd9c3] hover:bg-white hover:shadow-lg sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf4eb] text-[#327b54] transition group-hover:bg-[#1f573c] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#849187]">
                    {item.label}
                  </p>
                  <h3 className="mt-2 break-words text-base font-semibold">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#78867b]">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#a0b3a3] transition group-hover:text-[#327b54]"
                />
              </a>
            );
          })}
        </div>
      </section>

      {/* FORM + HOURS */}
      <section
        id="contact-form"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.15fr_0.75fr] lg:gap-16">
          <div className="rounded-[1.8rem] border border-[#e4ebe3] bg-white p-6 shadow-[0_20px_70px_-50px_rgba(31,87,60,0.25)] sm:p-9 lg:p-10">
            {!submitted ? (
              <>
                <div className="mb-8">
                  <p className="text-xs font-bold tracking-[0.2em] text-[#43865b]">
                    SEND US A MESSAGE
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                    How can we help?
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#748176]">
                    Fill in the details below and preview your enquiry. This
                    demonstration form does not send information to the school.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User
                          size={17}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a9a8d]"
                        />
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={updateField}
                          placeholder="Your full name"
                          aria-invalid={Boolean(errors.name)}
                          className={`w-full rounded-xl border bg-[#fcfdfb] py-3.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-[#a0aaa1] focus:ring-4 focus:ring-[#eaf4eb] ${
                            errors.name
                              ? "border-red-400 focus:border-red-400"
                              : "border-[#e3eae2] focus:border-[#8ab69a]"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail
                          size={17}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a9a8d]"
                        />
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={updateField}
                          placeholder="you@example.com"
                          aria-invalid={Boolean(errors.email)}
                          className={`w-full rounded-xl border bg-[#fcfdfb] py-3.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-[#a0aaa1] focus:ring-4 focus:ring-[#eaf4eb] ${
                            errors.email
                              ? "border-red-400 focus:border-red-400"
                              : "border-[#e3eae2] focus:border-[#8ab69a]"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Phone number{" "}
                        <span className="font-normal text-[#8b988d]">
                          (optional)
                        </span>
                      </label>
                      <div className="relative">
                        <Phone
                          size={17}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a9a8d]"
                        />
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={updateField}
                          placeholder="+91 98765 43210"
                          aria-invalid={Boolean(errors.phone)}
                          className={`w-full rounded-xl border bg-[#fcfdfb] py-3.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-[#a0aaa1] focus:ring-4 focus:ring-[#eaf4eb] ${
                            errors.phone
                              ? "border-red-400 focus:border-red-400"
                              : "border-[#e3eae2] focus:border-[#8ab69a]"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Enquiry type
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={updateField}
                        className="w-full rounded-xl border border-[#e3eae2] bg-[#fcfdfb] px-4 py-3.5 text-sm outline-none transition focus:border-[#8ab69a] focus:ring-4 focus:ring-[#eaf4eb]"
                      >
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Your message{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={updateField}
                        rows={5}
                        placeholder="Tell us how we can help..."
                        aria-invalid={Boolean(errors.message)}
                        className={`w-full resize-y rounded-xl border bg-[#fcfdfb] px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-[#a0aaa1] focus:ring-4 focus:ring-[#eaf4eb] ${
                          errors.message
                            ? "border-red-400 focus:border-red-400"
                            : "border-[#e3eae2] focus:border-[#8ab69a]"
                        }`}
                      />
                      <div className="mt-2 flex items-center justify-between gap-3">
                        {errors.message ? (
                          <p className="text-xs text-red-600">
                            {errors.message}
                          </p>
                        ) : (
                          <p className="text-xs text-[#879389]">
                            Please provide at least 10 characters.
                          </p>
                        )}
                        <span className="shrink-0 text-xs text-[#879389]">
                          {form.message.length} characters
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#f3f8f2] p-4">
                    <ShieldCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-[#43865b]"
                    />
                    <p className="text-xs leading-6 text-[#64766a]">
                      Demo form only. Your information stays in this page's
                      current state and is not sent to a server or stored in a
                      database.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#1f573c] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#17442f] hover:shadow-lg sm:w-auto"
                  >
                    Preview Enquiry
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>
              </>
            ) : (
              <div className="py-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf4eb] text-[#327b54]">
                  <CheckCircle2 size={32} />
                </div>

                <p className="mt-6 text-xs font-bold tracking-[0.2em] text-[#43865b]">
                  PREVIEW READY
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Thanks, {form.name.trim().split(/\s+/)[0]}.
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#748176]">
                  Your enquiry preview is ready below. It has not been sent to
                  EAK International School.
                </p>

                <div className="mt-7 space-y-4 rounded-2xl border border-[#e4ebe3] bg-[#fcfdfb] p-5 sm:p-6">
                  <div>
                    <p className="text-xs font-semibold text-[#879389]">
                      NAME
                    </p>
                    <p className="mt-1 text-sm font-medium">{form.name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#879389]">
                      EMAIL
                    </p>
                    <p className="mt-1 break-all text-sm font-medium">
                      {form.email}
                    </p>
                  </div>
                  {form.phone.trim() && (
                    <div>
                      <p className="text-xs font-semibold text-[#879389]">
                        PHONE
                      </p>
                      <p className="mt-1 text-sm font-medium">{form.phone}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold text-[#879389]">
                      ENQUIRY TYPE
                    </p>
                    <p className="mt-1 text-sm font-medium">{form.subject}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#879389]">
                      MESSAGE
                    </p>
                    <p className="mt-1 whitespace-pre-wrap text-sm leading-7 text-[#536b59]">
                      {form.message}
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-4 text-xs leading-6 text-amber-800">
                  No message has been delivered. Connect a backend or a form
                  service if you want to receive real enquiries.
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const preview = [
                        "EAK INTERNATIONAL SCHOOL — ENQUIRY PREVIEW",
                        `Name: ${form.name}`,
                        `Email: ${form.email}`,
                        `Phone: ${form.phone || "Not provided"}`,
                        `Subject: ${form.subject}`,
                        "",
                        form.message,
                        "",
                        "DEMO ONLY — NOT SUBMITTED",
                      ].join("\n");

                      const blob = new Blob([preview], {
                        type: "text/plain;charset=utf-8",
                      });
                      const url = URL.createObjectURL(blob);
                      const link = document.createElement("a");
                      link.href = url;
                      link.download = "eak-enquiry-preview.txt";
                      document.body.appendChild(link);
                      link.click();
                      link.remove();
                      URL.revokeObjectURL(url);
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1f573c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#17442f]"
                  >
                    Download Preview
                    <ArrowDownIcon />
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#e2e9e1] px-5 py-3 text-sm font-semibold text-[#536b59] transition hover:bg-[#f4f8f3]"
                  >
                    <X size={16} />
                    Start Again
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* OFFICE HOURS + SOCIALS */}
          <aside className="space-y-6">
            <div className="rounded-[1.6rem] border border-[#e4ebe3] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf4eb] text-[#327b54]">
                  <Clock3 size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Office hours</h3>
                  <p className="mt-1 text-xs text-[#879389]">
                    When you can reach us
                  </p>
                </div>
              </div>

              <div className="mt-6 divide-y divide-[#edf0eb]">
                {officeHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex flex-wrap items-center justify-between gap-3 py-4"
                  >
                    <span className="text-sm text-[#66776a]">{item.day}</span>
                    <span
                      className={`text-right text-sm font-semibold ${
                        item.hours === "Closed"
                          ? "text-[#9aa49b]"
                          : "text-[#173b30]"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs leading-6 text-[#879389]">
                These are sample office hours. Timings may vary during
                holidays and school events.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-[#e4ebe3] bg-white p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.16em] text-[#43865b]">
                STAY CONNECTED
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Follow our school community.
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#748176]">
                Follow the school's official social channels for activities,
                celebrations and campus updates.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  {
                    name: "Instagram",
                    icon: FaInstagram,
                    href: "https://www.instagram.com/",
                  },
                  {
                    name: "Facebook",
                    icon: FaFacebook,
                    href: "https://www.facebook.com/",
                  },
                  {
                    name: "Twitter",
                    icon: FaTwitter,
                    href: "https://x.com/",
                  },
                ].map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="group flex flex-col items-center gap-3 rounded-xl border border-[#e7ede6] bg-[#fcfdfb] px-3 py-4 transition hover:border-[#b8d5bd] hover:bg-[#f0f7f0]"
                    >
                      <Icon
                        size={21}
                        className="text-[#43865b] transition group-hover:scale-110"
                      />
                      <span className="text-xs font-semibold text-[#536b59]">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>

              <p className="mt-4 text-xs leading-6 text-[#879389]">
                Replace these links with the school's official social media
                profiles.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.6rem] bg-[#1f573c] p-6 sm:p-8">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/10" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#d6efdc]">
                  <Sparkles size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Planning a school visit?
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Get in touch with the school office to enquire about campus
                  visits and available timings.
                </p>
                <a
                  href="tel:+919876543210"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#d6efdc]"
                >
                  <Phone size={16} />
                  Call the school office
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* LOCATION / MAP */}
      <section
        id="school-location"
        className="scroll-mt-24 bg-[#f0f6ef] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#43865b]">
                FIND YOUR WAY
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Come say hello.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#718075] sm:text-base">
                Plan your visit to EAK International School. Replace this
                sample location with the school's verified address and map.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#43865b]">
                <MapPin size={21} />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  EAK International School
                </p>
                <p className="mt-1 max-w-xs text-sm leading-6 text-[#718075]">
                  Sample address, Dehradun, Uttarakhand, India
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#dce8db] bg-white">
            {!showMap ? (
              <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center sm:min-h-[390px]">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute -left-10 top-16 h-40 w-[120%] rotate-[-12deg] rounded-full border-[18px] border-[#edf4e9]" />
                  <div className="absolute -left-10 top-36 h-40 w-[120%] rotate-[13deg] rounded-full border-[12px] border-[#e3efe0]" />
                  <div className="absolute left-[15%] top-0 h-full w-8 rotate-[30deg] bg-[#f5f8f2]" />
                  <div className="absolute right-[20%] top-0 h-full w-12 rotate-[-25deg] bg-[#f5f8f2]" />
                  <div className="absolute bottom-10 left-[25%] h-16 w-16 rounded-2xl bg-[#e7f0e3]" />
                  <div className="absolute right-[25%] top-10 h-20 w-20 rounded-full bg-[#e7f0e3]" />
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1f573c] text-white shadow-lg">
                  <MapPin size={30} />
                </div>

                <h3 className="relative mt-5 text-xl font-semibold">
                  School location map
                </h3>
                <p className="relative mt-2 max-w-md text-sm leading-7 text-[#748176]">
                  An interactive map can be displayed here once the school's
                  exact verified address is available.
                </p>

                <button
                  type="button"
                  onClick={() => setShowMap(true)}
                  className="relative mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1f573c] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#17442f]"
                >
                  Preview Map Embed
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-[#e4ebe3] bg-white px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold">Map embed preview</p>
                    <p className="mt-1 text-xs text-[#879389]">
                      Illustrative map, not the school's verified location
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowMap(false)}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#e2e9e1] px-3 py-2 text-xs font-semibold text-[#536b59] hover:bg-[#f4f8f3]"
                  >
                    <X size={14} />
                    Close
                  </button>
                </div>

                <iframe
                  title="Illustrative map of Dehradun"
                  src="https://maps.google.com/maps?q=Dehradun%2C%20Uttarakhand%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="h-[350px] w-full border-0 sm:h-[450px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="bg-white px-5 py-3 text-xs leading-5 text-[#879389]">
                  This map shows Dehradun as an example only. Replace it with
                  the correct school location before publishing.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[1.8rem] border border-[#e4ebe3] bg-white p-7 sm:p-10 md:flex-row md:items-center lg:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[#43865b]">
              WE LOOK FORWARD TO HEARING FROM YOU
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Your questions are always welcome.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#748176]">
              Reach out to learn more about the school, its learning
              environment and the admissions process.
            </p>
          </div>

          <a
            href="#contact-form"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#1f573c] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#17442f]"
          >
            Contact the School
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}

function ArrowDownIcon() {
  return <ArrowRight size={16} />;
}
