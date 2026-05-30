"use client"

import {
  BarChart3Icon,
  BoxesIcon,
  LayoutGridIcon,
  LogOutIcon,
  PackageIcon,
  PanelsTopLeftIcon,
  ShieldAlertIcon,
  ShoppingCartIcon,
  SparklesIcon,
  StarIcon,
  TicketPercentIcon,
  TruckIcon,
  UserCircle2Icon,
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import { cn } from "@/lib/utils"
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
} from "@/components/ui/sidebar"

const navSections = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutGridIcon,
      },
      {
        title: "Orders",
        href: "/admin/orders",
        icon: ShoppingCartIcon,
      },
    ],
  },
  {
    title: "Catalog",
    items: [
      {
        title: "Products",
        href: "/admin/products",
        icon: PackageIcon,
      },
      {
        title: "Categories",
        href: "/admin/categories",
        icon: BoxesIcon,
      },
      {
        title: "Subcategories",
        href: "/admin/subcategories",
        icon: PanelsTopLeftIcon,
      },
      {
        title: "Inventory",
        href: "/admin/inventory",
        icon: PackageIcon,
      },
      {
        title: "Coupons",
        href: "/admin/coupons",
        icon: TicketPercentIcon,
      },
      {
        title: "Reviews",
        href: "/admin/reviews",
        icon: StarIcon,
        badge: "12",
      },
      {
        title: "Reports",
        href: "/admin/reports",
        icon: ShieldAlertIcon,
        badge: "1",
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        title: "Partners",
        href: "/admin/partners",
        icon: TruckIcon,
      },
      {
        title: "Payouts",
        href: "/admin/payouts",
        icon: BarChart3Icon,
      },
    ],
  },
  {
    title: "AI Intelligence",
    items: [
      {
        title: "AI Control Center",
        href: "/admin/ai-control-center",
        icon: SparklesIcon,
        accent: true,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "My Profile",
        href: "/admin/profile",
        icon: UserCircle2Icon,
      },
    ],
  },
]

function SidebarNavItem({ item, pathname }) {
  const isActive = item.href === "/admin/products" ? pathname === item.href : pathname === item.href
  const Icon = item.icon
  const itemClassName = cn(
    "h-11 rounded-xl px-3.5 text-[0.95rem] font-medium transition-all duration-200 [&_svg]:size-[1.05rem]",
    isActive
      ? "bg-[#2a2a2f] text-white shadow-[0_10px_25px_-18px_rgba(255,106,61,0.8)] ring-1 ring-white/6 hover:bg-[#303036] hover:text-white"
      : "text-[#94949b] hover:bg-white/4 hover:text-white",
    item.accent && !isActive && "text-[#7c63ff] hover:text-[#9a87ff]"
  )

  if (item.href === "/admin/products") {
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          render={<NavLink to={item.href} end />}
          isActive={isActive}
          className={itemClassName}
        >
          <Icon />
          <span>{item.title}</span>
        </SidebarMenuButton>
        {item.badge ? (
          <SidebarMenuBadge className="right-3 top-1/2 -translate-y-1/2 rounded-md bg-[#b4373d] px-2 py-0.5 text-[0.72rem] font-semibold text-white">
            {item.badge}
          </SidebarMenuBadge>
        ) : null}
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        isActive={isActive}
        className={itemClassName}
      >
        <Icon />
        <span>{item.title}</span>
      </SidebarMenuButton>
      {item.badge ? (
        <SidebarMenuBadge className="right-3 top-1/2 -translate-y-1/2 rounded-md bg-[#b4373d] px-2 py-0.5 text-[0.72rem] font-semibold text-white">
          {item.badge}
        </SidebarMenuBadge>
      ) : null}
    </SidebarMenuItem>
  )
}

export function AppSidebar(props) {
  const { pathname } = useLocation()

  return (
    <Sidebar
      collapsible="none"
      className="h-svh border-r border-white/6 bg-[#1f1f22] text-white"
      {...props}
    >
      <SidebarHeader className="gap-0 px-6 pb-3 pt-8">
        <div className="flex flex-col gap-2">
          <div className="text-[2rem] leading-none font-black tracking-[-0.04em]">
            <span className="text-white">Quick</span>
            <span className="text-[#ff6a3d]">Mart</span>
          </div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.35em] text-[#7c7c82]">
            Admin Control Panel
          </p>
        </div>
      </SidebarHeader>

      <SidebarContent className="scrollbar-hide gap-5 px-5 pb-5">
        {navSections.map((section) => (
          <SidebarGroup key={section.title} className="p-0">
            <SidebarGroupLabel className="mb-2 h-auto px-2 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-[#78787d] opacity-100">
              {section.title}
            </SidebarGroupLabel>
            <SidebarMenu className="gap-1.5">
              {section.items.map((item) => (
                <SidebarNavItem key={item.title} item={item} pathname={pathname} />
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
  )
}
