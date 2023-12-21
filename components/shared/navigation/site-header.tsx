import Link from "next/link";
import ContentWrapper from "../layout/content-wrapper";
import SearchBar from "../search/search-bar";
import { ModeToggle } from "../theme/mode-toggle";
import SharedNavigation from "./navigation-component";
import Image from "next/image";
import OSHBrand from "./brand";
import MobileNavigation from "./mobile-navigation";
const SiteHeader = async () => {
    return (
        <div className="border-b bg-slate-900 px-2 md:px-2 sticky top-0 z-10">
            <header className="flex justify-between items-center w-full h-[64px]">
                <ContentWrapper className="w-full max-w-6xl mx-auto  flex justify-between items-center">
                    <OSHBrand />
                    <SharedNavigation className="hidden md:flex" />
                    <SearchBar className="ml-auto mr-2" />
                    <ModeToggle className="mr-2 md:mr-0" />
                    <MobileNavigation className="md:hidden" />
                </ContentWrapper>
            </header>
        </div>
    );
}
export default SiteHeader;
