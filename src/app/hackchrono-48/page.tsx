import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/navigation/Header";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

export const metadata: Metadata = {
  title: "Hack'Chrono 48 | Organisation d'un Hackathon",
  description:
    "Organisation du premier hackathon universitaire Hack'Chrono 48 — Membre Média & Marketing, création du site web officiel hackchrono48.com.",
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

export default function HackChrono48Page() {
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
              src="/images/hackathon_img_main.jpg"
              alt="Hack'Chrono 48 — Hackathon universitaire"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Title at the bottom edge of the image */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <h1 className="font-outfit text-3xl font-bold leading-[1.05] tracking-tighter text-white md:text-4xl lg:text-5xl">
                Hack&apos;Chrono 48
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/70 font-light md:text-base">
                Le premier hackathon de la FSJES — 48h d&apos;innovation, porté par les étudiants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-12 md:px-8 md:pt-20 lg:max-w-5xl">
        

        {/* Quick facts */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Événement", value: "Hackathon de 48h" },
              { label: "Période", value: "Octobre — Décembre 2025" },
              { label: "Mon rôle", value: "Membre Média & Marketing" },
              { label: "Lieu", value: "FSJES — Oujda" },
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

        {/* Context */}
        <section className="mb-16 md:mb-24 space-y-6" aria-labelledby="context">
          <SectionTitle id="context">Le contexte</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            <p>
              Nous avons organisé plusieurs conférences et événements au sein de la FSJES, mais celui qui a marqué
              cette année universitaire — et qui a été particulièrement apprécié par le vice-doyen — est
              l&apos;organisation du <strong className="text-white/90">Hack&apos;Chrono 48</strong> : un hackathon
              intense de 48 heures, en décembre 2025.
            </p>
            <p>
              L&apos;idée était simple mais ambitieuse : rassembler des étudiants passionnés de technologie, les
              répartir en équipes, et leur donner 48 heures pour concevoir et développer une solution innovante autour
              d&apos;une problématique donnée. C&apos;était le tout premier événement de ce type organisé au sein de
              notre faculté — un défi logistique, communicationnel et technique à relever de A à Z.
            </p>
            <p className="border-l-2 border-[#017E84] pl-6 text-foreground/85">
              L&apos;événement a nécessité environ deux mois de préparation intensive, mobilisant plusieurs équipes :
              Logistique, Sponsoring, Organisation, et Média &amp; Marketing — l&apos;équipe dont je faisais partie.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16 md:mb-24 space-y-6" aria-labelledby="mission">
          <SectionTitle id="mission">Ma mission</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            <p>
              En tant que membre de l&apos;équipe <strong className="text-white/90">Média &amp; Marketing</strong>,
              ma mission principale pendant ces deux mois de préparation était la conception et le développement du
              <strong className="text-white/90"> site web officiel </strong> de l&apos;événement :
              <a href="https://hackchrono48.com" target="_blank" rel="noopener noreferrer" className="text-[#017E84] hover:underline ml-1">hackchrono48.com</a>.
            </p>
            <p>
              Le site devait être la vitrine principale du hackathon : présenter le concept, afficher le programme
              détaillé, expliquer les règles de participation, mettre en avant les sponsors, et surtout permettre aux
              équipes de s&apos;inscrire directement en ligne. Le tout avec un design moderne et dynamique qui reflète
              l&apos;énergie d&apos;un hackathon — livré dans un délai serré, sans droit à l&apos;erreur.
            </p>
            <p>
              En parallèle du site, je contribuais également à la création des supports visuels (posts réseaux sociaux,
              stories, affiches) et à la coordination avec les autres départements pour assurer une communication
              cohérente et efficace.
            </p>
          </div>
        </section>

        {/* Image break */}
        <figure className="mb-16 md:mb-24 overflow-hidden rounded-3xl border border-white/12 bg-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <Image
            src="/images/hackathon_img_second.jpg"
            alt="Hack'Chrono 48 — L'événement en action"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <figcaption className="border-t border-white/10 px-4 py-3 text-center text-xs text-foreground/50">
            Hack&apos;Chrono 48 — L&apos;événement en action
          </figcaption>
        </figure>

        {/* Contributions */}
        <section className="mb-16 md:mb-24" aria-labelledby="contributions">
          <SectionTitle id="contributions">Mes contributions</SectionTitle>
          <ol className="mt-8 space-y-6">
            {[
              {
                title: "Développement du site web officiel",
                body: "Conception, développement et déploiement de hackchrono48.com — une landing page moderne intégrant la présentation de l'événement, le programme complet, une FAQ, un formulaire d'inscription des équipes et une section dédiée aux sponsors. Le site a été le point d'entrée principal pour tous les participants.",
              },
              {
                title: "Création des supports visuels",
                body: "Design des visuels pour les réseaux sociaux (posts, stories, bannières), affiches imprimées pour la faculté, et éléments graphiques cohérents avec l'identité visuelle du hackathon — palette de couleurs tech, typographie moderne, ton dynamique et engageant.",
              },
              {
                title: "Communication digitale",
                body: "Planification et exécution du calendrier de publication sur les réseaux sociaux pour maximiser la portée de l'événement. Gestion du contenu, rédaction des annonces (deadlines d'inscription, révélation des sponsors, programme jour par jour).",
              },
              {
                title: "Coordination inter-départements",
                body: "Communication régulière des rapports d'avancement avec les responsables Logistique, Sponsoring et Organisation. Synchronisation des besoins visuels et des deadlines pour garantir une communication fluide et alignée sur le planning global.",
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

        {/* Impact */}
        <section className="mb-16 md:mb-24 space-y-6 rounded-3xl border border-[#017E84]/25 bg-gradient-to-br from-[#017E84]/10 to-transparent p-8 md:p-12" aria-labelledby="impact">
          <SectionTitle id="impact">Impact &amp; résultats</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/80 md:text-base">
            <p>
              Le Hack&apos;Chrono 48 a rassemblé des dizaines d&apos;étudiants passionnés pendant 48 heures intenses
              de développement, de créativité et de collaboration. L&apos;événement a été salué par l&apos;administration
              de la faculté, notamment le vice-doyen, comme une initiative exemplaire portée entièrement par les étudiants.
            </p>
            <p>
              Le site web a joué un rôle central dans la réussite de la communication : il a permis de centraliser
              toutes les informations, de gérer les inscriptions de manière fluide, et de donner une image
              professionnelle à l&apos;événement auprès des sponsors et des participants potentiels.
            </p>
            <p>
              C&apos;était la première fois qu&apos;un hackathon était organisé dans notre faculté. Son succès a
              démontré que les étudiants sont capables de porter des projets ambitieux de bout en bout — de la
              conception à l&apos;exécution — et a ouvert la voie à d&apos;autres événements d&apos;envergure pour
              les promotions suivantes.
            </p>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-24 space-y-6 md:mb-32" aria-labelledby="learnings">
          <SectionTitle id="learnings">Ce que cette expérience m&apos;a appris</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            <p>
              Organiser un événement de cette envergure m&apos;a appris à travailler sous pression avec des deadlines
              serrées, à coordonner avec plusieurs équipes en parallèle, et à livrer un produit (le site web) qui doit
              être opérationnel à une date fixe — sans marge d&apos;erreur.
            </p>
            <p>
              J&apos;ai aussi compris l&apos;importance de la communication visuelle cohérente : chaque post, chaque
              affiche, chaque page du site devait raconter la même histoire et transmettre la même énergie. C&apos;est
              une compétence qui se transpose directement dans le développement web — où l&apos;expérience utilisateur
              et la cohérence visuelle sont essentielles.
            </p>
            <p>
              Enfin, cette expérience m&apos;a montré qu&apos;un bon développeur ne se contente pas de coder : il
              comprend le contexte, s&apos;adapte aux contraintes, et met ses compétences techniques au service d&apos;un
              objectif collectif plus large.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-start gap-6 border-t border-white/10 pt-12 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/50">Membre Média &amp; Marketing · Hack&apos;Chrono 48 · Octobre — Décembre 2025</p>
          <Magnetic>
            <TransitionLink
              href="/contact"
              title="Contact"
              className="inline-flex items-center justify-center rounded-full bg-[#017E84] px-6 md:px-8 py-3 md:py-3.5 text-xs md:text-sm font-medium text-white shadow-[0_0_24px_rgba(1,126,132,0.35)] transition-colors hover:bg-white hover:text-[#017E84] w-full md:w-auto text-center"
            >
              Contact Me →
            </TransitionLink>
          </Magnetic>
        </footer>
      </div>
    </main>
  );
}
