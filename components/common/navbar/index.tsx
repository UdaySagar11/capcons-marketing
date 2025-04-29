"use client";

import { TopNavbar } from "./topNavbar";
import { SideNavbar } from "./sideNavbar";
import { RiBookLine } from "react-icons/ri";
import { CgPlayButtonO } from "react-icons/cg";
import { SlEnergy } from "react-icons/sl";
import { Trees } from "lucide-react";
import { NavbarProps } from "@/@types";

const defaultProps: NavbarProps = {
    logo: {
        url: "/",
        src: "/logo-light.png",
        alt: "capcons",
        title: "CapCons.",
    },
    menu: [
        { title: "Home", url: "/" },
        {
            title: "Resources",
            url: "#",
            items: [
                {
                    title: "Insights",
                    description: "The latest industry news, updates and info",
                    icon: (
                        <RiBookLine className="lg:size-7 size-5 text-[#FF9C00] shrink-0" />
                    ),
                    url: "/news",
                },
                {
                    title: "Podcasts",
                    description: " Get up and running on new features and techniques",
                    icon: (
                        <CgPlayButtonO className="lg:size-7 size-5 text-[#FF9C00] shrink-0" />
                    ),
                    url: "/podcasts",
                },
                {
                    title: "Challenges",
                    description: "Learn how our customers are making big changes.",
                    icon: (
                        <SlEnergy className="lg:size-7 size-5 text-[#FF9C00] shrink-0" />
                    ),
                    url: "challenges",
                },
                {
                    title: "StormNorms - D2C Incubator",
                    description:
                        "Join our contest, showcase your talent, win exciting rewards & grow your community with Capcons!",
                    icon: <Trees className="lg:size-7 size-5 text-[#FF9C00] shrink-0" />,
                    url: "/stormnorms",
                },
            ],
        },
        {
            title: "Pricing",
            url: "#",
        },
        {
            title: "Blog",
            url: "/blogs",
        },
    ],
    auth: {
        login: { title: "Login", url: "/login" },
        signup: { title: "Sign up", url: "/signup" },
    },
};

const Navbar = () => {
    return (
        <section className="h-[80px]">
            <div className="container w-full px-4 md:px-8 lg:px-0 h-full">
                <TopNavbar {...defaultProps} />
                <SideNavbar {...defaultProps} />
            </div>
        </section>
    );
};

export { Navbar };