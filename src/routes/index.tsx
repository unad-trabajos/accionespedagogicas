import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Users, Sparkles, Target, Lightbulb, ChevronDown, Star, Heart,
  Music, BookOpen, Palette, Sun, Cloud, Flower2, Volume2, VolumeX,
} from "lucide-react";
import yonnaImg from "@/assets/yonna-dance.jpg";
import ambientMp3 from "@/assets/ambient.mp3";
import playingImg from "@/assets/children-playing.jpg";
import greetingImg from "@/assets/wayuu-greeting.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Acciones Pedagógicas | Sugeiry Ponzón Rivadeneira" },
      { name: "description", content: "Planeación pedagógica para fortalecer la identidad cultural e interculturalidad en niños y niñas Wayuu de La Guajira." },
    ],
  }),
});

type Section = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
  question: string;
  tema: string;
  accion: string;
  image?: string;
  imageAlt?: string;
  descripcion: React.ReactNode;
};

const audioSrc = ambientMp3;

const sections: Section[] = [
  {
    id: "para-quien",
    icon: Users,
    color: "var(--wayuu-red)",
    bg: "oklch(0.95 0.08 35)",
    question: "¿Para quién es?",
    tema: "Niños y niñas",
    accion: "Reconocer la diversidad cultural y características del grupo",
    image: playingImg,
    imageAlt: "Niños wayuu jugando juntos en La Guajira",
    descripcion: (
      <p>
        Niños y niñas de <strong>primera infancia (5 a 6 años)</strong> de la zona rural de Hatonuevo, La Guajira.
        Es un aula intercultural compuesta mayormente por población <strong>Wayuu</strong>, compartiendo espacio
        con niños de otras regiones de Colombia y de Venezuela.
      </p>
    ),
  },
  {
    id: "que-fortalecer",
    icon: Sparkles,
    color: "var(--wayuu-yellow)",
    bg: "oklch(0.97 0.1 90)",
    question: "¿Qué se quiere fortalecer?",
    tema: "Identidad cultural e interculturalidad",
    accion: "Promover el reconocimiento y valoración de las culturas",
    image: greetingImg,
    imageAlt: "Niños wayuu saludando en wayuunaiki: ¡Anaa wakaa!",
    descripcion: (
      <>
        <p>
          Con esta propuesta quiero fortalecer la <strong>identidad cultural</strong> y el fortalecimiento del{" "}
          <strong>wayuunaiki</strong> como su lengua materna. Lo que buscamos es que los niños y niñas no solo
          escuchen su idioma, sino que lo usen y lo valoren como su principal rasgo de pertenencia al pueblo Wayuu.
        </p>
        <div className="mt-3 inline-flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-[var(--wayuu-yellow)]/40 px-3 py-1 font-bold">¡Anaa wakaa! · Hola</span>
          <span className="rounded-full bg-[var(--wayuu-teal)]/30 px-3 py-1 font-bold">Jamaya · ¿Cómo estás?</span>
          <span className="rounded-full bg-[var(--wayuu-red)]/20 px-3 py-1 font-bold">Anasü · Bien</span>
        </div>
      </>
    ),
  },
  {
    id: "para-que",
    icon: Target,
    color: "var(--wayuu-teal)",
    bg: "oklch(0.95 0.06 190)",
    question: "¿Para qué se quiere fortalecer?",
    tema: "Identidad cultural e interculturalidad",
    accion: "Fomentar el respeto, la convivencia y el sentido de pertenencia",
    descripcion: (
      <p>
        El objetivo fundamental es fortalecer la <strong>identidad cultural</strong> durante la primera infancia.
        A través de esta propuesta, se pretende que los niños y niñas se apropien de su{" "}
        <strong>herencia ancestral</strong>, promoviendo de manera simultánea una convivencia armónica basada en el
        reconocimiento del otro y la valoración de la diversidad en contextos interculturales.
      </p>
    ),
  },
  {
    id: "como",
    icon: Lightbulb,
    color: "var(--wayuu-purple)",
    bg: "oklch(0.95 0.06 320)",
    question: "¿Cómo se puede fortalecer?",
    tema: "Identidad cultural e interculturalidad",
    accion: "Implementar estrategias pedagógicas con recursos sonoros y culturales",
    image: yonnaImg,
    imageAlt: "Niñas wayuu bailando la Yonna en La Guajira",
    descripcion: (
      <div className="space-y-4">
        <p>A través de experiencias lúdicas alineadas con la realidad sociocultural.</p>
        <div className="rounded-2xl bg-white/70 p-4 border-2 border-dashed border-[var(--wayuu-purple)]/40">
          <h4 className="flex items-center gap-2 font-bold text-[var(--wayuu-red)] text-lg">
            <Sun className="h-5 w-5" /> Inicio
          </h4>
          <p className="mt-2 text-sm">
            Iniciamos con el saludo en <strong>wayuunaiki</strong> y uso de la audioteca{" "}
            <em>"De agua, viento y verdor"</em> para conectar con relatos de sabedores, utilizando computador,
            equipo de sonido, y narraciones de los abuelos. Con esta actividad queremos fortalecer la
            pronunciación de su lengua nativa.{" "}
            <span className="inline-block rounded-full bg-[var(--wayuu-yellow)]/40 px-2 py-0.5 text-xs font-semibold">⏱ 30 min</span>
          </p>
        </div>
        <div className="rounded-2xl bg-white/70 p-4 border-2 border-dashed border-[var(--wayuu-green)]/50">
          <h4 className="flex items-center gap-2 font-bold text-[var(--wayuu-green)] text-lg">
            <Music className="h-5 w-5" /> Desarrollo
          </h4>
          <p className="mt-2 text-sm">
            <strong>Acción y juego.</strong> Escuchamos <em>Maguaré</em>, jugamos a <em>"nombra y actúa"</em>
            {" "}y representamos historias culturales usando lo que hay en el entorno. Pudimos evidenciar a los
            niños y a las niñas bailando la <strong>yonna</strong>, baile representativo de la cultura Wayuu.
          </p>
          <a href="https://maguared.gov.co/destacado-cantos/" target="_blank" rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-[var(--wayuu-teal)] underline hover:text-[var(--wayuu-purple)] transition-colors">
            🔗 maguared.gov.co/destacado-cantos
          </a>
          <p className="mt-2 text-sm">
            Utilizamos los recursos como la <strong>Plataforma Maguaré</strong> y materiales del medio,
            buscando fortalecer el uso espontáneo del vocabulario y la conexión real de la lengua y la cultura.
          </p>
        </div>
        <div className="rounded-2xl bg-white/70 p-4 border-2 border-dashed border-[var(--wayuu-teal)]/50">
          <h4 className="flex items-center gap-2 font-bold text-[var(--wayuu-teal)] text-lg">
            <Heart className="h-5 w-5" /> Cierre
          </h4>
          <p className="mt-2 text-sm">
            <strong>Reflexión y calma.</strong> Cerramos con una ronda de palabras y un arrullo final para
            dialogar sobre lo vivido. Hacemos una retroalimentación positiva de lo que las niñas y los niños
            sintieron, y cuál fue la enseñanza que les dejó. Después de realizar la actividad pude evidenciar
            que hablaban de su lengua y su identidad con más fluidez y sin temor a avergonzarse.
          </p>
        </div>
      </div>
    ),
  },
];

