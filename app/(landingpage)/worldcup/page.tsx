'use client';

import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const WorldCupPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 md:py-20 px-6 bg-[#0a0a0a] text-white relative">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      <div className="max-w-[680px] w-full relative z-10">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-[1.1] tracking-tight text-white">
          SR World Cup 2026
        </h1>
        <p className="text-[#e0e0e0] text-lg md:text-xl leading-[1.7] mb-8">
          <span className="text-white font-semibold">128 countries</span>. One champion. A <span className="text-[#FF361D] font-bold">$100,000</span> prize pool.
        </p>

        {/* Primary CTA */}
        <div className="mb-10">
          <Link
            href="/submissions"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF361D] text-white font-semibold text-base md:text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
          >
            Apply Now
          </Link>
          <p className="text-[#666] text-sm mt-3">Applications close March 15, 2026</p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden border border-white/[0.06]">
          <Image
            src="/spermracinghero.png"
            alt="Sperm Racing World Cup 2026"
            width={680}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Intro */}
        <div className="mb-16 space-y-5 text-base md:text-lg leading-relaxed">
          <p className="text-[#b0b0b0] leading-relaxed">
            This page explains how participation works, who is eligible, and what it means to represent a country.
          </p>
          <p className="text-[#666] text-sm border-l-2 border-[#FF361D]/50 pl-4 py-1">
            Please read carefully before applying.
          </p>
        </div>

        <div className="border-t border-white/[0.06] mb-16" />

        {/* Main Content */}
        <div className="space-y-16 md:space-y-20 text-base md:text-lg leading-relaxed">
          
          {/* What This Is */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              What This Is
            </h2>
            <p className="text-[#d0d0d0] text-lg md:text-xl leading-[1.7]">
              Sperm Racing is a <span className="text-white font-semibold">science-based competitive sport</span>. During the 2026 Sperm Racing International Cup, athletes compete by representing a country, advancing through qualifiers, matchups, and tournament rounds that are broadcast and shared publicly.
            </p>
            
            <div className="bg-white/[0.02] border border-white/[0.06] p-6 md:p-8 rounded-xl">
              <p className="text-white text-lg md:text-xl font-semibold mb-3">
                This is NOT a lottery or a game of chance.
              </p>
              <p className="text-[#999] leading-relaxed">
                Selection and advancement are based on eligibility, performance, availability, and competitive structure.
              </p>
            </div>
          </section>

          {/* Who Can Apply */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Who Can Apply
            </h2>
            <p className="text-[#d0d0d0] text-lg">To apply, you must:</p>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8">
              <ul className="space-y-4 text-[#999] text-base md:text-lg">
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Be <span className="text-white font-medium">18 years or older</span></span>
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
                  <span><span className="text-white font-medium">No sexually transmitted diseases</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">•</span>
                  <span>Agree to follow competition rules and instructions</span>
                </li>
              </ul>
            </div>
            <p className="text-[#666] text-sm border-l-2 border-white/[0.08] pl-4 py-2">
              Applying does not guarantee selection.
            </p>
          </section>

          {/* Country Representation Rules */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#FF361D]">
              Country Representation Rules
            </h2>
            
            <div className="bg-[#FF361D]/[0.04] border border-[#FF361D]/30 rounded-xl p-6 md:p-8">
              <p className="text-white text-lg md:text-xl font-semibold mb-4">
                Each country is represented by ONE (1) athlete during the Qualifiers stage.
              </p>
              <p className="text-[#999] text-base md:text-lg leading-relaxed">
                To represent a country, you must meet at least one of the following:
              </p>
            </div>

            <div className="ml-4 pl-6 border-l-2 border-[#FF361D]/50 space-y-5">
              <p className="font-semibold text-white text-lg">You may represent a country if:</p>
              <ul className="space-y-4 text-[#b0b0b0] text-base md:text-lg">
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>You have at least <span className="text-white font-medium">25% ancestry</span> from that country (for example: one grandparent, or equivalent lineage)</span>
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
                  <span>You hold <span className="text-white font-medium">citizenship or permanent residency</span> there</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-3 font-bold">→</span>
                  <span>You have a strong cultural or familial connection that can be reasonably verified</span>
                </li>
              </ul>
            </div>
            
            <p className="text-[#666] text-sm border-l-2 border-white/[0.08] pl-4 py-2">
              Sponsor reserves the right to request clarification or documentation at later stages.
            </p>
          </section>

          {/* Choosing a Country */}
          <section className="space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Choosing a Country
            </h3>
            <ul className="space-y-4 text-[#b0b0b0] text-base md:text-lg ml-6">
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Population-dense countries (e.g. United States, India, China) are <span className="text-white font-medium">more competitive</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Smaller or under-represented countries may have <span className="text-white font-medium">fewer applicants</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Athletes are encouraged to apply strategically if eligible for multiple countries</span>
              </li>
            </ul>
            
            <div className="mt-8 ml-4 pl-6 border-l-2 border-white/[0.08] space-y-4">
              <p className="font-semibold text-white text-lg">Sponsor may:</p>
              <ul className="space-y-3 text-[#b0b0b0]">
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
            
            <p className="text-white font-medium mt-6 text-lg">
              All country assignments are finalized by Sponsor.
            </p>
          </section>

          {/* Who Is Not Eligible */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Who Is Not Eligible
            </h2>
            <p className="text-[#d0d0d0] text-lg">You may not participate if you:</p>
            <ul className="space-y-4 text-[#b0b0b0] text-base md:text-lg ml-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold text-xl">✕</span>
                <span>Are involved in running, judging, testing, or administering Sperm Racing</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold text-xl">✕</span>
                <span>Are attempting to manipulate results, selection, or eligibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold text-xl">✕</span>
                <span>Provide <span className="text-white font-medium">false or misleading information</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold text-xl">✕</span>
                <span>Attempt to enter under multiple identities</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold text-xl">✕</span>
                <span>Are participating on behalf of another person or entity</span>
              </li>
            </ul>
          </section>

          {/* Selection & Competition Structure */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Selection & Competition Structure
            </h2>
            
            <p className="text-[#d0d0d0] text-lg">The Competition includes multiple stages:</p>
            
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8">
              <ul className="space-y-4 text-[#999] text-base md:text-lg">
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">1.</span>
                  <span><span className="text-white font-medium">Open Applications</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">2.</span>
                  <span><span className="text-white font-medium">Qualifiers</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">3.</span>
                  <span><span className="text-white font-medium">Head-to-head Matchups</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">4.</span>
                  <span><span className="text-white font-medium">Tournament Eliminations</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">5.</span>
                  <span><span className="text-white font-medium">Live or Recorded Events</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF361D] mr-4 font-bold text-xl">6.</span>
                  <span><span className="text-white font-medium">Finals Event</span></span>
                </li>
              </ul>
            </div>
            
            <p className="text-[#666] text-sm border-l-2 border-white/[0.08] pl-4 py-2">
              Not every applied matchup will occur physically. Some rounds may be simulated or produced for storytelling and broadcast purposes.
            </p>
            
            <div className="bg-[#FF361D]/[0.04] border border-[#FF361D]/30 rounded-xl p-6 md:p-8">
              <p className="font-semibold text-white text-lg mb-4">Sponsor Controls:</p>
              <ul className="space-y-3 text-[#b0b0b0]">
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
              <p className="text-white font-medium mt-6 text-lg">All decisions are final.</p>
            </div>
          </section>

          {/* Prizes */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#FF361D]">
              Prizes
            </h2>
            
            {/* Prize Pool Highlight - Premium Card */}
            <div className="relative group">
              {/* Animated elegant outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF361D]/20 via-[#FF361D]/40 to-[#FF361D]/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 animate-pulse" />
              
              {/* Animated border light effect - fuller light travels around all edges */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `conic-gradient(
                      from 0deg,
                      #FF361D 0deg,
                      #ff6b4a 30deg,
                      rgba(255, 54, 29, 0.6) 60deg,
                      rgba(255, 54, 29, 0.3) 90deg,
                      transparent 120deg,
                      transparent 240deg,
                      rgba(255, 54, 29, 0.3) 270deg,
                      rgba(255, 54, 29, 0.6) 300deg,
                      #ff6b4a 330deg,
                      #FF361D 360deg
                    )`,
                    animation: 'spin 4s linear infinite',
                    padding: '3px',
                  }}
                >
                  <div className="w-full h-full rounded-2xl bg-[#0a0a0a]" />
                </div>
              </div>
              
              {/* Double border effect */}
              <div className="relative bg-gradient-to-br from-[#2a2a2a] via-[#1f1f1f] to-[#2a2a2a] p-[2px] rounded-2xl group-hover:scale-[1.02] transition-transform duration-500">
                <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] rounded-2xl p-12 md:p-16 text-center overflow-hidden">
                  {/* Animated shimmer overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent)',
                      animation: 'shimmer-slide 3s ease-in-out infinite',
                    }}
                  />
                  
                  {/* Top accent bar with pulse */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#FF361D] to-transparent rounded-full animate-pulse" />
                  
                  <p className="relative text-[#808080] text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-medium">
                    Total Prize Pool
                  </p>
                  
                  {/* Clean, bold prize amount with subtle glow */}
                  <div className="relative">
                    {/* Glow effect behind text */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <p className="text-7xl md:text-8xl lg:text-9xl font-black text-[#FF361D]/20 blur-2xl">
                        $100,000
                      </p>
                    </div>
                    
                    {/* Main text */}
                    <p className="relative text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight leading-none group-hover:text-[#ffffff] transition-colors duration-500">
                      $100,000
                    </p>
                  </div>
                  
                  <p className="relative text-[#808080] text-sm md:text-base uppercase tracking-[0.3em] font-light">
                    USD
                  </p>
                  
                  {/* Bottom accent bar with pulse */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#FF361D] to-transparent rounded-full animate-pulse" 
                       style={{ animationDelay: '1s' }} />
                </div>
              </div>
              
              <style jsx>{`
                @keyframes shimmer-slide {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }
                
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>
            
            <ul className="space-y-4 text-[#b0b0b0] text-base md:text-lg ml-6">
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Distribution will be announced closer to finals</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Prizes are paid to <span className="text-white font-medium">individuals only</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF361D] mr-3 font-bold">•</span>
                <span>Winners are responsible for any taxes or reporting required in their country</span>
              </li>
            </ul>
          </section>

          {/* Content & Publicity */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Content & Publicity
            </h2>
            <p className="text-[#d0d0d0] text-lg">By participating, you agree that Sperm Racing may use:</p>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8">
              <ul className="space-y-3 text-[#999] text-base md:text-lg">
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
            <p className="text-[#b0b0b0] text-base md:text-lg leading-relaxed">
              For promotional, broadcast, documentary, and marketing purposes worldwide, across all media.
            </p>
            <div className="bg-white/[0.02] border-l-2 border-[#FF361D]/50 p-6 rounded-r-xl">
              <p className="font-medium text-white text-lg">This is a core part of the sport.</p>
            </div>
          </section>

          {/* Conduct Expectations */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Conduct Expectations
            </h2>
            <p className="text-[#d0d0d0] text-lg">Athletes are expected to:</p>
            <ul className="space-y-4 text-[#b0b0b0] text-base md:text-lg ml-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 font-bold text-xl">✓</span>
                <span>Compete honestly</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 font-bold text-xl">✓</span>
                <span>Follow instructions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 font-bold text-xl">✓</span>
                <span>Respect staff and other competitors</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 font-bold text-xl">✓</span>
                <span>Avoid harassment, threats, or harmful behavior</span>
              </li>
            </ul>
            <p className="text-[#999] text-base md:text-lg mt-6 border-l-2 border-white/[0.08] pl-4 py-2">
              <span className="text-white font-medium">Trash talk, rivalry, and personality are welcome.</span> Malicious or illegal behavior is not.
            </p>
          </section>

          {/* Health & Safety */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Health & Safety
            </h2>
            <p className="text-[#d0d0d0] text-lg leading-relaxed">
              Participation is voluntary. Sperm Racing involves <span className="text-white font-medium">laboratory testing and controlled scientific procedures</span>.
            </p>
            <p className="text-[#d0d0d0] text-lg">You acknowledge that:</p>
            <ul className="space-y-4 text-[#b0b0b0] text-base md:text-lg ml-6">
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
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Changes & Cancellation
            </h2>
            <p className="text-[#b0b0b0] text-base md:text-lg leading-relaxed">
              Sperm Racing may update, delay, modify, or cancel any part of the Competition due to logistics, regulations, technical issues, or unforeseen circumstances.
            </p>
          </section>

          {/* Final Note */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Final Note
            </h2>
            <p className="text-[#d0d0d0] text-lg leading-relaxed">
              Applying means you understand how the Competition works and agree to participate in good faith.
            </p>
            <p className="text-[#d0d0d0] text-lg leading-relaxed">
              If selected, you will receive additional instructions and confirmations before advancing.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-20 pt-16 border-t border-white/[0.06]">
            <div className="text-center space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                Ready to Compete?
              </h3>
              <p className="text-[#999] text-lg md:text-xl leading-relaxed">
                Join athletes from <span className="text-white font-semibold">128 countries</span> competing for <span className="text-[#FF361D] font-bold">$100,000</span>
              </p>
              <div className="pt-2">
                <Link
                  href="/submissions"
                  className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-[#FF361D] text-white font-semibold text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                >
                  Apply Now
                </Link>
              </div>
              <p className="text-[#666] text-sm">
                Applications reviewed on a rolling basis
              </p>
            </div>
          </div>

          <div className="h-16 md:h-24"></div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupPage;
