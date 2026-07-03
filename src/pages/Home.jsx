import React from 'react'
// Nurbek


const features = [
  "Arzon narxlarda sifatli platforma xizmatlari",
  "Sohasida tajribali va malakali o'qituvchilar",
  "O'quv jarayoni aniq reja va tuzilma asosida",
  "O'zingizga qulay vaqtda o'qish imkoniyati",
];

const courses = [
  {
    tag: "New",
    tagColor: "bg-emerald-500",
    title: "The Ultimate Google Ads Training Course",
    author: "by Aziz Karimov",
    price: "$49",
    image: "https://picsum.photos/seed/course1/400/260",
  },
  {
    tag: "Popular",
    tagColor: "bg-orange-500",
    title: "Project Management Fundamentals",
    author: "by Dilnoza Yusupova",
    price: "$59",
    image: "https://picsum.photos/seed/course2/400/260",
  },
  {
    tag: "New",
    tagColor: "bg-emerald-500",
    title: "HR Management and Analytics",
    author: "by Javlon Rustamov",
    price: "$45",
    image: "https://picsum.photos/seed/course3/400/260",
  },
  {
    tag: "Hot",
    tagColor: "bg-rose-500",
    title: "Brand Management & PR Communications",
    author: "by Malika Tosheva",
    price: "$65",
    image: "https://picsum.photos/seed/course4/400/260",
  },
  {
    tag: "New",
    tagColor: "bg-emerald-500",
    title: "Business Development Management",
    author: "by Sardor Aliyev",
    price: "$52",
    image: "https://picsum.photos/seed/course5/400/260",
  },
  {
    tag: "Popular",
    tagColor: "bg-orange-500",
    title: "Graphic Design Basic",
    author: "by Nilufar Xolova",
    price: "$39",
    image: "https://picsum.photos/seed/course6/400/260",
  },
];

const steps = [
  {
    num: "01",
    title: "Kursni tanlang",
    desc: "O'zingizga mos yo'nalish va kursni ro'yxatdan tanlab oling.",
  },
  {
    num: "02",
    title: "O'qishni boshlang",
    desc: "Tajribali tutorlar bilan qulay jadval asosida o'qishni boshlang.",
  },
  {
    num: "03",
    title: "Sertifikat oling",
    desc: "Kursni yakunlab, o'z bilimingizni tasdiqlaydigan sertifikat oling.",
  },
];

export default function Home() {
  return (
    <div className="w-full text-slate-800">
      {/* ---------- Why Createx ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://picsum.photos/seed/createx-hero/600/500"
            alt="Createx jamoasi bilan ishlash"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <span className="text-orange-500 font-semibold text-sm tracking-wide uppercase">
            Biz haqimizda
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Nega aynan Createx?
          </h2>

          <ul className="space-y-4 mb-8">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium px-6 py-3 rounded-lg">
            Batafsil
          </button>
        </div>
      </section>

      {/* ---------- Featured Courses ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tavsiya etilgan kurslar
          </h2>
          <a
            href="#"
            className="text-orange-500 font-medium border border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-50 transition-colors whitespace-nowrap"
          >
            Barcha kurslar
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <span
                  className={`absolute top-3 left-3 text-white text-xs font-semibold px-2 py-1 rounded-md ${course.tagColor}`}
                >
                  {course.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800 leading-snug mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-400 mb-3">{course.author}</p>
                <span className="text-orange-500 font-bold">
                  {course.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- That's how we do it ---------- */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Biz shunday ishlaymiz
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="text-orange-500 text-sm font-bold mb-3">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Only practicing tutors ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faqat amaliyotchi tutorlar
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Bizning barcha o'qituvchilarimiz o'z sohasida amaliy tajribaga ega
            mutaxassislardir. Ular nazariya bilan birga real loyihalarda
            qo'lga kiritilgan bilim va tajribani ham talabalarga
            o'rgatishadi.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Shu tufayli Createx bitiruvchilari bozorga chiqqanda nafaqat
            nazariy, balki amaliy jihatdan ham tayyor holatda bo'lishadi.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://picsum.photos/seed/tutors-illustration/600/450"
            alt="Amaliyotchi tutorlar"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
  