function FloatingDeco() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Star className="float-slow absolute top-10 left-[8%] h-8 w-8 text-[var(--wayuu-yellow)] fill-[var(--wayuu-yellow)]" />
      <Cloud className="float-bounce absolute top-16 right-[12%] h-12 w-12 text-white/80" />
      <Flower2 className="float-slow absolute top-32 right-[6%] h-10 w-10 text-[var(--wayuu-red)]" style={{ animationDelay: "1s" }} />
      <Heart className="float-bounce absolute bottom-10 left-[15%] h-7 w-7 text-[var(--wayuu-red)] fill-[var(--wayuu-red)]" style={{ animationDelay: "2s" }} />
      <Star className="float-slow absolute bottom-20 right-[20%] h-6 w-6 text-white fill-white" style={{ animationDelay: "1.5s" }} />
      <Sparkles className="float-bounce absolute top-24 left-[30%] h-8 w-8 text-white" style={{ animationDelay: "0.5s" }} />
    </div>
  );
}

function WayuuPattern() {
  return (
    <svg className="absolute inset-x-0 bottom-0 h-6 w-full text-[var(--wayuu-red)]/30" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden>
      <pattern id="wayuu" x="0" y="0" width="8" height="6" patternUnits="userSpaceOnUse">
        <polygon points="0,6 4,0 8,6" fill="currentColor" />
        <polygon points="2,6 4,3 6,6" fill="oklch(0.85 0.18 90)" />
      </pattern>
      <rect width="100" height="6" fill="url(#wayuu)" />
    </svg>
  );
}

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.25;
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (playing) { a.pause(); setPlaying(false); }
      else { await a.play(); setPlaying(true); setError(false); }
    } catch (e) {
      console.error("Audio play failed:", e);
      setError(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        onError={(e) => { console.error("Audio error:", e); setError(true); }}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[var(--wayuu-red)] px-4 py-3 text-white shadow-[var(--shadow-playful)] transition-transform hover:scale-105"
      >
        {playing ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        <span className="text-sm font-bold">Música</span>
      </button>
      {error && (
        <div className="fixed bottom-20 right-5 z-50 max-w-xs rounded-xl bg-white p-3 text-xs shadow-lg">
          No se pudo cargar el audio.
        </div>
      )}
    </>
  );
}

function SectionCard({ section, index }: { section: Section; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = section.icon;
  return (
    <article
      className="pop-in group relative overflow-hidden rounded-3xl border-4 bg-card shadow-[var(--shadow-playful)] transition-transform hover:-translate-y-1"
      style={{ borderColor: section.color, animationDelay: `${index * 0.1}s` }}
    >
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-start gap-4 p-5 text-left md:p-6" style={{ background: section.bg }}>
        <div className="wiggle-hover flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-md" style={{ background: section.color }}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        <div className="flex-1">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white" style={{ background: section.color }}>
            Elemento del ciclo
          </span>
          <h3 className="mt-2 text-2xl font-extrabold text-foreground md:text-3xl">{section.question}</h3>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <div className="rounded-xl bg-white/80 p-3">
              <p className="text-xs font-bold uppercase text-muted-foreground">Tema seleccionado</p>
              <p className="text-sm font-semibold">{section.tema}</p>
            </div>
            <div className="rounded-xl bg-white/80 p-3">
              <p className="text-xs font-bold uppercase text-muted-foreground">Acción que requiere</p>
              <p className="text-sm font-semibold">{section.accion}</p>
            </div>
          </div>
        </div>
        <ChevronDown className={`h-6 w-6 shrink-0 text-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="border-t-4 border-dotted p-5 md:p-6" style={{ borderColor: section.color }}>
            {section.image && (
              <img
                src={section.image}
                alt={section.imageAlt ?? ""}
                loading="lazy"
                width={1024}
                height={704}
                className="mb-5 w-full rounded-2xl border-4 shadow-md"
                style={{ borderColor: section.color }}
              />
            )}
            <h4 className="mb-3 flex items-center gap-2 text-lg font-bold" style={{ color: section.color }}>
              <BookOpen className="h-5 w-5" /> Descripción de la acción pedagógica
            </h4>
            <div className="text-foreground/90 leading-relaxed">{section.descripcion}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Index() {
  return (
    <main className="relative min-h-screen pb-20">
      <MusicPlayer />
      <header className="header-shimmer relative overflow-hidden">
        <FloatingDeco />
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/30 px-4 py-2 backdrop-blur-sm">
            <Palette className="h-4 w-4 text-white" />
            <span className="text-sm font-bold uppercase tracking-widest text-white">Planeación Pedagógica</span>
          </div>
          <h1 className="text-5xl font-black leading-tight text-white drop-shadow-lg md:text-7xl">
            Acciones <span className="italic">Pedagógicas</span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-white/95 md:text-xl">
            🌈 Fortaleciendo la identidad Wayuu en la primera infancia 🌟
          </p>
          <div className="mx-auto mt-8 inline-flex flex-col items-center gap-1 rounded-2xl bg-white/95 px-6 py-3 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nombre del estudiante</span>
            <span className="text-xl font-extrabold text-[var(--wayuu-red)] md:text-2xl">Sugeiry Ponzón Rivadeneira</span>
          </div>
        </div>
        <WayuuPattern />
      </header>

      <section className="relative mx-auto mt-12 max-w-5xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Elementos del ciclo</h2>
          <p className="mt-2 text-muted-foreground">Toca cada tarjeta para descubrir la planeación ✨</p>
        </div>

        <div className="space-y-6">
          {sections.map((s, i) => <SectionCard key={s.id} section={s} index={i} />)}
        </div>

        <div className="mt-16 rounded-3xl border-4 border-dashed border-[var(--wayuu-yellow)] bg-white/70 p-8 text-center">
          <div className="flex justify-center gap-3">
            <Star className="h-8 w-8 text-[var(--wayuu-yellow)] fill-[var(--wayuu-yellow)] float-bounce" />
            <Heart className="h-8 w-8 text-[var(--wayuu-red)] fill-[var(--wayuu-red)] float-slow" />
            <Flower2 className="h-8 w-8 text-[var(--wayuu-purple)] float-bounce" style={{ animationDelay: "0.3s" }} />
            <Sparkles className="h-8 w-8 text-[var(--wayuu-teal)] float-slow" style={{ animationDelay: "0.6s" }} />
          </div>
          <p className="mt-4 text-lg font-bold text-foreground">
            "Anaa akua'ipa" — <span className="text-[var(--wayuu-red)]">Vivir bonito en comunidad</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Hatonuevo, La Guajira · Cultura Wayuu</p>
        </div>
      </section>
    </main>
  );
}

