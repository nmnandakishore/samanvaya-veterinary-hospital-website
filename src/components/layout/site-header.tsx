import { Logo } from "./logo";
import { HeaderTopBar } from "./header-top-bar";
import { HeaderMainNav } from "./header-main-nav";
import { MobileNavDrawer } from "./mobile-nav-drawer";

export function SiteHeader() {
  return (
    <header>
      <div className="container-fluid">
        <div className="grid grid-cols-[260px_1fr] grid-rows-[40px_96px]">
          <div className="row-span-2 flex items-center justify-start">
            <Logo />
          </div>
          <HeaderTopBar />
          <div className="bg-white" />
        </div>
      </div>

      <div className="bg-surface">
        <div className="container-fluid flex items-center h-14">
          <HeaderMainNav />
        </div>
      </div>

      <div className="lg:hidden border-b border-border">
        <div className="container-fluid flex items-center justify-between h-16">
          <Logo />
          <MobileNavDrawer />
        </div>
      </div>
    </header>
  );
}
