"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavbarProps } from "@/@types";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const TopNavbar = ({ logo, menu, auth }: NavbarProps) => {
  return (
    <div className="hidden lg:block h-full">
      <nav className="flex justify-between items-center h-full">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href={logo.url} className="flex items-center gap-1">
            <img src={logo.src} className="max-h-8" alt={logo.alt} />
            <span className="text-2xl font-raleway text-white font-bold tracking-tighter">
              {logo.title}
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">
              {menu.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className="text-white hover:text-white/70 text-lg font-medium h-[80px] bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white/70 px-4 focus:bg-transparent focus:text-white/70 focus-visible:ring-0 focus-visible:outline-none data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white border-none shadow-lg rounded-lg overflow-hidden">
                        <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 p-6 no-underline outline-none focus:shadow-md"
                                href="/stormnorms"
                              >
                                <div className="relative flex flex-shrink-0 justify-center items-center w-[220px] mb-4">
                                  <Image
                                    src="/stormnorms.png"
                                    width={200}
                                    height={140}
                                    alt="StormNorms"
                                    className="rounded-xl object-cover aspect-video w-full"
                                  />
                                </div>
                                <div className="mb-2 text-lg font-medium text-[#2E134D]">
                                  StormNorms - D2C Incubator
                                </div>
                                <p className="text-sm leading-tight text-[#2E134D]/70">
                                  Join our contest, showcase your talent, win exciting rewards & grow your community with Capcons!
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          {item.items.filter(child => child.title !== "StormNorms - D2C Incubator").map((child) => (
                            <li key={child.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-gray-100"
                                  href={child.url}
                                >
                                  <div className="flex items-center gap-2">
                                    {child.icon}
                                    <div className="text-sm font-medium leading-none text-[#2E134D]">
                                      {child.title}
                                    </div>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-[#2E134D]/70">
                                    {child.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.url}
                      className="text-white hover:text-white/70 text-lg font-medium h-[80px] flex items-center justify-center px-4"
                    >
                      {item.title}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-4">
          <Button
            asChild
            variant="ghost"
            className="text-white hover:text-white/70 hover:bg-transparent"
          >
            <a href={auth.login.url}>{auth.login.title}</a>
          </Button>
          <Button
            asChild
            className="bg-[#C6F806] text-black hover:bg-[#C6F806]/70 rounded-full font-semibold"
          >
            <a href={auth.signup.url}>{auth.signup.title}</a>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export { TopNavbar };
