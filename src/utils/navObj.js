import {
  BarChart3Icon,
  BoxesIcon,
  LayoutGridIcon,
  PackageIcon,
  PanelsTopLeftIcon,
  ShieldAlertIcon,
  ShoppingCartIcon,
  SparklesIcon,
  StarIcon,
  TicketPercentIcon,
  TruckIcon,
  UserCircle2Icon,
} from "lucide-react";

export const navSections = [
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
];
