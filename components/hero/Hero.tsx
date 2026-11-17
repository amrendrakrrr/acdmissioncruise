import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Compass, GraduationCap, Globe2, MessageCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f9fd] text-[#102445]">
      <div className="pointer-events-none absolute -right-40 -top-48 h-[580px] w-[580px] rounded-full bg-[#dbe9ff] opacity-75 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 -left-40 h-[420px] w-[420px] rounded-full bg-[#e0f5f3] opacity-65 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:pb-24 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cbdcf5] bg-white/90 px-4 py-2 text-xs font-bold tracking-[.08em] text-[#2456a3] shadow-sm sm:text-sm">
            <Sparkles size={15} aria-hidden="true" />
            YOUR NEXT CHAPTER STARTS HERE
          </div>
          <h1 className="mt-7 max-w-[760px] text-[clamp(2.65rem,5.1vw,5.2rem)] font-extrabold leading-[1.08] tracking-[-.055em]">
            Your ambition.
            <span className="block text-[#2465c5]">Our guidance.</span>
            <span className="block">A world of possibilities.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#52647f] sm:text-lg">
            Explore universities in India and abroad, understand your options,
            and take your next step with personalized admission counselling.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/#apply-form" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#174da3] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(23,77,163,.2)] transition hover:bg-[#103d88] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174da3]">
              Get free counselling <ArrowRight size={19} aria-hidden="true" />
            </Link>
            <Link href="/universities" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-[#c8d6e9] bg-white px-7 py-4 text-base font-semibold text-[#163c72] transition hover:border-[#174da3] hover:bg-[#edf4ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174da3]">
              Explore universities <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-[#52647f]">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-[#16816e]" size={18} /> India &amp; abroad</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-[#16816e]" size={18} /> Course guidance</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-[#16816e]" size={18} /> Free initial counselling</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
          <div className="absolute inset-x-6 bottom-2 top-8 rounded-[2.5rem] bg-gradient-to-br from-[#c8e2ff] via-[#e2efff] to-[#c6e7e6]" />
          <div className="absolute inset-x-14 bottom-0 h-16 rounded-full bg-[#264b88]/10 blur-2xl" />
          <div className="relative mx-auto flex min-h-[340px] items-end justify-center pt-8 sm:min-h-[480px]">
            <Image src="/student.png" alt="Student exploring education opportunities" width={500} height={625} priority sizes="(max-width: 1024px) 90vw, 500px" className="relative z-10 h-auto max-h-[490px] w-auto max-w-[78%] object-contain drop-shadow-[0_20px_32px_rgba(29,57,102,.12)]" />
          </div>
          <div className="absolute left-0 top-[19%] z-20 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_12px_32px_rgba(16,36,69,.12)] backdrop-blur sm:-left-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf1ff] text-[#2258b1]"><GraduationCap size={21} /></span>
            <span className="text-sm font-bold">Study in India</span>
          </div>
          <div className="absolute -right-1 bottom-[21%] z-20 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_12px_32px_rgba(16,36,69,.12)] backdrop-blur sm:-right-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f7f4] text-[#137b6c]"><Globe2 size={21} /></span>
            <span className="text-sm font-bold">Study abroad</span>
          </div>
        </div>
      </div>
      <div className="relative border-t border-[#e0e8f3] bg-white/75">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-3 sm:px-8">
          <div className="flex items-center gap-3"><Compass className="shrink-0 text-[#2465c5]" size={24} /><span className="text-sm font-semibold text-[#334761]">Explore courses and universities</span></div>
          <div className="flex items-center gap-3"><MessageCircle className="shrink-0 text-[#2465c5]" size={24} /><span className="text-sm font-semibold text-[#334761]">Talk through your options</span></div>
          <div className="flex items-center gap-3"><GraduationCap className="shrink-0 text-[#2465c5]" size={24} /><span className="text-sm font-semibold text-[#334761]">Plan your admission journey</span></div>
        </div>
      </div>
    </section>
  );
}
