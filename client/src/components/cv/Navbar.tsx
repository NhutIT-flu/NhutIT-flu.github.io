import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="bg-gray-100 py-4 shadow-sm">
      <div className="max-w-4xl mx-auto px-8">
        <NavigationMenu className="justify-center w-full">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#summary" className={navigationMenuTriggerStyle()}>
                Summary
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#skills" className={navigationMenuTriggerStyle()}>
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#education" className={navigationMenuTriggerStyle()}>
                Education
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#projects" className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#github" className={navigationMenuTriggerStyle()}>
                GitHub
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#certifications" className={navigationMenuTriggerStyle()}>
                Certifications
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contact" className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
} 