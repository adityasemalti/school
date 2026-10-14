import {
  ArrowUpRight,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Brand() {
  return (
    <a href="/" className="flex shrink-0 items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#176747] text-white shadow-sm">
        <GraduationCap size={24} strokeWidth={1.8} />
      </div>

      <div>
        <p className="text-[16px] font-extrabold leading-tight tracking-[-0.04em] text-white">
          EAK International
        </p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.23em] text-white/55">
          School · Learn to lead
        </p>
      </div>
    </a>
  );
}

const exploreLinks = [
  ["About our school", "/about"],
  ["Academics", "/academics"],
  ["Our facilities", "/facilities"],
  ["Campus life", "/events"],
];

const familyLinks = [
  ["Admissions", "/admissions"],
  ["School notices", "/events"],
  ["Upcoming events", "/events"],
  ["Contact us", "/contact"],
];

export default function Footer() {
  return (
    <footer className="bg-[#142F25] px-5 pb-7 pt-12 text-white sm:px-8 sm:pt-16 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr] lg:gap-12">
          <div>
            <Brand />

            <p className="mt-6 max-w-[330px] text-[13px] leading-7 text-white/65">
              Nurturing curious minds, kind hearts and confident learners.
              Every child deserves the opportunity to discover their potential.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium text-white/75">
              <Heart size={13} className="text-[#9BD2AC]" />
              Learn with purpose. Grow with confidence.
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Explore</h3>

            <div className="mt-5 flex flex-col gap-3.5">
              {exploreLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs text-white/65 transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">For Families</h3>

            <div className="mt-5 flex flex-col gap-3.5">
              {familyLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs text-white/65 transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Get in touch</h3>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3 text-xs leading-6 text-white/65">
                <MapPin size={16} className="mt-1 shrink-0 text-[#A6D7B6]" />
                <span>School address to be updated</span>
              </div>

              <a
                href="mailto:admissions@eakschool.example"
                className="flex gap-3 text-xs text-white/65 transition hover:text-white"
              >
                <Mail size={16} className="shrink-0 text-[#A6D7B6]" />
                <span className="break-all">
                  admissions@eakschool.example
                </span>
                <ArrowUpRight size={13} className="shrink-0" />
              </a>

              <div className="flex gap-3 text-xs text-white/65">
                <Phone size={16} className="shrink-0 text-[#A6D7B6]" />
                <span>Phone number to be updated</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[10px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} EAK International School. All rights reserved.
          </p>
          <p>Made for brighter beginnings.</p>
        </div>
      </div>
    </footer>
  );
}