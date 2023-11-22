import ContentWrapper from "../layout/content-wrapper";
import { ModeToggle } from "../theme/mode-toggle";
import SharedNavigation from "./navigation-component";

const SiteHeader = async () => {
    return (
        <div className="border-b">
            <ContentWrapper className="py-4 flex justify-between">

                <SharedNavigation />
                <ModeToggle />
            </ContentWrapper>
        </div>
    );
}

export default SiteHeader;

