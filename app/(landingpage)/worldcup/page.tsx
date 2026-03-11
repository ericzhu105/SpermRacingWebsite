'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tv } from 'lucide-react';
import { League_Gothic } from 'next/font/google';
import localFont from 'next/font/local';
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

const monofonto = localFont({
  src: '../../../public/fonts/monofonto.otf',
  variable: '--font-monofonto',
});

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-league-gothic',
});

export default function WorldCupPage() {
  const [activeTab, setActiveTab] = useState('Guidelines');
  const fontFamily = monoFont.style.fontFamily;
  const titleFont = leagueGothic.style.fontFamily;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col overflow-x-hidden relative">

      {/* Global Vertical Grid Lines — hidden on mobile */}
      <div className="hidden md:block absolute top-0 bottom-0 left-16 w-[1px] bg-white/10 z-10 pointer-events-none"></div>
      <div className="hidden md:block absolute top-0 bottom-0 right-16 w-[1px] bg-white/10 z-10 pointer-events-none"></div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-[100dvh] flex flex-col pt-24 pb-0 overflow-hidden">

        {/* Background Image — object-position center for mobile crop */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/worldcup-hero.webp"
            alt="World Cup Race Track"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Top gradient to black on mobile for logo area */}
          <div className="md:hidden absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black via-black/80 to-transparent z-[1]"></div>
        </div>

        {/* Grid Lines - horizontal only, verticals are global */}
        <div className="hidden md:block absolute top-[10vh] left-0 w-full h-[1px] bg-white/10 z-10"></div>
        {/* removed redundant bottom grid line — stats bar border-t is sufficient */}

        {/* Main Content Container */}
        <div className="relative z-10 flex-1 flex flex-col justify-between h-full">

          {/* Mobile Title — upper area */}
          <div className="md:hidden flex flex-col items-center px-4 pt-[14vh]">
            <h1
              className="text-center uppercase leading-[0.85] tracking-tight"
              style={{ fontFamily: titleFont, fontSize: '58.4px' }}
            >
              <span className="text-[#5A8199]">Sperm Racing</span>
              <br />
              <span className="text-white">World Cup 2026</span>
            </h1>
          </div>

          {/* Desktop Title — top-left aligned, original position */}
          <div className="hidden md:block mt-0 ml-4 max-w-4xl -translate-y-12 px-16 pt-[10vh]">
            <h1
              className="text-left uppercase leading-[0.85] tracking-tight text-8xl lg:text-[100px]"
              style={{ fontFamily: titleFont }}
            >
              <span className="text-[#5A8199]">Sperm Racing</span>
              <br />
              <span className="text-white">World Cup 2026</span>
            </h1>
          </div>

          {/* Mobile: centered button + text */}
          <div className="md:hidden flex flex-col items-center gap-2 pb-16 px-4 z-20">
            <Link href="/submissions">
              <Button
                variant="outline"
                className="rounded-none border-white text-white bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black uppercase tracking-wider text-[10px] flex items-center justify-center gap-2"
                style={{ fontFamily, width: '212px', height: '49px' }}
              >
                Click Here to Apply
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </Button>
            </Link>
            <p
              className="text-[#FF361D] text-[10px] uppercase tracking-wider text-center"
              style={{ fontFamily }}
            >
              Applications Close March 15, 2026
            </p>
          </div>

          {/* Desktop: left/right buttons */}
          <div className="hidden md:flex justify-between items-end px-16 pb-16">
            <div className="max-w-md ml-4">
              <Link href="/submissions">
                <Button
                  variant="outline"
                  className="rounded-none border-white text-white bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black px-12 py-6 uppercase tracking-wider text-[10px] flex items-center gap-2"
                  style={{ fontFamily }}
                >
                  Click Here to Apply
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </Button>
              </Link>
              <p
                className="text-[#FF361D] text-[10px] uppercase tracking-wider mt-2"
                style={{ fontFamily }}
              >
                Applications Close March 15, 2026
              </p>
            </div>
            <div className="mr-4">
              <a href="https://www.youtube.com/watch?v=WumH-msuWzk" target="_blank" rel="noopener noreferrer">
                <Button
                  className="rounded-none bg-white text-black hover:bg-white/90 px-8 py-6 uppercase tracking-wider font-bold text-[10px] flex items-center justify-center gap-2"
                  style={{ fontFamily }}
                >
                  <Tv className="w-3 h-3" />
                  Watch Full Video
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar — visible on both mobile and desktop */}
        <div className="absolute bottom-0 left-0 w-full items-center px-4 md:px-16 border-t border-white/10 bg-black/20 backdrop-blur-sm z-20" style={{ height: 'clamp(40px, 3.33vw, 64px)' }}>
          {/* Desktop: grid layout */}
          <div
            className="hidden md:grid w-full h-full grid-cols-4 gap-4 items-center text-[10px] tracking-widest uppercase text-gray-500"
            style={{ fontFamily }}
          >
            <div className="whitespace-nowrap">
              Last Race: <span className="text-white">World Cup Race Track</span>
            </div>
            <div className="text-center whitespace-nowrap">
              Number of Laps: <span className="text-white">1</span>
            </div>
            <div className="text-center">
              Race Distance: <span className="text-white">1500M</span>
            </div>
            <div className="text-right">
              Current Record: <span className="text-white">To Be Determined</span>
            </div>
          </div>
          {/* Mobile: horizontal scrolling marquee */}
          <div
            className="md:hidden w-full h-full flex items-center overflow-x-auto gap-8 text-[8px] tracking-widest uppercase text-gray-500 scrollbar-hide"
            style={{ fontFamily }}
          >
            <div className="whitespace-nowrap">
              Last Race: <span className="text-white">World Cup Race Track</span>
            </div>
            <div className="whitespace-nowrap">
              Number of Laps: <span className="text-white">1</span>
            </div>
            <div className="whitespace-nowrap">
              Race Distance: <span className="text-white">1500M</span>
            </div>
            <div className="whitespace-nowrap">
              Current Record: <span className="text-white">To Be Determined</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRIZE SECTION ===== */}
      <section className="relative w-full px-4 md:px-16 border-b border-white/10" style={{ height: 'clamp(423px, 26.5625vw, 510px)' }}>
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
          <p
            className="uppercase tracking-normal mb-2 md:mb-[0.2vw] text-center"
            style={{ fontFamily: monofonto.style.fontFamily, lineHeight: '161%', letterSpacing: '0%', fontSize: 'clamp(16px, 1.04vw, 20px)', maxWidth: 'clamp(290px, 36.875vw, 708px)' }}
          >
            <span className="text-[#DBDBDB]">In late 2026, Sperm Racing will be hosting its first World Cup,</span>
            <br className="hidden md:inline" />
            <span className="md:hidden"> </span>
            <span className="text-[#414141]">bringing together athletes from 128 countries to compete for a</span>
          </p>

          {/* $100,000 Image */}
          <div className="relative mx-auto mb-[0.05vw]" style={{ width: 'clamp(382px, 36.875vw, 708px)', maxWidth: '95vw' }}>
            <Image
              src="/100000.png"
              alt="$100,000 Grand Prize"
              width={950}
              height={360}
              className="w-full h-auto"
            />
          </div>

          <p
            className="uppercase tracking-normal text-right"
            style={{
              fontFamily: monofonto.style.fontFamily,
              lineHeight: '161%',
              letterSpacing: '0%',
              color: '#c49a3c',
              fontSize: 'clamp(16px, 1.04vw, 20px)',
              width: 'clamp(382px, 36.875vw, 708px)',
              maxWidth: '95vw',
            }}
          >
            Grand Prize
          </p>
        </div>
      </section>

      {/* ===== NAVIGATION TABS ===== */}
      <section className="w-full">
        <div className="flex items-center justify-center px-4" style={{ height: 'clamp(60px, 5.78vw, 111px)' }}>
          <div className="flex items-center" style={{ width: 'clamp(375px, 28.88vw, 555px)' }}>
            {['Guidelines', 'Brackets', 'Schedule'].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <div key={tab} className="relative flex-1 flex items-center justify-center">
                  {isActive && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div
                        className="rounded-[3.97px]"
                        style={{
                          position: 'absolute',
                          inset: '4px',
                          padding: '1.59px',
                          background: 'linear-gradient(to bottom, rgba(163,197,212,0.1), #FFFFFF)',
                        }}
                      >
                        <div className="w-full h-full rounded-[2.38px] bg-black" />
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => setActiveTab(tab)}
                    className="relative w-full text-center text-white transition-all py-2"
                    style={{
                      fontFamily: monofonto.style.fontFamily,
                      fontSize: 'clamp(16.93px, 0.997vw, 19.15px)',
                      lineHeight: '147%',
                      letterSpacing: '-0.04em',
                      textTransform: 'uppercase' as const,
                    }}
                  >
                    {tab}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TAB CONTENT ===== */}
      {activeTab === 'Guidelines' && (<>
      <section className="w-full py-12 md:py-16 px-6 md:px-24">
        <div className="w-full space-y-16">

          {/* ROW 1: What Is This + Video */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full"
            style={{ minHeight: 'clamp(300px, 25.9375vw, 498px)' }}
          >
            {/* Left: What Is This */}
            <div className="flex flex-col items-center md:items-start md:pl-4">
              <h2
                className="text-white uppercase mb-4 text-center md:text-left"
                style={{
                  fontFamily: titleFont,
                  fontSize: 'clamp(60px, 3.823vw, 73.4px)',
                  lineHeight: '103%',
                  letterSpacing: '0%',
                  fontWeight: 400,
                }}
              >
                What is this?
              </h2>
              <div className="md:max-w-[37.45vw]" style={{ maxWidth: 'clamp(320px, 37.45vw, 719px)' }}>
                <p
                  className="text-[#999] uppercase text-center md:text-left"
                  style={{
                    fontFamily: monofonto.style.fontFamily,
                    fontSize: 'clamp(14px, 0.833vw, 16px)',
                    lineHeight: '195%',
                    letterSpacing: '0%',
                    fontWeight: 400,
                  }}
                >
                  Sperm Racing is a <span className="text-white font-bold">science-based competitive</span> sport. During the{' '}
                  <span className="text-white font-bold">2026 Sperm Racing World Cup</span>, athletes compete by representing a
                  country, advancing through qualifiers, matchups, and tournament rounds that are
                  broadcast and shared publicly.
                </p>
                <p
                  className="text-[#999] uppercase text-center md:text-left"
                  style={{
                    fontFamily: monofonto.style.fontFamily,
                    fontSize: 'clamp(14px, 0.833vw, 16px)',
                    lineHeight: '195%',
                    letterSpacing: '0%',
                    fontWeight: 400,
                  }}
                >
                  This is not a lottery or a game of chance. Selection and advancement are based on
                  eligibility, performance, availability, and competitive structure.
                </p>
              </div>
            </div>

            {/* Right: Video */}
            <div className="relative w-full aspect-video bg-[#111] border border-white/10 rounded-lg overflow-hidden mx-auto md:mx-0 md:mr-4">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source src="/worldcup-video.mp4" type="video/mp4" />
                <source src="/worldcup-video.mov" type="video/quicktime" />
              </video>
            </div>
          </div>

          {/* ROW 2: Image + Who Can / Cannot Apply */}
          <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
            {/* Left: Faceoff Image */}
            <div className="relative rounded-lg overflow-hidden mx-auto md:mx-0 md:ml-4 order-2 md:order-1" style={{ width: '100%', maxWidth: 'clamp(400px, 41.25vw, 792px)' }}>
              <Image
                src="/worldcup-faceoff.webp"
                alt="Athletes face off"
                width={792}
                height={1032}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right: Who Can / Cannot Apply */}
            <div className="space-y-10 pt-0 md:pt-24 order-1 md:order-2 flex flex-col items-center md:items-start">
              {/* Who Can Apply */}
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <div
                  className="inline-block rounded-full relative"
                  style={{
                    padding: '1px',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(153,153,153,0.3))',
                  }}
                >
                  <div
                    className="rounded-full"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.04), rgba(0,0,0,0.9))',
                      boxShadow: 'inset 0 4px 9.2px rgba(255,255,255,0.08)',
                      paddingLeft: '19px',
                      paddingRight: '19px',
                      paddingTop: '6px',
                      paddingBottom: '6px',
                    }}
                  >
                    <p className="text-white uppercase tracking-wider font-bold" style={{ fontFamily, fontSize: 'clamp(8px, 0.52vw, 10px)' }}>
                      General Eligibility
                    </p>
                  </div>
                </div>

                <h2
                  className="text-white uppercase"
                  style={{
                    fontFamily: titleFont,
                    fontSize: 'clamp(58.4px, 3.823vw, 73.4px)',
                    lineHeight: '103%',
                    letterSpacing: '0%',
                    fontWeight: 400,
                  }}
                >
                  Who <span className="text-green-500">Can</span> Apply?
                </h2>

                <p
                  className="uppercase"
                  style={{
                    fontFamily: monofonto.style.fontFamily,
                    fontSize: 'clamp(14px, 0.833vw, 16px)',
                    lineHeight: '147%',
                    color: '#B4B4B4',
                  }}
                >
                  To apply, you must:
                </p>

                <ul className="space-y-2.5 self-start">
                  {[
                    '18 years or older',
                    'Free of sexually transmitted diseases',
                    'Able to provide biological samples in compliance with competition regulations',
                    'Available to appear in recorded content and competition coverage',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Image src="/checkmark.png" alt="" width={20} height={20} className="flex-shrink-0 mt-0.5" />
                      <span
                        className="uppercase"
                        style={{
                          fontFamily: monofonto.style.fontFamily,
                          fontSize: 'clamp(14px, 0.833vw, 16px)',
                          lineHeight: '147%',
                          color: '#B4B4B4',
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className="uppercase self-start"
                  style={{
                    fontFamily: monofonto.style.fontFamily,
                    fontSize: 'clamp(14px, 0.833vw, 16px)',
                    lineHeight: '147%',
                    color: '#555',
                  }}
                >
                  Applying does not guarantee selection.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10"></div>

              {/* Who Cannot Apply */}
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <h2
                  className="text-white uppercase"
                  style={{
                    fontFamily: titleFont,
                    fontSize: 'clamp(58.4px, 3.823vw, 73.4px)',
                    lineHeight: '103%',
                    letterSpacing: '0%',
                    fontWeight: 400,
                  }}
                >
                  Who <span className="text-[#FF361D]">Cannot</span> Apply?
                </h2>

                <p
                  className="uppercase"
                  style={{
                    fontFamily: monofonto.style.fontFamily,
                    fontSize: 'clamp(14px, 0.833vw, 16px)',
                    lineHeight: '147%',
                    color: '#B4B4B4',
                  }}
                >
                  You may not participate if you:
                </p>

                <ul className="space-y-2.5 self-start">
                  {[
                    'Are involved with Sperm Racing operations in any way',
                    'Are attempting to manipulate results, selection, or eligibility',
                    'Provide false or misleading information',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Image src="/xmark.png" alt="" width={20} height={20} className="flex-shrink-0 mt-0.5" />
                      <span
                        className="uppercase"
                        style={{
                          fontFamily: monofonto.style.fontFamily,
                          fontSize: 'clamp(14px, 0.833vw, 16px)',
                          lineHeight: '147%',
                          color: '#B4B4B4',
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/submissions" className="inline-flex items-center gap-2 mt-2">
                  <span
                    className="uppercase font-bold border-b border-white pb-0.5"
                    style={{
                      fontFamily: monofonto.style.fontFamily,
                      fontSize: 'clamp(16px, 0.833vw, 16px)',
                      lineHeight: '147%',
                      color: '#FFFFFF',
                    }}
                  >
                    Click here to apply
                  </span>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== WHICH COUNTRY CAN I REPRESENT? ===== */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: '5760 / 3216' }}>
          <Image
            src="/worldcup-countries-bg.webp"
            alt="Country flags background"
            fill
            className="object-cover"
          />

          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-[1]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[1]" />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
            <h2
              className="text-white uppercase mb-8"
              style={{
                fontFamily: titleFont,
                fontSize: 'clamp(36px, 3.823vw, 73.4px)',
                lineHeight: '103%',
                letterSpacing: '0%',
                fontWeight: 400,
              }}
            >
              Which Country Can I Represent?
            </h2>

            <ul className="space-y-3">
              {[
                'Born in that country',
                '25% ancestry from that country',
                'One or both parents are from that country',
                'You hold residency or citizenship there',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="relative flex-shrink-0" style={{ width: 'clamp(16px, 1.25vw, 24px)', height: 'clamp(16px, 1.25vw, 24px)' }}>
                    <Image src="/bullet-arrow.png" alt="" fill className="object-contain" />
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 24" fill="none">
                      <path d="M10 8l4 4-4 4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: monofonto.style.fontFamily,
                      fontSize: 'clamp(10px, 0.833vw, 16px)',
                      lineHeight: '147%',
                      color: '#FFFFFF',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== COMPETITION STRUCTURE ===== */}
      <section className="relative w-full py-16 md:py-20 px-8 md:px-24">
        <div className="w-full flex flex-col md:flex-row items-start gap-8">

          {/* Left: Title */}
          <div className="flex-shrink-0 pl-2 md:pl-4 md:pt-4" style={{ width: 'clamp(180px, 16.51vw, 317px)' }}>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: titleFont,
                fontSize: 'clamp(36px, 3.823vw, 73.4px)',
                lineHeight: '103%',
                letterSpacing: '0%',
                fontWeight: 400,
              }}
            >
              Competition<br />Structure
            </h2>
            <p
              className="uppercase mt-3"
              style={{
                fontFamily: monofonto.style.fontFamily,
                fontSize: 'clamp(9px, 0.625vw, 12px)',
                lineHeight: '147%',
                color: '#FF6633',
              }}
            >
              Not every applied matchup may occur physically.
            </p>
          </div>

          {/* Right: Timeline with labels */}
          <div className="relative flex-1">

            {/* Top row labels: 2, 4, 6 */}
            <div className="flex justify-between items-end" style={{ paddingBottom: '0px', paddingLeft: '5%', paddingRight: '15%' }}>
              <div className="text-center">
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>2</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Qualifiers</p>
              </div>
              <div className="text-center">
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>4</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Tournament Eliminations</p>
              </div>
              <div className="text-center">
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>6</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Finals Event</p>
              </div>
            </div>

            {/* Timeline video */}
            <div className="overflow-hidden" style={{ aspectRatio: '1792 / 459.2', width: '93.33vw', marginLeft: 'clamp(-350px, -18.23vw, -180px)' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source src="/timeline.webm" type="video/webm" />
              </video>
            </div>

            {/* Bottom row labels: 1, 3, 5 */}
            <div className="flex justify-between items-start" style={{ paddingTop: '0px', paddingLeft: '0%', paddingRight: '20%' }}>
              <div className="text-center">
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>1</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Open Applications</p>
              </div>
              <div className="text-center">
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>3</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Head-to-Head Matchups</p>
              </div>
              <div className="text-center">
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>5</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Live or Recorded Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>)}

      {activeTab === 'Brackets' && (
        <section className="w-full py-16 px-8 md:px-24 text-center">
          <p className="text-white/50 uppercase" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 0.833vw, 16px)' }}>
            Brackets content coming soon.
          </p>
        </section>
      )}

      {activeTab === 'Schedule' && (
        <section className="w-full py-16 px-8 md:px-24 text-center">
          <p className="text-white/50 uppercase" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 0.833vw, 16px)' }}>
            Schedule content coming soon.
          </p>
        </section>
      )}

      {/* ===== READY TO COMPETE CTA ===== */}
      <section className="w-full px-8 md:px-24 py-12 md:py-16">
        <div
          className="mx-auto flex flex-col items-center justify-center text-center rounded-lg"
          style={{
            width: 'clamp(800px, 88.85vw, 1706px)',
            maxWidth: '100%',
            height: 'clamp(250px, 22.08vw, 424px)',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        >
          <h2
            className="text-white uppercase"
            style={{
              fontFamily: titleFont,
              fontSize: 'clamp(28px, 2.6vw, 50px)',
              lineHeight: '103%',
              fontWeight: 400,
            }}
          >
            Ready to Compete?
          </h2>

          <p
            className="uppercase mt-3"
            style={{
              fontFamily: monofonto.style.fontFamily,
              fontSize: 'clamp(10px, 0.833vw, 16px)',
              lineHeight: '161%',
              color: '#999',
            }}
          >
            Join athletes from{' '}
            <span className="text-white font-bold" style={{ fontSize: 'clamp(14px, 1.25vw, 24px)' }}>128 Countries</span>
          </p>

          <div className="flex items-center gap-1 mt-0.5">
            <span
              className="uppercase"
              style={{
                fontFamily: monofonto.style.fontFamily,
                fontSize: 'clamp(10px, 0.833vw, 16px)',
                color: '#999',
              }}
            >
              Competing for
            </span>
            <div className="relative" style={{ width: 'clamp(60px, 5.2vw, 100px)', height: 'clamp(22px, 1.9vw, 36px)' }}>
              <Image
                src="/100000.png"
                alt="$100,000"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Apply Now Button */}
          <Link href="/submissions" className="mt-5">
            <div
              className="inline-flex items-center gap-2 rounded-full relative"
              style={{
                padding: '1px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(153,153,153,0.3))',
              }}
            >
              <div
                className="rounded-full flex items-center gap-2"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.04), rgba(0,0,0,0.9))',
                  boxShadow: 'inset 0 4px 9.2px rgba(255,255,255,0.08)',
                  paddingLeft: '19px',
                  paddingRight: '14px',
                  paddingTop: '6px',
                  paddingBottom: '6px',
                }}
              >
                <span className="text-white uppercase tracking-wider font-bold" style={{ fontFamily, fontSize: 'clamp(8px, 0.52vw, 10px)' }}>
                  Apply Now
                </span>
                <svg className="text-white" style={{ width: 'clamp(10px, 0.625vw, 12px)', height: 'clamp(10px, 0.625vw, 12px)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <p
            className="uppercase mt-3"
            style={{
              fontFamily: monofonto.style.fontFamily,
              fontSize: 'clamp(8px, 0.52vw, 10px)',
              lineHeight: '147%',
              color: '#FF361D',
            }}
          >
            Application decisions on a rolling basis
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
