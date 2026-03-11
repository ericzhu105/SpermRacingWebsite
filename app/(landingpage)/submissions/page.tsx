'use client';

import { useState, useEffect, useRef } from 'react';
import { Forminit } from 'forminit';

const DEADLINE = new Date('2026-03-15T23:59:59');
const DISPOSABLE_DOMAINS = ['mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email', 'yopmail.com', 'sharklasers.com', 'trashmail.com'];

const SECTION_NAMES = [
  'Personal Details',
  'Legal Consent',
  'Health & Lifestyle',
  'Final Questions'
];

const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
  'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
  'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
  'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
  'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
  'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad',
  'Chile', 'China', 'Colombia', 'Comoros', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus',
  'Czechia', "Côte d'Ivoire",
  'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
  'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia',
  'Eswatini', 'Ethiopia',
  'Fiji', 'Finland', 'France',
  'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala',
  'Guinea', 'Guinea-Bissau', 'Guyana',
  'Haiti', 'Honduras', 'Hungary',
  'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
  'Jamaica', 'Japan', 'Jordan',
  'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
  'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
  'Lithuania', 'Luxembourg',
  'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
  'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia',
  'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
  'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger',
  'Nigeria', 'North Korea', 'North Macedonia', 'Norway',
  'Oman',
  'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru',
  'Philippines', 'Poland', 'Portugal',
  'Qatar',
  'Republic of the Congo', 'Romania', 'Russia', 'Rwanda',
  'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa',
  'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
  'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
  'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden',
  'Switzerland', 'Syria', 'São Tomé and Príncipe',
  'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga',
  'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
  'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
  'Uruguay', 'Uzbekistan',
  'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
  'Yemen',
  'Zambia', 'Zimbabwe',
];

