import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { FaUserAlt } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { Button } from "@/components/ui/button";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSolidUserAccount } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Flex from "../Flex/Flex";
import { myAccountData } from "./categoryData";
import ListItem from "../Lists/Listitem";
import Lists from "../Lists/Lists";

export function UserDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="bg-transparent w-fit border-none outline-none p-0 hover:bg-transparent transition-none !ring-offset-0 focus-visible:ring-0"
        >
          <Flex className="items-center justify-center cursor-pointer">
            <FaUserAlt className="text-xl text-black" />
            <VscTriangleDown className="text-lg ml-1 text-black" />
          </Flex>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <Lists>
          {myAccountData.map((item, i) => (
            <ListItem
              key={i}
              href={item.link}
              className="font-primaryFont last:border-b-0 font-normal text-sm text-black py-4 px-5 border-b border-solid hover:pl-6 transition-all duration-150 ease-in border-topBarBg"
            >
              {item.title}
            </ListItem>
          ))}
        </Lists>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
