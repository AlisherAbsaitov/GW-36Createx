import { useState, useMemo } from "react";
import { Search, RotateCw, ArrowLeft, ArrowRight, Quote } from "lucide-react";

// 1. Kategoriya stillari (Faqat bir marta e'lon qilinishi kerak)
const CATEGORY_STYLES = {
  Marketing: "bg-emerald-500",
  Management: "bg-indigo-500",
  "HR & Recruting": "bg-orange-500",
  Design: "bg-pink-600",
  Development: "bg-violet-600",
};

const ACCREDITATIONS = [
  { name: "Del Mar Strategy", color: "text-emerald-600" },
  { name: "Sentinal Consulting", color: "text-slate-700" },
  { name: "National", color: "text-emerald-600" },
];

// 2. Kurslar ro'yxati (const COURSES qayta e'lon qilinishi olib tashlandi)
const COURSES = [
  {
    id: 1,
    title: "The Ultimate Google Ads Training Course",
    category: "Marketing",
    price: 100,
    author: "Jerome Bell",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    title: "Product Management Fundamentals",
    category: "Management",
    price: 480,
    author: "Marvin McKinney",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    title: "HR Management and Analytics",
    category: "HR & Recruting",
    price: 200,
    author: "Leslie Alexander Li",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    title: "Brand Management & PR Communications",
    category: "Marketing",
    price: 530,
    author: "Kristin Watson",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    title: "Graphic Design Basic",
    category: "Design",
    price: 500,
    author: "Guy Hawkins",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 6,
    title: "Business Development Management",
    category: "Management",
    price: 400,
    author: "Dianne Russell",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 7,
    title: "Highload Software Architecture",
    category: "Development",
    price: 600,
    author: "Brooklyn Simmons",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 8,
    title: "Human Resources – Selection and Recruitment",
    category: "HR & Recruting",
    price: 150,
    author: "Kathryn Murphy",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 9,
    title: "User Experience. Human-centered Design",
    category: "Design",
    price: 240,
    author: "Cody Fisher",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

// Agar TESTIMONIALS JSON fayldan kelayotgan bo'lsa, uni import qiling yoki dummy data qo'ying:
const TESTIMONIALS = [
  {
    id: 1,
    quote: "This course was absolutely incredible! It changed my career path entirely.",
    name: "Eleanor Pena",
    role: "Digital Marketer",
    img: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 2,
    quote: "Very detailed explanations and practical examples. Highly recommended!",
    name: "Guy Hawkins",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const TABS = ["All", "Marketing", "Management", "HR & Recruting", "Design", "Development"];

function tabCount(tab) {
  if (tab === "All") return COURSES.length;
  return COURSES.filter((c) => c.category === tab).length;
}

export default function Courses() {
  const [activeTab, setActiveTab] = useState("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const goPrev = () => {
    if (TESTIMONIALS.length === 0) return;
    setActiveTestimonial((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  };
  
  const goNext = () => {
    if (TESTIMONIALS.length === 0) return;
    setActiveTestimonial((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));
  };

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const matchesTab = activeTab === "All" || c.category === activeTab;
      const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase());
      return matchesTab && matchesQuery;
    });
  }, [activeTab, query]);

  const visibleCourses = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-16">
      {/* Header row: tabs + search */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setVisibleCount(9);
              }}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "border border-red-400 text-red-500"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab}
              <sup className="text-[10px] font-semibold">{tabCount(tab)}</sup>
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search course..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-4 pr-10 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-200"
          />
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Cards grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCourses.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-56 w-full overflow-hidden bg-yellow-400">
              <img
                src={course.img}
                alt={course.author}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <span
                className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium text-white ${
                  CATEGORY_STYLES[course.category] || "bg-slate-500"
                }`}
              >
                {course.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                {course.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                <span className="font-bold text-red-500">${course.price}</span>{" "}
                <span className="mx-1 text-slate-300">|</span> by {course.author}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-slate-400">
          No courses found for "{query}".
        </p>
      )}

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisibleCount((v) => v + 6)}
            className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            <RotateCw className="h-4 w-4" />
            Load more
          </button>
        </div>
      )}

      {/* Testimonials carousel */}
      {TESTIMONIALS.length > 0 && (
        <section className="relative mt-24 overflow-hidden rounded-3xl bg-slate-50 px-6 py-16 md:px-16">
          <div className="pointer-events-none absolute -left-6 top-8 h-32 w-32 rounded-full border border-slate-200" />
          <div className="pointer-events-none absolute -left-2 top-14 h-20 w-20 rounded-full border border-slate-200" />

          <div className="relative text-center">
            <p className="text-xs font-bold tracking-widest text-red-500">
              TESTIMONIALS
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              What our students say
            </h2>
          </div>

          <div className="relative mx-auto mt-10 max-w-4xl">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="absolute left-[-56px] top-1/2 hidden -translate-y-1/2 rounded-full p-2 text-slate-500 hover:text-slate-800 md:block"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="absolute right-[-56px] top-1/2 hidden -translate-y-1/2 rounded-full bg-red-500 p-3 text-white shadow-lg hover:bg-red-600 md:block"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
              <Quote className="h-7 w-7 fill-red-500 text-red-500" />
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {TESTIMONIALS[activeTestimonial].quote}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={TESTIMONIALS[activeTestimonial].img}
                  alt={TESTIMONIALS[activeTestimonial].name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">
                    {TESTIMONIALS[activeTestimonial].name}
                  </p>
                  <p className="text-sm text-slate-400">
                    {TESTIMONIALS[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeTestimonial ? "w-8 bg-slate-800" : "w-4 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certificate section */}
      <section className="mx-auto mt-24 grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold tracking-widest text-slate-400">
            CREATEX CERTIFICATE
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
            Your expertise will be confirmed
          </h2>
          <p className="mt-4 max-w-sm text-slate-500">
            We are accredited by international professional organizations and
            institutes:
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            {ACCREDITATIONS.map((a) => (
              <span key={a.name} className={`text-sm font-semibold ${a.color}`}>
                {a.name}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-blue-100 via-amber-100 to-rose-100 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl bg-white p-10 shadow-xl">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 500 320"
              preserveAspectRatio="none"
            >
              <path d="M0 0 L120 0 C90 40 60 90 0 100 Z" fill="#60A5FA" opacity="0.5" />
              <path d="M0 0 L160 0 C120 50 70 60 30 130 C10 60 5 20 0 0 Z" fill="#FBBF24" opacity="0.6" />
              <path d="M500 0 L500 90 C460 60 430 30 420 0 Z" fill="#FB7185" opacity="0.15" />
              <path d="M500 220 C460 240 440 280 500 320 L500 220 Z" fill="#FBBF24" opacity="0.7" />
              <path d="M500 260 C450 250 430 300 470 320 L500 320 Z" fill="#60A5FA" opacity="0.5" />
              <path d="M500 240 C430 230 400 280 440 320 L500 320 L500 240 Z" fill="#34D399" opacity="0.4" />
              <circle cx="150" cy="40" r="6" fill="#60A5FA" opacity="0.5" />
              <circle cx="470" cy="150" r="6" fill="#60A5FA" opacity="0.3" />
              <circle cx="250" cy="315" r="5" fill="#FBBF24" opacity="0.6" />
            </svg>

            <div className="relative text-center">
              <h3 className="text-3xl font-extrabold tracking-wide text-red-500">
                CERTIFICATE
              </h3>
              <p className="mt-6 text-xs font-semibold tracking-widest text-slate-400">
                THE CERTIFICATE IS PRESENTED TO:
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                Jacob William
              </p>
              <p className="mx-auto mt-4 max-w-sm text-xs text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim
              </p>
              <div className="mt-10 flex justify-center gap-16">
                <div>
                  <p className="text-xl italic text-slate-800">Robert</p>
                  <p className="mt-1 text-xs text-slate-400">Robert Douglas</p>
                </div>
                <div>
                  <p className="text-xl italic text-slate-800">Adam</p>
                  <p className="mt-1 text-xs text-slate-400">Adam Harold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}