export default function SubmissionsPage() {
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [slideDirection, setSlideDirection] = useState<'forward' | 'back'>('forward');
  const [sessionToken, setSessionToken] = useState('');
  const [timeRemaining, setTimeRemaining] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const formInitRef = useRef(new Forminit({ proxyUrl: '/api/forminit' }));

  const isDev = process.env.NODE_ENV === 'development';

  const DEV_FORM_DATA = {
    fullName: 'Test McTesterson',
    dobMonth: '6',
    dobDay: '15',
    dobYear: '1998',
    email: 'test@example.com',
    instagram: 'testuser123',
    tiktok: 'testuser123',
    location: 'Los Angeles, CA',
    schoolWork: 'Test University',
    country: 'United States',
    ancestry: 'Mixed European and Asian heritage, third generation American.',
    idAgree: true,
    accessAgree: true,
    c1: true,
    c2: true,
    c3: true,
    accuracyAgree: true,
    signature: 'Test McTesterson',
    overallHealth: 'Good',
    workoutFrequency: '3–4 times a week',
    workoutRoutine: 'Weight training 3x/week, cardio 2x/week, yoga on weekends.',
    hasHealthIssues: 'No',
    healthIssuesDetails: '',
    smoking: 'No',
    diet: 'Fairly healthy — mostly balanced with occasional indulgences',
    bio: 'Competitive athlete with a passion for unconventional sports. Love pushing boundaries and trying new things.',
    competitions: 'Local marathon 2024, CrossFit regionals 2025.',
    filmingComfort: 'Yes',
    filmingOther: '',
    irlAvailability: 'Yes',
    motivations: ['Competition & national pride', 'Content creation & exposure'] as string[],
    participantAgreement: true,
    hp_field: '',
  };

  const EMPTY_FORM_DATA = {
    fullName: '',
    dobMonth: '',
    dobDay: '',
    dobYear: '',
    email: '',
    instagram: '',
    tiktok: '',
    location: '',
    schoolWork: '',
    country: '',
    ancestry: '',
    idAgree: false,
    accessAgree: false,
    c1: false,
    c2: false,
    c3: false,
    accuracyAgree: false,
    signature: '',
    overallHealth: '',
    workoutFrequency: '',
    workoutRoutine: '',
    hasHealthIssues: '',
    healthIssuesDetails: '',
    smoking: '',
    diet: '',
    bio: '',
    competitions: '',
    filmingComfort: '',
    filmingOther: '',
    irlAvailability: '',
    motivations: [] as string[],
    participantAgreement: false,
    hp_field: '',
  };

  const STORAGE_KEY = 'sr-wc-2026-draft';

  const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

  const loadSavedData = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return null;
      const parsed = JSON.parse(saved);
      // Expire saved data after 7 days
      if (parsed.savedAt && Date.now() - parsed.savedAt > EXPIRY_MS) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return parsed;
    } catch { return null; }
  };

  // Form data
  const [formData, setFormData] = useState(EMPTY_FORM_DATA);

  const fillTestData = () => {
    setFormData(DEV_FORM_DATA);
    setCompletedSteps([1, 2, 3]);
    setCurrentStep(4);
  };

  const clearTestData = () => {
    setFormData(EMPTY_FORM_DATA);
    setCompletedSteps([]);
    setCurrentStep(1);
    localStorage.removeItem(STORAGE_KEY);
  };

  // Save progress to localStorage on every change (skip if already submitted)
  useEffect(() => {
    if (!mounted || submitted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        formData,
        currentStep,
        completedSteps,
        savedAt: Date.now(),
      }));
    } catch { /* storage full or unavailable */ }
  }, [formData, currentStep, completedSteps, mounted, submitted]);

  // One-time initialization on mount
  useEffect(() => {
    setMounted(true);

    const saved = loadSavedData();
    if (saved) {
      setFormData({ ...EMPTY_FORM_DATA, ...saved.formData });
      const completed: number[] = saved.completedSteps || [];
      setCompletedSteps(completed);
      const firstIncomplete = [1, 2, 3, 4].find(s => !completed.includes(s)) || 1;
      setCurrentStep(firstIncomplete);
    }
    const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    setSessionToken(token);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = DEADLINE.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeRemaining(null);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const isPastDeadline = () => {
    return new Date() > DEADLINE;
  };

  const sanitizeInput = (input: string) => {
    if (!input) return '';
    return input
      .trim()
      .replace(/<[^>]*>?/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/data:/gi, '')
      .replace(/vbscript:/gi, '')
      .substring(0, 2000);
  };

  const isDisposableEmail = (email: string) => {
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return true;
    if (DISPOSABLE_DOMAINS.includes(domain)) return true;
    // Block common patterns used by temp email services
    if (/^(temp|trash|throw|fake|junk|spam|disposable|guerrilla|mailinator|yopmail)/i.test(domain)) return true;
    return false;
  };

  const validateSection1 = () => {
    if (!formData.fullName.trim()) return 'Full Name is required';
    if (formData.fullName.trim().length < 2) return 'Full Name must be at least 2 characters';
    if (!formData.dobMonth || !formData.dobDay || !formData.dobYear) return 'Date of birth is required';
    const dob = new Date(parseInt(formData.dobYear), parseInt(formData.dobMonth) - 1, parseInt(formData.dobDay));
    if (isNaN(dob.getTime())) return 'Invalid date of birth';
    const today = new Date();
    let ageCalc = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) ageCalc--;
    if (ageCalc < 18) return 'You must be 18 or older to apply';
    const email = formData.email.trim().toLowerCase();
    if (!email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email format';
    if (email.length > 254) return 'Email address is too long';
    if (isDisposableEmail(email)) return 'Disposable email addresses are not allowed';
    if (!formData.instagram.trim()) return 'Instagram handle is required';
    if (!/^[\w.]{1,30}$/.test(formData.instagram.trim())) return 'Invalid Instagram handle (letters, numbers, periods, underscores only)';
    if (formData.tiktok && !/^[\w.]{1,30}$/.test(formData.tiktok.trim())) return 'Invalid TikTok handle';
    if (!formData.location.trim()) return 'Location is required';
    if (!formData.country.trim()) return 'Country is required';
    if (!formData.ancestry.trim()) return 'Ancestry is required';
    return null;
  };

  const validateSection2 = () => {
    if (!formData.idAgree || !formData.accessAgree || !formData.c1 || !formData.c2 || !formData.c3 || !formData.accuracyAgree) {
      return 'All consent checkboxes must be checked';
    }
    if (!formData.signature.trim()) return 'Signature is required';
    return null;
  };

  const validateSection3 = () => {
    if (!formData.overallHealth) return 'Overall health is required';
    if (!formData.workoutFrequency) return 'Workout frequency is required';
    if (!formData.workoutRoutine.trim()) return 'Workout routine is required';
    if (!formData.hasHealthIssues) return 'Health issues question is required';
    if (formData.hasHealthIssues === 'Yes' && !formData.healthIssuesDetails.trim()) return 'Health issues details are required';
    if (!formData.smoking) return 'Smoking question is required';
    if (!formData.diet) return 'Diet question is required';
    if (!formData.bio.trim()) return 'Bio is required';
    if (!formData.filmingComfort) return 'Filming comfort question is required';
    if (formData.filmingComfort === 'Other' && !formData.filmingOther.trim()) return 'Please specify filming comfort';
    return null;
  };

  const validateSection4 = () => {
    if (!formData.irlAvailability) return 'IRL availability is required';
    if (formData.motivations.length === 0) return 'At least one motivation must be selected';
    if (!formData.participantAgreement) return 'Participant agreement must be checked';
    return null;
  };

  const handleNext = () => {
    let error = null;
    if (currentStep === 1) error = validateSection1();
    if (currentStep === 2) error = validateSection2();
    if (currentStep === 3) error = validateSection3();
    
    if (error) {
      alert(error);
      return;
    }
    
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    
    setSlideDirection('forward');
    setCurrentStep(currentStep + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    const prevStep = currentStep - 1;
    setCompletedSteps(completedSteps.filter(s => s < currentStep));
    setSlideDirection('back');
    setCurrentStep(prevStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStepClick = (step: number) => {
    if (step === currentStep) return;
    const canNavigate = step === 1 || completedSteps.includes(step - 1) || completedSteps.includes(step);
    if (canNavigate) {
      if (step < currentStep) {
        setCompletedSteps(completedSteps.filter(s => s < step));
      }
      setSlideDirection(step > currentStep ? 'forward' : 'back');
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    const s1 = validateSection1();
    if (s1) { alert(s1); setCurrentStep(1); return; }
    const s2 = validateSection2();
    if (s2) { alert(s2); setCurrentStep(2); return; }
    const s3 = validateSection3();
    if (s3) { alert(s3); setCurrentStep(3); return; }
    const s4 = validateSection4();
    if (s4) { alert(s4); return; }

    // Honeypot check
    if (formData.hp_field) {
      setSubmitted(true);
      return;
    }

    // Rate limit check
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      alert('Please wait 30 seconds between submissions');
      return;
    }

    // Check for duplicate email
    try {
      const checkRes = await fetch('/api/check-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email.trim().toLowerCase() }),
        signal: AbortSignal.timeout(5000),
      });
      if (checkRes.ok) {
        const { exists } = await checkRes.json();
        if (exists) {
          const proceed = window.confirm(
            'It looks like an application with this email has already been submitted. Do you still want to submit again?'
          );
          if (!proceed) return;
        }
      }
    } catch {
      // Non-critical — proceed with submission if check fails
    }

    setIsSubmitting(true);

    try {
      let ipData: any = {};
      try {
        const ipResponse = await fetch('/api/ip', { signal: AbortSignal.timeout(6000) });
        if (ipResponse.ok) ipData = await ipResponse.json();
      } catch {
        // IP lookup is non-critical — proceed without it
      }

      const dob = new Date(parseInt(formData.dobYear), parseInt(formData.dobMonth) - 1, parseInt(formData.dobDay));
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const md = today.getMonth() - dob.getMonth();
      if (md < 0 || (md === 0 && today.getDate() < dob.getDate())) age--;
      const dobString = `${formData.dobMonth.padStart(2, '0')}/${formData.dobDay.padStart(2, '0')}/${formData.dobYear}`;

      // Health score: each answer maps to points, higher = healthier
      const healthScores: Record<string, number> = {
        'Optimized': 5, 'Good': 4, 'Ok': 3, 'Not great': 2, 'Degenerate': 1,
      };
      const workoutScores: Record<string, number> = {
        'Daily': 6, '5–6 times a week': 5, '3–4 times a week': 4,
        'Once or twice a week': 3, 'Rarely': 2, 'Never': 1,
      };
      const smokingScores: Record<string, number> = {
        'No': 3, 'Occasionally': 1, 'Regularly': 0,
      };
      const dietScores: Record<string, number> = {
        'Very healthy — whole foods minimal processed food': 4,
        'Fairly healthy — mostly balanced with occasional indulgences': 3,
        'Average — no specific diet eat whatever': 2,
        'Unhealthy — fast food high sugar processed food': 1,
      };
      const healthPts = (healthScores[formData.overallHealth] || 0)
        + (workoutScores[formData.workoutFrequency] || 0)
        + (formData.hasHealthIssues === 'No' ? 2 : 0)
        + (smokingScores[formData.smoking] || 0)
        + (dietScores[formData.diet] || 0);
      // Max 20 pts → S/A/B/C/D tier
      const healthTier = healthPts >= 18 ? 'S-Tier (Elite)'
        : healthPts >= 14 ? 'A-Tier (Above Average)'
        : healthPts >= 10 ? 'B-Tier (Average)'
        : healthPts >= 6 ? 'C-Tier (Below Average)'
        : 'D-Tier (Needs Work)';

      // Submit to Forminit using JSON approach for structured data
      const { data, redirectUrl, error: forminitError } = await formInitRef.current.submit('8ypso5cf6ae', {
        blocks: [
          {
            type: 'sender',
            properties: {
              email: sanitizeInput(formData.email),
              fullName: sanitizeInput(formData.fullName),
            },
          },
          { type: 'text', name: 'dateOfBirth', value: dobString },
          { type: 'number', name: 'age', value: age },
          { type: 'text', name: 'instagram', value: sanitizeInput(`@${formData.instagram}`) },
          { type: 'text', name: 'tiktok', value: formData.tiktok ? sanitizeInput(`@${formData.tiktok}`) : '' },
          { type: 'text', name: 'userLocation', value: sanitizeInput(formData.location) },
          { type: 'text', name: 'schoolWork', value: sanitizeInput(formData.schoolWork) },
          { type: 'text', name: 'representCountry', value: sanitizeInput(formData.country) },
          { type: 'text', name: 'ancestry', value: sanitizeInput(formData.ancestry) },
          { type: 'text', name: 'consents', value: ['idAgree', 'accessAgree', 'c1', 'c2', 'c3', 'accuracyAgree'].filter(key => formData[key as keyof typeof formData]).join(', ') },
          { type: 'text', name: 'signature', value: sanitizeInput(formData.signature) },
          { type: 'number', name: 'healthScore', value: healthPts },
          { type: 'text', name: 'healthTier', value: healthTier },
          { type: 'select', name: 'overallHealth', value: formData.overallHealth },
          { type: 'select', name: 'workoutFrequency', value: formData.workoutFrequency },
          { type: 'text', name: 'workoutRoutine', value: sanitizeInput(formData.workoutRoutine) },
          { type: 'select', name: 'hasHealthIssues', value: formData.hasHealthIssues },
          { type: 'text', name: 'healthIssuesDetails', value: sanitizeInput(formData.healthIssuesDetails) },
          { type: 'select', name: 'smoking', value: formData.smoking },
          { type: 'select', name: 'diet', value: formData.diet },
          { type: 'text', name: 'bio', value: sanitizeInput(formData.bio) },
          { type: 'text', name: 'competitions', value: sanitizeInput(formData.competitions) },
          { type: 'select', name: 'filmingComfort', value: formData.filmingComfort },
          { type: 'text', name: 'filmingOther', value: sanitizeInput(formData.filmingOther) },
          { type: 'select', name: 'irlAvailability', value: formData.irlAvailability },
          { type: 'text', name: 'motivations', value: formData.motivations.join(', ') },
          { type: 'select', name: 'participantAgreement', value: formData.participantAgreement ? 'agreed' : 'not agreed' },
          { type: 'text', name: 'sessionToken', value: sessionToken },
          { type: 'text', name: 'minorApplicant', value: 'No' },
          { type: 'text', name: 'ipAddress', value: ipData.ip || '' },
          { type: 'text', name: 'ipCity', value: ipData.city || '' },
          { type: 'text', name: 'ipRegion', value: ipData.region || '' },
          { type: 'text', name: 'ipCountry', value: ipData.country_name || '' },
          { type: 'text', name: 'ipOrg', value: ipData.org || '' },
          { type: 'text', name: 'ipGeo', value: `${ipData.city || ''}, ${ipData.region || ''}, ${ipData.country_name || ''}` },
        ],
      });

      if (forminitError) {
        alert(`Submission failed: ${forminitError.message || 'Unknown error'}. Please try again.`);
        setIsSubmitting(false);
        return;
      }

      if (!data?.hashId) {
        alert('Submission may have failed — no confirmation received. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Record email in Supabase as backup (server may have already done this)
      try {
        await fetch('/api/check-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email.trim().toLowerCase(), action: 'record' }),
          signal: AbortSignal.timeout(5000),
        });
      } catch {
        // Non-critical — server-side already attempted this
      }

      setLastSubmitTime(now);
      try { localStorage.removeItem(STORAGE_KEY); } catch { /* non-critical */ }
      setFormData(EMPTY_FORM_DATA);
      setCurrentStep(1);
      setCompletedSteps([]);
      setSubmitted(true);
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Keep refs to latest handlers so the keyboard listener never uses stale closures
  const handleNextRef = useRef(handleNext);
  handleNextRef.current = handleNext;
  const handleSubmitRef = useRef(handleSubmit);
  handleSubmitRef.current = handleSubmit;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (currentStep < 4) {
          handleNextRef.current();
        } else {
          handleSubmitRef.current();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#050505] text-white py-10 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center justify-between mb-10">
              <div className="h-4 w-12 bg-white/[0.04] rounded-md animate-pulse" />
              <div className="h-4 w-32 bg-white/[0.04] rounded-md animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="h-10 w-3/4 bg-white/[0.04] rounded-lg animate-pulse" />
              <div className="h-10 w-1/2 bg-white/[0.04] rounded-lg animate-pulse" />
            </div>
            <div className="h-4 w-48 bg-white/[0.04] rounded-md animate-pulse mt-5" />
          </div>
          <div className="flex gap-2 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-1.5 flex-1 bg-white/[0.04] rounded-full animate-pulse" />
            ))}
          </div>
          <div className="space-y-7">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <div className="h-4 w-24 bg-white/[0.04] rounded-md animate-pulse mb-3" />
                <div className="h-[52px] w-full bg-white/[0.04] rounded-xl animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Locked screen
  if (isPastDeadline()) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white px-6 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF361D]/[0.03] rounded-full blur-[150px]" />
        <div className="text-center max-w-lg relative z-10">
          <div className="text-6xl mb-8">🔒</div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Applications Closed
          </h1>
          <p className="text-[#888] text-lg mb-8">
            The application deadline for the SR World Cup 2026 was March 15, 2026. Submissions are no longer being accepted.
          </p>
          <a href="/worldcup" className="inline-block px-6 py-3 bg-white/[0.04] border border-white/[0.06] rounded-xl text-[#FF361D] hover:bg-white/[0.07] transition-all duration-200 text-lg font-medium">
            Return to World Cup Info →
          </a>
        </div>
      </div>
    );
  }

  // Success screen
  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white px-6 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF361D]/[0.04] rounded-full blur-[150px]" />
        <div className="text-center max-w-lg relative z-10">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#FF361D] to-[#ff6b3d] flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(255, 54, 29, 0.3)' }}>
            <span className="text-3xl text-white">✓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Application Received
          </h1>
          <p className="text-[#888] text-lg">
            Thank you for applying to the SR World Cup 2026. We will be in touch.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white py-10 md:py-16 px-6 relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap" rel="stylesheet" />
      {/* Dev toolbar */}
      {isDev && (
        <div className="fixed bottom-4 left-4 z-50 flex gap-2">
          <button
            onClick={fillTestData}
            className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-mono rounded-lg hover:bg-emerald-500 active:scale-95 transition-all shadow-lg"
          >
            Fill Form
          </button>
          <button
            onClick={clearTestData}
            className="px-3 py-1.5 bg-zinc-700 text-white text-xs font-mono rounded-lg hover:bg-zinc-600 active:scale-95 transition-all shadow-lg"
          >
            Clear
          </button>
        </div>
      )}
      {/* Subtle ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[800px] h-[600px] bg-[#FF361D]/[0.02] rounded-full blur-[200px]" />
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14 animate-fade-in">
          <div className="flex items-center justify-between mb-10">
            <a href="/worldcup" className="text-[#666] hover:text-[#999] transition-colors duration-200 text-sm">
              ← Back
            </a>
            {timeRemaining && (
              <div className="flex items-center gap-1.5 text-sm tabular-nums">
                <span className="text-[#666]">Closes in</span>
                <span className="text-[#FF361D] font-medium">
                  {timeRemaining.days}d {String(timeRemaining.hours).padStart(2, '0')}h {String(timeRemaining.minutes).padStart(2, '0')}m
                </span>
              </div>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
            SR World Cup 2026
          </h1>
          <p key={currentStep} className="text-[#999] text-sm mt-3 step-indicator">Step {currentStep} of 4 — {SECTION_NAMES[currentStep - 1]}</p>

          {currentStep === 1 && (
            <div className="mt-8 space-y-4 text-[#999] text-[15px] leading-relaxed step-description">
              <p>In late 2026, Sperm Racing will host its first World Cup, featuring athletes from <span className="text-white">128 countries</span> competing for a <span className="text-white">$100,000 prize pool</span>. This form is your entry into the <span className="text-white">Qualifiers Stage</span>. During Qualifiers, each country will be represented by one (1) athlete.</p>
              <p>As a result, population-dense countries such as the United States will be significantly more competitive than smaller or less-represented nations. To maximize your chances of qualifying, we encourage applicants to consider representing a lesser-known country, provided they meet eligibility requirements.</p>
              <p>Selected athletes will advance to the main tournament and represent their country throughout the 2026 season. Visit <a href="/worldcup" className="text-white underline underline-offset-2 hover:text-[#FF361D] transition-colors">spermracing.com/worldcup</a> for eligibility criteria.</p>
            </div>
          )}

          {currentStep === 3 && (
            <div className="mt-8 space-y-4 text-[#999] text-[15px] leading-relaxed step-description">
              <p>Beyond raw competition, Sperm Racing is also about <span className="text-white">characters, rivalries, and stories</span> people want to follow.</p>
              <p>This section is your chance to explain <span className="text-white">why we should choose you</span> to represent your country.</p>
              <p>We are looking for distinctive, memorable backstories. Lean into what makes you different. This can include your upbringing, culture, career, personal struggles, confidence, humor, ego, or worldview. There is no "correct" answer. The goal is to give fans something to <span className="text-white">latch onto and root for</span> — or against.</p>
            </div>
          )}
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((step) => {
              const isCompleted = completedSteps.includes(step);
              const isClickable = step === 1 || completedSteps.includes(step - 1) || completedSteps.includes(step);
              return (
                <button
                  key={step}
                  onClick={() => handleStepClick(step)}
                  disabled={!isClickable}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ease-out ${
                    isClickable && step !== currentStep ? 'cursor-pointer hover:opacity-80' : ''
                  } ${!isClickable ? 'cursor-not-allowed' : ''}`}
                  style={{
                    background: currentStep === step
                      ? 'linear-gradient(90deg, #FF361D, #ff6b3d)'
                      : isCompleted
                      ? '#FF361D'
                      : 'rgba(255, 255, 255, 0.06)',
                    boxShadow: currentStep === step ? '0 0 12px rgba(255, 54, 29, 0.4)' : 'none'
                  }}
                  title={SECTION_NAMES[step - 1]}
                />
              );
            })}
          </div>
        </div>

        {/* Honeypot */}
        <input
          type="text"
          name="hp_field"
          value={formData.hp_field}
          onChange={(e) => setFormData({ ...formData, hp_field: e.target.value })}
          style={{ position: 'absolute', left: '-9999px' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Form Content */}
        <div className="mb-12">
          <div
            key={currentStep}
            className={`step-content step-${slideDirection}`}
          >
            {currentStep === 1 && <Section1 formData={formData} setFormData={setFormData} />}
            {currentStep === 2 && <Section2 formData={formData} setFormData={setFormData} />}
            {currentStep === 3 && <Section3 formData={formData} setFormData={setFormData} />}
            {currentStep === 4 && <Section4 formData={formData} setFormData={setFormData} />}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="group px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-[#999] hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] active:scale-95"
            >
              ← Back
            </button>
          )}
          
          <div className="flex-1" />
          
          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="group px-6 py-3 text-white rounded-xl text-sm font-medium transition-all duration-200 active:scale-95"
              style={{ background: '#FF361D' }}
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="group px-6 py-3 text-white rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              style={{ background: '#FF361D' }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Application</span>
              )}
            </button>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-[#555] text-xs">
            <kbd className="px-1.5 py-0.5 bg-white/[0.03] border border-white/[0.05] rounded text-[#666] font-mono text-[10px]">⌘</kbd> + <kbd className="px-1.5 py-0.5 bg-white/[0.03] border border-white/[0.05] rounded text-[#666] font-mono text-[10px]">↵</kbd>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        @keyframes slide-forward {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-back {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-only {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .step-forward {
          animation: slide-forward 0.35s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .step-back {
          animation: slide-back 0.35s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .step-description {
          animation: fade-up 0.4s cubic-bezier(0.25, 1, 0.5, 1) 0.05s both;
        }
        .step-indicator {
          animation: fade-only 0.25s ease-out;
        }

        @media (max-width: 640px) {
          @keyframes slide-forward {
            from { opacity: 0; transform: translateX(16px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slide-back {
            from { opacity: 0; transform: translateX(-16px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .step-forward, .step-back {
            animation-duration: 0.3s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .step-forward,
          .step-back,
          .step-description,
          .step-indicator {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

// Custom searchable select for country
function CountrySelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = search
    ? COUNTRIES.filter(c => c.toLowerCase().includes(search.toLowerCase()))
    : COUNTRIES;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between rounded-xl border transition-all duration-200 outline-none"
        style={{
          padding: '14px 18px',
          fontSize: '16px',
          background: open ? 'rgba(255, 54, 29, 0.03)' : 'rgba(255, 255, 255, 0.02)',
          borderColor: open ? '#FF361D' : 'rgba(255, 255, 255, 0.06)',
          boxShadow: open ? '0 0 0 3px rgba(255, 54, 29, 0.08), 0 0 30px rgba(255, 54, 29, 0.1)' : 'none',
        }}
      >
        <span className={value ? 'text-white' : 'text-[#666]'}>
          {value || 'Select country'}
        </span>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-180' : ''}`}>
          <path d="M1 1.5L6 6.5L11 1.5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-white/[0.08] bg-[#111] shadow-2xl overflow-hidden">
          <div className="p-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-3 bg-white/[0.04] border border-white/[0.06] rounded-lg text-white text-base outline-none placeholder-[#666] focus:border-[#FF361D]/50"
              placeholder="Search..."
              autoFocus
            />
          </div>
          <div className="max-h-60 overflow-y-auto overscroll-contain">
            {filtered.length === 0 ? (
              <div className="px-4 py-3 text-sm text-[#666]">No results</div>
            ) : filtered.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => { onChange(c); setOpen(false); setSearch(''); }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors duration-100 active:bg-white/[0.06] ${
                  c === value
                    ? 'text-[#FF361D] bg-[#FF361D]/[0.06]'
                    : 'text-[#999] hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Section Components with consistent UI
function Section1({ formData, setFormData }: any) {
  return (
    <div className="space-y-7">
      <div className="form-group">
        <label className="block text-sm font-medium mb-2.5 text-[#999]">
          Full Name *
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="luxury-input"
          placeholder="John Doe"
          autoComplete="name"
          autoFocus
          required
        />
      </div>

      <div className="form-group">
        <label className="block text-sm font-medium mb-2.5 text-[#999]">
          Date of Birth *
        </label>
        <div className="flex items-center gap-3">
          <div className="grid grid-cols-3 gap-3 flex-1">
            <select
              value={formData.dobMonth}
              onChange={(e) => setFormData({ ...formData, dobMonth: e.target.value })}
              className="luxury-input luxury-select"
              autoComplete="bday-month"
            >
              <option value="" disabled>Month</option>
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m, i) => (
                <option key={m} value={String(i + 1)}>{m}</option>
              ))}
            </select>
            <input
              type="text"
              inputMode="numeric"
              value={formData.dobDay}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, '').slice(0, 2);
                if (v && parseInt(v) > 31) return;
                setFormData({ ...formData, dobDay: v });
              }}
              className="luxury-input text-center"
              placeholder="DD"
              maxLength={2}
              autoComplete="bday-day"
            />
            <input
              type="text"
              inputMode="numeric"
              value={formData.dobYear}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, '').slice(0, 4);
                setFormData({ ...formData, dobYear: v });
              }}
              className="luxury-input text-center"
              placeholder="YYYY"
              maxLength={4}
              autoComplete="bday-year"
            />
          </div>
          {(() => {
            const m = parseInt(formData.dobMonth);
            const d = parseInt(formData.dobDay);
            const y = parseInt(formData.dobYear);
            if (!m || !d || !y || formData.dobYear.length < 4) return null;
            const dob = new Date(y, m - 1, d);
            if (isNaN(dob.getTime())) return null;
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const md = today.getMonth() - dob.getMonth();
            if (md < 0 || (md === 0 && today.getDate() < dob.getDate())) age--;
            if (age < 0 || age > 150) return null;
            return (
              <div className="flex-shrink-0 text-center min-w-[48px]">
                <div className={`text-2xl font-bold ${age >= 18 ? 'text-white' : 'text-red-400'}`}>{age}</div>
                <div className="text-[10px] text-[#666] uppercase tracking-wider">yrs</div>
              </div>
            );
          })()}
        </div>
      </div>

      <div className="form-group">
        <label className="block text-sm font-medium mb-2.5 text-[#999]">
          Email *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value.trim() })}
          className="luxury-input"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="block text-sm font-medium mb-2.5 text-[#999]">
            Instagram *
          </label>
          <input
            type="text"
            value={formData.instagram}
            onChange={(e) => {
              let v = e.target.value.replace(/^@+/, '');
              setFormData({ ...formData, instagram: v });
            }}
            className="luxury-input"
            placeholder="username"
            autoComplete="off"
            required
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium mb-2.5 text-[#999]">
            TikTok
          </label>
          <input
            type="text"
            value={formData.tiktok}
            onChange={(e) => {
              let v = e.target.value.replace(/^@+/, '');
              setFormData({ ...formData, tiktok: v });
            }}
            className="luxury-input"
            placeholder="optional"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="block text-sm font-medium mb-2.5 text-[#999]">
            Location *
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="luxury-input"
            placeholder="City, Country"
            autoComplete="address-level2"
            required
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium mb-2.5 text-[#999]">
            School / Work
          </label>
          <input
            type="text"
            value={formData.schoolWork}
            onChange={(e) => setFormData({ ...formData, schoolWork: e.target.value })}
            className="luxury-input"
            placeholder="optional"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="block text-sm font-medium mb-2.5 text-[#999]">
          Country You'd Represent *
        </label>
        <CountrySelect
          value={formData.country}
          onChange={(v) => setFormData({ ...formData, country: v })}
        />
        <div className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5">
          <p className="text-xs text-[#999] mb-2.5">You must meet <span className="text-white">at least one</span> of the following:</p>
          <ul className="space-y-1.5 text-xs text-[#888]">
            <li className="flex gap-2"><span className="text-[#FF361D]">→</span> At least 25% ancestry (e.g. one grandparent)</li>
            <li className="flex gap-2"><span className="text-[#FF361D]">→</span> One or both parents are from that country</li>
            <li className="flex gap-2"><span className="text-[#FF361D]">→</span> You were born in that country</li>
            <li className="flex gap-2"><span className="text-[#FF361D]">→</span> Citizenship or permanent residency</li>
            <li className="flex gap-2"><span className="text-[#FF361D]">→</span> Strong cultural / familial connection that can be verified</li>
          </ul>
          <p className="text-xs text-[#666] mt-3 pt-3 border-t border-white/[0.04]">Tip: Popular countries (e.g. USA) are highly competitive. Representing a lesser-known country increases your chances.</p>
        </div>
      </div>

      <div className="form-group">
        <label className="block text-sm font-medium mb-2.5 text-[#999]">
          Ancestry / Cultural Background *
        </label>
        <textarea
          value={formData.ancestry}
          onChange={(e) => setFormData({ ...formData, ancestry: e.target.value })}
          rows={3}
          className="luxury-input resize-none"
          placeholder="Tell us about your cultural heritage..."
          required
        />
      </div>

      <style jsx>{`
        .luxury-input {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          color: white;
          font-size: 16px;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
          -webkit-appearance: none;
        }
        .luxury-input::placeholder {
          color: #666;
          transition: all 0.2s ease;
        }
        .luxury-input:hover {
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.035);
        }
        .luxury-input:focus {
          border-color: #FF361D;
          background: rgba(255, 54, 29, 0.03);
          box-shadow: 0 0 0 3px rgba(255, 54, 29, 0.08), 0 0 30px rgba(255, 54, 29, 0.1);
        }
        .luxury-input:focus::placeholder {
          color: #888;
        }
        .luxury-select {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
          cursor: pointer;
        }
        .luxury-select option {
          background: #111;
          color: white;
          padding: 8px;
        }
        .form-group {
          transition: all 0.2s ease;
        }
        @media (max-width: 640px) {
          .luxury-input {
            font-size: 16px;
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}

function Section2({ formData, setFormData }: any) {
  const CustomCheckbox = ({ checked, onChange, label }: any) => (
    <label className="flex items-start gap-4 cursor-pointer group py-3">
      <div className="relative mt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`w-6 h-6 border-2 rounded-lg transition-all duration-200 flex items-center justify-center ${
          checked 
            ? 'bg-gradient-to-br from-[#FF361D] to-[#ff6b3d] border-[#FF361D] scale-105' 
            : 'border-white/10 bg-white/[0.03] group-hover:border-white/20 group-hover:bg-white/[0.05]'
        }`} style={checked ? { boxShadow: '0 0 12px rgba(255, 54, 29, 0.3)' } : {}}>
          {checked && (
            <svg className="w-4 h-4 text-white animate-check-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-[#bbb] text-sm leading-relaxed group-hover:text-white transition-all duration-200">{label}</span>
    </label>
  );

  return (
    <div className="space-y-7">
      
      <div className="space-y-2 bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover-lift-subtle">
        <CustomCheckbox
          checked={formData.idAgree}
          onChange={(e: any) => setFormData({ ...formData, idAgree: e.target.checked })}
          label="I understand and agree to submit a valid government-issued ID for identity verification purposes"
        />

        <CustomCheckbox
          checked={formData.accessAgree}
          onChange={(e: any) => setFormData({ ...formData, accessAgree: e.target.checked })}
          label="I understand and agree to the document access terms — only designated team members will have access, strictly for verification, not shared publicly"
        />

        <CustomCheckbox
          checked={formData.c1}
          onChange={(e: any) => setFormData({ ...formData, c1: e.target.checked })}
          label="Submission of documents is voluntary"
        />

        <CustomCheckbox
          checked={formData.c2}
          onChange={(e: any) => setFormData({ ...formData, c2: e.target.checked })}
          label="I acknowledge and understand how my documents will be accessed and used"
        />

        <CustomCheckbox
          checked={formData.c3}
          onChange={(e: any) => setFormData({ ...formData, c3: e.target.checked })}
          label="I consent to limited internal review of my submitted passport or government-issued ID and photo for verification purposes only"
        />

        <CustomCheckbox
          checked={formData.accuracyAgree}
          onChange={(e: any) => setFormData({ ...formData, accuracyAgree: e.target.checked })}
          label="I affirm that all documents I submit are authentic and accurate"
        />
      </div>

      <div className="form-group">
        <label className="block text-sm font-medium mb-2.5 text-[#999]">
          Digital Signature *
        </label>
        <input
          type="text"
          value={formData.signature}
          onChange={(e) => setFormData({ ...formData, signature: e.target.value })}
          className="luxury-input text-2xl"
          style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
          placeholder="Type your full legal name"
          required
        />
        <p className="text-[#888] text-xs mt-2.5 ml-1">By typing your name, you are electronically signing this document</p>
      </div>

      <style jsx>{`
        @keyframes check-in {
          0% {
            transform: scale(0) rotate(-45deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        .animate-check-in {
          animation: check-in 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .luxury-input {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          color: white;
          font-size: 16px;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }
        .luxury-input::placeholder {
          color: #666;
          transition: all 0.2s ease;
        }
        .luxury-input:hover {
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.035);
        }
        .luxury-input:focus {
          border-color: #FF361D;
          background: rgba(255, 54, 29, 0.03);
          box-shadow: 0 0 0 3px rgba(255, 54, 29, 0.08), 0 0 30px rgba(255, 54, 29, 0.1);
        }
        .luxury-input:focus::placeholder {
          color: #888;
        }
        .form-group {
          transition: all 0.2s ease;
        }
        .hover-lift-subtle {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift-subtle:hover {
          border-color: rgba(255, 255, 255, 0.08);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.06);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #3a3a3a, #2a2a2a);
        }
      `}</style>
    </div>
  );
}

function Section3({ formData, setFormData }: any) {
  const RadioOption = ({ name, value, checked, onChange, label }: any) => (
    <label className="flex items-center gap-4 cursor-pointer group py-3 px-4 rounded-lg hover:bg-white/[0.03] transition-all duration-200">
      <div className="relative">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
          checked 
            ? 'border-[#FF361D] bg-gradient-to-br from-[#FF361D] to-[#ff6b3d]' 
            : 'border-white/10 bg-white/[0.03] group-hover:border-white/20'
        }`} style={checked ? { boxShadow: '0 0 12px rgba(255, 54, 29, 0.3)' } : {}}>
          {checked && <div className="w-2 h-2 bg-white rounded-full animate-radio-in" />}
        </div>
      </div>
      <span className="text-[#999] text-sm group-hover:text-white transition-all duration-200">{label}</span>
    </label>
  );

  return (
    <div className="space-y-7">
      
      <div>
        <label className="block text-sm font-medium mb-4 text-[#999]">
          Overall Health *
        </label>
        <div className="space-y-1 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 hover-lift-subtle">
          {['Optimized', 'Good', 'Ok', 'Not great', 'Degenerate'].map((option) => (
            <RadioOption
              key={option}
              name="overallHealth"
              value={option}
              label={option}
              checked={formData.overallHealth === option}
              onChange={(e: any) => setFormData({ ...formData, overallHealth: e.target.value })}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-4 text-[#999]">
          Workout Frequency *
        </label>
        <div className="space-y-1 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 hover-lift-subtle">
          {['Daily', '5–6 times a week', '3–4 times a week', 'Once or twice a week', 'Rarely', 'Never'].map((option) => (
            <RadioOption
              key={option}
              name="workoutFrequency"
              value={option}
              label={option}
              checked={formData.workoutFrequency === option}
              onChange={(e: any) => setFormData({ ...formData, workoutFrequency: e.target.value })}
            />
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="block text-sm font-medium mb-2.5 text-[#999]">
          Workout Routine *
        </label>
        <textarea
          value={formData.workoutRoutine}
          onChange={(e) => setFormData({ ...formData, workoutRoutine: e.target.value })}
          rows={3}
          className="luxury-input resize-none"
          placeholder="Describe your typical workout routine..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-4 text-[#999]">
          Any Health Issues? *
        </label>
        <div className="space-y-1 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 hover-lift-subtle">
          {['No', 'Yes'].map((option) => (
            <RadioOption
              key={option}
              name="hasHealthIssues"
              value={option}
              label={option}
              checked={formData.hasHealthIssues === option}
              onChange={(e: any) => setFormData({ ...formData, hasHealthIssues: e.target.value })}
            />
          ))}
        </div>
      </div>

      {formData.hasHealthIssues === 'Yes' && (
        <div className="form-group">
          <label className="block text-sm font-medium mb-2.5 text-[#999]">
            Please Describe *
          </label>
          <textarea
            value={formData.healthIssuesDetails}
            onChange={(e) => setFormData({ ...formData, healthIssuesDetails: e.target.value })}
            rows={3}
            className="luxury-input resize-none"
            placeholder="Please provide details..."
            required
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-4 text-[#999]">
          Tobacco / Smoking? *
        </label>
        <div className="space-y-1 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 hover-lift-subtle">
          {['No', 'Occasionally', 'Regularly'].map((option) => (
            <RadioOption
              key={option}
              name="smoking"
              value={option}
              label={option}
              checked={formData.smoking === option}
              onChange={(e: any) => setFormData({ ...formData, smoking: e.target.value })}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-4 text-[#999]">
          Diet *
        </label>
        <div className="space-y-1 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 hover-lift-subtle">
          {[
            'Very healthy — whole foods minimal processed food',
            'Fairly healthy — mostly balanced with occasional indulgences',
            'Average — no specific diet eat whatever',
            'Unhealthy — fast food high sugar processed food'
          ].map((option) => (
            <RadioOption
              key={option}
              name="diet"
              value={option}
              label={option}
              checked={formData.diet === option}
              onChange={(e: any) => setFormData({ ...formData, diet: e.target.value })}
            />
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="block text-sm font-medium mb-2.5 text-[#999]">
          About You (3 sentences) *
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          rows={3}
          className="luxury-input resize-none"
          placeholder="Who are you and what makes you unique..."
          required
        />
      </div>

      <div className="form-group">
        <label className="block text-sm font-medium mb-2.5 text-[#999]">
          Past Shows / Competitions
        </label>
        <textarea
          value={formData.competitions}
          onChange={(e) => setFormData({ ...formData, competitions: e.target.value })}
          rows={3}
          className="luxury-input resize-none"
          placeholder="Optional"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-4 text-[#999]">
          Comfortable Being Filmed? (PG-13 content) *
        </label>
        <div className="space-y-1 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 hover-lift-subtle">
          {['Yes', 'No', 'Other'].map((option) => (
            <RadioOption
              key={option}
              name="filmingComfort"
              value={option}
              label={option}
              checked={formData.filmingComfort === option}
              onChange={(e: any) => setFormData({ ...formData, filmingComfort: e.target.value })}
            />
          ))}
        </div>
      </div>

      {formData.filmingComfort === 'Other' && (
        <div className="form-group">
          <label className="block text-sm font-medium mb-2.5 text-[#999]">
            Please specify *
          </label>
          <input
            type="text"
            value={formData.filmingOther}
            onChange={(e) => setFormData({ ...formData, filmingOther: e.target.value })}
            className="luxury-input"
            placeholder="Please specify your concerns..."
            required
          />
        </div>
      )}

      <style jsx>{`
        @keyframes radio-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-radio-in {
          animation: radio-in 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .luxury-input {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          color: white;
          font-size: 16px;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }
        .luxury-input::placeholder {
          color: #666;
          transition: all 0.2s ease;
        }
        .luxury-input:hover {
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.035);
        }
        .luxury-input:focus {
          border-color: #FF361D;
          background: rgba(255, 54, 29, 0.03);
          box-shadow: 0 0 0 3px rgba(255, 54, 29, 0.08), 0 0 30px rgba(255, 54, 29, 0.1);
        }
        .luxury-input:focus::placeholder {
          color: #888;
        }
        .form-group {
          transition: all 0.2s ease;
        }
        .hover-lift-subtle {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift-subtle:hover {
          border-color: rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </div>
  );
}

function Section4({ formData, setFormData }: any) {
  const toggleMotivation = (motivation: string) => {
    if (formData.motivations.includes(motivation)) {
      setFormData({
        ...formData,
        motivations: formData.motivations.filter((m: string) => m !== motivation)
      });
    } else {
      setFormData({
        ...formData,
        motivations: [...formData.motivations, motivation]
      });
    }
  };

  const RadioOption = ({ name, value, checked, onChange, label }: any) => (
    <label className="flex items-center gap-4 cursor-pointer group py-3 px-4 rounded-lg hover:bg-white/[0.03] transition-all duration-200">
      <div className="relative">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
          checked 
            ? 'border-[#FF361D] bg-gradient-to-br from-[#FF361D] to-[#ff6b3d]' 
            : 'border-white/10 bg-white/[0.03] group-hover:border-white/20'
        }`} style={checked ? { boxShadow: '0 0 12px rgba(255, 54, 29, 0.3)' } : {}}>
          {checked && <div className="w-2 h-2 bg-white rounded-full animate-radio-in" />}
        </div>
      </div>
      <span className="text-[#999] text-sm group-hover:text-white transition-all duration-200">{label}</span>
    </label>
  );

  const CustomCheckbox = ({ checked, onChange, label }: any) => (
    <label className="flex items-start gap-4 cursor-pointer group py-3">
      <div className="relative mt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`w-6 h-6 border-2 rounded-lg transition-all duration-200 flex items-center justify-center ${
          checked 
            ? 'bg-gradient-to-br from-[#FF361D] to-[#ff6b3d] border-[#FF361D] scale-105' 
            : 'border-white/10 bg-white/[0.03] group-hover:border-white/20 group-hover:bg-white/[0.05]'
        }`} style={checked ? { boxShadow: '0 0 12px rgba(255, 54, 29, 0.3)' } : {}}>
          {checked && (
            <svg className="w-4 h-4 text-white animate-check-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-[#bbb] text-sm leading-relaxed group-hover:text-white transition-all duration-200">{label}</span>
    </label>
  );

  return (
    <div className="space-y-7">
      
      <div>
        <label className="block text-sm font-medium mb-4 text-[#999]">
          Can You Attend IRL Events? (expenses covered) *
        </label>
        <div className="space-y-1 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 hover-lift-subtle">
          {['Yes', 'No'].map((option) => (
            <RadioOption
              key={option}
              name="irlAvailability"
              value={option}
              label={option}
              checked={formData.irlAvailability === option}
              onChange={(e: any) => setFormData({ ...formData, irlAvailability: e.target.value })}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-4 text-[#999]">
          Why Do You Want In? (select all) *
        </label>
        <div className="space-y-2 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 hover-lift-subtle">
          {[
            'Prize money',
            'Content creation & exposure',
            'Competition & national pride',
            'Fertility awareness',
            'Love of the game'
          ].map((option) => (
            <CustomCheckbox
              key={option}
              checked={formData.motivations.includes(option)}
              onChange={() => toggleMotivation(option)}
              label={option}
            />
          ))}
        </div>
      </div>

      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover-lift-subtle">
        <CustomCheckbox
          checked={formData.participantAgreement}
          onChange={(e: any) => setFormData({ ...formData, participantAgreement: e.target.checked })}
          label="I agree to: receive and return a sample kit if selected, participate in remote interviews, and engage in ongoing content participation as a selected athlete *"
        />
      </div>

      <style jsx>{`
        @keyframes radio-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes check-in {
          0% {
            transform: scale(0) rotate(-45deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        .animate-radio-in {
          animation: radio-in 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-check-in {
          animation: check-in 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift-subtle {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift-subtle:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
