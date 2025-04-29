import React from "react"
import Image from "next/image"
import Link from "next/link"
import { footerLinks, socialLinks } from "@/config/mock/navigation"

export const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-center items-center bg-[#39089D] w-full">
      <div className="flex flex-col justify-center items-center px-4 sm:px-6 py-6 lg:py-20 w-full container">
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
          <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Start Your Journey with CapCons!
          </h1>
          <p className="text-white text-xs sm:text-sm md:text-base text-center max-w-md">
            Join now and build your communications!
          </p>

          <div className="flex  items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <Link href="#" className="w-full sm:w-auto">
              <Image
                src="/google-play.png"
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
              />
            </Link>
            <Link href="#" className="w-full sm:w-auto">
              <Image
                src="/app-store.png"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5">
        <nav className="w-full md:w-auto mb-3 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 gap-y-2 sm:gap-5 md:gap-6 lg:gap-8">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white hover:text-white/80 text-xs sm:text-sm md:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 gap-y-2 sm:gap-5 md:gap-6 lg:gap-8 mt-3 md:mt-0">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="text-white hover:text-white/80"
              aria-label={social.label}
            >
              <Image
                src={social.icon}
                alt={social.label}
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 opacity-60"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between px-4 sm:px-6 md:px-8 lg:px-12 pb-4 sm:pb-5 md:pb-6 lg:pb-8 mt-1 md:mt-0 border-t border-white/30 pt-4 sm:pt-5 md:pt-6">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto ">
          <Image
            src="/logo-frame.png"
            alt="CapCons Logo"
            width={140}
            height={40}
            className="w-[100px] sm:w-[120px] md:w-[130px] lg:w-[140px] h-auto"
          />
        </div>
        <div className="text-white text-[10px] sm:text-xs md:text-sm text-center md:text-right w-full md:w-auto mt-3 md:mt-0">
          Copyright © 2025 Cacons Analytics Private Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}