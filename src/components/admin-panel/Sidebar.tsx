"use client"

import { MdDashboard, MdManageAccounts } from "react-icons/md"
import { GrTransaction } from "react-icons/gr"
import { IoAnalytics, IoSettings } from "react-icons/io5"
import { RiShoppingCartLine } from "react-icons/ri"
import { title } from "process"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menus = [
    {
      icon: <MdDashboard size={24} />,
      title: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      icon: <GrTransaction size={24} />,
      title: "Transactions",
      href: "#",
    },
    {
      icon: <IoAnalytics size={24} />,
      title: "Reports",
      href: "#",
    },
    {
      icon: <RiShoppingCartLine size={24} />,
      title: "Products",
      href: "/admin/products",
    },
    {
      icon: <IoSettings size={24} />,
      title: "Settings",
      href: "#",
    },
    {
        icon: <MdManageAccounts size={24} />,
        title: "Users",
        href: "#",
      },
  
]
const Sidebar = () => {
  const pathName = usePathname()

  return (
    <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
        <div className="flex items-center gap-4">
            <img className="size-12 rounded-lg" src="/logo.png" alt="logo" />
            <h2 className="text-[20px] font-semibold">Bocchi Store</h2>
        </div>

<ul className="space-y-4 mt-6">
    {menus.map(menu => <Link key={menu.title} href={menu.href} className={`flex gap-2 
    items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-purple-300 
    ${pathName === menu.href ? "bg-pink text-purple-300": "bg-gray-200"
      }`}
     >

      <div className="text-[20px]"> {menu.icon}</div>
      <p>{menu.title}</p>


     </Link>)}


</ul>


    </div>
  );
};

export default Sidebar;
