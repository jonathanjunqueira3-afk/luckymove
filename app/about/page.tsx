import type { Metadata } from "next";
import { ArrowUpRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal, SplitWords, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: { absolute: "About LuckyMove | Sydney Removalist Built Around Care" },
  description:
    "Meet Jonathan and Lucas, the founders of LuckyMove, a Sydney removalist company built around careful handling, customer care and a genuinely better moving experience.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About LuckyMove | Sydney Removalist Built Around Care",
    description:
      "LuckyMove — also known as Lucky Move — is a Sydney removalist company built around one idea: the job is finished when the customer is happy.",
    url: "/about",
    images: [{ url: "/media/team.jpg", width: 1920, height: 2592 }],
  },
};

const STANDARD = [
  "Protect it.",
  "Handle it carefully.",
  "Communicate with the customer.",
  "Respect their home.",
  "Do the job properly.",
];

const CARE_POINTS = [
  "No unnecessary scratches.",
  "No careless handling.",
  "No rushing.",
  "No treating your belongings like just another job.",
];

const FOUNDERS = [
  {
    name: "Jonathan",
    role: "Co-Founder",
    experience: "2 years in the removalist industry",
    bio: [
      "Jonathan is one of the founders of LuckyMove and brings 2 years of experience in the removalist industry.",
      "Originally from Brazil, Jonathan has built his experience through hands-on work in residential and furniture removals. His approach is simple: communicate with the customer, take care of their belongings and make sure the job is completed properly.",
      "For Jonathan, one of the best parts of the job is seeing the customer's reaction when everything has been safely moved and the stress of moving starts to disappear.",
    ],
  },
  {
    name: "Lucas",
    role: "Co-Founder",
    experience: "3.5+ years in the removalist industry",
    bio: [
      "Lucas is the second founder of LuckyMove and brings more than 3.5 years of experience in the removalist industry.",
      "With extensive hands-on experience moving furniture and handling different types of properties and moving situations, Lucas shares the same commitment to careful handling and customer service that LuckyMove was built around.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ————— Hero ————— */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-lucky-navy pb-24 pt-40 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-20 h-[32rem] w-[32rem] rounded-full bg-lucky-blue/25 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-lucky-yellow/15 blur-[120px]"
        />
        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow mb-8 text-lucky-yellow">
              <span className="h-px w-8 bg-lucky-yellow" /> About LuckyMove
            </span>
          </Reveal>
          <h1 className="display max-w-5xl text-balance text-4xl md:text-7xl">
            <SplitWords text="More than moving furniture." />{" "}
            <SplitWords
              text="We move people's lives."
              wordClassName="text-lucky-yellow"
              delay={0.2}
            />
          </h1>
          <Reveal delay={0.45}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
              LuckyMove — also known as Lucky Move — is a Sydney-based
              removalist company built around one simple idea: our job is not
              finished when the furniture arrives. It&apos;s finished when our
              customer is happy.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <MagneticButton href="/#contact" variant="secondary">
                Get a Free Quote <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="/#services" variant="ghost" className="text-white">
                Our Services
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— Our Story ————— */}
      <section className="relative bg-white py-28 md:py-40">
        <div className="container-x">
          <div className="grid gap-14 md:grid-cols-2 md:gap-20">
            <div>
              <Reveal>
                <span className="eyebrow mb-5">
                  <span className="h-px w-8 bg-lucky-blue" /> Our Story
                </span>
              </Reveal>
              <h2 className="display text-4xl md:text-6xl">
                <SplitWords text="Built by two people" />{" "}
                <SplitWords
                  text="who care."
                  wordClassName="text-lucky-blue"
                  delay={0.15}
                />
              </h2>
              <Reveal delay={0.2}>
                <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-lucky-navy/65 md:text-base">
                  <p>
                    LuckyMove was created by two partners, Jonathan and Lucas,
                    who share the same vision for the moving industry: to
                    provide a level of care, respect and attention to detail
                    that customers can genuinely feel throughout their move.
                  </p>
                  <p>
                    Jonathan brings 2 years of experience in the removalist
                    industry, while Lucas has more than 3.5 years of hands-on
                    removal experience. After working in the industry and
                    seeing how much a move can mean to a person or family, they
                    decided to build something of their own — a company where
                    the customer comes first.
                  </p>
                  <p>
                    Moving house is more than carrying boxes from one place to
                    another. For many people, a move represents a new chapter.
                    It can be a new home, a new beginning, a growing family, a
                    new business or simply a fresh start.
                  </p>
                  <p className="font-medium text-lucky-navy">
                    And we understand that the furniture we move isn&apos;t
                    just furniture. It&apos;s someone&apos;s home.
                  </p>
                  <p>
                    It&apos;s the dining table where a family has shared years
                    of meals. It&apos;s a couch where children grew up.
                    It&apos;s a bed, a wardrobe, a piano, a television — things
                    that can hold memories and have real value to the people
                    who own them.
                  </p>
                  <p className="font-medium text-lucky-navy">
                    That&apos;s why we treat every move as if it were our own.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="relative">
              <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[2rem] bg-lucky-navy md:min-h-full">
                <img
                  src="/media/founders.jpg"
                  alt="Jonathan and Lucas, founders of LuckyMove, in the truck between moves in Sydney"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lucky-navy/35 via-transparent to-transparent"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Care Comes Before Everything ————— */}
      <section className="relative bg-gray-light py-28 md:py-40">
        <div className="container-x">
          <div className="mb-16 max-w-3xl">
            <Reveal>
              <span className="eyebrow mb-5">
                <span className="h-px w-8 bg-lucky-blue" /> Our Approach
              </span>
            </Reveal>
            <h2 className="display text-4xl md:text-6xl">
              <SplitWords text="Care comes before" />{" "}
              <SplitWords text="everything." wordClassName="text-lucky-blue" delay={0.15} />
            </h2>
            <Reveal delay={0.25}>
              <p className="mt-6 max-w-2xl text-lg text-lucky-navy/60">
                At LuckyMove, we don&apos;t measure a successful move only by
                how quickly the job is completed. We measure it by how the
                customer feels when we&apos;re finished.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-lucky-navy/10 bg-white p-8 md:p-10">
                <p className="text-[15px] leading-relaxed text-lucky-navy/65 md:text-base">
                  We take the time to properly protect furniture, carefully
                  handle belongings and think ahead about the safest way to
                  move each item. From wrapping and protecting furniture to
                  navigating stairs, narrow spaces, lifts and difficult access,
                  we believe that doing the job properly is more important than
                  simply doing it quickly.
                </p>
                <p className="mt-6 text-[15px] leading-relaxed text-lucky-navy/65 md:text-base">
                  We want you to look at your furniture at the end of the move
                  and feel confident that it was handled with care.
                </p>
              </div>
            </Reveal>
            <Stagger className="grid gap-4">
              {CARE_POINTS.map((point) => (
                <StaggerItem key={point}>
                  <div className="flex items-center gap-4 rounded-3xl border border-lucky-navy/10 bg-white px-8 py-6">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-lucky-blue" />
                    <span className="font-display text-lg font-medium tracking-tight md:text-xl">
                      {point}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ————— Why We Started ————— */}
      <section className="relative overflow-hidden bg-lucky-navy py-28 text-white md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-lucky-blue/20 blur-[120px]"
        />
        <div className="container-x relative">
          <div className="mb-16 max-w-3xl">
            <Reveal>
              <span className="eyebrow mb-5 text-lucky-yellow">
                <span className="h-px w-8 bg-lucky-yellow" /> Why We Started
              </span>
            </Reveal>
            <h2 className="display text-4xl md:text-6xl">
              <SplitWords text="We believe moving" />{" "}
              <SplitWords text="can be done better." wordClassName="text-lucky-yellow" delay={0.15} />
            </h2>
          </div>

          <div className="grid gap-14 md:grid-cols-2 md:gap-20">
            <Reveal>
              <div className="space-y-5 text-[15px] leading-relaxed text-white/65 md:text-base">
                <p>
                  We didn&apos;t start LuckyMove because we wanted to build
                  just another removalist company. We started it because we
                  believe moving can be done better.
                </p>
                <p>
                  There are always cheaper options. There are always companies
                  that can promise a faster move. But we want LuckyMove to be
                  known for something different: care, reliability, respect —
                  and genuinely happy customers.
                </p>
                <p>
                  For us, success isn&apos;t just about how much money a job
                  makes. It&apos;s about seeing a customer smile because
                  everything has been safely moved. It&apos;s about earning a
                  5-star review because we genuinely earned it, not because we
                  simply asked for one. And it&apos;s about knowing that the
                  people who trusted us with their home would happily
                  recommend us to someone they care about.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <figure className="flex h-full flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">
                <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                  “Thank you. You guys made this so much easier.”
                </blockquote>
                <figcaption className="mt-6 text-sm text-white/50">
                  The message that means more to us than any invoice.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Our Vision ————— */}
      <section className="relative bg-white py-28 md:py-40">
        <div className="container-x">
          <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
            <Reveal className="relative order-last md:order-first">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-lucky-navy">
                <img
                  src="/media/team.jpg"
                  alt="A LuckyMove removalist truck parked on a leafy Sydney street"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lucky-navy/35 via-transparent to-transparent"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow mb-5">
                  <span className="h-px w-8 bg-lucky-blue" /> Our Vision
                </span>
              </Reveal>
              <h2 className="display text-4xl md:text-6xl">
                <SplitWords text="Trusted, one move" />{" "}
                <SplitWords text="at a time." wordClassName="text-lucky-blue" delay={0.15} />
              </h2>
              <Reveal delay={0.2}>
                <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-lucky-navy/65 md:text-base">
                  <p>
                    We want LuckyMove to become one of the most trusted
                    removalist companies in Sydney and, eventually, Australia.
                    But we don&apos;t want to grow simply to become bigger. We
                    want to grow because more people trust us.
                  </p>
                  <p>
                    We want our reputation to be built one happy customer at a
                    time, one carefully protected piece of furniture at a time,
                    and one successful move at a time.
                  </p>
                  <p>
                    Our ambition is to build a company where people don&apos;t
                    choose LuckyMove because we&apos;re the cheapest. They
                    choose us because they know:
                  </p>
                  <p className="font-display text-xl font-medium tracking-tight text-lucky-navy md:text-2xl">
                    “These guys will take care of my things.”
                  </p>
                  <p>That&apos;s the reputation we&apos;re working to build.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Meet the Founders ————— */}
      <section className="relative bg-gray-light py-28 md:py-40">
        <div className="container-x">
          <div className="mb-16 max-w-3xl">
            <Reveal>
              <span className="eyebrow mb-5">
                <span className="h-px w-8 bg-lucky-blue" /> Meet the Founders
              </span>
            </Reveal>
            <h2 className="display text-4xl md:text-6xl">
              <SplitWords text="The people behind" />{" "}
              <SplitWords text="LuckyMove." wordClassName="text-lucky-blue" delay={0.15} />
            </h2>
          </div>

          <Stagger className="grid gap-6 md:grid-cols-2 md:gap-8">
            {FOUNDERS.map((f) => (
              <StaggerItem key={f.name}>
                <article className="flex h-full flex-col rounded-[2rem] border border-lucky-navy/10 bg-white p-8 transition-shadow duration-500 hover:shadow-[0_30px_80px_-40px_rgba(7,27,54,0.4)] md:p-12">
                  <div className="mb-8 flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lucky-navy font-display text-2xl font-semibold text-lucky-yellow">
                      {f.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-medium tracking-tight">
                        {f.name}
                      </h3>
                      <p className="mt-1 text-sm text-lucky-navy/50">
                        {f.role} · {f.experience}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-[15px] leading-relaxed text-lucky-navy/65">
                    {f.bio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-[2rem] bg-lucky-navy px-8 py-12 text-center text-white md:px-16 md:py-16">
              <p className="mx-auto max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight md:text-4xl">
                “A great removalist doesn&apos;t just move your belongings.{" "}
                <span className="text-lucky-yellow">
                  A great removalist gives you peace of mind.
                </span>
                ”
              </p>
              <p className="mt-6 text-sm text-white/50">
                — Jonathan &amp; Lucas, founders of LuckyMove
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— The LuckyMove Standard ————— */}
      <section className="relative bg-white py-28 md:py-40">
        <div className="container-x">
          <div className="grid gap-14 md:grid-cols-2 md:gap-20">
            <div>
              <Reveal>
                <span className="eyebrow mb-5">
                  <span className="h-px w-8 bg-lucky-blue" /> The LuckyMove Standard
                </span>
              </Reveal>
              <h2 className="display text-4xl md:text-6xl">
                <SplitWords text="Every move is different." />{" "}
                <SplitWords
                  text="Our standard stays the same."
                  wordClassName="text-lucky-blue"
                  delay={0.15}
                />
              </h2>
              <Reveal delay={0.2}>
                <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-lucky-navy/65 md:text-base">
                  <p>
                    Whether you&apos;re moving from an apartment to a house,
                    relocating your family, moving furniture, changing offices
                    or preparing for an{" "}
                    <a href="/#services" className="font-medium text-lucky-blue underline-offset-4 hover:underline">
                      interstate move
                    </a>
                    , we want you to feel that your belongings are in safe
                    hands.
                  </p>
                  <p>
                    Explore our{" "}
                    <a href="/#services" className="font-medium text-lucky-blue underline-offset-4 hover:underline">
                      residential moving, furniture transport and packing
                      services
                    </a>{" "}
                    or see{" "}
                    <a href="/#process" className="font-medium text-lucky-blue underline-offset-4 hover:underline">
                      how our process works
                    </a>
                    .
                  </p>
                  <p className="font-medium text-lucky-navy">
                    Because at the end of the day, we&apos;re not just moving
                    furniture. We&apos;re helping people move forward.
                  </p>
                </div>
              </Reveal>
            </div>
            <Stagger className="flex flex-col justify-center gap-4">
              {STANDARD.map((item, i) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-5 rounded-3xl border border-lucky-navy/10 bg-gray-light px-8 py-6">
                    <span className="font-display text-sm font-semibold text-lucky-blue">
                      0{i + 1}
                    </span>
                    <span className="font-display text-lg font-medium tracking-tight md:text-2xl">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ————— Final CTA ————— */}
      <section className="relative overflow-hidden bg-lucky-navy py-32 text-white md:py-44">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-20 h-[32rem] w-[32rem] rounded-full bg-lucky-blue/25 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-lucky-yellow/15 blur-[120px]"
        />
        <div className="container-x relative text-center">
          <h2 className="display mx-auto max-w-4xl text-balance text-5xl md:text-8xl">
            <SplitWords text="Welcome to" />{" "}
            <SplitWords text="LuckyMove." wordClassName="text-lucky-yellow" delay={0.15} />
          </h2>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-white/60">
              Your move. Our care.
            </p>
          </Reveal>
          <Reveal delay={0.42}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="/#contact" variant="secondary">
                Get a Free Quote <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="tel:+61406641518" variant="ghost" className="text-white">
                <PhoneCall className="h-4 w-4" /> +61 406 641 518
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
