'use client';

import { useState, useRef, useEffect } from 'react';
import localFont from 'next/font/local';
import { League_Gothic } from 'next/font/google';
import { Forminit } from 'forminit';

const COUNTRY_CODES = [
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
  { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
  { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
  { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
  { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', country: 'ES', flag: '🇪🇸', name: 'Spain' },
  { code: '+31', country: 'NL', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+46', country: 'SE', flag: '🇸🇪', name: 'Sweden' },
  { code: '+47', country: 'NO', flag: '🇳🇴', name: 'Norway' },
  { code: '+45', country: 'DK', flag: '🇩🇰', name: 'Denmark' },
  { code: '+358', country: 'FI', flag: '🇫🇮', name: 'Finland' },
  { code: '+41', country: 'CH', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+43', country: 'AT', flag: '🇦🇹', name: 'Austria' },
  { code: '+32', country: 'BE', flag: '🇧🇪', name: 'Belgium' },
  { code: '+351', country: 'PT', flag: '🇵🇹', name: 'Portugal' },
  { code: '+353', country: 'IE', flag: '🇮🇪', name: 'Ireland' },
  { code: '+48', country: 'PL', flag: '🇵🇱', name: 'Poland' },
  { code: '+420', country: 'CZ', flag: '🇨🇿', name: 'Czech Republic' },
  { code: '+36', country: 'HU', flag: '🇭🇺', name: 'Hungary' },
  { code: '+40', country: 'RO', flag: '🇷🇴', name: 'Romania' },
  { code: '+30', country: 'GR', flag: '🇬🇷', name: 'Greece' },
  { code: '+90', country: 'TR', flag: '🇹🇷', name: 'Turkey' },
  { code: '+7', country: 'RU', flag: '🇷🇺', name: 'Russia' },
  { code: '+380', country: 'UA', flag: '🇺🇦', name: 'Ukraine' },
  { code: '+81', country: 'JP', flag: '🇯🇵', name: 'Japan' },
  { code: '+82', country: 'KR', flag: '🇰🇷', name: 'South Korea' },
  { code: '+86', country: 'CN', flag: '🇨🇳', name: 'China' },
  { code: '+852', country: 'HK', flag: '🇭🇰', name: 'Hong Kong' },
  { code: '+886', country: 'TW', flag: '🇹🇼', name: 'Taiwan' },
  { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
  { code: '+60', country: 'MY', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+63', country: 'PH', flag: '🇵🇭', name: 'Philippines' },
  { code: '+66', country: 'TH', flag: '🇹🇭', name: 'Thailand' },
  { code: '+62', country: 'ID', flag: '🇮🇩', name: 'Indonesia' },
  { code: '+84', country: 'VN', flag: '🇻🇳', name: 'Vietnam' },
  { code: '+92', country: 'PK', flag: '🇵🇰', name: 'Pakistan' },
  { code: '+880', country: 'BD', flag: '🇧🇩', name: 'Bangladesh' },
  { code: '+94', country: 'LK', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: '+971', country: 'AE', flag: '🇦🇪', name: 'UAE' },
  { code: '+966', country: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+972', country: 'IL', flag: '🇮🇱', name: 'Israel' },
  { code: '+20', country: 'EG', flag: '🇪🇬', name: 'Egypt' },
  { code: '+27', country: 'ZA', flag: '🇿🇦', name: 'South Africa' },
  { code: '+234', country: 'NG', flag: '🇳🇬', name: 'Nigeria' },
  { code: '+254', country: 'KE', flag: '🇰🇪', name: 'Kenya' },
  { code: '+233', country: 'GH', flag: '🇬🇭', name: 'Ghana' },
  { code: '+52', country: 'MX', flag: '🇲🇽', name: 'Mexico' },
  { code: '+55', country: 'BR', flag: '🇧🇷', name: 'Brazil' },
  { code: '+54', country: 'AR', flag: '🇦🇷', name: 'Argentina' },
  { code: '+57', country: 'CO', flag: '🇨🇴', name: 'Colombia' },
  { code: '+56', country: 'CL', flag: '🇨🇱', name: 'Chile' },
  { code: '+51', country: 'PE', flag: '🇵🇪', name: 'Peru' },
  { code: '+64', country: 'NZ', flag: '🇳🇿', name: 'New Zealand' },
];

// Load Fonts
const monoFont = localFont({
  src: [
    {
      path: '../../public/fonts/JetBrainsMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/JetBrainsMono-Bold.woff2',
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

interface WaitlistSignupFormProps {
  className?: string;
  monoFontClass?: string;
  labelText?: string;
  variant?: 'default' | 'glass';
  showBadge?: boolean;
}

export default function WaitlistSignupForm({
  className = '',
  monoFontClass = '',
  labelText,
  variant = 'default',
  showBadge = true,
}: WaitlistSignupFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [error, setError] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowCountryDropdown(false);
        setCountrySearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCountries = countrySearch
    ? COUNTRY_CODES.filter(c =>
        c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        c.code.includes(countrySearch) ||
        c.country.toLowerCase().includes(countrySearch.toLowerCase())
      )
    : COUNTRY_CODES;

  const fontFamily = monoFont.style.fontFamily;
  const titleFont = leagueGothic.style.fontFamily;

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 4 && cleaned.length <= 15;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setStatus('loading');

    try {
      const cleanPhone = countryCode.code + phone.replace(/\D/g, '').trim();
      const cleanName = name.trim();

      const forminit = new Forminit({ proxyUrl: '/api/forminit' });
      const { error: submitError } = await forminit.submit('3yxyuhexo7l', {
        blocks: [
          { type: 'sender', properties: { fullName: cleanName, phone: cleanPhone } },
        ],
      });

      if (submitError) {
        setStatus('error');
        setError(submitError.message || 'Failed to join waitlist. Please try again.');
        return;
      }

      setStatus('success');
      setPhone('');
      setName('');
    } catch (error: any) {
      console.error('Waitlist error:', error);
      setStatus('error');
      setError(error.message || 'Failed to join waitlist. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`text-center space-y-8 ${className}`}>
        <div className="mx-auto">
          <div className="mx-auto w-20 h-20 md:w-24 md:h-24 bg-red-500/20 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-red-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
        <div className="space-y-4">
          <h1 
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white"
            style={{ fontFamily: titleFont, letterSpacing: '0.02em' }}
          >
            Welcome to the Race!
          </h1>
          <p 
            className="mx-auto max-w-[28rem] text-center text-sm md:text-sm text-white/70 uppercase tracking-wider leading-relaxed px-2"
            style={{ fontFamily, letterSpacing: '0.08em' }}
          >
            You're all set for early access. We'll notify you when it's time to compete.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full flex flex-col ${className}`}>
      {showBadge && (
        <div className="absolute top-0 left-0">
          <div 
            className="bg-[#A1483D] text-white px-3 py-1.5 rounded uppercase text-xs font-bold tracking-wider"
            style={{ fontFamily }}
          >
            COMING SOON!
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col gap-8 pt-12">
        {/* Main Title - Stacked */}
        <div className="flex flex-col">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.9] tracking-tight"
            style={{ fontFamily: titleFont }}
          >
            GET NOTIFIED<br />
            ON NEXT RACE<br />
            
          </h1>
        </div>

        {/* Description */}
        <div>
          <p
            className="text-sm md:text-base uppercase text-white/90 leading-relaxed tracking-wider"
            style={{ fontFamily }}
          >
            BE THE FIRST TO KNOW WHEN THE NEXT RACE IS HAPPENING.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={status === 'loading'}
            className="w-full bg-[#0A0A0A] border border-white/20 text-white placeholder:text-gray-400 placeholder:uppercase px-4 py-3 text-base md:text-sm uppercase tracking-wider focus:outline-none focus:border-white/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily }}
          />

          <div className="relative flex" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => { setShowCountryDropdown(!showCountryDropdown); setCountrySearch(''); }}
              disabled={status === 'loading'}
              className="flex items-center gap-1.5 bg-[#0A0A0A] border border-white/20 border-r-0 text-white px-3 py-3 text-sm shrink-0 hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily }}
            >
              <span className="text-base leading-none">{countryCode.flag}</span>
              <span className="text-xs tracking-wider">{countryCode.code}</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-0.5 opacity-50">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {showCountryDropdown && (
              <div className="absolute top-full left-0 mt-1 w-[260px] max-h-[200px] overflow-y-auto bg-[#111] border border-white/20 z-50 shadow-xl">
                <div className="sticky top-0 bg-[#111] border-b border-white/10">
                  <input
                    type="text"
                    placeholder="SEARCH..."
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                    className="w-full bg-transparent text-white placeholder:text-gray-500 px-3 py-2 text-xs uppercase tracking-wider focus:outline-none"
                    style={{ fontFamily }}
                    autoFocus
                  />
                </div>
                {filteredCountries.map((c, i) => (
                  <button
                    key={`${c.country}-${i}`}
                    type="button"
                    onClick={() => {
                      setCountryCode(c);
                      setShowCountryDropdown(false);
                      setCountrySearch('');
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-left text-white hover:bg-white/10 transition-colors"
                    style={{ fontFamily }}
                  >
                    <span className="text-base leading-none">{c.flag}</span>
                    <span className="text-xs tracking-wider uppercase flex-1">{c.name}</span>
                    <span className="text-xs text-white/40">{c.code}</span>
                  </button>
                ))}
              </div>
            )}
            <input
              type="tel"
              placeholder="PHONE NUMBER"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={status === 'loading'}
              className="w-full bg-[#0A0A0A] border border-white/20 text-white placeholder:text-gray-400 placeholder:uppercase px-4 py-3 text-base md:text-sm uppercase tracking-wider focus:outline-none focus:border-white/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily }}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-white text-black hover:bg-white/90 font-bold uppercase tracking-wider px-6 py-4 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily }}
          >
            {status === 'loading' ? 'LOADING...' : 'JOIN WAITLIST'}
          </button>
        </form>

        {/* Status Messages */}
        {error && (
          <div className="mt-2">
            <p className="text-red-400 text-sm uppercase text-center" style={{ fontFamily }}>
              {error}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}