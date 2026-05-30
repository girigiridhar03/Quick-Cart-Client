"use client";

import { LogOutIcon } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

function SidebarNavItem({ item, pathname }) {
  const isActive = pathname === item.href;
  const Icon = item.icon;
  const itemClassName = cn(
    "h-11 rounded-xl px-3.5 text-[0.95rem] font-medium transition-all duration-200 [&_svg]:size-[1.05rem]",
    isActive
      ? "bg-[#2a2a2f] text-white shadow-[0_10px_25px_-18px_rgba(255,106,61,0.8)] ring-1 ring-white/6 hover:bg-[#303036] hover:text-white"
      : "text-[#94949b] hover:bg-white/4 hover:text-white",
    item.accent && !isActive && "text-[#7c63ff] hover:text-[#9a87ff]",
  );

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        render={<NavLink to={item.href} end={item.href === "/admin"} />}
        isActive={isActive}
        className={itemClassName}
      >
        <Icon />
        <span>{item.title}</span>
      </SidebarMenuButton>
      {item.badge ? (
        <SidebarMenuBadge className="translate-y-1/2 rounded-md bg-[#b4373d] px-2 py-0.5 text-[0.72rem] font-semibold text-white">
          {item.badge}
        </SidebarMenuBadge>
      ) : null}
    </SidebarMenuItem>
  );
}

export function AppSidebar({ navSections = [], ...props }) {
  const { pathname } = useLocation();

  return (
    <Sidebar
      collapsible="none"
      className="h-svh border-r border-white/6 bg-[#1f1f22] text-white"
      {...props}
    >
      <SidebarHeader className="gap-0 px-6 pb-10 pt-8">
        <div className="flex flex-col gap-2">
          <div className="text-[1.3rem] leading-none font-black tracking-[-0.04em]">
            <span className="text-white">Quick</span>
            <span className="text-[#ff6a3d]">Mart</span>
          </div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-[#7c7c82]">
            Admin Control Panel
          </p>
        </div>
      </SidebarHeader>

      <SidebarContent className="scrollbar-hide gap-5 px-5 pb-5">
        {navSections.map((section) => (
          <SidebarGroup key={section.title} className="p-0">
            <SidebarGroupLabel className="mb-2 h-auto px-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#78787d] opacity-100">
              {section.title}
            </SidebarGroupLabel>
            <SidebarMenu className="gap-1.5">
              {section.items.map((item) => (
                <SidebarNavItem
                  key={item.title}
                  item={item}
                  pathname={pathname}
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-white/6 px-5 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-11 rounded-xl px-3.5 text-[0.95rem] font-medium text-[#9a9aa0] hover:bg-white/4 hover:text-white [&_svg]:size-[1.05rem]">
              <LogOutIcon />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
