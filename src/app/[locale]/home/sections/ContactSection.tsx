import { Send } from "lucide-react";

interface ContactSectionProps {
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  btn_text: string;
}

export default function ContactSection({
  title,
  description,
  nameLabel,
  namePlaceholder,
  companyLabel,
  companyPlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  btn_text,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="absolute inset-0 bg-linear-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-2xl mx-auto px-6 reveal-on-scroll">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-zinc-400 text-lg">{description}</p>
        </div>

        <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
          <h3 className="text-xl font-medium text-white mb-8">{btn_text}</h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">
                  {nameLabel}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-zinc-600 transition-all"
                  placeholder={namePlaceholder}
                />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-medium text-zinc-400 ml-1">
                  {companyLabel}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-zinc-600 transition-all"
                  placeholder={companyPlaceholder}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 ml-1">
                {emailLabel}
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-zinc-600 transition-all"
                placeholder={emailPlaceholder}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 ml-1">
                {messageLabel}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-zinc-600 transition-all resize-none"
                placeholder={messagePlaceholder}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-4 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              {btn_text}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
