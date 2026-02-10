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
    <div className="min-h-screen flex flex-col items-center py-6 md:py-10 px-4 md:px-6 bg-black text-white">
      <div className="max-w-[1000px] w-full tracking-tight">
        {/* Logo */}
        <div className="w-full flex justify-center mb-8 md:mb-12 mt-14 md:mt-2">
          <Image
            src="/LOGO-13.svg"
            alt="SpermRacing Logo"
            width={240}
            height={60}
            priority
            className="w-[200px] md:w-[240px]"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Sperm Racing ICUP 2026
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Athlete Participation Guidelines
        </h2>

        {/* Intro */}
        <div className="mb-8 space-y-4 text-sm md:text-base">
          <p>
            In late 2026, Sperm Racing will host its first International Cup, bringing together athletes from <strong>128 countries</strong> to compete for a <strong className="text-[#FF361D]">$100,000 prize pool</strong>.
          </p>
          <p>
            This page explains how participation works, who is eligible, and what it means to represent a country. Please read carefully before applying.
          </p>
          <div className="bg-[#FF361D]/10 border border-[#FF361D]/30 rounded-lg p-6">
            <p className="font-bold mb-2">If you are looking to apply, click here:</p>
            <Link 
              href="https://docs.google.com/forms/d/1o5UL9AMReId0FogEeLovJ1rLMG_982Ec601WB3qTOSM/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF361D] hover:underline break-all"
            >
              https://docs.google.com/forms/d/1o5UL9AMReId0FogEeLovJ1rLMG_982Ec601WB3qTOSM/edit
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 md:space-y-10 text-sm md:text-base">
          
          {/* What This Is */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              What This Is
            </h2>
            <p>
              Sperm Racing is a science-based competitive sport. During the 2026 Sperm Racing International Cup, athletes compete by representing a country, advancing through qualifiers, matchups, and tournament rounds that are broadcast and shared publicly.
            </p>
            <p>
              This is <strong>not a lottery or a game of chance</strong>. Selection and advancement are based on eligibility, performance, availability, and competitive structure.
            </p>
          </section>

          {/* Who Can Apply */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              Who Can Apply (General Eligibility)
            </h2>
            <p>To apply, you must:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Be 18 years or older</li>
              <li>Be a real individual (not a company or organization)</li>
              <li>Be legally allowed to participate under your local laws</li>
              <li>Be able to provide biological samples in compliance with applicable regulations</li>
              <li>Be willing to appear in recorded content and competition coverage</li>
              <li>Be available for remote participation and potential in-person events</li>
              <li>Not have an STD</li>
              <li>Agree to follow competition rules and instructions</li>
            </ul>
            <p className="text-gray-400 italic">
              Applying does not guarantee selection.
            </p>
          </section>

          {/* Country Representation Rules */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              Country Representation Rules (Important)
            </h2>
            <p>
              Each country in the International Cup is represented by <strong>one (1) athlete</strong> during the Qualifiers stage.
            </p>
            <p>
              To represent a country, you must meet at least one of the following:
            </p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-3">
              <p className="font-bold text-white">You may represent a country if:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>You have at least 25% ancestry from that country (for example: one grandparent, or equivalent lineage)</li>
                <li>One or both parents are from that country</li>
                <li>You were born in that country</li>
                <li>You hold citizenship or permanent residency there</li>
                <li>You have a strong cultural or familial connection that can be reasonably verified</li>
              </ul>
            </div>
            <p className="text-gray-400 text-sm">
              Sponsor reserves the right to request clarification or documentation at later stages.
            </p>
          </section>

          {/* Choosing a Country */}
          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">
              Choosing a Country
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Population-dense countries (e.g. United States, India, China) are more competitive</li>
              <li>Smaller or under-represented countries may have fewer applicants</li>
              <li>Athletes are encouraged to apply strategically if eligible for multiple countries</li>
            </ul>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-3">
              <p className="font-bold text-white">Sponsor may:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Ask athletes to switch countries for competitive balance</li>
                <li>Decline country assignments that do not meet eligibility standards</li>
                <li>Make final determinations in cases of overlap or dispute</li>
              </ul>
            </div>
            <p>
              All country assignments are finalized by Sponsor.
            </p>
          </section>

          {/* Who Is Not Eligible */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              Who Is Not Eligible
            </h2>
            <p>You may not participate if you:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Are involved in running, judging, testing, or administering Sperm Racing</li>
              <li>Are attempting to manipulate results, selection, or eligibility</li>
              <li>Provide false or misleading information</li>
              <li>Attempt to enter under multiple identities</li>
              <li>Are participating on behalf of another person or entity</li>
            </ul>
          </section>

          {/* Selection & Competition Structure */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              Selection & Competition Structure
            </h2>
            <p>The Competition includes multiple stages, which may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Open applications</li>
              <li>Qualifiers</li>
              <li>Head-to-head matchups</li>
              <li>Tournament eliminations</li>
              <li>Live or recorded events</li>
              <li>Finals event</li>
            </ul>
            <p className="text-gray-400">
              Not every applied matchup will occur physically. Some rounds may be simulated or produced for storytelling and broadcast purposes.
            </p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-3">
              <p className="font-bold text-white">Sponsor controls:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Tournament structure</li>
                <li>Matchups</li>
                <li>Advancement</li>
                <li>Timing</li>
                <li>Format</li>
              </ul>
            </div>
            <p>All decisions are final.</p>
          </section>

          {/* Prizes */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              Prizes
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong className="text-white">Total prize pool: $100,000 USD</strong></li>
              <li>Distribution will be announced closer to finals</li>
              <li>Prizes are paid to individuals only</li>
              <li>Winners are responsible for any taxes or reporting required in their country</li>
            </ul>
          </section>

          {/* Content & Publicity */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              Content & Publicity
            </h2>
            <p>By participating, you agree that Sperm Racing may use:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Your name</li>
              <li>Country representation</li>
              <li>Likeness, voice, and image</li>
              <li>Recorded footage</li>
              <li>Biographical information</li>
              <li>Competition results</li>
            </ul>
            <p>
              For promotional, broadcast, documentary, and marketing purposes worldwide, across all media.
            </p>
            <p className="font-bold">This is a core part of the sport.</p>
          </section>

          {/* Conduct Expectations */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              Conduct Expectations
            </h2>
            <p>Athletes are expected to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Compete honestly</li>
              <li>Follow instructions</li>
              <li>Respect staff and other competitors</li>
              <li>Avoid harassment, threats, or harmful behavior</li>
            </ul>
            <p className="text-gray-300">
              Trash talk, rivalry, and personality are welcome. Malicious or illegal behavior is not.
            </p>
          </section>

          {/* Health & Safety */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              Health & Safety
            </h2>
            <p>
              Participation is voluntary. Sperm Racing involves laboratory testing and controlled scientific procedures.
            </p>
            <p>You acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Results are not guaranteed</li>
              <li>Performance varies</li>
              <li>Sponsor is not responsible for outcomes</li>
            </ul>
          </section>

          {/* Changes & Cancellation */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              Changes & Cancellation
            </h2>
            <p>
              Sperm Racing may update, delay, modify, or cancel any part of the Competition due to logistics, regulations, technical issues, or unforeseen circumstances.
            </p>
          </section>

          {/* Final Note */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF361D]">
              Final Note
            </h2>
            <p>
              Applying means you understand how the Competition works and agree to participate in good faith.
            </p>
            <p>
              If selected, you will receive additional instructions and confirmations before advancing.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#FF361D]/20 to-transparent border border-[#FF361D]/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Compete?</h3>
            <Link 
              href="https://docs.google.com/forms/d/1o5UL9AMReId0FogEeLovJ1rLMG_982Ec601WB3qTOSM/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-[#FF361D] hover:bg-[#FF361D]/90 text-white px-8 py-6 text-lg font-bold rounded-none uppercase tracking-wider"
                style={{ fontFamily: monoFont.style.fontFamily }}
              >
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Extra whitespace for mobile and tablet only */}
          <div className="block lg:hidden h-16"></div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupPage;
