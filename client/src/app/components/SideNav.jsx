"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Home,
  AlertOctagon,
  Users,
  HandCoins,
  Newspaper,
  Package,
} from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/Sidebar";

export function SideNav() {
  const baseLinks = [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={20} /> },
    {
      label: "Alerts",
      href: "/dashboard/alerts",
      icon: <AlertOctagon size={20} />,
      hideOnMobile: true,
    },
    {
      label: "Community",
      href: "/dashboard/community",
      icon: <Users size={20} />,
    },
    {
      label: "Support",
      href: "/dashboard/support",
      icon: <HandCoins size={20} />,
    },
    {
      label: "News",
      href: "/dashboard/news",
      icon: <Newspaper size={20} />,
      hideOnMobile: true,
    },
    {
      label: "Inventory",
      href: "/dashboard/inventory",
      icon: <Package size={20} />,
    },
  ];

  const [open, setOpen] = useState(false);

  // Return ONLY the Sidebar component, not a container
  return (
    <Sidebar open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className="justify-between gap-16">
        <div className="flex flex-col overflow-x-hidden overflow-y-auto">
           <Logo />
          <div className="mt-10 flex flex-col gap-4">
            {baseLinks.map((link, idx) => (
              <SidebarLink key={idx} link={link} className='gap-8'/>
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Manu Arora",
              href: "#",
              icon: (
                <img
                  src="https://assets.aceternity.com/manu.png"
                  className="h-7 w-7 shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-xl font-medium  text-white"
    >
      <div className="h-10 w-10 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white mr-10"/>
        RIVERATHON
    </a>
  );
};

export default SideNav; 