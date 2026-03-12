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

        {/* Background Video — desktop full, mobile center-cropped */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          >
            <source src="/worldcup-hero.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="md:hidden absolute inset-0 w-full h-full object-cover"
          >
            <source src="/worldcup-hero-mobile.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
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
            <Link href="/submissions" className="group block" style={{ width: '212px', height: '49px' }}>
              <Image src="/apply-btn-hover.png" alt="Click Here to Apply" width={424} height={98} className="w-full h-full object-contain group-hover:hidden" />
              <Image src="/apply-btn.png" alt="Click Here to Apply" width={424} height={98} className="w-full h-full object-contain hidden group-hover:block" />
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
              <Link href="/submissions" className="group block" style={{ width: '250px', height: '58px' }}>
                <Image src="/apply-btn-hover.png" alt="Click Here to Apply" width={424} height={98} className="w-full h-full object-contain group-hover:hidden" />
                <Image src="/apply-btn.png" alt="Click Here to Apply" width={424} height={98} className="w-full h-full object-contain hidden group-hover:block" />
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
            <span className="text-[#DBDBDB]">In 2026, Sperm Racing will be hosting its first World Cup,</span>
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

                <Link href="/submissions" className="mt-4 group block" style={{ width: '212px', height: '49px' }}>
                  <Image src="/apply-btn-hover.png" alt="Click Here to Apply" width={424} height={98} className="w-full h-full object-contain group-hover:hidden" />
                  <Image src="/apply-btn.png" alt="Click Here to Apply" width={424} height={98} className="w-full h-full object-contain hidden group-hover:block" />
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
      {/* Mobile version — centered title, vertical timeline */}
      <section className="md:hidden relative w-full py-8 px-6">
        <div className="flex flex-col items-center text-center mb-2">
          <h2
            className="text-white uppercase"
            style={{
              fontFamily: titleFont,
              fontSize: '58.4px',
              lineHeight: '95%',
              fontWeight: 400,
            }}
          >
            Competition<br />Structure
          </h2>
          <p
            className="uppercase mt-3"
            style={{
              fontFamily: monofonto.style.fontFamily,
              fontSize: '10px',
              lineHeight: '147%',
              color: '#FF6633',
            }}
          >
            Not every applied matchup may occur physically.
          </p>
        </div>

        {/* Vertical timeline with video background */}
        <div className="relative w-full" style={{ height: '650px' }}>
          {/* Rotated timeline video — 209px wide, full height */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden" style={{ width: '209px', height: '650px' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute top-1/2 left-1/2"
              style={{ width: '1920px', height: '492px', transform: 'translate(-50%, -50%) rotate(90deg) scale(3.8)', transformOrigin: 'center center' }}
            >
              <source src="/timeline2.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Labels positioned at peak coordinates (rotated 90° CW from desktop) */}
          <div className="relative z-10 w-full h-full">
            {/* 1 — left side */}
            <div className="absolute text-left" style={{ top: '11%', left: '6%' }}>
              <p className="text-white" style={{ fontFamily: titleFont, fontSize: '48px', lineHeight: '90%' }}>1</p>
              <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: '12px', lineHeight: '147%' }}>Open<br />Applications</p>
            </div>
            {/* 2 — right side */}
            <div className="absolute text-right" style={{ top: '25%', right: '6%' }}>
              <p className="text-white" style={{ fontFamily: titleFont, fontSize: '48px', lineHeight: '90%' }}>2</p>
              <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: '12px', lineHeight: '147%' }}>Qualifiers</p>
            </div>
            {/* 3 — left side */}
            <div className="absolute text-left" style={{ top: '40%', left: '6%' }}>
              <p className="text-white" style={{ fontFamily: titleFont, fontSize: '48px', lineHeight: '90%' }}>3</p>
              <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: '12px', lineHeight: '147%' }}>Head-to-Head<br />Matchups</p>
            </div>
            {/* 4 — right side, top: 57.97% */}
            <div className="absolute text-right" style={{ top: '55%', right: '6%' }}>
              <p className="text-white" style={{ fontFamily: titleFont, fontSize: '48px', lineHeight: '90%' }}>4</p>
              <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: '12px', lineHeight: '147%' }}>Tournament<br />Eliminations</p>
            </div>
            {/* 5 — left side, top: 70.52% */}
            <div className="absolute text-left" style={{ top: '70.52%', left: '6%' }}>
              <p className="text-white" style={{ fontFamily: titleFont, fontSize: '48px', lineHeight: '90%' }}>5</p>
              <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: '12px', lineHeight: '147%' }}>Live or Recorded<br />Events</p>
            </div>
            {/* 6 — right side, top: 82.92% */}
            <div className="absolute text-right" style={{ top: '82.92%', right: '6%' }}>
              <p className="text-white" style={{ fontFamily: titleFont, fontSize: '48px', lineHeight: '90%' }}>6</p>
              <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: '12px', lineHeight: '147%' }}>Finals<br />Event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop version — horizontal timeline */}
      <section className="hidden md:block relative w-full py-20 px-24">
        <div className="w-full flex flex-row items-start gap-8">

          {/* Left: Title */}
          <div className="flex-shrink-0 pl-4 pt-4 relative z-20" style={{ width: 'clamp(180px, 16.51vw, 317px)', marginTop: '-160px' }}>
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

          {/* Right: Timeline with labels overlaid on video */}
          <div className="relative flex-1">
            <div className="relative" style={{ aspectRatio: '1920 / 500', width: '93.33vw', marginLeft: 'clamp(-430px, -22.4vw, -260px)' }}>
              {/* Video — behind everything */}
              <div className="absolute inset-0 overflow-hidden z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/timeline2.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Bottom peaks (1,3,5) */}
              <div className="absolute text-center z-10" style={{ left: '20.26%', top: '88%', transform: 'translateX(-50%)' }}>
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>1</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Open Applications</p>
              </div>
              <div className="absolute text-center z-10" style={{ left: '45.47%', top: '88%', transform: 'translateX(-50%)' }}>
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>3</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Head-to-Head Matchups</p>
              </div>
              <div className="absolute text-center z-10" style={{ left: '70.52%', top: '88%', transform: 'translateX(-50%)' }}>
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>5</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Live or Recorded Events</p>
              </div>

              {/* Top peaks (2,4,6) */}
              <div className="absolute text-center flex flex-col justify-end z-10" style={{ left: '33.02%', bottom: '88%', transform: 'translateX(-50%)' }}>
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>2</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Qualifiers</p>
              </div>
              <div className="absolute text-center flex flex-col justify-end z-10" style={{ left: '57.97%', bottom: '88%', transform: 'translateX(-50%)' }}>
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>4</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Tournament Eliminations</p>
              </div>
              <div className="absolute text-center flex flex-col justify-end z-10" style={{ left: '82.92%', bottom: '88%', transform: 'translateX(-50%)' }}>
                <p className="text-white" style={{ fontFamily: titleFont, fontSize: 'clamp(60px, 6.44vw, 123.67px)', lineHeight: '103%' }}>6</p>
                <p className="uppercase text-white tracking-wider" style={{ fontFamily: monofonto.style.fontFamily, fontSize: 'clamp(12px, 1.29vw, 24.78px)', lineHeight: '147%' }}>Finals Event</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>)}

      {activeTab === 'Brackets' && (
        <section className="w-full py-16">
          {/* Desktop: 3-column layout */}
          <div className="hidden md:flex justify-center" style={{ gap: 'clamp(15px, 1.5625vw, 30px)' }}>
            <div style={{ width: 'clamp(232px, 24.17vw, 464px)' }}>
              <Image src="/europeBrackets.png" alt="Europe Brackets" width={930} height={1481} className="w-full h-auto" />
            </div>
            <div style={{ width: 'clamp(232px, 24.17vw, 464px)' }}>
              <Image src="/asiaBrackets.png" alt="Asia / Oceania Brackets" width={930} height={1481} className="w-full h-auto" />
            </div>
            <div className="flex flex-col" style={{ width: 'clamp(232px, 24.17vw, 464px)', gap: 'clamp(15px, 1.5625vw, 30px)' }}>
              <Image src="/americaBrackets.png" alt="Americas Brackets" width={930} height={723} className="w-full h-auto" />
              <Image src="/africaBrackets.png" alt="Africa Brackets" width={930} height={533} className="w-full h-auto" />
            </div>
          </div>
          {/* Mobile: single column, stacked */}
          <div className="md:hidden flex flex-col items-center gap-4 px-4">
            <Image src="/europeBrackets.png" alt="Europe Brackets" width={930} height={1481} className="w-full max-w-[400px] h-auto" />
            <Image src="/asiaBrackets.png" alt="Asia / Oceania Brackets" width={930} height={1481} className="w-full max-w-[400px] h-auto" />
            <Image src="/americaBrackets.png" alt="Americas Brackets" width={930} height={723} className="w-full max-w-[400px] h-auto" />
            <Image src="/africaBrackets.png" alt="Africa Brackets" width={930} height={533} className="w-full max-w-[400px] h-auto" />
          </div>
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
      {/* Mobile version — no box */}
      <section className="md:hidden w-full px-6 pt-4 pb-16 flex flex-col items-center text-center">
        <h2
          className="text-white uppercase"
          style={{
            fontFamily: titleFont,
            fontSize: '73.4px',
            lineHeight: '95%',
            fontWeight: 400,
          }}
        >
          Ready to<br />Compete?
        </h2>

        <p
          className="uppercase mt-4"
          style={{
            fontFamily: monofonto.style.fontFamily,
            fontSize: '14px',
            lineHeight: '161%',
            color: '#999',
          }}
        >
          Join athletes from{' '}
          <span className="text-white font-bold" style={{ fontSize: '20px' }}>128 Countries</span>
        </p>

        <div className="flex items-center gap-1.5 mt-1">
          <span
            className="uppercase"
            style={{
              fontFamily: monofonto.style.fontFamily,
              fontSize: '14px',
              color: '#999',
            }}
          >
            Competing for
          </span>
          <div className="relative" style={{ width: '80px', height: '28px' }}>
            <Image
              src="/100000.png"
              alt="$100,000"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Apply Now Button — bigger for mobile */}
        <Link href="/submissions" className="mt-8">
          <div
            className="inline-flex items-center gap-2 rounded-full relative"
            style={{
              padding: '1px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(153,153,153,0.3))',
            }}
          >
            <div
              className="rounded-full flex items-center gap-4"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.04), rgba(0,0,0,0.9))',
                boxShadow: 'inset 0 4px 9.2px rgba(255,255,255,0.08)',
                paddingLeft: '28px',
                paddingRight: '20px',
                paddingTop: '12px',
                paddingBottom: '12px',
              }}
            >
              <span className="text-white uppercase tracking-wider font-bold" style={{ fontFamily, fontSize: '12px' }}>
                Apply Now
              </span>
              <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Image src="/sperm-icon.png" alt="" width={20} height={20} className="object-contain" />
              </div>
            </div>
          </div>
        </Link>

        <p
          className="uppercase mt-4"
          style={{
            fontFamily: monofonto.style.fontFamily,
            fontSize: '10px',
            lineHeight: '147%',
            color: '#FF361D',
          }}
        >
          Application reviewed on a rolling basis
        </p>
      </section>

      {/* Desktop version — with box */}
      <section className="hidden md:block w-full px-24 py-16">
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
                className="rounded-full flex items-center gap-3"
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
                <div className="rounded-md flex items-center justify-center" style={{ width: 'clamp(18px, 1.3vw, 25px)', height: 'clamp(18px, 1.3vw, 25px)', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Image src="/sperm-icon.png" alt="" width={14} height={14} className="object-contain" />
                </div>
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
