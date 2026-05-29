import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/navigation/Header";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

export const metadata: Metadata = {
  title: "Club d'Excellence | Responsable Média",
  description:
    "Premier club étudiant de la FSJES, Responsable Média, création du logo, management d'une équipe de 6 personnes.",
};

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

export default function ClubExcellencePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(1,126,132,0.22),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(1,126,132,0.08),transparent_50%)]" />

      <Header />

      {/* Hero — image strip with title at bottom edge */}
      <section className="relative pt-20 md:pt-28">
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="relative h-[35vh] md:h-[45vh] w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/CDE.jpeg"
              alt="Club d'Excellence, Premier club de la FSJES"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Title at the bottom edge of the image */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <h1 className="font-outfit text-3xl font-bold leading-[1.05] tracking-tighter text-white md:text-4xl lg:text-5xl">
                Club d&apos;Excellence
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/70 font-light md:text-base">
                Le premier club étudiant créé au sein de la FSJES.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-12 md:px-8 md:pt-20 lg:max-w-5xl">
        <nav className="mb-12 flex flex-wrap items-center gap-3 text-sm text-foreground/50">
          <Magnetic>
            <TransitionLink
              href="/"
              title="Accueil"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-foreground/80 transition-colors hover:border-[#017E84]/50 hover:text-white"
            >
              ← Accueil
            </TransitionLink>
          </Magnetic>
          <span className="text-foreground/30">/</span>
          <span className="text-foreground/60">Club d&apos;Excellence</span>
        </nav>

        {/* Quick facts */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Structure", value: "1er club de la FSJES" },
              { label: "Période", value: "2024 — 2025" },
              { label: "Mon rôle", value: "Responsable Média" },
              { label: "Lieu", value: "FSJES, Oujda" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/12 bg-[#0a0a0a]/80 p-5 backdrop-blur-md"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-foreground/45">{item.label}</p>
                <p className="text-xs font-medium leading-snug text-white/95 md:text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The initiative */}
        <section className="mb-16 md:mb-24 space-y-6" aria-labelledby="context">
          <SectionTitle id="context">L&apos;initiative</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            <p>
              En parallèle de mes stages, j&apos;ai été très actif dans les activités parascolaires durant ma dernière
              année universitaire. Avec un groupe d&apos;étudiants motivés, nous avons pris l&apos;initiative de créer
              le <strong className="text-white/90">tout premier club </strong> au sein de la FSJES : le Club d&apos;Excellence.
            </p>
            <p>
              L&apos;objectif était clair : combler un manque. Il n&apos;existait aucune structure parascolaire
              permettant aux étudiants de se retrouver autour de projets communs, d&apos;organiser des événements, ou
              de développer des compétences en dehors du cadre académique. Nous avons voulu créer cet espace, un lieu
              d&apos;échange, d&apos;apprentissage continu et d&apos;organisation d&apos;événements à forte valeur
              ajoutée pour toute la communauté étudiante.
            </p>
            <p className="border-l-2 border-[#017E84] pl-6 text-foreground/85">
              Être le premier club signifiait tout construire de zéro : la structure organisationnelle, l&apos;identité
              visuelle, les processus de communication, et surtout la crédibilité auprès de l&apos;administration et
              des étudiants.
            </p>
          </div>
        </section>

        {/* Two key roles — highlighted */}
        <section className="mb-16 md:mb-24">
          <SectionTitle>Mes deux rôles clés</SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Role 1: Logo */}
            <div className="rounded-3xl border border-[#017E84]/25 bg-gradient-to-br from-[#017E84]/10 to-transparent p-8 md:p-10">
              <span className="text-3xl mb-4 block">✏️</span>
              <h3 className="font-outfit text-lg font-semibold text-white md:text-xl mb-3">
                Création du logo du club
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                J&apos;ai conçu l&apos;identité visuelle complète du club à partir de rien, le logo, la palette de
                couleurs, la typographie. C&apos;est le visage du club sur tous ses supports : réseaux sociaux, affiches,
                documents officiels. Il fallait quelque chose qui représente l&apos;excellence, l&apos;innovation et
                l&apos;esprit communautaire étudiant, tout en restant professionnel et mémorable.
              </p>
            </div>

            {/* Role 2: Team management */}
            <div className="rounded-3xl border border-[#017E84]/25 bg-gradient-to-br from-[#017E84]/10 to-transparent p-8 md:p-10">
              <span className="text-3xl mb-4 block">👥</span>
              <h3 className="font-outfit text-lg font-semibold text-white md:text-xl mb-3">
                Management d&apos;une équipe de 6
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                En tant que Responsable Média, je gérais une équipe de six personnes avec des profils complémentaires :
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#017E84]" />
                  2 Social Media Managers
                </li>
                <li className="flex items-center gap-3 text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#017E84]" />
                  2 Designers
                </li>
                <li className="flex items-center gap-3 text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#017E84]" />
                  2 Video Editors
                </li>
              </ul>
              <p className="text-sm text-foreground/70 leading-relaxed mt-4">
                Chaque membre avait un rôle clair. Mon travail était de coordonner les livrables, répartir les tâches
                selon les événements, et m&apos;assurer que tout soit livré dans les temps avec une qualité cohérente.
              </p>
            </div>
          </div>
        </section>

        {/* My role in detail */}
        <section className="mb-16 md:mb-24 space-y-6" aria-labelledby="role">
          <SectionTitle id="role">Mon rôle au quotidien</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            <p>
              Mes responsabilités incluaient la création des supports visuels pour chaque événement organisé par le
              club, la gestion du contenu sur les réseaux sociaux, et la communication des rapports d&apos;avancement
              avec les responsables des autres départements (Logistique, Sponsoring, Organisation).
            </p>
            <p>
              Chaque événement nécessitait une campagne de communication complète : teasers, annonces, couverture en
              direct, et récapitulatifs post-événement. C&apos;était un rythme soutenu qui demandait de la rigueur,
              de la créativité, et une bonne coordination avec les autres départements du club.
            </p>
          </div>
        </section>

        {/* Events organized */}
        <section className="mb-16 md:mb-24" aria-labelledby="events">
          <SectionTitle id="events">Événements organisés</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#050505]/60 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors hover:border-[#017E84]/40 md:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/12 to-transparent opacity-80 transition-opacity group-hover:opacity-100 pointer-events-none" />
              <div className="relative">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#017E84]">Conférences</p>
                <h3 className="mb-4 font-outfit text-lg font-semibold text-white md:text-xl">Conférences &amp; tables rondes</h3>
                <p className="text-sm leading-relaxed text-foreground/75">
                  Organisation de conférences avec des intervenants professionnels sur des sujets variés :, intelligence artificielle et l'éducation supérieur, entrepreneuriat, et soft skills. Ces événements ont permis de créer un
                  pont entre le monde académique et le monde professionnel.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#050505]/60 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors hover:border-[#017E84]/40 md:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/12 to-transparent opacity-80 transition-opacity group-hover:opacity-100 pointer-events-none" />
              <div className="relative">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#017E84]">Événement phare</p>
                <h3 className="mb-4 font-outfit text-lg font-semibold text-white md:text-xl">Hack&apos;Chrono 48</h3>
                <p className="text-sm leading-relaxed text-foreground/75">
                  Le point culminant de notre activité : l&apos;organisation du premier hackathon de la FSJES en
                  décembre 2025. Un événement de 48 heures qui a mobilisé toutes les équipes du club et qui a été
                  salué par l&apos;administration comme une réussite exemplaire.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#050505]/60 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors hover:border-[#017E84]/40 md:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/12 to-transparent opacity-80 transition-opacity group-hover:opacity-100 pointer-events-none" />
              <div className="relative">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#017E84]">Networking</p>
                <h3 className="mb-4 font-outfit text-lg font-semibold text-white md:text-xl">Événements de networking</h3>
                <p className="text-sm leading-relaxed text-foreground/75">
                  Rencontres informelles entre étudiants de différentes filières, anciens diplômés et professionnels.
                  Ces moments ont permis de tisser un réseau et de créer une dynamique communautaire au sein de la
                  faculté.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16 md:mb-24 space-y-6 rounded-3xl border border-[#017E84]/25 bg-gradient-to-br from-[#017E84]/10 to-transparent p-8 md:p-12" aria-labelledby="impact">
          <SectionTitle id="impact">Impact</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/80 md:text-base">
            <p>
              Le Club d&apos;Excellence est passé d&apos;une simple idée à une structure reconnue par
              l&apos;administration de la faculté. En tant que premier club, nous avons posé les fondations pour toute
              la vie parascolaire étudiante, prouvant qu&apos;il était possible de s&apos;organiser, de créer de la
              valeur, et d&apos;être pris au sérieux par l&apos;institution.
            </p>
            <p>
              Les événements organisés ont touché des centaines d&apos;étudiants. Le hackathon Hack&apos;Chrono 48,
              point culminant de notre activité, a été particulièrement apprécié par le vice-doyen et a démontré la
              capacité des étudiants à porter des projets ambitieux de manière autonome.
            </p>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-24 space-y-6 md:mb-32" aria-labelledby="learnings">
          <SectionTitle id="learnings">Ce que cette expérience m&apos;a appris</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            <p>
              Gérer une équipe de six personnes m&apos;a appris les bases du management : déléguer sans micro-manager,
              donner du feedback constructif, et s&apos;assurer que chacun se sent impliqué et valorisé dans son travail.
            </p>
            <p>
              J&apos;ai aussi développé une vraie sensibilité pour la communication visuelle et le branding. Créer une
              identité cohérente pour le club, puis la décliner sur des dizaines de supports différents, m&apos;a donné
              une compréhension profonde de ce qui fait qu&apos;un design « fonctionne », une compétence que
              j&apos;applique aujourd&apos;hui dans mes projets de développement web.
            </p>
            <p>
              Enfin, créer le premier club de la FSJES m&apos;a montré que l&apos;initiative paie. Personne ne nous
              a demandé de le faire, nous avons identifié un besoin, proposé une solution, et exécuté. C&apos;est
              exactement l&apos;état d&apos;esprit que j&apos;apporte dans mes projets professionnels.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-start gap-6 border-t border-white/10 pt-12 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/50">Responsable Média · Club d&apos;Excellence · 2024 — 2025</p>
          <Magnetic>
            <TransitionLink
              href="/hackchrono-48"
              title="Hack'Chrono 48"
              transitionLines={[
                "Rôle : Membre Média & Marketing",
                "Hack'Chrono 48, FSJES, Oujda",
                "Période : Octobre — Décembre 2025",
              ]}
              className="inline-flex items-center justify-center rounded-full bg-[#017E84] px-6 md:px-8 py-3 md:py-3.5 text-xs md:text-sm font-medium text-white shadow-[0_0_24px_rgba(1,126,132,0.35)] transition-colors hover:bg-white hover:text-[#017E84] w-full md:w-auto text-center"
            >
              Visit mon role dans le Hack'Chrono 48 →
            </TransitionLink>
          </Magnetic>
        </footer>
      </div>
    </main>
  );
}
