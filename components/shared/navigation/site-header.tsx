import ContentWrapper from "../layout/content-wrapper";
import SearchBar from "../search/search-bar";
import { ModeToggle } from "../theme/mode-toggle";
import SharedNavigation from "./navigation-component";

const SiteHeader = async () => {
    return (
        <div className="border-b">

            <header className="flex justify-between items-center w-full px-1">
                <ContentWrapper className="w-full max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8  flex justify-between items-center">
                    <SharedNavigation className="py-4" />
                    <SearchBar className="ml-auto mr-2"  />
                    <ModeToggle  />
                </ContentWrapper>
                
            </header>

        </div>
    );
}

export default SiteHeader;

