'use client';

import Image from 'next/image';
import localFont from 'next/font/local';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

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

const WorldCupPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 md:py-20 px-6 bg-black text-white">
      <div className="max-w-[680px] w-full">
        {/* Logo */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <Image
            src="/images/logo/mainLogo.png"
            alt="Sperm Racing Logo"
            width={120}
            height={120}
            className="opacity-90"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Sperm Racing CUP 2026
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-16 font-light">
          Athlete Participation Guidelines
        </h2>

        {/* Intro */}
        <div className="mb-16 space-y-6 text-base md:text-lg leading-relaxed">
          <p className="text-gray-200 text-lg md:text-xl">
            In late 2026, Sperm Racing will host its <span className="text-white font-bold">first International Cup</span>, bringing together athletes from <span className="text-white font-bold">128 countries</span> to compete for a <span className="text-[#FF361D] font-bold text-xl md:text-2xl">$100,000 prize pool</span>.
          </p>
          <p className="text-gray-300">
            This page explains how participation works, who is eligible, and what it means to represent a country.
          </p>
          
          <p className="text-gray-500 text-sm md:text-base italic border-l-4 border-[#FF361D] pl-4 mt-6">
            Please read carefully before applying.
          </p>
        </div>

        {/* Application Link */}
        <div className="mb-20 pb-20 border-b border-gray-800">
          <Link 
            href="https://docs.google.com/forms/d/1o5UL9AMReId0FogEeLovJ1rLMG_982Ec601WB3qTOSM/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              className="bg-[#FF361D] hover:bg-[#FF361D]/80 text-white px-10 py-7 text-base md:text-lg font-bold rounded-sm transition-all"
              style={{ fontFamily: monoFont.style.fontFamily }}
            >
              APPLY NOW →
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="space-y-16 md:space-y-20 text-base md:text-lg leading-relaxed">
          
          {/* What This Is */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              What This Is
            </h2>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
              Sperm Racing is a <span className="text-white font-bold">science-based competitive sport</span>. During the 2026 Sperm Racing International Cup, athletes compete by representing a country, advancing through qualifiers, matchups, and tournament rounds that are broadcast and shared publicly.
            </p>
            
            {/* Highlight Box */}
            <div className="bg-gradient-to-br from-[#FF361D]/10 to-transparent border-l-4 border-[#FF361D] p-6 rounded-r-lg my-8">
              <p className="text-white text-lg md:text-xl font-bold">
                This is NOT a lottery or a game of chance.
              </p>
              <p className="text-gray-300 mt-2">
                Selection and advancement are based on eligibility, performance, availability, and competitive structure.
              </p>
            </div>
          </section>

          {/* Who Can Apply */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Who Can Apply
            </h2>
            <p className="text-gray-200 text-lg">To apply, you must:</p>
            <div className="bg-zinc-900/50 border border-gray-800 rounded-lg p-6 md:p-8">
              <ul className="space-y-4 text-gray-300 text-base md:text-lg">
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Be <span className="text-white font-semibold">18 years or older</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Be a real individual (not a company or organization)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Be legally allowed to participate under your local laws</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Be able to provide biological samples in compliance with applicable regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Be willing to appear in recorded content and competition coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Be available for remote participation and potential in-person events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span><span className="text-white font-semibold">No sexually transmitted diseases</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Agree to follow competition rules and instructions</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-500 text-sm md:text-base italic border-l-4 border-gray-700 pl-4">
              Applying does not guarantee selection.
            </p>
          </section>

          {/* Country Representation Rules */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#FF361D] leading-tight">
              Country Representation Rules
            </h2>
            
            <div className="bg-gradient-to-br from-[#FF361D]/10 to-transparent border border-[#FF361D]/30 rounded-lg p-6 md:p-8">
              <p className="text-white text-lg md:text-xl font-bold mb-4">
                Each country is represented by ONE (1) athlete during the Qualifiers stage.
              </p>
              <p className="text-gray-300 text-base md:text-lg">
                To represent a country, you must meet at least one of the following:
              </p>
            </div>

            <div className="ml-4 pl-6 border-l-4 border-[#FF361D] space-y-5">
              <p className="font-bold text-white text-lg">You may represent a country if:</p>
              <ul className="space-y-4 text-gray-300 text-base md:text-lg">
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>You have at least <span className="text-white font-semibold">25% ancestry</span> from that country (for example: one grandparent, or equivalent lineage)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>One or both parents are from that country</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>You were born in that country</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>You hold <span className="text-white font-semibold">citizenship or permanent residency</span> there</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>You have a strong cultural or familial connection that can be reasonably verified</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-500 text-sm border-l-4 border-gray-700 pl-4">
              Sponsor reserves the right to request clarification or documentation at later stages.
            </p>
          </section>

          {/* Choosing a Country */}
          <section className="space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold">
              Choosing a Country
            </h3>
            <ul className="space-y-4 text-gray-300 text-base md:text-lg ml-6">
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Population-dense countries (e.g. United States, India, China) are <span className="text-white font-semibold">more competitive</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Smaller or under-represented countries may have <span className="text-white font-semibold">fewer applicants</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Athletes are encouraged to apply strategically if eligible for multiple countries</span>
              </li>
            </ul>
            
            <div className="mt-8 ml-4 pl-6 border-l-4 border-gray-800 space-y-4">
              <p className="font-bold text-white text-lg">Sponsor may:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3">→</span>
                  <span>Ask athletes to switch countries for competitive balance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">→</span>
                  <span>Decline country assignments that do not meet eligibility standards</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">→</span>
                  <span>Make final determinations in cases of overlap or dispute</span>
                </li>
              </ul>
            </div>
            
            <p className="text-white font-semibold mt-6 text-lg">
              All country assignments are finalized by Sponsor.
            </p>
            
            {/* Image Break - Competitors */}
            <div className="my-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src="/images/competitors/asher.jpg"
                  alt="Competitor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src="/images/competitors/jimmy.jpg"
                  alt="Competitor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src="/images/competitors/noah.jpg"
                  alt="Competitor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src="/images/competitors/tristan.jpg"
                  alt="Competitor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm italic">
              Previous competitors from around the world
            </p>
          </section>

          {/* Who Is Not Eligible */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Who Is Not Eligible
            </h2>
            <p className="text-gray-200 text-lg">You may not participate if you:</p>
            <ul className="space-y-4 text-gray-300 text-base md:text-lg ml-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">✕</span>
                <span>Are involved in running, judging, testing, or administering Sperm Racing</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">✕</span>
                <span>Are attempting to manipulate results, selection, or eligibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">✕</span>
                <span>Provide <span className="text-white font-semibold">false or misleading information</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">✕</span>
                <span>Attempt to enter under multiple identities</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">✕</span>
                <span>Are participating on behalf of another person or entity</span>
              </li>
            </ul>
          </section>

          {/* Selection & Competition Structure */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Selection & Competition Structure
            </h2>
            
            <p className="text-gray-200 text-lg">The Competition includes multiple stages:</p>
            
            <div className="bg-zinc-900/50 border border-gray-800 rounded-lg p-6 md:p-8">
              <ul className="space-y-4 text-gray-300 text-base md:text-lg">
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">1.</span>
                  <span><span className="text-white font-semibold">Open Applications</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">2.</span>
                  <span><span className="text-white font-semibold">Qualifiers</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">3.</span>
                  <span><span className="text-white font-semibold">Head-to-head Matchups</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">4.</span>
                  <span><span className="text-white font-semibold">Tournament Eliminations</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">5.</span>
                  <span><span className="text-white font-semibold">Live or Recorded Events</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">6.</span>
                  <span><span className="text-white font-semibold">Finals Event</span></span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base border-l-4 border-gray-700 pl-4">
              Not every applied matchup will occur physically. Some rounds may be simulated or produced for storytelling and broadcast purposes.
            </p>
            
            <div className="mt-8 bg-gradient-to-br from-[#FF361D]/10 to-transparent border border-[#FF361D]/30 rounded-lg p-6 md:p-8">
              <p className="font-bold text-white text-lg mb-4">Sponsor Controls:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>Tournament structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>Matchups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>Advancement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>Timing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>Format</span>
                </li>
              </ul>
              <p className="text-white font-bold mt-6 text-lg">All decisions are final.</p>
            </div>
          </section>

          {/* Prizes */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#FF361D] leading-tight">
              Prizes
            </h2>
            
            {/* Prize Pool Highlight */}
            <div className="bg-gradient-to-br from-[#FF361D]/20 via-[#FF361D]/5 to-transparent border-2 border-[#FF361D] rounded-lg p-8 md:p-10 text-center">
              <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider mb-2">Total Prize Pool</p>
              <p className="text-5xl md:text-7xl font-bold text-white mb-2">$100,000</p>
              <p className="text-gray-400 text-base md:text-lg">USD</p>
            </div>
            
            <ul className="space-y-4 text-gray-300 text-base md:text-lg ml-6">
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Distribution will be announced closer to finals</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Prizes are paid to <span className="text-white font-semibold">individuals only</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Winners are responsible for any taxes or reporting required in their country</span>
              </li>
            </ul>
            
            {/* Social Proof - Views */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src="/carousel-images/30M Views.jpg"
                  alt="30M Views"
                  width={320}
                  height={180}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src="/carousel-images/18M Views.png"
                  alt="18M Views"
                  width={320}
                  height={180}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm italic">
              Over 100M+ views across social media
            </p>
          </section>

          {/* Content & Publicity */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Content & Publicity
            </h2>
            <p className="text-gray-200 text-lg">By participating, you agree that Sperm Racing may use:</p>
            <div className="bg-zinc-900/50 border border-gray-800 rounded-lg p-6 md:p-8">
              <ul className="space-y-3 text-gray-300 text-base md:text-lg">
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Your name</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Country representation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Likeness, voice, and image</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Recorded footage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Biographical information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Competition results</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-300 text-base md:text-lg">
              For promotional, broadcast, documentary, and marketing purposes worldwide, across all media.
            </p>
            <div className="bg-gradient-to-br from-[#FF361D]/10 to-transparent border-l-4 border-[#FF361D] p-6 rounded-r-lg">
              <p className="font-bold text-white text-lg">This is a core part of the sport.</p>
            </div>
          </section>

          {/* Conduct Expectations */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Conduct Expectations
            </h2>
            <p className="text-gray-200 text-lg">Athletes are expected to:</p>
            <ul className="space-y-4 text-gray-300 text-base md:text-lg ml-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 font-bold">✓</span>
                <span>Compete honestly</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 font-bold">✓</span>
                <span>Follow instructions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 font-bold">✓</span>
                <span>Respect staff and other competitors</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 font-bold">✓</span>
                <span>Avoid harassment, threats, or harmful behavior</span>
              </li>
            </ul>
            <p className="text-gray-300 text-base md:text-lg mt-6 border-l-4 border-gray-700 pl-4">
              <span className="text-white font-semibold">Trash talk, rivalry, and personality are welcome.</span> Malicious or illegal behavior is not.
            </p>
          </section>

          {/* Health & Safety */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Health & Safety
            </h2>
            <p className="text-gray-200 text-lg">
              Participation is voluntary. Sperm Racing involves <span className="text-white font-semibold">laboratory testing and controlled scientific procedures</span>.
            </p>
            <p className="text-gray-200 text-lg">You acknowledge that:</p>
            <ul className="space-y-4 text-gray-300 text-base md:text-lg ml-6">
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Results are not guaranteed</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Performance varies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Sponsor is not responsible for outcomes</span>
              </li>
            </ul>
          </section>

          {/* Changes & Cancellation */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Changes & Cancellation
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Sperm Racing may update, delay, modify, or cancel any part of the Competition due to logistics, regulations, technical issues, or unforeseen circumstances.
            </p>
          </section>

          {/* Final Note */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Final Note
            </h2>
            <p className="text-gray-200 text-lg">
              Applying means you understand how the Competition works and agree to participate in good faith.
            </p>
            <p className="text-gray-200 text-lg">
              If selected, you will receive additional instructions and confirmations before advancing.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-20 pt-16 border-t-2 border-gray-800">
            <div className="text-center space-y-8">
              <h3 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Ready to Compete?
              </h3>
              <p className="text-gray-400 text-lg md:text-xl mb-8">
                Join athletes from <span className="text-white font-semibold">128 countries</span> competing for <span className="text-[#FF361D] font-bold">$100,000</span>
              </p>
              <Link 
                href="https://docs.google.com/forms/d/1o5UL9AMReId0FogEeLovJ1rLMG_982Ec601WB3qTOSM/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-[#FF361D] hover:bg-[#FF361D]/80 text-white px-12 py-8 text-lg md:text-xl font-bold rounded-sm transition-all shadow-lg hover:shadow-[#FF361D]/50"
                  style={{ fontFamily: monoFont.style.fontFamily }}
                >
                  APPLY NOW →
                </Button>
              </Link>
              <p className="text-gray-500 text-sm mt-6">
                Applications are reviewed on a rolling basis
              </p>
            </div>
          </div>

          {/* Extra whitespace */}
          <div className="h-20 md:h-32"></div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupPage;
