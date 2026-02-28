"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarMain() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/allCources">All</HoveredLink>
            <HoveredLink href="/c1">c1...........</HoveredLink>
            <HoveredLink href="/c2">c2...........</HoveredLink>
            <HoveredLink href="/c3">c3...........</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/Contact">
            <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
        </HoveredLink>
      </Menu>
    </div>
  );
}
