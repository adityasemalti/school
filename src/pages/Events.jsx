
import React, { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Download,
  FileText,
  Filter,
  GraduationCap,
  MapPin,
  Megaphone,
  Search,
  Share2,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";

const categories = [
  "All Updates",
  "Academic",
  "Examinations",
  "Holidays",
  "Announcements",
  "Circulars",
];

const notices = [
  {
    id: 1,
    category: "Examinations",
    title: "Half-Yearly Examination Schedule",
    description:
      "The detailed schedule for the upcoming half-yearly examinations is available for students and parents. Please review the timetable and examination guidelines.",
    date: "2026-10-12",
    reference: "EAK/EXAM/026",
    priority: "Important",
    attachment: "Half-Yearly Examination Timetable.pdf",
    color: "red",
  },
  {
    id: 2,
    category: "Announcements",
    title: "Inter-House Debate Competition",
    description:
      "Students interested in participating in the inter-house debate competition are invited to register their names with their respective class teachers.",
    date: "2026-10-10",
    reference: "EAK/ACT/025",
    priority: "New",
    attachment: null,
    color: "green",
  },
  {
    id: 3,
    category: "Holidays",
    title: "Festival Holiday Notice",
    description:
      "Parents are requested to refer to the school calendar for the scheduled festival break. Regular classes will resume as communicated by the school office.",
    date: "2026-10-08",
    reference: "EAK/ADM/024",
    priority: "Notice",
    attachment: null,
    color: "amber",
  },
  {
    id: 4,
    category: "Academic",
    title: "Parent-Teacher Interaction",
    description:
      "A parent-teacher interaction session is planned to discuss students' academic progress, classroom participation and areas for improvement.",
    date: "2026-10-06",
    reference: "EAK/ACA/023",
    priority: "Important",
    attachment: null,
    color: "blue",
  },
  {
    id: 5,
    category: "Circulars",
    title: "Updated School Uniform Guidelines",
    description:
      "Please review the sample uniform guidelines and ensure students follow the prescribed dress code for regular school days and special activities.",
    date: "2026-10-03",
    reference: "EAK/CIR/022",
    priority: "Circular",
    attachment: "Uniform Guidelines.pdf",
    color: "green",
  },
  {
    id: 6,
    category: "Academic",
    title: "Reading Week & Book Review Activity",
    description:
      "Students are encouraged to choose a book appropriate to their age group and prepare a short review to share with their class.",
    date: "2026-09-28",
    reference: "EAK/ACA/021",
    priority: "Update",
    attachment: null,
    color: "blue",
  },
  {
    id: 7,
    category: "Examinations",
    title: "Practical Assessment Guidelines",
    description:
      "Students should review the practical assessment instructions shared by their subject teachers and bring the required learning materials.",
    date: "2026-09-24",
    reference: "EAK/EXAM/020",
    priority: "Important",
    attachment: null,
    color: "red",
  },
  {
    id: 8,
    category: "Circulars",
    title: "Student Attendance Reminder",
    description:
      "Parents are encouraged to support regular attendance and inform the school office if a student is unable to attend classes.",
    date: "2026-09-19",
    reference: "EAK/CIR/019",
    priority: "Circular",
    attachment: null,
    color: "green",
  },
  {
    id: 9,
    category: "Announcements",
    title: "Student Council Meeting",
    description:
      "Student council representatives will meet to discuss upcoming school activities, student initiatives and ideas for campus improvement.",
    date: "2026-09-15",
    reference: "EAK/ACT/018",
    priority: "Update",
    attachment: null,
    color: "amber",
  },
];

const events = [
  {
    id: 101,
    title: "Annual Sports Meet",
    category: "Sports",
    date: "2026-11-14",
    endDate: "2026-11-14",
    time: "9:00 AM onwards",
    location: "School Sports Ground",
    description:
      "A celebration of teamwork, determination and sportsmanship featuring track events, team games and student performances.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1100&q=85",
    featured: true,
    color: "green",
  },
  {
    id: 102,
    title: "Young Innovators Science Fair",
    category: "Academic",
    date: "2026-11-21",
    endDate: "2026-11-21",
    time: "10:00 AM – 1:00 PM",
    location: "Science & Learning Block",
    description:
      "Discover student-built models, creative experiments and ideas that bring science, technology and problem-solving to life.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85",
    featured: false,
    color: "blue",
  },
  {
    id: 103,
    title: "Inter-House Debate",
    category: "Competition",
    date: "2026-11-28",
    endDate: "2026-11-28",
    time: "11:00 AM onwards",
    location: "School Auditorium",
    description:
      "Students will present arguments, exchange ideas and demonstrate their public speaking and critical thinking skills.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85",
    featured: false,
    color: "amber",
  },
  {
    id: 104,
    title: "Winter Cultural Showcase",
    category: "Cultural",
    date: "2026-12-12",
    endDate: "2026-12-12",
    time: "4:00 PM onwards",
    location: "School Auditorium",
    description:
      "An evening of music, dance, drama and creative performances celebrating the talents of the EAK school community.",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
    featured: false,
    color: "purple",
  },
  {
    id: 105,
    title: "Book Character Day",
    category: "Cultural",
    date: "2026-12-18",
    endDate: "2026-12-18",
    time: "9:30 AM – 12:00 PM",
    location: "School Library & Classrooms",
    description:
      "Students can celebrate their favourite literary characters through creative costumes, storytelling and book-inspired activities.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85",
    featured: false,
    color: "blue",
  },
  {
    id: 106,
    title: "Mathematics Challenge",
    category: "Competition",
    date: "2027-01-09",
    endDate: "2027-01-09",
    time: "10:00 AM onwards",
    location: "Academic Block",
    description:
      "A friendly challenge designed to encourage logical reasoning, numerical confidence and creative problem-solving.",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1000&q=85",
    featured: false,
    color: "amber",
  },
  {
    id: 107,
    title: "Community Clean-Up Drive",
    category: "Community",
    date: "2027-01-23",
    endDate: "2027-01-23",
    time: "8:30 AM onwards",
    location: "School Campus",
    description:
      "A student-led initiative encouraging environmental responsibility, teamwork and care for shared spaces.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=85",
    featured: false,
    color: "green",
  },
  {
    id: 108,
    title: "Spring Art Exhibition",
    category: "Cultural",
    date: "2027-02-06",
    endDate: "2027-02-06",
    time: "10:00 AM – 2:00 PM",
    location: "School Activity Hall",
    description:
      "Explore student artwork, creative projects and visual storytelling in an exhibition celebrating imagination and expression.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=85",
    featured: false,
    color: "purple",
  },
];

const formatDate = (dateString, options = {}) =>
  new Date(`${dateString}T12:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    ...options,
  });

const formatDay = (dateString) =>
  new Date(`${dateString}T12:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
  });

