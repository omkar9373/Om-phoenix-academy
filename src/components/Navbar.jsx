import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Phone } from 'lucide-react';
import logo from '../assets/om-academy logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeeDropdownOpen, setIsFeeDropdownOpen] = useState(false);
  const [isMobileFeeOpen, setIsMobileFeeOpen] = useState(false);
  const [isResultsDropdownOpen, setIsResultsDropdownOpen] = useState(false);
  const [isMobileResultsOpen, setIsMobileResultsOpen] = useState(false);
  const [isMobileJeeOpen, setIsMobileJeeOpen] = useState(false);
  const [isJeeSubmenuOpen, setIsJeeSubmenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const resultsDropdownRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsFeeDropdownOpen(false);
    setIsMobileFeeOpen(false);
    setIsResultsDropdownOpen(false);
    setIsMobileResultsOpen(false);
    setIsMobileJeeOpen(false);
    setIsJeeSubmenuOpen(false);
  };

  const feeDropdownItems = [

    { name: 'Explore Scholarships', path: '/scholarships/explorescholarships' },
    { name: 'Apply for Om Phoenix Olympiad', path: '/scholarships/om-phoenix-olympiad' },
    { name: 'M-SAT (Admission Test)', path: '/scholarships/m-sat' },

  ];

  const resultsItems = [
    { name: 'Class 5th to 10th Results', path: '/results/class-5th-10th' },
    { name: 'Class 11th & 12th Science', path: '/results/class-11th-12th' },
    {
      name: 'Entrance Exam Results',
      hasSubmenu: true,
      submenu: [
        { name: 'MHT-CET Results', path: '/results/mht-cet' },
        { name: 'NEET Results', path: '/results/neet' },
        { name: 'JEE Main & Adv', path: '/results/jee-main' },
      ],
    },
    { name: 'Olympiads', path: '/results/olympiads' },
  ];

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Scholarships', isDropdown: true, dropdownType: 'fee', items: feeDropdownItems },
    { name: 'Results', isDropdown: true, dropdownType: 'results', items: resultsItems },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Facilities', path: '/facilities' },
    // { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const isFeeActive =
    feeDropdownItems.some((item) => location.pathname === item.path) ||
    location.pathname === '/fee';

  const isResultsActive = resultsItems.some((item) =>
    item.hasSubmenu
      ? item.submenu.some((sub) => location.pathname === sub.path)
      : location.pathname === item.path
  );

  // Close dropdowns on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFeeDropdownOpen(false);
      }
      if (resultsDropdownRef.current && !resultsDropdownRef.current.contains(event.target)) {
        setIsResultsDropdownOpen(false);
        setIsJeeSubmenuOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsFeeDropdownOpen(false);
        setIsResultsDropdownOpen(false);
        setIsJeeSubmenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Close menus when route changes
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsFeeDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsJeeSubmenuOpen(false);
    setIsOpen(false);
    setIsMobileFeeOpen(false);
    setIsMobileResultsOpen(false);
    setIsMobileJeeOpen(false);
  }

  /* ─── shared link class helpers ─────────────────────────────────────── */
  const desktopLinkCls = (active, open) =>
    `inline-flex items-center gap-1 text-[14px] lg:text-[15px] font-semibold whitespace-nowrap transition-colors hover:text-primary-600 focus:outline-none cursor-pointer ${active
      ? 'text-primary-600 border-b-2 border-primary-600 pb-0.5 font-bold'
      : open
        ? 'text-primary-600'
        : 'text-gray-700'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        {/* ── Main row: fixed 76 px height ─────────────────────────── */}
        <div className="flex items-center justify-between h-[76px] gap-4">

          {/* ── LEFT: Logo + Brand name ────────────────────────────── */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="Om Phoenix Learning Academy – Home"
          >
            <img
              src={logo}
              alt="Om Phoenix Learning Academy logo"
              className="h-12 w-auto object-contain"
            />
            {/* Brand text – two stacked lines, kept compact */}
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[16px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00a8ff] via-[#0082d6] to-[#005087] tracking-tight whitespace-nowrap">
                OM PHOENIX
              </span>
              <span className="text-[10px] font-extrabold text-[#071f38] tracking-widest whitespace-nowrap uppercase mt-0.5">
                Learning Academy
              </span>
            </div>
          </Link>

          {/* ── CENTER/RIGHT: Desktop nav ──────────────────────────── */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1 ml-auto">

            {/* Nav links */}
            {links.map((link) => {
              /* ── Fee & Scholarships dropdown ── */
              if (link.isDropdown && link.dropdownType === 'fee') {
                return (
                  <div key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsFeeDropdownOpen((p) => !p)}
                      aria-expanded={isFeeDropdownOpen}
                      aria-haspopup="true"
                      className={`${desktopLinkCls(isFeeActive, isFeeDropdownOpen)} px-2.5 lg:px-3 py-2`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isFeeDropdownOpen ? 'rotate-180 text-primary-600' : 'text-gray-400'
                          }`}
                      />
                    </button>

                    {isFeeDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-[0_12px_36px_-6px_rgba(0,0,0,0.13)] border border-gray-100 py-2 z-50 animate-dropdown"
                        role="menu"
                        aria-label="Fee & Scholarships Menu"
                      >
                        {link.items.map((item, idx) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsFeeDropdownOpen(false)}
                            role="menuitem"
                            className={`block px-5 py-2.5 text-[14.5px] font-medium transition-colors ${isActive(item.path)
                              ? 'bg-primary-50 text-primary-600 font-semibold'
                              : 'text-gray-700 hover:bg-slate-50 hover:text-primary-600'
                              } ${idx !== link.items.length - 1 ? 'border-b border-gray-50' : ''}`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              /* ── Results dropdown ── */
              if (link.isDropdown && link.dropdownType === 'results') {
                return (
                  <div key={link.name} className="relative" ref={resultsDropdownRef}>
                    <button
                      type="button"
                      onClick={() => {
                        setIsResultsDropdownOpen((p) => !p);
                        setIsJeeSubmenuOpen(false);
                      }}
                      aria-expanded={isResultsDropdownOpen}
                      aria-haspopup="true"
                      className={`${desktopLinkCls(isResultsActive, isResultsDropdownOpen)} px-2.5 lg:px-3 py-2`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isResultsDropdownOpen ? 'rotate-180 text-primary-600' : 'text-gray-400'
                          }`}
                      />
                    </button>

                    {isResultsDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-[0_12px_36px_-6px_rgba(0,0,0,0.14)] border border-gray-100 py-2 z-50 animate-dropdown"
                        role="menu"
                        aria-label="Results Menu"
                      >
                        {link.items.map((item, idx) => {
                          if (item.hasSubmenu) {
                            return (
                              <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setIsJeeSubmenuOpen(true)}
                                onMouseLeave={() => setIsJeeSubmenuOpen(false)}
                              >
                                <button
                                  type="button"
                                  onClick={() => setIsJeeSubmenuOpen((p) => !p)}
                                  className={`w-full flex items-center justify-between px-5 py-2.5 text-[14.5px] font-medium transition-colors text-gray-700 hover:bg-slate-50 hover:text-primary-600 ${idx !== link.items.length - 1 ? 'border-b border-gray-50' : ''
                                    }`}
                                >
                                  <span>{item.name}</span>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-colors ${isJeeSubmenuOpen ? 'text-primary-600' : 'text-gray-400'
                                      }`}
                                  />
                                </button>

                                {isJeeSubmenuOpen && (
                                  <div
                                    className="absolute top-0 right-full mr-1 w-48 bg-white rounded-xl shadow-[0_12px_36px_-6px_rgba(0,0,0,0.14)] border border-gray-100 py-2 animate-dropdown"
                                    role="menu"
                                    aria-label="JEE Submenu"
                                  >
                                    {item.submenu.map((sub, subIdx) => (
                                      <Link
                                        key={sub.name}
                                        to={sub.path}
                                        onClick={() => {
                                          setIsResultsDropdownOpen(false);
                                          setIsJeeSubmenuOpen(false);
                                        }}
                                        role="menuitem"
                                        className={`block px-5 py-2.5 text-[14.5px] font-medium transition-colors ${isActive(sub.path)
                                          ? 'bg-primary-50 text-primary-600 font-semibold'
                                          : 'text-gray-700 hover:bg-slate-50 hover:text-primary-600'
                                          } ${subIdx !== item.submenu.length - 1 ? 'border-b border-gray-50' : ''}`}
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          }

                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => setIsResultsDropdownOpen(false)}
                              role="menuitem"
                              className={`block px-5 py-2.5 text-[14.5px] font-medium transition-colors ${isActive(item.path)
                                ? 'bg-primary-50 text-primary-600 font-semibold'
                                : 'text-gray-700 hover:bg-slate-50 hover:text-primary-600'
                                } ${idx !== link.items.length - 1 ? 'border-b border-gray-50' : ''}`}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              /* ── Regular link ── */
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${desktopLinkCls(isActive(link.path), false)} px-2.5 lg:px-3 py-2`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* ── Divider ─────────────────────────────────────────── */}
            <div className="mx-2 lg:mx-3 h-8 w-px bg-gray-200 shrink-0" aria-hidden="true" />

            {/* ── Expert contact block (xl+: full label; lg–xl: icon+number) ── */}
            <a
              href="tel:9860651233"
              aria-label="Call our experts at 9860651233"
              className="group flex items-center gap-2 shrink-0 pr-2 lg:pr-3"
            >
              {/* circular icon */}
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 group-hover:bg-primary-50 transition-colors duration-200 shrink-0">
                <Phone className="w-4 h-4 text-primary-600" strokeWidth={2.2} />
              </div>
              {/* label (xl and above only) */}
              <div className="hidden xl:flex flex-col leading-none">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                  Talk to our experts
                </span>
                <span className="text-[14px] font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-200 whitespace-nowrap tracking-wide">
                  9860651233
                </span>
              </div>
              {/* number only on lg–xl range */}
              <span className="xl:hidden text-[14px] font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-200 whitespace-nowrap">
                9860651233
              </span>
            </a>

            {/* ── Apply Now button ─────────────────────────────────── */}
            <Link
              to="/admission"
              className="btn-flame py-2 px-4 lg:px-5 text-[14px] font-bold shrink-0 whitespace-nowrap shadow-md"
            >
              Apply Now
            </Link>
          </div>

          {/* ── Mobile right side: phone icon + hamburger ─────────── */}
          <div className="md:hidden flex items-center gap-3 ml-auto">
            <a
              href="tel:9860651233"
              aria-label="Call our experts at 9860651233"
              className="flex items-center gap-1.5 group"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-primary-50 transition-colors duration-200 shrink-0">
                <Phone className="w-4 h-4 text-primary-600" strokeWidth={2.2} />
              </div>
              <span className="hidden xs:block text-sm font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-200 whitespace-nowrap">
                9860651233
              </span>
            </a>

            <button
              onClick={toggleMenu}
              className="p-1.5 text-gray-600 hover:text-primary-600 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ──────────────────────────────────────────── */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg z-40">
          <div className="max-w-[1400px] mx-auto px-4 pt-2 pb-5 space-y-1">

            {links.map((link) => {
              /* Fee accordion */
              if (link.isDropdown && link.dropdownType === 'fee') {
                return (
                  <div key={link.name}>
                    <button
                      type="button"
                      onClick={() => setIsMobileFeeOpen((p) => !p)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[16px] font-semibold transition-colors ${isFeeActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                        }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isMobileFeeOpen ? 'rotate-180 text-primary-600' : 'text-gray-400'
                          }`}
                      />
                    </button>
                    {isMobileFeeOpen && (
                      <div className="pl-4 pr-1 pt-1 pb-2 space-y-0.5 border-l-2 border-primary-100 ml-3 mt-1">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={closeMenu}
                            className={`block px-3 py-2 rounded-md text-[15px] font-medium transition-colors ${isActive(item.path)
                              ? 'bg-primary-50 text-primary-700 font-semibold'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                              }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              /* Results accordion */
              if (link.isDropdown && link.dropdownType === 'results') {
                return (
                  <div key={link.name}>
                    <button
                      type="button"
                      onClick={() => setIsMobileResultsOpen((p) => !p)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[16px] font-semibold transition-colors ${isResultsActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                        }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isMobileResultsOpen ? 'rotate-180 text-primary-600' : 'text-gray-400'
                          }`}
                      />
                    </button>
                    {isMobileResultsOpen && (
                      <div className="pl-4 pr-1 pt-1 pb-2 space-y-0.5 border-l-2 border-primary-100 ml-3 mt-1">
                        {link.items.map((item) => {
                          if (item.hasSubmenu) {
                            return (
                              <div key={item.name}>
                                <button
                                  type="button"
                                  onClick={() => setIsMobileJeeOpen((p) => !p)}
                                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-[15px] font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                >
                                  <span>{item.name}</span>
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${isMobileJeeOpen ? 'rotate-180 text-primary-600' : 'text-gray-400'
                                      }`}
                                  />
                                </button>
                                {isMobileJeeOpen && (
                                  <div className="pl-4 pr-1 pt-1 pb-1 space-y-0.5 border-l-2 border-primary-50 ml-3">
                                    {item.submenu.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        to={sub.path}
                                        onClick={closeMenu}
                                        className={`block px-3 py-2 rounded-md text-[14.5px] font-medium transition-colors ${isActive(sub.path)
                                          ? 'bg-primary-50 text-primary-700 font-semibold'
                                          : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                                          }`}
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          }
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={closeMenu}
                              className={`block px-3 py-2 rounded-md text-[15px] font-medium transition-colors ${isActive(item.path)
                                ? 'bg-primary-50 text-primary-700 font-semibold'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                                }`}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              /* Regular link */
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-2.5 rounded-lg text-[16px] font-semibold transition-colors ${isActive(link.path)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile CTA + phone */}
            <div className="pt-3 flex flex-col gap-2.5 border-t border-gray-100">
              <Link
                to="/admission"
                onClick={closeMenu}
                className="block w-full text-center btn-flame py-3 text-[16px] font-bold shadow-md"
              >
                Apply Now
              </Link>
              <a
                href="tel:9860651233"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-primary-50 hover:border-primary-200 transition-colors"
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-100">
                  <Phone className="w-3.5 h-3.5 text-primary-600" strokeWidth={2.2} />
                </div>
                <div className="leading-tight">
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest">
                    Talk to our experts
                  </p>
                  <p className="text-sm font-bold text-gray-800">9860651233</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
