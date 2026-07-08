import { useState, useRef } from "react";
import { Mail, Phone, User, Send, Check, X, AlertCircle } from "lucide-react";
//Jaxongir
const PALETTE = {
  teal: "#1F9E8B",
  tealDark: "#137A6B",
  coral: "#F1592A",
  coralDark: "#D5461E",
  mustard: "#F5B942",
  plum: "#6B2D5C",
  ink: "#1E2A32",
  paper: "#FBF9F4",
};

function Field({ label, required, error, children }) {
  return (
    <label className="block">
      <span className="text-[13px] font-semibold text-[#3A4750] tracking-wide">
        {label}
        {required && <span className="text-[#F1592A]"> *</span>}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && (
        <span className="mt-1 flex items-center gap-1 text-[12px] font-medium text-[#D5461E]">
          <AlertCircle size={12} strokeWidth={2.5} />
          {error}
        </span>
      )}
    </label>
  );
}

function inputClasses(hasError) {
  return [
    "w-full rounded-xl border bg-white px-4 py-2.5 text-[14px] text-[#1E2A32]",
    "placeholder:text-[#A9ADA6] outline-none transition-all duration-150",
    "focus:ring-4",
    hasError
      ? "border-[#F1592A] focus:ring-[#F1592A]/15"
      : "border-[#E4E1D6] focus:border-[#1F9E8B] focus:ring-[#1F9E8B]/12",
  ].join(" ");
}

function Toast({ type, message, onClose }) {
  const isError = type === "error";
  return (
    <div
      className="pointer-events-auto relative w-80 overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-8px_rgba(30,42,50,0.25)]"
      style={{
        borderLeft: `5px solid ${isError ? PALETTE.coral : PALETTE.teal}`,
        animation: "slideIn 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      role="status"
    >
      <div className="flex items-start gap-3 px-4 py-3.5">
        <div
          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: isError ? "#FCE6DD" : "#DFF3EE" }}
        >
          {isError ? (
            <X size={13} strokeWidth={3} color={PALETTE.coralDark} />
          ) : (
            <Check size={13} strokeWidth={3} color={PALETTE.tealDark} />
          )}
        </div>
        <p className="flex-1 text-[13.5px] leading-snug text-[#1E2A32]">{message}</p>
        <button
          onClick={onClose}
          className="mt-0.5 shrink-0 text-[#B8B4A8] transition hover:text-[#1E2A32]"
          aria-label="Dismiss notification"
        >
          <X size={15} />
        </button>
      </div>
      <div
        className="h-[3px] w-full origin-left"
        style={{
          backgroundColor: isError ? PALETTE.coral : PALETTE.teal,
          animation: "drain 4s linear forwards",
        }}
      />
    </div>
  );
}

function Illustration() {
  return (
    <svg viewBox="0 0 420 420" className="w-full max-w-[380px]" aria-hidden="true">
      <rect x="70" y="220" width="16" height="120" rx="8" fill={PALETTE.mustard} />
      <rect x="230" y="220" width="16" height="120" rx="8" fill={PALETTE.mustard} />
      <circle cx="78" cy="345" r="10" fill={PALETTE.mustard} />
      <circle cx="238" cy="345" r="10" fill={PALETTE.mustard} />
      <rect x="60" y="150" width="200" height="90" rx="18" fill={PALETTE.mustard} opacity="0.9" />
      <rect x="60" y="150" width="200" height="90" rx="18" fill="none" stroke={PALETTE.mustard} strokeWidth="6" />
      <path d="M60 195 H260" stroke={PALETTE.paper} strokeWidth="4" opacity="0.5" />
      <rect x="95" y="185" width="130" height="75" rx="16" fill={PALETTE.coral} />
      <rect x="95" y="185" width="65" height="75" rx="16" fill={PALETTE.plum} opacity="0.85" />
      <circle cx="150" cy="95" r="42" fill={PALETTE.mustard} />
      <circle cx="150" cy="95" r="42" fill="none" />
      <rect x="118" y="118" width="64" height="26" rx="13" fill={PALETTE.mustard} />
      <circle cx="150" cy="88" r="30" fill="#F6CE84" />
      <rect x="128" y="72" width="44" height="16" rx="8" fill={PALETTE.plum} opacity="0.7" />
      <circle cx="140" cy="92" r="4" fill={PALETTE.ink} />
      <circle cx="160" cy="92" r="4" fill={PALETTE.ink} />
      <path
        d="M100 200 C70 190 55 160 65 130 C75 105 105 100 118 118 C130 135 130 165 120 190 Z"
        fill={PALETTE.teal}
      />
      <path
        d="M205 130 C230 110 265 118 270 145 C274 168 250 185 225 178 L205 165 Z"
        fill={PALETTE.teal}
      />
      <circle cx="272" cy="140" r="20" fill="#F6CE84" />
      <g transform="translate(255,95) rotate(8)">
        <rect x="0" y="0" width="46" height="60" rx="4" fill="#FDFBF6" stroke="#D8D3C4" strokeWidth="2" />
        <line x1="9" y1="14" x2="37" y2="14" stroke={PALETTE.teal} strokeWidth="3" strokeLinecap="round" />
        <line x1="9" y1="26" x2="37" y2="26" stroke={PALETTE.teal} strokeWidth="3" strokeLinecap="round" />
        <line x1="9" y1="38" x2="28" y2="38" stroke={PALETTE.teal} strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(300,80) rotate(-6)">
        <rect x="0" y="0" width="34" height="40" rx="4" fill={PALETTE.mustard} />
        <rect x="0" y="0" width="34" height="10" rx="4" fill={PALETTE.coral} />
      </g>
      <path
        d="M225 178 C250 210 235 250 200 260 C175 267 155 255 155 235"
        fill="none"
        stroke={PALETTE.coral}
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M155 235 C150 270 130 300 100 320"
        fill="none"
        stroke="#E88A9E"
        strokeWidth="30"
        strokeLinecap="round"
      />
      <path
        d="M100 320 L70 340"
        fill="none"
        stroke="#FDFBF6"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <ellipse cx="60" cy="345" rx="18" ry="9" fill={PALETTE.ink} opacity="0.85" />
    </svg>
  );
}

