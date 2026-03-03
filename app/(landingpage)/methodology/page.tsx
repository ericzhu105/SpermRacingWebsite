'use client';

import { useRef, useState, useEffect } from 'react';
import { League_Gothic } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import Footer from '@/app/components/Footer';

// Load Fonts
const monoFont = localFont({
  src: [
    {
      path: '../../../public/fonts/JetBrainsMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/JetBrainsMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mono',
});

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-league-gothic',
});

export default function MethodologyPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLIFrameElement | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fontFamily = monoFont.style.fontFamily;
  const titleFont = leagueGothic.style.fontFamily;

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Listen for YouTube player state changes
      if (event.origin === 'https://www.youtube.com') {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'onStateChange') {
            // YouTube player states:
            // -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
            const playerState = data.info;
            
            // Clear any pending pause timeout
            if (pauseTimeoutRef.current) {
              clearTimeout(pauseTimeoutRef.current);
              pauseTimeoutRef.current = null;
            }
            
            if (playerState === 1 || playerState === 3) {
              // Video is playing or buffering (hide overlay during seeking)
              setIsPlaying(true);
            } else if (playerState === 2) {
              // Video is paused - wait a bit to see if it's just seeking
              pauseTimeoutRef.current = setTimeout(() => {
                setIsPlaying(false);
              }, 300); // 300ms delay to avoid flickering during seeks
            } else if (playerState === 0) {
              // Video ended - show overlay immediately
              setIsPlaying(false);
            }
          }
        } catch (e) {
          // Ignore parsing errors
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // Subscribe to state change events once iframe is loaded
    const timer = setTimeout(() => {
      if (playerRef.current?.contentWindow) {
        playerRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'listening',
            id: 'player',
            channel: 'widget'
          }),
          '*'
        );
      }
    }, 1000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (playerRef.current?.contentWindow) {
      playerRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'playVideo',
          args: [],
        }),
        '*'
      );
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <div className="flex-1 flex flex-col pt-24 pb-12 px-4 md:px-8 lg:px-12 w-full">
        {/* Mobile: Title Above Video */}
        <div className={`md:hidden mb-6 flex flex-col items-center text-center transition-all duration-500 ${
          isPlaying ? 'opacity-0 h-0 mb-0 overflow-hidden' : 'opacity-100'
        }`}>
          <button
            onClick={handlePlayClick}
            className="flex items-center gap-2 text-xs font-bold mb-4 text-white hover:text-[#FF361D] transition-colors tracking-widest uppercase"
            style={{ fontFamily }}
          >
            <span>Watch Now</span>
            <span>→</span>
          </button>
          <h1
            className="text-7xl leading-[0.8] uppercase tracking-tighter"
            style={{ fontFamily: titleFont }}
          >
            <span className="text-gray-400">How It</span>
            <br />
            <span className="text-white">Works</span>
          </h1>
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-[1400px] aspect-video bg-[#050505] border border-white/10 rounded-lg overflow-hidden shadow-2xl group mx-auto">
          {/* YouTube Video Element */}
          <div className="absolute inset-0">
            <div
              className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 z-10 pointer-events-none transition-opacity duration-500 ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
            <iframe
              ref={playerRef}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/e5i2HJr8-pA?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
              title="Sperm Racing Methodology"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Desktop: Bottom Left Content - Title and Button */}
          <div
            className={`hidden md:block absolute bottom-12 left-12 z-20 transition-all duration-500 ${
              isPlaying ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
            }`}
          >
            <button
              onClick={handlePlayClick}
              className="flex items-center gap-2 text-xs font-bold mb-2 text-white hover:text-[#FF361D] transition-colors tracking-widest uppercase"
              style={{ fontFamily }}
            >
              <span>Watch Now</span>
              <span>→</span>
            </button>
            <h1
              className="text-[80px] md:text-[100px] lg:text-[120px] leading-[0.8] uppercase text-white tracking-tighter"
              style={{ fontFamily: titleFont }}
            >
              How It
              <br />
              Works
            </h1>
          </div>
        </div>

        {/* Technology Partners Section */}
        <section className="w-full max-w-[1400px] mx-auto mt-16 md:mt-20 mb-10 border-t border-white/10 pt-8 md:pt-10">
          <div className="flex items-start justify-between gap-8 md:gap-12 flex-col md:flex-row">
            {/* Copy */}
            <div className="flex-1 space-y-4">
              <p
                className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-500"
                style={{ fontFamily }}
              >
                Technology Partner
              </p>
              <h2
                className="text-base md:text-lg lg:text-xl uppercase tracking-[0.25em] text-white"
                style={{ fontFamily }}
              >
                Cygnus Photonics
              </h2>
              <p
                className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl"
                style={{ fontFamily }}
              >
              </p>
              <p
                className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-xl"
                style={{ fontFamily }}
              >
                Cygnus Photonics builds the light generating
                hardware that lets us seal the race track. Their photonics platform
                activates the material surfaces at the molecular level, allowing
                the race tracks to be permanently sealed without adhesives or heat.
                We work closely with their team to tune optics, sensors, and signal
                processing so that every frame of the broadcast is clean, accurate,
                and race-ready—no lab goggles required.
              </p>
              <a
                href="http://cygnusphoton.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-400 hover:text-white transition-colors"
                style={{ fontFamily }}
              >
                VISIT CYGNUS PHOTONICS
              </a>
            </div>

            {/* Logo Card */}
            <div className="w-full md:w-[320px] lg:w-[360px]">
              <a
                href="http://cygnusphoton.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative w-full aspect-[4/3] bg-black border border-white/20 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(255,54,29,0.25),_transparent_55%)] transition-opacity duration-500" />
                  <div className="relative z-10 flex h-full items-center justify-center px-8">
                    <Image
                      src="/images/cygnus-photonics.png"
                      alt="Cygnus Photonics"
                      fill
                      className="object-contain p-4 md:p-6 invert brightness-200"
                    />
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-500" style={{ fontFamily }}>
                    <span>Optical Imaging Partner</span>
                    <span className="text-[#FF361D]">SR-01</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
