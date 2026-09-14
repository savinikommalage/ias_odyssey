import React, { useState } from 'react';
import { uploadIdProof, submitRegistration } from '../lib/supabaseClient';
import { CheckCircle2, Loader2, AlertCircle, ArrowLeft, Sparkles, ExternalLink } from 'lucide-react';

export default function Register() {
  // Form fields state matching the screenshot & Supabase backend
  const [fullName, setFullName] = useState('');
  const [sliitId, setSliitId] = useState('');
  const [email, setEmail] = useState('');
  const [yearSemester, setYearSemester] = useState('');
  const [faculty, setFaculty] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [isIeeeMember, setIsIeeeMember] = useState('no');
  const [ieeeId, setIeeeId] = useState('');
  const [foodPreference, setFoodPreference] = useState('Non-Veg');
  const [membership, setMembership] = useState('IEEE & IAS Member');

  // File upload state
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [filePreview, setFilePreview] = useState(null);

  // Status state
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setFileName(file.name);
      if (file.type.startsWith('image/')) {
        setFilePreview(URL.createObjectURL(file));
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      // 1. Upload ID Proof photo if attached
      let idProofUrl = null;
      if (selectedFile) {
        idProofUrl = await uploadIdProof(selectedFile);
      }

      // 2. Prepare payload
      const isMember = membership === 'IEEE Member' || membership === 'IEEE & IAS Member';

      const payload = {
        email,
        membership,
        id_proof_url: idProofUrl,
        full_name: fullName,
        sliit_id: sliitId,
        year_semester: yearSemester || 'Year 1 - Semester 1',
        faculty: faculty || 'Faculty of Computing',
        contact_no: contactNo,
        is_ieee_member: isMember,
        ieee_id: isMember ? ieeeId : '',
        food_preference: foodPreference,
      };

      // 3. Submit to Supabase
      const { data, error } = await submitRegistration(payload);

      if (error) {
        console.error('Registration failed:', error);
        setErrorMsg(error.message || 'Failed to submit registration. Please try again.');
      } else {
        setSubmittedData(data ? data[0] : payload);
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-transparent py-12 px-4 flex items-center justify-center">
        <div className="w-full max-w-[700px] bg-[#fff6a4] border-2 border-black p-8 sm:p-10 shadow-[8px_8px_0_#222] relative rounded-sm">
          {/* Top Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-gray-300/70 transform -rotate-1 shadow-sm border border-gray-400/30" />
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#558203]/20 text-[#558203] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#558203]">
              <CheckCircle2 size={40} />
            </div>

            <h2 className="font-hand font-extrabold text-3xl sm:text-4xl text-ink">
              Welcome to Odyssey!
            </h2>
            <p className="font-heading font-black text-4xl sm:text-5xl text-[#558203] tracking-wider uppercase mt-1">
              YOU'RE REGISTERED!
            </p>

            <div className="mt-6 bg-[#fff8b9] p-6 border-2 border-dashed border-ink text-left font-hand text-xl text-ink space-y-2">
              <p><strong>Email:</strong> {submittedData?.email || email}</p>
              {fullName && <p><strong>Name:</strong> {fullName}</p>}
              {sliitId && <p><strong>SLIIT ID:</strong> {sliitId}</p>}
              <p><strong>Membership Type:</strong> {submittedData?.membership || membership}</p>
              {(submittedData?.ieee_id || ieeeId) && (
                <p><strong>IEEE Membership ID:</strong> {submittedData?.ieee_id || ieeeId}</p>
              )}
              {submittedData?.id_proof_url && (
                <p className="text-base text-[#558203] font-bold">✓ Photo ID Verified &amp; Uploaded to Supabase</p>
              )}
            </div>

            {/* Special IAS Membership Upgrade Banner for IEEE Member choice */}
            {membership === 'IEEE Member' && (
              <div className="mt-6 bg-[#00629a]/10 border-2 border-[#00629a] p-5 sm:p-6 rounded-md text-left font-hand text-ink shadow-[4px_4px_0_#00629a] relative">
                <div className="flex items-center gap-2 text-[#00629a] font-heading font-black text-xl sm:text-2xl uppercase tracking-wide">
                  <Sparkles size={24} className="text-[#00629a] shrink-0" />
                  <span>Get IEEE IAS Membership (Only $0.50 USD!)</span>
                </div>
                
                <p className="mt-3 font-hand text-base sm:text-lg text-ink font-medium leading-relaxed">
                  Welcome to the IEEE SLIIT community! You are currently registered as an IEEE member. Upgrade to <strong>IEEE IAS Society</strong> for just <strong>$0.50 USD</strong> to unlock these exclusive perks:
                </p>

                <div className="mt-4 bg-white/90 p-4 border border-[#00629a]/40 rounded space-y-2.5 text-sm sm:text-base font-hand text-ink">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#00629a] font-bold text-lg leading-none mt-0.5">🏢</span>
                    <span><strong>Default Selection for Industry Visits:</strong> Guaranteed priority selection for exclusive company visits to tech leaders like <strong>WSO2</strong>, <strong>IFS</strong>, and <strong>Zone 24x7</strong>! (Non-members are strictly first-come, first-served).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#00629a] font-bold text-lg leading-none mt-0.5">⚡</span>
                    <span><strong>Advance Selection Priority:</strong> Selection priority and advance notifications for upcoming workshops, hackathons, and technical tracks organized by IEEE SB &amp; IEEE IAS SLIIT.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#00629a] font-bold text-lg leading-none mt-0.5">💙</span>
                    <span><strong>Membership Holders Group:</strong> Direct access to the official IEEE SLIIT membership holders community &amp; career initiatives.</span>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <a
                    href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMIA034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#00629a] text-white font-heading font-black text-base sm:text-lg px-6 py-2.5 border-2 border-black shadow-[3px_3px_0_#000] hover:bg-[#004d7a] active:translate-x-[1px] active:translate-y-[1px] transition-all uppercase tracking-wider"
                  >
                    Get IAS Membership ($0.50 USD) <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setSubmitted(false);
                setEmail('');
                setFullName('');
                setSliitId('');
                setSelectedFile(null);
                setFileName('');
                setFilePreview(null);
              }}
              className="mt-8 inline-flex items-center gap-2 bg-[#558203] text-white font-heading font-black text-lg px-8 py-3 border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[#466c02] transition-colors uppercase tracking-wider"
            >
              <ArrowLeft size={20} /> Submit Another Entry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent py-8 px-4 sm:px-6 flex items-center justify-center font-hand">
      {/* Journal Outer Container */}
      <div className="w-full max-w-[700px] bg-[#fff6a4] border-2 border-black p-6 sm:p-10 shadow-[8px_8px_0_#222] relative rounded-sm">
        
        {/* Top Status Pill Bar */}
        <div className="mb-6 flex justify-start">
          <div className="w-full border-2 border-black bg-white/80 rounded-full py-1.5 px-4 sm:px-6 font-hand text-base sm:text-lg text-ink flex items-center gap-2 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#558203] inline-block animate-pulse" />
            <span className="italic font-medium">Odyssey Access</span>
          </div>
        </div>

        {/* Top Header Section with Polaroid Artwork */}
        <div className="relative flex justify-between items-start mb-8">
          <div>
            <h2 className="font-hand font-bold text-2xl sm:text-3xl text-ink tracking-tight">
              Welcome to Odyssey!
            </h2>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-[#558203] tracking-tight uppercase mt-1">
              SIGN IN
            </h1>
          </div>

          {/* Polaroid Frame Artwork (Top Right) */}
          <div className="hidden sm:block absolute -top-2 right-0 w-[170px] bg-white p-2.5 pb-6 border border-gray-300 shadow-md transform rotate-2">
            {/* Top Tape Pieces */}
            <div className="absolute -top-3 left-2 w-8 h-5 bg-gray-300/70 transform -rotate-12 shadow-sm" />
            <div className="absolute -top-3 right-2 w-8 h-5 bg-gray-300/70 transform rotate-12 shadow-sm" />
            
            {/* Polaroid Artwork */}
            {filePreview ? (
              <img
                src={filePreview}
                alt="Uploaded Photo ID"
                className="w-full h-[130px] object-cover rounded-sm border border-gray-200"
              />
            ) : (
              <img
                src="/assets/new_characters/df0001c7-edca-441a-a75f-bebcde76252c.gif"
                alt="Odyssey Character"
                className="w-full h-[130px] object-contain rounded-sm"
              />
            )}
            <p className="font-hand text-center text-xs text-ink/80 mt-2 italic">
              {fileName ? 'Photo ID attached' : 'Odyssey Explorer'}
            </p>
          </div>
        </div>

        {errorMsg && (
          <div className="mb-6 bg-red-100 border-2 border-red-500 text-red-800 px-4 py-2 rounded-md font-hand text-base flex items-center gap-2">
            <AlertCircle size={18} className="shrink-0 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Main Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* FIRST AND LAST NAME */}
          <div>
            <label className="block font-hand font-extrabold text-sm sm:text-base text-ink uppercase tracking-wider mb-1">
              FIRST AND LAST NAME
            </label>
            <input
              type="text"
              required
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-transparent border-b-2 border-ink py-1 px-1 font-hand text-lg text-ink italic placeholder:text-ink/40 placeholder:not-italic focus:outline-none focus:border-[#558203] transition-colors"
            />
          </div>

          {/* SLIIT ID & EMAIL Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-hand font-extrabold text-sm sm:text-base text-ink uppercase tracking-wider mb-1">
                SLIIT ID
              </label>
              <input
                type="text"
                required
                placeholder="SLIIT/XXXX/XXXX"
                value={sliitId}
                onChange={(e) => setSliitId(e.target.value)}
                className="w-full bg-transparent border-b-2 border-ink py-1 px-1 font-hand text-lg text-ink italic placeholder:text-ink/40 placeholder:not-italic focus:outline-none focus:border-[#558203] transition-colors"
              />
            </div>

            <div>
              <label className="block font-hand font-extrabold text-sm sm:text-base text-ink uppercase tracking-wider mb-1">
                EMAIL
              </label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b-2 border-ink py-1 px-1 font-hand text-lg text-ink italic placeholder:text-ink/40 placeholder:not-italic focus:outline-none focus:border-[#558203] transition-colors"
              />
            </div>
          </div>

          {/* YEAR + SEMESTER OF STUDY (Dropdown) */}
          <div>
            <label className="block font-hand font-extrabold text-sm sm:text-base text-ink uppercase tracking-wider mb-1">
              YEAR + SEMESTER OF STUDY
            </label>
            <select
              required
              value={yearSemester}
              onChange={(e) => setYearSemester(e.target.value)}
              className="w-full bg-transparent border-b-2 border-ink py-1.5 px-1 font-hand text-lg text-ink italic focus:outline-none focus:border-[#558203] transition-colors cursor-pointer"
            >
              <option value="" disabled className="font-sans not-italic text-gray-500">
                Select Year &amp; Semester...
              </option>
              <option value="Year 1 - Semester 1" className="font-sans not-italic text-black">Year 1 - Semester 1</option>
              <option value="Year 1 - Semester 2" className="font-sans not-italic text-black">Year 1 - Semester 2</option>
              <option value="Year 2 - Semester 1" className="font-sans not-italic text-black">Year 2 - Semester 1</option>
              <option value="Year 2 - Semester 2" className="font-sans not-italic text-black">Year 2 - Semester 2</option>
              <option value="Year 3 - Semester 1" className="font-sans not-italic text-black">Year 3 - Semester 1</option>
              <option value="Year 3 - Semester 2" className="font-sans not-italic text-black">Year 3 - Semester 2</option>
              <option value="Year 4 - Semester 1" className="font-sans not-italic text-black">Year 4 - Semester 1</option>
              <option value="Year 4 - Semester 2" className="font-sans not-italic text-black">Year 4 - Semester 2</option>
            </select>
          </div>

          {/* FACULTY (Dropdown) */}
          <div>
            <label className="block font-hand font-extrabold text-sm sm:text-base text-ink uppercase tracking-wider mb-1">
              FACULTY
            </label>
            <select
              required
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              className="w-full bg-transparent border-b-2 border-ink py-1.5 px-1 font-hand text-lg text-ink italic focus:outline-none focus:border-[#558203] transition-colors cursor-pointer"
            >
              <option value="" disabled className="font-sans not-italic text-gray-500">
                Select Faculty...
              </option>
              <option value="Faculty of Computing" className="font-sans not-italic text-black">Faculty of Computing</option>
              <option value="Faculty of Engineering" className="font-sans not-italic text-black">Faculty of Engineering</option>
              <option value="SLIIT Business School" className="font-sans not-italic text-black">SLIIT Business School</option>
              <option value="Faculty of Humanities & Sciences" className="font-sans not-italic text-black">Faculty of Humanities &amp; Sciences</option>
              <option value="School of Architecture" className="font-sans not-italic text-black">School of Architecture</option>
            </select>
          </div>

          {/* CONTACT NO (WHATSAPP) */}
          <div>
            <label className="block font-hand font-extrabold text-sm sm:text-base text-ink uppercase tracking-wider mb-1">
              CONTACT NO(WHATSAPP)
            </label>
            <input
              type="tel"
              required
              placeholder="07X XXX XXXX"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              className="w-full bg-transparent border-b-2 border-ink py-1 px-1 font-hand text-lg text-ink italic placeholder:text-ink/40 placeholder:not-italic focus:outline-none focus:border-[#558203] transition-colors"
            />
          </div>

          {/* MEMBERSHIP TYPE */}
          <div>
            <label className="block font-hand font-extrabold text-sm sm:text-base text-ink uppercase tracking-wider mb-2">
              MEMBERSHIP TYPE
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-hand text-lg text-ink italic">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="membership-type"
                  value="IEEE Member"
                  checked={membership === 'IEEE Member'}
                  onChange={() => setMembership('IEEE Member')}
                  className="w-4 h-4 accent-[#558203]"
                />
                <span>IEEE Member</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="membership-type"
                  value="IEEE & IAS Member"
                  checked={membership === 'IEEE & IAS Member'}
                  onChange={() => setMembership('IEEE & IAS Member')}
                  className="w-4 h-4 accent-[#558203]"
                />
                <span>IEEE &amp; IAS Member</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="membership-type"
                  value="Non-IEEE Member"
                  checked={membership === 'Non-IEEE Member'}
                  onChange={() => setMembership('Non-IEEE Member')}
                  className="w-4 h-4 accent-[#558203]"
                />
                <span>Non-IEEE Member</span>
              </label>
            </div>
          </div>

          {/* IEEE MEMBERSHIP ID (IF APPLICABLE) */}
          {(membership === 'IEEE Member' || membership === 'IEEE & IAS Member') && (
            <div>
              <label className="block font-hand font-extrabold text-sm sm:text-base text-ink uppercase tracking-wider mb-1">
                IEEE MEMBERSHIP ID
              </label>
              <input
                type="text"
                placeholder="Enter your IEEE Membership ID"
                value={ieeeId}
                onChange={(e) => setIeeeId(e.target.value)}
                className="w-full bg-transparent border-b-2 border-ink py-1 px-1 font-hand text-lg text-ink italic placeholder:text-ink/40 placeholder:not-italic focus:outline-none focus:border-[#558203] transition-colors"
              />
            </div>
          )}

          {/* FOOD PREFERENCES */}
          <div>
            <label className="block font-hand font-extrabold text-sm sm:text-base text-ink uppercase tracking-wider mb-2">
              FOOD PREFERENCES
            </label>
            <div className="flex items-center gap-6 font-hand text-lg text-ink italic">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="food-pref"
                  value="Veg"
                  checked={foodPreference === 'Veg'}
                  onChange={() => setFoodPreference('Veg')}
                  className="w-4 h-4 accent-[#558203]"
                />
                <span>Veg</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="food-pref"
                  value="Non-Veg"
                  checked={foodPreference === 'Non-Veg'}
                  onChange={() => setFoodPreference('Non-Veg')}
                  className="w-4 h-4 accent-[#558203]"
                />
                <span>Non-Veg</span>
              </label>
            </div>
          </div>

          {/* SUBMIT BUTTON: ENTER ODYSSEY */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#558203] text-white font-heading font-black text-xl py-3 px-6 border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[#466c02] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-wider flex items-center justify-center gap-3 disabled:opacity-75"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={24} /> ENTERING...
                </>
              ) : (
                'ENTER ODYSSEY'
              )}
            </button>
          </div>

          {/* Bottom Footer Links */}
          <div className="flex items-center justify-between pt-2 text-sm sm:text-base font-hand text-ink/80 italic">
            <a href="#" className="underline hover:text-ink">
              Forgot password?
            </a>
            <a href="#" className="underline hover:text-ink">
              Need an invite code?
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}


