import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/navigation/Header";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

export const metadata: Metadata = {
  title: "HB Development | Développeur Odoo junior — Étude de cas",
  description:
    "Stage PFE — Projet Smart-ITSM : système intelligent de gestion des tickets (Odoo 18, OCA Helpdesk, module smart_itsm, préparation IA).",
};

const stack = ["Odoo 18 Community", "OCA Helpdesk 18", "Python", "PostgreSQL", "Docker"];

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


function PhaseCard({
  phase,
  title,
  children,
}: {
  phase: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#050505]/60 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors hover:border-[#017E84]/40 md:p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/12 to-transparent opacity-80 transition-opacity group-hover:opacity-100 pointer-events-none" />
      <div className="relative">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#017E84]">{phase}</p>
        <h3 className="mb-4 font-outfit text-lg font-semibold text-white md:text-xl">{title}</h3>
        <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{children}</div>
      </div>
    </article>
  );
}

export default function HbDevelopmentCaseStudyPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(1,126,132,0.22),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(1,126,132,0.08),transparent_50%)]" />

      <Header />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-24 md:px-8 md:pt-32 lg:max-w-5xl">
        

        <header className="mb-12 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#017E84]">HB Development</p>
          <h1 className="font-outfit text-3xl font-bold leading-[1.05] tracking-tighter text-white md:text-4xl lg:text-5xl">
            Développeur Odoo junior
            <span className="mt-2 block text-lg font-medium tracking-tight text-foreground/80 md:text-xl lg:text-2xl">
              Projet : Système intelligent de gestion des tickets (Smart-ITSM)
            </span>
          </h1>
        </header>

        <section className="mb-16 md:mb-24" aria-labelledby="brief">
          <SectionTitle id="brief">Le projet en bref</SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Entreprise", value: "HB Development" },
              { label: "Durée", value: "6 mois — Fév 2026 — Présent (Stage PFE)" },
              { label: "Mon rôle", value: "Développeur Odoo junior" },
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

        <section className="mb-16 md:mb-24 space-y-6" aria-labelledby="problem">
          <SectionTitle id="problem">Le problème</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            <p>
              HB Development est une startup en croissance. Comme beaucoup de jeunes entreprises, la gestion des
              réclamations internes se faisait de manière informelle : messages sur des groupes de discussion, appels
              directs. Les conséquences étaient prévisibles : demandes oubliées, aucune traçabilité, et aucun moyen de
              mesurer la performance du support interne.
            </p>
            <p>
              La direction souhaitait aller au-delà d&apos;un simple outil de ticketing. L&apos;objectif à terme était
              d&apos;intégrer une couche d&apos;intelligence artificielle capable d&apos;analyser automatiquement chaque
              ticket : détecter la catégorie, évaluer la priorité, analyser le sentiment du demandeur, et suggérer une
              réponse à l&apos;agent.
            </p>
            <p className="border-l-2 border-[#017E84] pl-6 text-foreground/85">
              Mais avant d&apos;entraîner un modèle IA, il fallait résoudre un problème fondamental : l&apos;absence
              totale de données. Aucun historique de tickets n&apos;existait.
            </p>
          </div>
        </section>

        <section className="mb-16 md:mb-24" aria-labelledby="approach">
          <SectionTitle id="approach">Approche</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <PhaseCard phase="Phase 1" title="Choix technologique">
              <p>
                Évaluation des solutions open source pour construire le système, avec deux critères : budget (solution
                gratuite et auto-hébergeable) et compatibilité avec un moteur IA en Python.
              </p>
              <p>
                Après avoir évalué plusieurs options dont Request Tracker, recommandation d&apos;Odoo 18 Community avec le
                module OCA Helpdesk 18 — ticketing, équipes, pipeline et automatisations, sans licence Enterprise.
              </p>
            </PhaseCard>
            <PhaseCard phase="Phase 2" title="Configuration et déploiement">
              <ul className="list-inside list-disc space-y-2 marker:text-[#017E84]">
                <li>Déploiement d&apos;Odoo 18 avec PostgreSQL sur le serveur de l&apos;entreprise via Docker</li>
                <li>Configuration OCA Helpdesk : types, catégories, équipes, étapes du pipeline</li>
                <li>Automatisations (catégorie choisie par le créateur → assignation d&apos;équipe)</li>
                <li>Import CSV de l&apos;ensemble des collaborateurs de HB Development</li>
              </ul>
            </PhaseCard>
            <PhaseCard phase="Phase 3" title="Recherche terrain">
              <p>
                Entretiens semi-directifs avec un échantillon d&apos;employés pour mesurer la familiarité avec les
                outils type Helpdesk et adapter l&apos;interface et la formation.
              </p>
              <p>
                Un besoin RH récurrent est remonté : le recrutement des stagiaires via Excel, laborieux et source
                d&apos;erreurs — observation à l&apos;origine du projet parallèle Mentora Recruitment, développé de ma
                propre initiative.
              </p>
            </PhaseCard>
            <PhaseCard phase="Phase 4" title="Développement du module smart_itsm">
              <p>
                Pendant la collecte des tickets par les employés, développement du module personnalisé{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-[#017E84]">smart_itsm</code> qui étend
                OCA Helpdesk pour préparer l&apos;intégration de l&apos;IA.
              </p>
            </PhaseCard>
          </div>
        </section>

        <section className="mb-16 md:mb-24 space-y-12" aria-labelledby="module">
          <SectionTitle id="module">Ce que le module ajoute</SectionTitle>

          <div className="space-y-4">
            <h3 className="font-outfit text-base font-semibold text-white md:text-lg">Vue ticket</h3>
            <p className="max-w-3xl text-sm leading-relaxed text-foreground/75 md:text-base">
              Un bouton « Lancer l&apos;analyse IA » envoie le contenu du ticket au moteur. Un onglet « Analyse IA »
              dans le notebook affiche l&apos;historique des analyses. Un compteur en tête de formulaire indique le
              nombre d&apos;analyses et permet d&apos;accéder à la liste complète.
            </p>
            <figure className="overflow-hidden rounded-2xl border border-white/12 bg-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/hb_screenshot_1.png"
                alt="Formulaire ticket Odoo avec bouton d'analyse IA et onglet Analyse IA"
                width={1600}
                height={900}
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-center text-xs text-foreground/50">
                Vue formulaire — analyse IA et historique
              </figcaption>
            </figure>
          </div>

          <div className="space-y-4">
            <h3 className="font-outfit text-base font-semibold text-white md:text-lg">Modèle d&apos;analyse IA</h3>
            <p className="text-sm leading-relaxed text-foreground/75 md:text-base">
              Chaque analyse est un enregistrement lié au ticket, avec catégorie détectée, priorité (Normale, Urgente,
              Critique), sentiment (Positif, Neutre, Négatif, Furieux), réponse suggérée (brouillon RAG), score de
              confiance (0–100&nbsp;%) et date d&apos;analyse.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-outfit text-base font-semibold text-white md:text-lg">Workflow de validation</h3>
            <p className="max-w-3xl text-sm leading-relaxed text-foreground/75 md:text-base">
              L&apos;analyse ne part jamais directement au demandeur : un agent humain valide d&apos;abord. Pipeline en
              trois étapes : En attente de validation → Approuvé par l&apos;agent → Rejeté par l&apos;agent. Règle
              métier : impossible de relancer une analyse tant qu&apos;une analyse précédente est en attente de
              validation.
            </p>
            <figure className="overflow-hidden rounded-2xl border border-white/12 bg-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/hb_screenshot_2.png"
                alt="Pipeline des analyses IA avec étapes de validation"
                width={1600}
                height={900}
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-center text-xs text-foreground/50">
                Pipeline de validation des analyses
              </figcaption>
            </figure>
          </div>

          <div className="space-y-4">
            <h3 className="font-outfit text-base font-semibold text-white md:text-lg">Menu d&apos;administration</h3>
            <p className="max-w-3xl text-sm leading-relaxed text-foreground/75 md:text-base">
              Menu dédié pour consulter toutes les analyses en liste et en Kanban, regroupées par statut de validation.
            </p>
            <figure className="overflow-hidden rounded-2xl border border-white/12 bg-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/hb_screenshot_3.png"
                alt="Vue Kanban des analyses IA par statut"
                width={1600}
                height={900}
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-center text-xs text-foreground/50">
                Liste et Kanban des analyses
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="mb-16 md:mb-24" aria-labelledby="challenges">
          <SectionTitle id="challenges">Défis rencontrés</SectionTitle>
          <ol className="mt-8 space-y-6">
            {[
              {
                title: "Pas de Helpdesk natif en Community",
                body: "Odoo 18 Community n’inclut pas le Helpdesk Enterprise. Évaluation fonctionnelle d’OCA Helpdesk 18 et adaptation du développement à sa structure plutôt qu’à la documentation Enterprise.",
              },
              {
                title: "Module « IA-ready » avant le moteur IA",
                body: "Le moteur est développé en parallèle par une autre équipe. Anticipation du schéma de données (catégories, priorités, sentiments, scores) et architecture flexible pour les résultats réels du modèle.",
              },
              {
                title: "Adoption utilisateurs",
                body: "Certains employés n’avaient jamais utilisé d’outil de ticketing. Pipeline et automatisations pensés pour réduire la friction : création du ticket, choix de catégorie, le système gère la suite.",
              },
            ].map((item, i) => (
              <li
                key={item.title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-[#080808]/90 p-6 backdrop-blur-sm md:gap-8 md:p-8"
              >
                <span className="font-outfit text-2xl font-bold tabular-nums text-[#017E84]/90 md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 font-outfit text-base font-semibold text-white md:text-lg">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/75">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16 md:mb-24 space-y-6 rounded-3xl border border-[#017E84]/25 bg-gradient-to-br from-[#017E84]/10 to-transparent p-8 md:p-12" aria-labelledby="results">
          <SectionTitle id="results">Résultats</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/80 md:text-base">
            <p>
              Le système est en production sur le serveur de l&apos;entreprise. Les collaborateurs de HB Development
              créent des tickets au quotidien, ce qui constitue la base de données nécessaire à l&apos;entraînement du
              futur modèle IA.
            </p>
            <p>
              Le module <code className="rounded bg-black/30 px-1.5 py-0.5 text-[#017E84]">smart_itsm</code> est prêt à
              recevoir les prédictions du moteur IA dès qu&apos;il sera opérationnel, avec validation humaine pour la
              qualité des réponses automatiques.
            </p>
          </div>
        </section>

        <section className="mb-24 space-y-6 md:mb-32" aria-labelledby="learnings">
          <SectionTitle id="learnings">Ce que ce stage m&apos;a appris</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            <p>
              Le développement Odoo ne commence pas par le code : compréhension du besoin métier, choix de la base
              technologique, configuration avant personnalisation. Étendre un module existant — en respecter
              l&apos;architecture et les conventions — est une compétence centrale pour un développeur Odoo en
              partenaire.
            </p>
            <p>
              Au-delà de la technique, l&apos;importance d&apos;écouter les utilisateurs : c&apos;est lors des
              entretiens que le besoin à l&apos;origine de Mentora Recruitment est apparu. Un bon développeur observe,
              questionne, et propose des solutions aux problèmes découverts sur le terrain — pas seulement le cahier des
              charges.
            </p>
          </div>
        </section>

        <footer className="flex flex-col items-start gap-6 border-t border-white/10 pt-12 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/50">Développeur Odoo junior · HB Development · 2026</p>
          <Magnetic>
            <TransitionLink
              href="/experiences/cmc-nador"
              title="CMC Nador"
              transitionLines={[
                "Mon rôle : Développeur Front-end",
                "Établissement : Cité des Métiers et des Compétences — Nador",
                "Durée : 3 mois",
              ]}
              className="inline-flex items-center justify-center rounded-full bg-[#017E84] px-6 md:px-8 py-3 md:py-3.5 text-xs md:text-sm font-medium text-white shadow-[0_0_24px_rgba(1,126,132,0.35)] transition-colors hover:bg-white hover:text-[#017E84] w-full md:w-auto text-center"
            >
              Visiter mon expérience en tant que Développeur Front-end →
            </TransitionLink>
          </Magnetic>
        </footer>
      </div>
    </main>
  );
}