export default function SignUpForm() {
  const initial = { firstName: "", lastName: "", email: "", phone: "", message: "", agree: true };
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  function pushToast(type, message) {
    const id = ++idRef.current;
    setToasts((t) => [...t, { id, type, message }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 4000);
  }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: null }));
  }

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Enter your first name";
    if (!form.lastName.trim()) e.lastName = "Enter your last name";
    if (!form.email.trim()) e.email = "Enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Tell us a little about your question";
    if (!form.agree) e.agree = "Agree to continue";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      pushToast("error", "A few fields need your attention before we can send it.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      pushToast("success", `Thanks ${form.firstName} — your message is on its way to us.`);
      setForm(initial);
    }, 900);
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden px-6 py-16 md:px-12"
      style={{ backgroundColor: PALETTE.paper, fontFamily: "'Poppins','Inter',sans-serif" }}
    >
      <style>{`
        @keyframes slideIn { from { transform: translateX(24px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes drain { from { transform: scaleX(1); } to { transform: scaleX(0); } }
      `}</style>

      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full opacity-[0.10]"
        style={{ backgroundColor: PALETTE.teal }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full opacity-[0.08]"
        style={{ backgroundColor: PALETTE.coral }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div className="hidden justify-center md:flex">
          <Illustration />
        </div>

        <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-[0_20px_60px_-20px_rgba(30,42,50,0.18)] md:p-10">
          <p
            className="mb-2 text-[11px] font-bold tracking-[0.22em]"
            style={{ color: PALETTE.coral }}
          >
            ANY QUESTIONS?
          </p>
          <h1 className="mb-8 text-[34px] font-extrabold leading-tight text-[#1E2A32] md:text-[38px]">
            Drop us a line
          </h1>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="First name" required error={errors.firstName}>
                <input
                  className={inputClasses(errors.firstName)}
                  placeholder="Your first name"
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                />
              </Field>
              <Field label="Last name" required error={errors.lastName}>
                <input
                  className={inputClasses(errors.lastName)}
                  placeholder="Your last name"
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Email" required error={errors.email}>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B8B4A8]" />
                  <input
                    className={inputClasses(errors.email) + " pl-9"}
                    placeholder="Your working email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
              </Field>
              <Field label="Phone">
                <div className="relative">
                  <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B8B4A8]" />
                  <input
                    className={inputClasses(false) + " pl-9"}
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>
              </Field>
            </div>

            <Field label="Message" required error={errors.message}>
              <textarea
                rows={4}
                className={inputClasses(errors.message) + " resize-none"}
                placeholder="Your message"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </Field>

            <div>
              <label className="flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => update("agree", e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-[#F1592A]"
                />
                <span className="text-[12.5px] leading-snug text-[#6B7178]">
                  I agree to receive communications from Createx Online School
                </span>
              </label>
              {errors.agree && (
                <span className="mt-1 flex items-center gap-1 pl-6 text-[12px] font-medium text-[#D5461E]">
                  <AlertCircle size={12} strokeWidth={2.5} />
                  {errors.agree}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[14px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(241,89,42,0.55)] transition-all duration-150 hover:brightness-105 active:scale-[0.99] disabled:opacity-70 sm:w-auto sm:px-8"
              style={{ backgroundColor: PALETTE.coral }}
            >
              {sending ? (
                <>
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending
                </>
              ) : (
                <>
                  Send message
                  <Send size={15} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="pointer-events-none fixed right-6 top-6 z-50 flex flex-col gap-3">
        {toasts.map((t) => (
          <Toast key={t.id} type={t.type} message={t.message} onClose={() => setToasts((all) => all.filter((x) => x.id !== t.id))} />
        ))}
      </div>
    </div>
  );
}