"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Using framer-motion for animations
import Link from "next/link";

// --- Updated Navbar Component with Lines at the Bottom ---
const Navbar = ({ className }: { className?: string }) => {
  const verticalLineHeight = "h-8"; // Define height for short vertical lines (e.g., h-8, h-10, h-12)

  return (
    // Navbar container - REMOVED border-b, kept relative and overflow-hidden
    <nav
      className={`relative z-20 flex w-full items-center justify-between overflow-hidden px-4 py-4 ${className}`}>
      {/* --- ADDED: Decorative Lines at the Bottom --- */}
      {/* Bottom Horizontal Line (Replaces border-b) */}
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        {/* Gradient Overlay for Bottom Line */}
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-80 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Short Vertical Line - Left */}
      <div
        className={`absolute bottom-0 left-0 ${verticalLineHeight} w-px bg-neutral-200/80 dark:bg-neutral-800/80`}>
        {/* Gradient Overlay - Fading Upwards (to-t) */}
        <div
          className={`absolute bottom-0 h-full w-px bg-gradient-to-t from-blue-500 via-blue-500/50 to-transparent`}
        />
      </div>

      {/* Short Vertical Line - Right */}
      <div
        className={`absolute bottom-0 right-0 ${verticalLineHeight} w-px bg-neutral-200/80 dark:bg-neutral-800/80`}>
        {/* Gradient Overlay - Fading Upwards (to-t) */}
        <div
          className={`absolute bottom-0 h-full w-px bg-gradient-to-t from-blue-500 via-blue-500/50 to-transparent`}
        />
      </div>
      {/* --- END: Added Decorative Lines --- */}

      {/* Navbar Content - Need relative positioning and higher z-index to appear above lines */}
      <div className="relative z-10 flex w-full items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/logos/ZanteWork.webp" // Ensure path is correct
            alt="ZanteWork Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="text-lg hidden md:block font-bold tracking-tight text-black md:text-xl dark:text-white">
            ZanteWork
          </h1>
        </div>
        {/* Login Button - Using vibrant-blue */}
        <Link
          href="/sign-in"
          className="text-center w-auto transform rounded-lg bg-deep-orange px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-orange/80 md:px-6 md:py-2 md:text-base dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Σύνδεση
        </Link>
      </div>
    </nav>
  );
};
// --- End of Navbar Component ---

// --- Main Landing Page Component (Remains the same) ---
export default function LandingPage() {
  return (
    // Outer container fills screen
    <div className="relative flex min-h-screen  w-screen flex-col  dark:bg-black">
      <Navbar /> {/* Using the Navbar with bottom decorative lines */}
      {/* Decorative lines for the PAGE BODY (Unchanged) */}
      <div className="absolute inset-y-0 left-0  h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute inset-x-0 mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      {/* End of Page Body Decorative Lines */}
      {/* Main content wrapper */}
      <div className="relative z-10 flex flex-grow flex-col items-center justify-center overflow-hidden px-4 py-10 md:py-5">
        {/* Max width container */}
        <div className="w-full max-w-4xl">
          {/* Heading */}
          <h1 className="text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
            {"Βρες δουλειά ή εργαζόμενο σε ώρες, όχι μέρες."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block">
                  {word}
                </motion.span>
              ))}
          </h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8, ease: "easeInOut" }}
            className="mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
            Η πλατφόρμα μας φέρνει κοντά εργοδότες και επαγγελματίες στη
            Ζάκυνθο. Δημιούργησε την αγγελία σου ή ένα πλήρες προφίλ με τις
            ικανότητές σου και άσε το ZanteWork να σε βοηθήσει να βρεις το
            ιδανικό ταίριασμα, άμεσα και τοπικά.
          </motion.p>

          {/* Button Container */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.0, ease: "easeInOut" }}
            className="mt-2 flex flex-wrap items-center justify-center gap-4">
            {/* Button 1: Create Account */}
            <Link
              href="/sign-up"
              className="w-60 transform rounded-lg text-center bg-vibrant-blue px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-vibrant-blue/80 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Δημιουργία Λογαριασμού
            </Link>
            {/* Button 2: How We Work */}
            <Link
              href="/about"
              className="w-60 text-center transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Πως Λειτουργούμε
            </Link>
          </motion.div>
        </div>

        {/* Video Section Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 1.2,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto mt-10 w-full max-w-4xl rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900 md:mt-8">
          {/* Inner div for rounded corners on the video itself */}
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <video
              className="aspect-[16/9] h-auto w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata">
              <source
                src="/videos/work.mp4" // *** REPLACE with your video path ***
                type="video/mp4"
              />
              <source
                src="/videos/your-landing-video.mp4" // *** REPLACE with your video path ***
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
// --- End of Landing Page Component ---
