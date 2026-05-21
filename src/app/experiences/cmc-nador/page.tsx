import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/navigation/Header";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

export const metadata: Metadata = {
  title: "CMC Nador | Suivi pédagogique — Étude de cas",
  description:
    "Stage fin d'année Licence. Application web de suivi des heures d'enseignement : Next.js 14, TypeScript, TailwindCSS, NextAuth et JWT.",
};

const stack = ["React.js", "Next.js 14", "TypeScript", "TailwindCSS", "NextAuth", "Git"];

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

export default function CmcNadorCaseStudyPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(1,126,132,0.22),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(1,126,132,0.08),transparent_50%)]" />

      <Header />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-24 md:px-8 md:pt-32 lg:max-w-5xl">
        

        <header className="mb-12 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#017E84]">
            CMC, Nador
          </p>
          <h1 className="font-outfit text-3xl font-bold leading-[1.05] tracking-tighter text-white md:text-4xl lg:text-5xl">
            Développeur Front-end
            <span className="mt-2 block text-lg font-medium tracking-tight text-foreground/80 md:text-xl lg:text-2xl">
              Projet : Suivi automatisé des heures d&apos;enseignement
            </span>
          </h1>
        </header>

        <section className="mb-16 md:mb-24" aria-labelledby="brief">
          <SectionTitle id="brief">Le projet en bref</SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Organisme", value: "Cité des Métiers et des Compétences (CMC), Nador" },
              { label: "Période", value: "Avril 2024 — Juillet 2024 (stage fin d'année Licence)" },
              { label: "Mon rôle", value: "Développeur Front-end" },
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
              La Cité des Métiers et des Compétences de Nador est un établissement régional de formation professionnelle
              qui accueille des centaines de stagiaires répartis sur neuf secteurs métiers. Le suivi des heures
              d&apos;enseignement se faisait manuellement : chaque semaine, un responsable pédagogique extrayait un
              fichier Excel, puis réalisait des calculs groupe par groupe pour repérer les retards sur les programmes et
              contrôler le respect des emplois du temps par les formateurs.
            </p>
            <p className="border-l-2 border-[#017E84] pl-6 text-foreground/85">
              Ce processus était long, fragile, et ne permettait pas une vision en temps réel de la situation
              pédagogique.
            </p>
          </div>
        </section>

        <section className="mb-16 md:mb-24" aria-labelledby="solution">
          <SectionTitle id="solution">Solution</SectionTitle>
          <p className="mt-8 text-sm leading-relaxed text-foreground/75 md:text-base">
            J&apos;ai intégré une équipe de stagiaires encadrée par des enseignants pour développer le front-end d&apos;une
            application web qui automatise ce suivi. Mon rôle était de concevoir et implémenter les interfaces
            utilisateur : tableau de bord interactif avec graphiques de progression, vues filtrées par rôle, et
            intégration de l&apos;authentification (NextAuth / JWT) pour aligner les droits d&apos;accès sur les
            responsabilités métier.
          </p>
        </section>

        <section className="mb-16 md:mb-24 grid gap-6 md:grid-cols-2" aria-labelledby="roles">
          <span id="roles" className="sr-only">
            Rôles et sécurité
          </span>
          <InfoCard title="Gestion des rôles">
            <ul className="list-inside list-disc space-y-2 marker:text-[#017E84]">
              <li>
                <strong className="text-foreground/90">Direction</strong> (directeur de la CMC et directeur
                pédagogique) : vision de la progression pour tous les groupes.
              </li>
              <li>
                <strong className="text-foreground/90">Chefs de pôle</strong> : accès limité aux groupes de leur
                département.
              </li>
              <li>
                <strong className="text-foreground/90">Formateurs</strong> : consultation uniquement des groupes
                qu&apos;ils assurent.
              </li>
            </ul>
          </InfoCard>
          <InfoCard title="Authentification">
            <p>
              L&apos;authentification est gérée avec <strong className="text-foreground/90">NextAuth</strong> et des{" "}
              <strong className="text-foreground/90">JSON Web Tokens (JWT)</strong>, afin de sécuriser les sessions et
              d&apos;aligner les droits d&apos;accès sur les responsabilités métier.
            </p>
          </InfoCard>
        </section>

        <section className="mb-24 space-y-6 rounded-3xl border border-[#017E84]/25 bg-gradient-to-br from-[#017E84]/10 to-transparent p-8 md:mb-32 md:p-12" aria-labelledby="outcome">
          <SectionTitle id="outcome">Résultat</SectionTitle>
          <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
            Le passage d&apos;un flux manuel basé sur Excel à une application dédiée réduit le temps de traitement, la
            charge cognitive des responsables pédagogiques et le risque d&apos;erreur, tout en offrant une lecture plus
            claire de l&apos;avancement des programmes pour les différents profils d&apos;utilisateurs.
          </p>
        </section>

        <footer className="flex flex-col items-start gap-6 border-t border-white/10 pt-12 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/50">CMC Nador · Stage Licence · 2024</p>
          <Magnetic>
            <TransitionLink
              href="/experiences/chp-guercif"
              title="CHP Guercif"
              transitionLines={[
                "Mon rôle : Développeur Full Stack",
                "Établissement : Centre Hospitalier Provincial, Guercif",
                "Durée : 2 mois",
              ]}
              className="inline-flex items-center justify-center rounded-full bg-[#017E84] px-6 md:px-8 py-3 md:py-3.5 text-xs md:text-sm font-medium text-white shadow-[0_0_24px_rgba(1,126,132,0.35)] transition-colors hover:bg-white hover:text-[#017E84] w-full md:w-auto text-center"
            >
              Visiter mon expérience en tant que Développeur Full Stack →
            </TransitionLink>
          </Magnetic>
        </footer>
      </div>
    </main>
  );
}
