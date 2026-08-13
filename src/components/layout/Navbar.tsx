import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CollaborateButton from "../ui/CollaborateButton";
import logo from "../../assets/logos1.png";
import { serviceList } from "@/data/serviceDetails";
import { packageOrder } from "@/data/packages";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "SERVICES", to: "/services" },
  { label: "PROGRAMS", to: "/packages" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT", to: "/contact-us" },
];

const BrandLogo = () => (
  <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="Kodefiz home">
    <img src={logo} alt="Kodefiz" className="w-auto h-10" />
  </Link>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const serviceMenuItems = serviceList.map((service) => ({
    label: service.title,
    to: `/services/${service.slug}`,
  }));

  const programMenuItems = packageOrder.map((pkg) => ({
    label: pkg.label,
    to: `/packages/${pkg.slug}`,
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setProgramsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerClass = isHome
    ? scrolled
      ? "nav-atraen nav-atraen-scrolled"
      : "nav-atraen"
    : "nav-atraen nav-atraen-solid";

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname === to || location.pathname.startsWith(`${to}/`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] font-atraen transition-[background-color,box-shadow] duration-300 ${headerClass}`}
      >
        <div className="relative  flex h-full w-full items-center justify-between px-5 sm:px-8 lg:px-12">
          <BrandLogo />

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex items-center"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                const isServicesLink = link.label === "SERVICES";
                const isProgramsLink = link.label === "PROGRAMS";

                return (
                  <li
                    key={link.to}
                    className="relative"
                    onMouseEnter={() => {
                      if (isServicesLink) setServicesOpen(true);
                      if (isProgramsLink) setProgramsOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (isServicesLink) setServicesOpen(false);
                      if (isProgramsLink) setProgramsOpen(false);
                    }}
                  >
                    {isServicesLink ? (
                      <div className="relative">
                        <Link
                          to={link.to}
                          onClick={() => setServicesOpen(true)}
                          className={`nav-atraen-link flex items-center gap-1 py-2 uppercase ${active ? "nav-atraen-link-active" : ""}`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                        </Link>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-[#E4E7EB] bg-white p-3 shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
                            >
                              <ul className="space-y-1">
                                {serviceMenuItems.map((item) => (
                                  <li key={item.to}>
                                    <Link
                                      to={item.to}
                                      onClick={() => setServicesOpen(false)}
                                      className="block rounded-lg px-3 py-2 text-sm text-[#132F48] transition-colors hover:bg-[#F7F8FA] hover:text-[#F76F01]"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : isProgramsLink ? (
                      <div className="relative">
                        <Link
                          to={link.to}
                          onClick={() => setProgramsOpen(true)}
                          className={`nav-atraen-link flex items-center gap-1 py-2 uppercase ${active ? "nav-atraen-link-active" : ""}`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown size={14} className={`transition-transform duration-300 ${programsOpen ? "rotate-180" : ""}`} />
                        </Link>

                        <AnimatePresence>
                          {programsOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-[#E4E7EB] bg-white p-3 shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
                            >
                              <ul className="space-y-1">
                                {programMenuItems.map((item) => (
                                  <li key={item.to}>
                                    <Link
                                      to={item.to}
                                      onClick={() => setProgramsOpen(false)}
                                      className="block rounded-lg px-3 py-2 text-sm text-[#132F48] transition-colors hover:bg-[#F7F8FA] hover:text-[#F76F01]"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.to}
                        className={`nav-atraen-link block py-2 uppercase ${active ? "nav-atraen-link-active" : ""}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative z-20 hidden lg:flex items-center">
            <CollaborateButton size="sm" />
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="relative z-20 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="relative block h-[11px] w-[17px]">
              <span
                className={`absolute left-0 top-0 block h-px w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "top-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[5px] block h-px w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[10px] block h-px w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "top-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl"
          >
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="flex h-full flex-col overflow-y-auto px-8 pt-[calc(4.5rem+2rem)] pb-10 font-atraen"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.to);
                  const isServicesLink = link.label === "SERVICES";
                  const isProgramsLink = link.label === "PROGRAMS";

                  return (
                    <li key={link.to}>
                      {isServicesLink ? (
                        <div className="flex flex-col gap-2 py-2">
                          <Link
                            to={link.to}
                            onClick={() => setMobileOpen(false)}
                            className={`block text-[28px] font-semibold leading-tight tracking-tight text-white ${
                              active ? "text-[#FF6B1A]" : ""
                            }`}
                          >
                            {link.label}
                          </Link>

                          <ul className="ml-4 flex flex-col gap-2 border-l border-white/15 pl-4">
                            {serviceMenuItems.map((item) => (
                              <li key={item.to}>
                                <Link
                                  to={item.to}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-1 text-[16px] font-medium text-white/80 transition-colors hover:text-[#FF6B1A]"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : isProgramsLink ? (
                        <div className="flex flex-col gap-2 py-2">
                          <Link
                            to={link.to}
                            onClick={() => setMobileOpen(false)}
                            className={`block text-[28px] font-semibold leading-tight tracking-tight text-white ${
                              active ? "text-[#FF6B1A]" : ""
                            }`}
                          >
                            {link.label}
                          </Link>

                          <ul className="ml-4 flex flex-col gap-2 border-l border-white/15 pl-4">
                            {programMenuItems.map((item) => (
                              <li key={item.to}>
                                <Link
                                  to={item.to}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-1 text-[16px] font-medium text-white/80 transition-colors hover:text-[#FF6B1A]"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          to={link.to}
                          onClick={() => setMobileOpen(false)}
                          className={`block py-3 text-[28px] font-semibold leading-tight tracking-tight text-white ${
                            active ? "text-[#FF6B1A]" : ""
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto border-t border-white/10 pt-8">
                <CollaborateButton size="lg" />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
