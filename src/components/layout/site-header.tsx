import { Logo } from "./logo";
import { HeaderTopBar } from "./header-top-bar";
import { HeaderMainNav } from "./header-main-nav";
import { MobileNavDrawer } from "./mobile-nav-drawer";
import { StickyBookButton } from "./sticky-book-button";

export function SiteHeader() {
  return (
    <>
      <header>
        <div className="container-fluid hidden lg:block">
          <div className="grid grid-cols-[260px_1fr] grid-rows-[40px_96px]">
            <div className="row-span-2 flex items-center justify-start">
              <Logo />
            </div>
            <HeaderTopBar />
            <div className="bg-white" />
          </div>
        </div>
      </header>

      <div className="bg-surface hidden lg:block lg:sticky lg:top-0 lg:z-40">
        <div className="container-fluid flex items-center justify-between h-14">
          <HeaderMainNav />
          <StickyBookButton />
        </div>
      </div>

      <div className="lg:hidden sticky top-0 z-40 border-b border-border bg-surface">
        <div className="container-fluid flex items-center justify-between h-16">
          <Logo />
          <MobileNavDrawer />
        </div>
      </div>
    </>
  );
}
