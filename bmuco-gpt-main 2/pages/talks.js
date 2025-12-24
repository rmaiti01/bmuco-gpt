import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, useInViewMotion } from '../components/Common';
import DATA from '../lib/data';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoModal = ({ url, onClose }) => {
  if (!url) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-obsidian/95 p-4 backdrop-blur-md" onClick={onClose}>
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button className="absolute -right-4 -top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20" onClick={onClose}>
          <X />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            src={url.replace("watch?v=", "embed/")}
            title="BMUCO video"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

// Background images and descriptions for featured talks
const featuredTalkData = {
  "Maryna Viazovska": {
    image: "https://static.wixstatic.com/media/f25f88_9176800854b044728395f13ed2e2b097~mv2.jpg",
    description: "Only living woman Fields medalist (the 'most prestigious' prize in mathematics)"
  },
  "Sir Roger Penrose": {
    image: "https://static.wixstatic.com/media/f25f88_84837f1ad909414291aeb76366a206b9~mv2.jpg",
    description: "Nobel Laureate"
  },
  "Avi Loeb": {
    image: "https://static.wixstatic.com/media/f25f88_f93f6e746cd24783822fdba6c5153032~mv2.jpg",
    description: "Harvard astronomer and author of Extraterrestrial"
  },
  "Yang-Hui He": {
    image: "https://static.wixstatic.com/media/c2f56a_d042c6ff7b204759a25f41ffb10c5298~mv2.png",
    description: "String phenomenology pioneer and machine learning in mathematics"
  }
};

const FeaturedTalkCard = ({ talk, openVideo }) => {
  const speakerName = talk.title.split('—')[0].trim();
  const talkData = featuredTalkData[speakerName];

  return (
    <motion.div
      {...useInViewMotion()}
      className="group relative min-w-[400px] flex-shrink-0 overflow-hidden rounded-2xl"
    >
      {/* Background Image - Lighter tint */}
      <div className="absolute inset-0">
        <img 
          src={talkData.image} 
          alt={speakerName} 
          className="h-full w-full object-cover opacity-50 transition duration-500 group-hover:opacity-60 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative p-8 min-h-[400px] flex flex-col justify-end">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-sage-mist">{talk.meta}</p>
        <h3 className="mb-2 text-2xl font-serif text-white leading-tight">{talk.title}</h3>
        <p className="mb-4 text-sm text-paper/80 leading-relaxed">{talkData.description}</p>
        <button
          onClick={() => openVideo(talk.videoUrl)}
          disabled={!talk.videoUrl}
          className="inline-flex items-center gap-2 border-b-2 border-sage-mist pb-1 text-sm font-medium text-white transition hover:border-white disabled:opacity-50"
        >
          <Play size={16} /> Watch talk
        </button>
      </div>
    </motion.div>
  );
};

const RegularTalkCard = ({ talk, openVideo }) => {
  return (
    <motion.div
      {...useInViewMotion()}
      className="group border-l-2 border-sage-mist/30 pl-6 transition hover:border-sage-mist"
    >
      <p className="mb-1 text-xs text-sage-mist">{talk.meta}</p>
      <h3 className="mb-2 text-lg font-serif text-white">{talk.title}</h3>
      <button
        onClick={() => openVideo(talk.videoUrl)}
        disabled={!talk.videoUrl}
        className="inline-flex items-center gap-2 text-sm text-paper/60 transition hover:text-sage-mist disabled:opacity-50"
      >
        <Play size={14} /> Play
      </button>
    </motion.div>
  );
};

export default function Talks() {
  const [videoUrl, setVideoUrl] = useState("");
  const openVideo = (url) => url && setVideoUrl(url);
  const closeVideo = () => setVideoUrl("");

  // Featured talks: Maryna, Penrose, Loeb, Yang-Hui He
  const featuredTalks = [
    DATA.talks[0], // Maryna
    DATA.talks[1], // Penrose
    DATA.talks[3], // Loeb
    DATA.talks[4], // Yang-Hui He
  ];

  // Rest of talks
  const otherTalks = [
    DATA.talks[2], // Anna Zhigun
    DATA.talks[5], // Thea Aarrestad
    DATA.talks[6], // Roger Hunter
    DATA.talks[7], // Pre-COP
  ];

  return (
    <main className="bg-obsidian min-h-screen text-paper">
      <section className="scroll-mt-24 py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sage-mist">Talks & Interviews</p>
            <h1 className="mb-6 text-5xl font-serif text-white leading-tight md:text-6xl">
              Conversations at the frontiers
            </h1>
            <p className="text-lg text-paper/60 leading-relaxed">
              A curated archive of dialogues with laureates, award-winners, and boundary-pushing researchers.
            </p>
          </div>

          {/* Featured Talks - Horizontal Scroll */}
          <div className="mt-20">
            <div className="relative">
              <div className="overflow-x-auto pb-8 scrollbar-hide">
                <div className="flex gap-6" style={{ width: 'max-content' }}>
                  {featuredTalks.map((talk) => (
                    <FeaturedTalkCard key={talk.title} talk={talk} openVideo={openVideo} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Talks */}
          <div className="mx-auto mt-24 max-w-5xl border-t border-white/10 pt-16">
            <h2 className="mb-8 text-2xl font-serif text-white">More Conversations</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {otherTalks.map((talk) => (
                <RegularTalkCard key={talk.title} talk={talk} openVideo={openVideo} />
              ))}
            </div>
          </div>
        </Container>
        <VideoModal url={videoUrl} onClose={closeVideo} />
      </section>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}
