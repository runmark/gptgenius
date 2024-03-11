import MemberProfile from "./MemberProfile";
import NavLinks from "./NavLinks";
import SidebarHeader from "./SidebarHeader";


const Sidebar = () => {
    return (
        <div className="px-4 py-12 w-80 min-h-full bg-base-300 grid grid-rows-[auto,1fr,auto]">
            <SidebarHeader />
            <NavLinks />
            <MemberProfile />
        </div>
    );
}

export default Sidebar;