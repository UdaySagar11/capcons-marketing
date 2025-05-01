"use client";

import { Menu, XIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { MenuItem, NavbarProps } from "@/@types";

const SideNavbar = ({ logo, menu, auth }: NavbarProps) => {
  return (
    <div className="block lg:hidden h-full">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <Link href={logo.url} className="flex items-center gap-1">
          <img src={logo.src.desktop} className="max-h-8" alt={logo.alt} />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:text-white/70 hover:bg-transparent">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto w-full lg:hidden bg-white">
            <SheetHeader className="sticky top-0 border-b">
              <SheetTitle>
                <a href={logo.url} className="flex w-fit items-center gap-2">
                  <img
                    src={logo.src.mobile}
                    className="max-h-8 invert"
                    alt={logo.alt}
                  />
                </a>
                <SheetClose className="absolute top-4 right-4">
                  <XIcon className="size-4 text-black" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-4">
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-4"
              >
                {menu.map((item) => renderMobileMenuItem(item))}
              </Accordion>

              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  variant="ghost"
                  className="text-black hover:text-black/70 hover:bg-transparent"
                >
                  <a href={auth.login.url}>{auth.login.title}</a>
                </Button>
                <Button
                  asChild
                  className="bg-[#C6F806] text-black hover:bg-[#C6F806]/70"
                >
                  <a href={auth.signup.url}>{auth.signup.title}</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 text-md text-black font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <>
              {subItem.title === "StormNorms - D2C Incubator" ? (
                <SubMenuLinkIncubator item={subItem} />
              ) : (
                <SubMenuLink item={subItem} />
              )}
            </>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="text-md text-black font-semibold"
    >
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex flex-col items-start gap-2 lg:gap-4 rounded-md p-3 leading-none no-underline outline-none select-none hover:bg-[#F6F6F6] hover:scale-95 duration-300 transition-all ease-linear"
      href={item.url}
    >
      <div className="flex gap-2 lg:gap-3">
        <div className="text-foreground">{item.icon}</div>
        <div className=" lg:text-lg font-bold text-sm text-[#2E134D]">
          {item.title}
        </div>
      </div>
      {item.description && (
        <p className=" leading-snug text-sm lg:text-base text-[#2E134D] font-medium">
          {item.description}
        </p>
      )}
    </Link>
  );
};

const SubMenuLinkIncubator = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex flex-col lg:flex-row hover:bg-[#F6F6F6] items-start gap-4 rounded-md p-3 leading-none no-underline outline-none select-none hover:scale-95 duration-300 transition-all ease-linear"
      href={item.url}
    >
      <div className="relative flex flex-shrink-0 justify-center items-center lg:max-w-[200px] lg:aspect-video">
        <Image
          src={"/stormnorms.png"}
          width={200}
          height={140}
          alt={"StormNorms"}
          className="rounded-xl object-cover w-full lg:w-auto lg:aspect-video"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className=" text-sm lg:text-lg text-[#2E134D] font-bold">
          {item.title}
        </div>
        {item.description && (
          <p className=" leading-snug text-sm lg:text-base text-[#2E134D] font-medium">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { SideNavbar };
