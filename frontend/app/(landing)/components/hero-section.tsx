import Image from "next/image";
import Link from "next/link";
import { Section } from "@/src/components/layout";
import { LandingPageShell } from "./landing-page-shell";

const navItems = [
  { title: "Modules", href: "#modules" },
  { title: "Why PrimeCore", href: "#about" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Contact", href: "#support" },
] as const;

const trustedBrands = ["pingdom", "ClickUp", "monday.com"] as const;

export function HeroSection() {
  return (
    <Section className="pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pb-12">
      <LandingPageShell>
        <section className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(122deg,#08305a_0%,#0a3f6d_57%,#1f84c4_100%)] px-5 pb-10 pt-5 text-white sm:px-9 sm:pb-12 sm:pt-16 lg:px-14 lg:pb-0 xl:px-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[8%] top-[-20%] h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
            <div className="absolute right-[-8%] top-[26%] h-72 w-72 rounded-full bg-[#66ccff]/20 blur-[110px]" />
          </div>

          <header className="relative z-20 flex flex-wrap items-center justify-between gap-5 sm:gap-6">
            <Link href="/" className="inline-flex shrink-0 items-center">
              <Image
                src="/Primecore%20logo%20white%202.png"
                alt="PrimeCore Bank Digital"
                width={560}
                height={250}
                className="h-11 w-auto sm:h-14 lg:h-16"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-8 text-lg lg:flex xl:text-xl">
              {navItems.map((item) => (
                <Link key={item.title} href={item.href} className="text-white/90 transition-colors hover:text-white">
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-[#123456] transition-colors hover:bg-white/90 sm:h-11 sm:px-6 sm:text-base"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-[#3ca3e4] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#3198dc] sm:h-11 sm:px-6 sm:text-base"
              >
                Sign Up
              </Link>
            </div>
          </header>

          <nav className="relative z-20 mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-base text-white/85 lg:hidden">
            {navItems.map((item) => (
              <Link key={item.title} href={item.href} className="transition-colors hover:text-white">
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="relative z-10 mt-6 grid items-end gap-8 lg:mt-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] xl:gap-10">
            <div className="max-w-[50rem] space-y-6 pb-3 sm:space-y-8 lg:-mt-2 lg:pb-8">
              <p className="mt-6 inline-flex rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm text-white/90 sm:text-base">
                100K+ Accounts Opened Globally.
              </p>
                    
              <h1 className="text-[clamp(2.5rem,4.2vw,5.6rem)] font-semibold leading-[1.04] tracking-[-0.02em]">
                Understand Your Credit. Predict Your Risk. Borrow Smarter.
              </h1>

              <p className="max-w-2xl text-[clamp(1rem,1.15vw,1.5rem)] leading-relaxed text-white/80">
                PrimeCore is a credit intelligence platform that evaluates financial behavior, predicts loan
                eligibility, and helps individuals and banks make safer lending decisions.
              </p>

              <div className="flex w-full max-w-md items-center gap-2 rounded-2xl bg-white p-2.5 sm:p-3">
                <Link
                  href="/login"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-white text-base font-semibold text-[#5b6470] transition-colors hover:bg-[#f2f7ff] sm:text-lg lg:h-14 lg:text-xl"
                >
                  Get Started
                </Link>
                <Link
                  href="/register"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-[#3ca3e4] text-base font-semibold text-white transition-colors hover:bg-[#3198dc] sm:text-lg lg:h-14 lg:text-xl"
                >
                  Sign Up
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-lg font-semibold text-white/90 sm:gap-8 sm:text-xl">
                {trustedBrands.map((brand) => (
                  <span key={brand} className="text-lg sm:text-xl">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[320px] self-end sm:min-h-[480px] lg:min-h-[700px] xl:min-h-[760px]">
              <div className="absolute bottom-0 right-0 h-[90%] w-[85%] rounded-t-[70px] bg-[linear-gradient(160deg,#2d93d1_0%,#5fc1f5_100%)]/50" />
              <Image
                src="/hero-image.png"
                alt="PrimeCore customer checking finance details on mobile"
                fill
                className="object-contain object-bottom"
                sizes="(min-width: 1536px) 40vw, (min-width: 1280px) 42vw, (min-width: 768px) 50vw, 90vw"
                priority
              />
            </div>
          </div>
        </section>
      </LandingPageShell>
    </Section>
  );
}
