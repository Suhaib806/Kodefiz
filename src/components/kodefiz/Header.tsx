"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import KodefizLogo from "./KodefizLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + index * 0.07,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: { opacity: 0, y: 12, transition: { duration: 0.2 } },
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="group relative py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-kodefiz-black transition-colors duration-300 hover:text-kodefiz-blue dark:text-white dark:hover:text-kodefiz-blue"
  >
    {label}
    <span
      className="absolute bottom-0 left-0 h-[2px] w-0 bg-kodefiz-blue transition-all duration-300 ease-out group-hover:w-full"
      aria-hidden
    />
  </Link>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-black/[0.06] bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-xl dark:border-white/10 dark:bg-kodefiz-dark/80"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8 lg:px-12">
          <KodefizLogo className="h-6 w-auto sm:h-7" />

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="hidden rounded-none border border-black/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-kodefiz-gray transition-colors hover:border-kodefiz-blue hover:text-kodefiz-blue sm:block dark:border-white/15 dark:text-white/60"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? "Light" : "Dark"}
            </button>

            <motion.div
              whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="hidden sm:block"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center bg-kodefiz-black px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-kodefiz-blue"
                aria-label="Let's talk — contact us"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>

            <button
              type="button"
              className="relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
              <div className="relative h-4 w-6">
                <motion.span
                  className="absolute left-0 block h-[2px] w-6 origin-center bg-kodefiz-black dark:bg-white"
                  animate={mobileOpen ? { top: "50%", rotate: 45, y: "-50%" } : { top: 0, rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 block h-[2px] w-6 -translate-y-1/2 bg-kodefiz-black dark:bg-white"
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 block h-[2px] w-6 origin-center bg-kodefiz-black dark:bg-white"
                  animate={mobileOpen ? { bottom: "50%", rotate: -45, y: "50%" } : { bottom: 0, rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-[55] flex flex-col bg-white px-8 pt-28 dark:bg-kodefiz-dark lg:hidden"
            initial={{ x: prefersReducedMotion ? 0 : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: prefersReducedMotion ? 0 : "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  custom={index}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-3xl font-bold uppercase tracking-[0.12em] text-kodefiz-black dark:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-12"
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex bg-kodefiz-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