const formatMonth = (dateString) =>
  new Date(`${dateString}T12:00:00`)
    .toLocaleDateString("en-IN", { month: "short" })
    .toUpperCase();

const colorClasses = {
  red: "bg-red-50 text-red-700 border-red-100",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
};

const eventCategories = [
  "All Events",
  "Academic",
  "Sports",
  "Competition",
  "Cultural",
  "Community",
];

export default function EventsNotices() {
  const [activeTab, setActiveTab] = useState("notices");
  const [noticeCategory, setNoticeCategory] = useState("All Updates");
  const [eventCategory, setEventCategory] = useState("All Events");
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("upcoming");
  const [visibleNotices, setVisibleNotices] = useState(5);
  const [visibleEvents, setVisibleEvents] = useState(4);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventMonth, setEventMonth] = useState("all");
  const [subscribed, setSubscribed] = useState(false);

  const filteredNotices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return notices.filter((notice) => {
      const matchesCategory =
        noticeCategory === "All Updates" ||
        notice.category === noticeCategory;

      const matchesSearch =
        !query ||
        `${notice.title} ${notice.description} ${notice.category} ${notice.reference}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [noticeCategory, search]);

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();
    const today = "2026-10-14";

    return events.filter((event) => {
      const matchesCategory =
        eventCategory === "All Events" || event.category === eventCategory;

      const matchesSearch =
        !query ||
        `${event.title} ${event.description} ${event.category} ${event.location}`
          .toLowerCase()
          .includes(query);

      const matchesDate =
        dateFilter === "all" ||
        (dateFilter === "upcoming" && event.date >= today) ||
        (dateFilter === "past" && event.date < today);

      const matchesMonth =
        eventMonth === "all" || event.date.slice(0, 7) === eventMonth;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesDate &&
        matchesMonth
      );
    });
  }, [eventCategory, search, dateFilter, eventMonth]);

  const switchTab = (tab) => {
    setActiveTab(tab);
    setSearch("");
    setVisibleNotices(5);
    setVisibleEvents(4);
  };

  const shareItem = async (item, type) => {
    const url = window.location.href;
    const shareData = {
      title: item.title,
      text: item.description,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Sharing was cancelled or unavailable.
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(
          `${item.title}\n${item.description}\n${url}`
        );
        window.alert(`${type} details copied to clipboard.`);
      } catch {
        window.alert("Unable to copy details on this device.");
      }
    } else {
      window.alert(`${item.title}\n${item.description}`);
    }
  };

  const downloadNotice = (notice) => {
    const content = [
      "EAK INTERNATIONAL SCHOOL",
      notice.title,
      `Reference: ${notice.reference}`,
      `Category: ${notice.category}`,
      `Date: ${formatDate(notice.date)}`,
      "",
      notice.description,
      "",
      "SAMPLE NOTICE — FOR DEMONSTRATION ONLY",
    ].join("\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${notice.reference}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const resetFilters = () => {
    setSearch("");
    setNoticeCategory("All Updates");
    setEventCategory("All Events");
    setDateFilter("upcoming");
    setEventMonth("all");
    setVisibleNotices(5);
    setVisibleEvents(4);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fcfdfb] text-[#173b30]">
      {/* HERO */}
      <section className="relative px-5 pb-14 pt-10 sm:px-8 sm:pb-20 lg:px-12 lg:pt-14">
        <div className="absolute right-0 top-0 -z-0 h-72 w-72 rounded-full bg-[#e6f3e7] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9e9dd] bg-white px-4 py-2 text-xs font-bold tracking-[0.15em] text-[#327b54] shadow-sm">
              <Bell size={14} />
              SCHOOL NEWSROOM
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-[4.25rem]">
              Every update.
              <span className="mt-2 block text-[#43865b]">
                Every moment.
              </span>
              <span className="block">All in one place.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#6e7d72] sm:text-lg">
              Stay connected with the latest school circulars, academic
              notices, holidays, competitions and upcoming events at EAK
              International School.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  switchTab("notices");
                  document
                    .getElementById("newsroom")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#1f573c] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#17442f]"
              >
                Read Latest Notices
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                onClick={() => {
                  switchTab("events");
                  document
                    .getElementById("newsroom")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-[#dce6dd] bg-white px-5 py-3.5 text-sm font-semibold transition hover:border-[#8ab69a]"
              >
                Explore Events
                <CalendarDays size={17} />
              </button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#718075]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#43865b]" />
                Academic updates
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#43865b]" />
                School activities
              </span>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#dfece0] p-2">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1300&q=90"
                alt="Students learning together at school"
                className="h-[350px] w-full rounded-[1.6rem] object-cover sm:h-[440px]"
              />
              <div className="absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-[#102f23]/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-9">
                <p className="text-xs font-bold tracking-[0.2em] text-[#d2ead7]">
                  STAY IN THE LOOP
                </p>
                <h2 className="mt-2 max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  What's happening at EAK?
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                  Important information for students and parents, all together.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-[#e3ece4] bg-white p-4 shadow-xl sm:right-8 sm:p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf4eb] text-[#327b54]">
                <Megaphone size={23} />
              </div>
              <div>
                <p className="text-sm font-bold">School newsroom</p>
                <p className="mt-1 text-xs text-[#77867b]">
                  Notices & events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="border-y border-[#e7ede6] bg-white px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {[
            {
              icon: FileText,
              number: `${notices.length}`,
              label: "Sample notices",
            },
            {
              icon: CalendarDays,
              number: `${events.length}`,
              label: "Listed events",
            },
            {
              icon: GraduationCap,
              number: "Academic",
              label: "School updates",
            },
            {
              icon: Trophy,
              number: "Beyond",
              label: "Learning & activities",
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf6ee] text-[#43865b]">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-tight">
                    {stat.number}
                  </p>
                  <p className="mt-0.5 text-xs text-[#78867b] sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* NEWSROOM */}
      <section
        id="newsroom"
        className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <p className="text-xs font-bold tracking-[0.2em] text-[#43865b]">
              YOUR SCHOOL, YOUR UPDATES
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              The school bulletin.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#718075] sm:text-base">
              Find the information you need with simple search and category
              filters.
            </p>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap gap-2 border-b border-[#e4ebe3]">
            <button
              type="button"
              onClick={() => switchTab("notices")}
              className={`relative flex items-center gap-2 px-5 py-4 text-sm font-semibold transition ${
                activeTab === "notices"
                  ? "text-[#327b54]"
                  : "text-[#7b887d] hover:text-[#173b30]"
              }`}
            >
              <FileText size={17} />
              Notices & Circulars
              {activeTab === "notices" && (
                <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[#43865b]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => switchTab("events")}
              className={`relative flex items-center gap-2 px-5 py-4 text-sm font-semibold transition ${
                activeTab === "events"
                  ? "text-[#327b54]"
                  : "text-[#7b887d] hover:text-[#173b30]"
              }`}
            >
              <CalendarDays size={17} />
              Events & Competitions
              {activeTab === "events" && (
                <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[#43865b]" />
              )}
            </button>
          </div>

          {/* SEARCH + FILTERS */}
          <div className="mt-7 rounded-2xl border border-[#e4ebe3] bg-white p-4 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87958a]"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setVisibleNotices(5);
                    setVisibleEvents(4);
                  }}
                  placeholder={
                    activeTab === "notices"
                      ? "Search notices, circulars or reference numbers..."
                      : "Search events, activities or locations..."
                  }
                  className="w-full rounded-xl border border-[#e5ebe4] bg-[#fcfdfb] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-[#a0aaa1] focus:border-[#8ab69a] focus:ring-4 focus:ring-[#eaf4eb]"
                />
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e2e9e1] px-4 py-3.5 text-sm font-semibold text-[#5d7062] transition hover:bg-[#f4f8f3]"
              >
                <Filter size={16} />
                Reset filters
              </button>
            </div>

            <div className="mt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#879389]">
                {activeTab === "notices" ? "Filter by category" : "Event category"}
              </p>

              <div className="flex flex-wrap gap-2">
                {(activeTab === "notices"
                  ? categories
                  : eventCategories
                ).map((category) => {
                  const isActive =
                    activeTab === "notices"
                      ? noticeCategory === category
                      : eventCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        if (activeTab === "notices") {
                          setNoticeCategory(category);
                          setVisibleNotices(5);
                        } else {
                          setEventCategory(category);
                          setVisibleEvents(4);
                        }
                      }}
                      className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
                        isActive
                          ? "border-[#1f573c] bg-[#1f573c] text-white"
                          : "border-[#e3eae2] bg-white text-[#66776a] hover:border-[#a9cbb0] hover:bg-[#f4f8f3]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {activeTab === "events" && (
              <div className="mt-5 grid gap-4 border-t border-[#edf0eb] pt-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="event-date-filter"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#879389]"
                  >
                    Event timing
                  </label>
                  <div className="relative">
                    <select
                      id="event-date-filter"
                      value={dateFilter}
                      onChange={(event) => {
                        setDateFilter(event.target.value);
                        setVisibleEvents(4);
                      }}
                      className="w-full appearance-none rounded-xl border border-[#e3eae2] bg-[#fcfdfb] px-4 py-3.5 pr-10 text-sm outline-none focus:border-[#8ab69a]"
                    >
                      <option value="upcoming">Upcoming events</option>
                      <option value="all">All events</option>
                      <option value="past">Past events</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#78867b]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="event-month-filter"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#879389]"
                  >
                    Filter by month
                  </label>
                  <div className="relative">
                    <select
                      id="event-month-filter"
                      value={eventMonth}
                      onChange={(event) => {
                        setEventMonth(event.target.value);
                        setVisibleEvents(4);
                      }}
                      className="w-full appearance-none rounded-xl border border-[#e3eae2] bg-[#fcfdfb] px-4 py-3.5 pr-10 text-sm outline-none focus:border-[#8ab69a]"
                    >
                      <option value="all">All months</option>
                      <option value="2026-11">November 2026</option>
                      <option value="2026-12">December 2026</option>
                      <option value="2027-01">January 2027</option>
                      <option value="2027-02">February 2027</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#78867b]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* NOTICES */}
          {activeTab === "notices" && (
            <div className="mt-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-[#77867b]">
                  Showing{" "}
                  <span className="font-semibold text-[#173b30]">
                    {Math.min(visibleNotices, filteredNotices.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-[#173b30]">
                    {filteredNotices.length}
                  </span>{" "}
                  notices
                </p>

                <span className="inline-flex items-center gap-2 rounded-full bg-[#edf6ee] px-3 py-2 text-xs font-medium text-[#327b54]">
                  <span className="h-2 w-2 rounded-full bg-[#43865b]" />
                  Sample school updates
                </span>
              </div>

              <div className="grid gap-4">
                {filteredNotices.slice(0, visibleNotices).map((notice) => (
                  <article
                    key={notice.id}
                    className="group rounded-2xl border border-[#e4ebe3] bg-white p-5 transition duration-300 hover:border-[#bdd9c3] hover:shadow-[0_16px_40px_-30px_rgba(31,87,60,0.45)] sm:p-6"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="flex shrink-0 items-center gap-3 sm:w-20 sm:flex-col sm:items-center sm:gap-1 sm:rounded-xl sm:bg-[#f3f7f2] sm:px-3 sm:py-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf6ee] text-[#327b54] sm:h-auto sm:w-auto sm:bg-transparent">
                          <FileText size={23} />
                        </div>
                        <div className="sm:text-center">
                          <p className="text-sm font-bold text-[#173b30]">
                            {formatDate(notice.date, {
                              day: "2-digit",
                              month: "short",
                            })}
                          </p>
                          <p className="mt-1 text-xs text-[#879389]">
                            {new Date(
                              `${notice.date}T12:00:00`
                            ).getFullYear()}
                          </p>
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full border px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] ${
                              colorClasses[notice.color]
                            }`}
                          >
                            {notice.category.toUpperCase()}
                          </span>
                          {notice.priority === "Important" && (
                            <span className="rounded-full bg-red-50 px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] text-red-600">
                              IMPORTANT
                            </span>
                          )}
                        </div>

                        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-[#327b54] sm:text-xl">
                          {notice.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-[#748176]">
                          {notice.description}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#879389]">
                          <span>Ref: {notice.reference}</span>
                          <span className="hidden h-1 w-1 rounded-full bg-[#bdc9bd] sm:block" />
                          <span>{formatDate(notice.date)}</span>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-3 border-t border-[#edf0eb] pt-4">
                          <button
                            type="button"
                            onClick={() => setSelectedNotice(notice)}
                            className="inline-flex items-center gap-2 rounded-lg bg-[#1f573c] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#17442f]"
                          >
                            Read Notice
                            <ArrowRight size={14} />
                          </button>

                          {notice.attachment && (
                            <button
                              type="button"
                              onClick={() => downloadNotice(notice)}
                              className="inline-flex items-center gap-2 rounded-lg border border-[#e3eae2] px-4 py-2.5 text-xs font-semibold text-[#536b59] transition hover:bg-[#f4f8f3]"
                            >
                              <Download size={14} />
                              Download sample
                            </button>
                          )}

                          <button
                            type="button"
                            aria-label={`Share ${notice.title}`}
                            onClick={() => shareItem(notice, "Notice")}
                            className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold text-[#66776a] transition hover:bg-[#f4f8f3]"
                          >
                            <Share2 size={14} />
                            Share
                          </button>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="hidden shrink-0 text-[#a3b4a5] transition group-hover:text-[#43865b] sm:block"
                      />
                    </div>
                  </article>
                ))}
              </div>

              {filteredNotices.length === 0 && (
                <div className="rounded-2xl border border-dashed border-[#d7e3d7] bg-white px-5 py-16 text-center">
                  <Search
                    size={32}
                    className="mx-auto text-[#9aae9c]"
                  />
                  <h3 className="mt-4 text-lg font-semibold">
                    No notices found
                  </h3>
                  <p className="mt-2 text-sm text-[#7b887d]">
                    Try another keyword or change the category filter.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-5 rounded-xl bg-[#1f573c] px-5 py-3 text-sm font-semibold text-white"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {visibleNotices < filteredNotices.length && (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleNotices((current) => current + 3)
                    }
                    className="inline-flex items-center gap-3 rounded-xl border border-[#dce6dd] bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-[#9bbfa2] hover:bg-[#f5faf6]"
                  >
                    Load More Notices
                    <ArrowDown size={16} />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* EVENTS */}
          {activeTab === "events" && (
            <div className="mt-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-[#77867b]">
                  Showing{" "}
                  <span className="font-semibold text-[#173b30]">
                    {Math.min(visibleEvents, filteredEvents.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-[#173b30]">
                    {filteredEvents.length}
                  </span>{" "}
                  events
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#edf6ee] px-3 py-2 text-xs font-medium text-[#327b54]">
                  <CalendarDays size={14} />
                  Event calendar
                </span>
              </div>

              {filteredEvents.length > 0 && (
                <div className="mb-8 grid gap-5 lg:grid-cols-2">
                  {filteredEvents.slice(0, visibleEvents).map((event) => (
                    <article
                      key={event.id}
                      className="group overflow-hidden rounded-[1.5rem] border border-[#e4ebe3] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#bdd9c3] hover:shadow-[0_20px_50px_-30px_rgba(31,87,60,0.4)]"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          loading="lazy"
                          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102f23]/55 to-transparent" />

                        <div className="absolute left-5 top-5 flex min-w-[68px] flex-col items-center rounded-xl bg-white p-3 shadow-lg">
                          <span className="text-2xl font-bold leading-none text-[#1f573c]">
                            {formatDay(event.date)}
                          </span>
                          <span className="mt-1 text-[10px] font-bold tracking-[0.12em] text-[#7b887d]">
                            {formatMonth(event.date)}
                          </span>
                        </div>

                        <span
                          className={`absolute right-4 top-5 rounded-full border px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] ${
                            colorClasses[event.color]
                          }`}
                        >
                          {event.category.toUpperCase()}
                        </span>

                        {event.featured && (
                          <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-[#327b54]">
                            <Sparkles size={12} />
                            FEATURED EVENT
                          </span>
                        )}
                      </div>

                      <div className="p-5 sm:p-6">
                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                          {event.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#748176]">
                          {event.description}
                        </p>

                        <div className="mt-5 grid gap-3 border-y border-[#edf0eb] py-4 sm:grid-cols-2">
                          <div className="flex items-start gap-2.5">
                            <Clock3
                              size={17}
                              className="mt-0.5 shrink-0 text-[#43865b]"
                            />
                            <div>
                              <p className="text-xs font-semibold">
                                {event.time}
                              </p>
                              <p className="mt-1 text-xs text-[#879389]">
                                {formatDate(event.date, {
                                  weekday: "short",
                                  day: "numeric",
                                  month: "short",
                                })}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2.5">
                            <MapPin
                              size={17}
                              className="mt-0.5 shrink-0 text-[#43865b]"
                            />
                            <p className="text-xs leading-5 text-[#66776a]">
                              {event.location}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => setSelectedEvent(event)}
                            className="inline-flex items-center gap-2 rounded-xl bg-[#1f573c] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#17442f]"
                          >
                            Event Details
                            <ArrowRight size={15} />
                          </button>

                          <button
                            type="button"
                            aria-label={`Share ${event.title}`}
                            onClick={() => shareItem(event, "Event")}
                            className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold text-[#66776a] transition hover:bg-[#f4f8f3]"
                          >
                            <Share2 size={15} />
                            Share
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {filteredEvents.length === 0 && (
                <div className="rounded-2xl border border-dashed border-[#d7e3d7] bg-white px-5 py-16 text-center">
                  <CalendarDays
                    size={32}
                    className="mx-auto text-[#9aae9c]"
                  />
                  <h3 className="mt-4 text-lg font-semibold">
                    No events match your filters
                  </h3>
                  <p className="mt-2 text-sm text-[#7b887d]">
                    Try a different month, category or search term.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-5 rounded-xl bg-[#1f573c] px-5 py-3 text-sm font-semibold text-white"
                  >
                    Reset filters
                  </button>
                </div>
              )}

              {visibleEvents < filteredEvents.length && (
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisibleEvents((current) => current + 4)}
                    className="inline-flex items-center gap-3 rounded-xl border border-[#dce6dd] bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-[#9bbfa2] hover:bg-[#f5faf6]"
                  >
                    Load More Events
                    <ArrowDown size={16} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* PARENT CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#1f573c] px-7 py-10 sm:px-12 sm:py-14 lg:px-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold tracking-[0.15em] text-[#d6efdc]">
                <Bell size={13} />
                STAY CONNECTED
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
                Never miss a school update.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Keep this page bookmarked and check back for school
                announcements, academic updates and upcoming activities.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setSubscribed(true);
              }}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#1f573c] transition hover:-translate-y-0.5 hover:bg-[#eaf4eb]"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 size={17} />
                  Reminder noted
                </>
              ) : (
                <>
                  Remind Me to Check
                  <ArrowRight size={17} />
                </>
              )}
            </button>
          </div>

          {subscribed && (
            <p className="mt-5 text-sm text-[#d6efdc]">
              This is a local demo interaction only. No reminder has been
              scheduled.
            </p>
          )}
        </div>
      </section>

      {/* NOTICE DETAIL MODAL */}
      {selectedNotice && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#10251b]/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="notice-modal-title"
            className="my-auto w-full max-w-xl overflow-hidden rounded-[1.6rem] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#edf0eb] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf6ee] text-[#327b54]">
                  <FileText size={21} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#718075]">
                    SCHOOL NOTICE
                  </p>
                  <p className="mt-1 text-xs text-[#879389]">
                    {selectedNotice.reference}
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close notice details"
                onClick={() => setSelectedNotice(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#718075] transition hover:bg-[#f0f6ef]"
              >
                <X size={19} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <span
                className={`inline-flex rounded-full border px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] ${
                  colorClasses[selectedNotice.color]
                }`}
              >
                {selectedNotice.category.toUpperCase()}
              </span>

              <h2
                id="notice-modal-title"
                className="mt-4 text-2xl font-semibold leading-tight tracking-tight"
              >
                {selectedNotice.title}
              </h2>

              <p className="mt-3 text-xs text-[#879389]">
                Published {formatDate(selectedNotice.date)}
              </p>

              <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4 text-xs leading-6 text-amber-800">
                Demonstration content only. Please confirm actual school
                schedules, holidays and instructions with the school office.
              </div>

              <p className="mt-6 text-sm leading-8 text-[#66776a]">
                {selectedNotice.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {selectedNotice.attachment && (
                  <button
                    type="button"
                    onClick={() => downloadNotice(selectedNotice)}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1f573c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#17442f]"
                  >
                    <Download size={16} />
                    Download sample
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => shareItem(selectedNotice, "Notice")}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#e2e9e1] px-5 py-3 text-sm font-semibold text-[#536b59] transition hover:bg-[#f4f8f3]"
                >
                  <Share2 size={16} />
                  Share notice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EVENT DETAIL MODAL */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#10251b]/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            className="my-auto w-full max-w-2xl overflow-hidden rounded-[1.6rem] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102f23]/65 to-transparent" />

              <button
                type="button"
                aria-label="Close event details"
                onClick={() => setSelectedEvent(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#173b30] transition hover:bg-[#eaf4eb]"
              >
                <X size={19} />
              </button>

              <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-3 py-2 text-[10px] font-bold tracking-[0.12em] text-[#327b54]">
                {selectedEvent.category.toUpperCase()}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h2
                id="event-modal-title"
                className="text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {selectedEvent.title}
              </h2>

              <div className="mt-5 grid gap-4 rounded-xl bg-[#f3f8f2] p-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CalendarDays
                    size={19}
                    className="mt-0.5 shrink-0 text-[#43865b]"
                  />
                  <div>
                    <p className="text-xs font-semibold">Date</p>
                    <p className="mt-1 text-sm text-[#66776a]">
                      {formatDate(selectedEvent.date, {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3
                    size={19}
                    className="mt-0.5 shrink-0 text-[#43865b]"
                  />
                  <div>
                    <p className="text-xs font-semibold">Time</p>
                    <p className="mt-1 text-sm text-[#66776a]">
                      {selectedEvent.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-[#43865b]"
                  />
                  <div>
                    <p className="text-xs font-semibold">Venue</p>
                    <p className="mt-1 text-sm text-[#66776a]">
                      {selectedEvent.location}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm leading-8 text-[#66776a]">
                {selectedEvent.description}
              </p>

              <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4 text-xs leading-6 text-amber-800">
                This is a fictional event listing for the website prototype.
                Dates, times and venues must be verified before publication.
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => shareItem(selectedEvent, "Event")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1f573c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#17442f]"
                >
                  <Share2 size={16} />
                  Share event
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#e2e9e1] px-5 py-3 text-sm font-semibold text-[#536b59] transition hover:bg-[#f4f8f3]"
                >
                  Close details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
