import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/navigation/Header";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

export const metadata: Metadata = {
  title: "CHP Guercif | Vérification AMO — Étude de cas",
  description:
    "Stage fin d'année DUT. Application web pour le statut de couverture AMO des patients en dialyse : HTML5, CSS3, JavaScript, Node.js, MongoDB.",
};

const stack = ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"];

function SectionTitle({ children, id }: { children: string; id?: string }) {
  return (
    <h2
      id={id}
      className="font-outfit text-xl font-bold tracking-tight text-white md:text-2xl lg:text-3xl"
    >
      {children}
    </h2>
  );
}

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-3xl border border-white/15 bg-[#050505]/60 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
      <h3 className="mb-4 font-outfit text-lg font-semibold text-white md:text-xl">{title}</h3>
      <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{children}</div>
    </article>
  );
}

export default function ChpGuercifCaseStudyPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(1,126,132,0.22),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(1,126,132,0.08),transparent_50%)]" />

      <Header />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-24 md:px-8 md:pt-32 lg:max-w-5xl">
        

        <header className="mb-12 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#017E84]">
            CHP, Guercif
          </p>
          <h1 className="font-outfit text-3xl font-bold leading-[1.05] tracking-tighter text-white md:text-4xl lg:text-5xl">
            Développeur Full Stack
            <span className="mt-2 block text-lg font-medium tracking-tight text-foreground/80 md:text-xl lg:text-2xl">
              Projet : Digitaliser la gestion des patients de dialyse
            </span>
          </h1>
        </header>

        <section className="mb-16 md:mb-24" aria-labelledby="brief">
          <SectionTitle id="brief">Le projet en bref</SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Établissement", value: "Centre Hospitalier Provincial (CHP), Guercif" },
              { label: "Période", value: "Avril 2023 — Juin 2023 (stage fin d'année DUT)" },
              { label: "Mon rôle", value: "Développeur Full Stack" },
              { label: "Stack", value: stack.join(" · ") },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/12 bg-[#0a0a0a]/80 p-5 backdrop-blur-md md:p-6"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-foreground/45">{item.label}</p>
                <p className="text-xs font-medium leading-snug text-white/95 md:text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-24 space-y-6" aria-labelledby="context">
          <SectionTitle id="context">Contexte</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            <p>
              Le Centre Hospitalier Provincial de Guercif accueille quotidiennement des patients en dialyse. Une partie
              bénéficie de l&apos;Assurance Maladie Obligatoire (AMO) et une partie non. Le service administratif
              recevait chaque jour les dossiers des patients après leurs séances, et devait vérifier manuellement, pour
              chacun, s&apos;il était couvert par l&apos;AMO ou non, afin de séparer les dossiers pour la facturation.
            </p>
            <p className="border-l-2 border-[#017E84] pl-6 text-foreground/85">
              Ce travail répétitif était chronophage et exposé aux erreurs de saisie ou d&apos;interprétation.
            </p>
          </div>
        </section>

        <section className="mb-16 md:mb-24" aria-labelledby="solution">
          <SectionTitle id="solution">Solution</SectionTitle>
          <p className="mt-8 text-sm leading-relaxed text-foreground/75 md:text-base">
            J&apos;ai développé une application web permettant au personnel administratif de saisir l&apos;Identifiant
            Permanent du Patient (IPP) et d&apos;obtenir immédiatement son statut de couverture AMO. L&apos;outil
            simplifie le tri des dossiers et réduit le temps consacré à cette tâche quotidienne, tout en rendant le
            résultat consultable de façon homogène pour toute l&apos;équipe.
          </p>
        </section>

        <section className="mb-16 md:mb-24 grid gap-6 md:grid-cols-2" aria-labelledby="delivery">
          <span id="delivery" className="sr-only">
            Livraison et apprentissages
          </span>
          <InfoCard title="Cycle de développement">
            <p>
              Ce stage m&apos;a permis de parcourir une grande partie du cycle de développement : structuration de la
              base de données (MongoDB), logique côté serveur avec Node.js, et interfaces utilisateur en HTML5, CSS3 et
              JavaScript.
            </p>
          </InfoCard>
          <InfoCard title="Environnement hospitalier">
            <p>
              J&apos;ai pu découvrir les contraintes propres au développement dans un contexte de santé : rigueur des
              données patients, besoin de fiabilité pour les décisions administratives, et dialogue continu avec les
              utilisateurs métier.
            </p>
          </InfoCard>
        </section>

        <section className="mb-24 space-y-6 rounded-3xl border border-[#017E84]/25 bg-gradient-to-br from-[#017E84]/10 to-transparent p-8 md:mb-32 md:p-12" aria-labelledby="outcome">
          <SectionTitle id="outcome">Résultat</SectionTitle>
          <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
            La consultation du statut AMO à partir de l&apos;IPP centralise l&apos;information et limite les
            allers-retours manuels entre dossiers papier ou tableurs, ce qui soutient une facturation plus claire entre
            patients couverts et non couverts.
          </p>
        </section>

        <footer className="flex flex-col items-start gap-6 border-t border-white/10 pt-12 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/50">CHP Guercif · Stage DUT · 2023</p>
          <Magnetic>
            <TransitionLink
              href="/club-dexcellence"
              title="Club d'Excellence"
              transitionLines={[
                "Rôle : Responsable Média",
                "Club d'Excellence, FSJES, Oujda",
                "Période : 2024 — 2025",
              ]}
              className="inline-flex items-center justify-center rounded-full bg-[#017E84] px-6 md:px-8 py-3 md:py-3.5 text-xs md:text-sm font-medium text-white shadow-[0_0_24px_rgba(1,126,132,0.35)] transition-colors hover:bg-white hover:text-[#017E84] w-full md:w-auto text-center"
            >
              Visiter mon activité au Club d&apos;Excellence →
            </TransitionLink>
          </Magnetic>
        </footer>
      </div>
    </main>
  );
}
