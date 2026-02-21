import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import desktopIcon from "./../assets/hero_main_image.png";
import mobileIcon from "./../assets/mobile icon.png";

export default function Navbar() {
// This is like a boolean controlling mobile menu visibility 
  const [isOpen, setIsOpen] = useState(false);

// mobileView controls which sub-menu is shown in mobile view.
    // * null = shows the main menu (e.g., "Mac", "iPad", etc.)
    // * "Mac" = shows the Mac submenu with all links, "iPad" = shows the iPad submenu with all links, etc.
  const [mobileView, setMobileView] = useState(null); 
  
    // * null = nothing hovered, no mega dropdown shown
    // * "Mac" = user is hovering over "Mac" in desktop nav, show Mac mega dropdown 
    // So activeMenu is a state variable that stores the name of the menu currently being hovered.
  const [activeMenu, setActiveMenu] = useState(null);


// Toggles mobile menu open/close.
// Resets mobileView to null whenever the hamburger is clicked so we always start at main menu on mobile.
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    setMobileView(null); // reset to main menu
  };

  const menuData = {
    Mac: {
      sections: [
        {
          title: "Explore Mac",
          links: [
            "Explore All Mac",
            "MacBook Air",
            "MacBook Pro",
            "iMac",
            "Mac Mini",
            "Mac Studio",
            "Mac Pro",
            "Displays",
          ],
        },
        {
          title: "More From Mac",
          links: [
            { label: "Mac Support", size: "small" },
          ],
        },
      ],
    },
    Ipad: {
      sections: [
        {
          title: "Explore iPad",
          links: ["Explore All iPad", "iPad Pro", "iPad Air", "iPad", "iPad Mini"],
        },{
          title: "More From iPad",
          links: [
            { label: "iPad Support", size: "small" }],
        },
      ],
    },
    Iphone: {
      sections: [
        {
          title: "Explore iPhone",
          links: ["Explore All iPhone", "iPhone 17 Pro", "iPhone Air", "iPhone 17", "iPhone 16", "iPhone 16e"],
        }, {
          title: "More From iPhone",
          links: [
            { label: "iPhone Support", size: "small" }],
        },
      ],
    },
    Support: {
      sections: [
        {
          title: "Explore Support",
          links: ["iPhone", "Mac", "iPad", "Music", 
            { label: "Explore Support", size: "small" }],
        }, {
          title: "Get Help",
          links: [
            { label: "Community", size: "small" },
            { label: "Check Coverage", size: "small" }],
        }, {
          title: "Helpful topics",
          links: [
            { label: "Apple Account and Password", size: "small" },
            { label: "Billing and Subscriptions", size: "small" }],
        },
      ],
    },
    "Where to Buy": {
      sections: [
        {
          title: "Explore",
          links: ["Authorized Sellers", "Service and Support", 
            { label: "Explore All Ways To Buy", size: "small" }],
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 w-full">

      {/* HEADER */}
      <header className="w-full h-12 fixed top-0 left-0 right-0 z-50 bg-zinc-900/70 backdrop-blur-md  flex items-center justify-between px-4">

      {/* Left side of the header */}
        <div className="flex items-center gap-4">
      {/* If mobileView is active (we are in a submenu), show Back button.
          Otherwise, show the logo.
          This logic is for mobile navigation only. Desktop will always see logo. */}
      {/* setting the mobile view to null means that we go back to the main menu when we click the back button. */}
          {mobileView && (
            <button onClick={() => setMobileView(null)} className="text-white text-xl">
              <MdKeyboardArrowLeft className="text-2xl"/>
            </button>
          )}

          {!mobileView && !isOpen && (
            <img className="bg-slate-200" width="20" height="20" src="https://img.icons8.com/ios/50/mac-os--v1.png" alt="logo"/>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
        {/* // This !isOpen condition ensures that the desktop menu is hidden when the mobile menu is open, preventing overlap and confusion on smaller screens. When isOpen is false (mobile menu closed), the desktop menu is displayed as a horizontal list of top-level items. When isOpen is true (mobile menu open), the desktop menu is hidden to provide a clean mobile navigation experience.  */}
        {/* // The mouseEnter event on each menu item sets the activeMenu state to that item, which triggers the display of the corresponding mega dropdown. The mega dropdown is a large, fixed-position div that appears below the header and contains all the links for that menu item. The onMouseLeave event on the mega dropdown sets activeMenu back to null, which hides the dropdown when the user moves their mouse away from it. This creates a hover effect where the mega dropdown is shown when hovering over a top-level menu item and hidden when not hovering. */}
          {!isOpen && (
            <ul className="flex items-center gap-30 text-slate-50 text-xs cursor-pointer">
              {Object.keys(menuData).map((menu) => (
                <li key={menu} onMouseEnter={() => setActiveMenu(menu)} className="relative">
                  {menu}

                  {/* Mega Dropdown for Desktop */}
        {/* // This code mean if the activeMenu state matches the current menu item, then render the mega dropdown. The mega dropdown is a large, fixed-position div that appears below the header and contains all the links for that menu item. The onMouseLeave event on the mega dropdown sets activeMenu back to null, which hides the dropdown when the user moves their mouse away from it. This creates a hover effect where the mega dropdown is shown when hovering over a top-level menu item and hidden when not hovering.  */}
                  {activeMenu === menu && (
                    <div
                      onMouseLeave={() => setActiveMenu(null)}
                      className="fixed left-0 top-12 w-full h-[75vh]  bg-zinc-900/70 backdrop-blur-md z-40 overflow-y-scroll pb-6"
                    >
                      <div className="max-w-6xl mx-auto flex gap-20 mt-12 pb-10 pl-20">
        {/* What this code simply mean is "Take the menu currently hovered, get its sections, and loop through them to display it"  */}
                        {menuData[activeMenu].sections.map((section, i) => (
                          <div key={i}>
                            <p className="text-sm text-gray-500 mb-4">{section.title}</p>
                            <ul className="space-y-2 text-white">
                              {section.links.map((link, index) => (
                                <li key={index} className={` font-semibold cursor-pointer ${link.size === "small" ? "text-xs" : "text-xl"}`}>
                                  {link.label ? link.label : link}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* // This !open mean that the search icon will only show when the mobile menu is closed. */}
          {!isOpen && <IoIosSearch className="text-slate-100 text-xl" />}
          <button onClick={handleHamburgerClick} className="md:hidden text-slate-200 text-xl">
            {isOpen ? <MdClose /> : <RxHamburgerMenu />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {/* // isOpen is the state variable that controls whether the mobile menu is visible or not. When isOpen is true, the mobile menu is rendered as a fixed-position div that covers the entire screen with a dark background. The content of the mobile menu is determined by the mobileView state variable, which controls whether to show the main menu (list of top-level items) or a submenu (sections and links for a specific top-level item). The user can toggle the mobile menu open and closed using the hamburger button in the header, and can navigate through the menu hierarchy by clicking on top-level items to view their submenus. */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-900 md:hidden pt-16 px-8 overflow-y-auto">
      {/* the mobileView here is controlling whether we are showing the main menu (mobileView === null) or a submenu (mobileView is the name of the menu we want to show). When we click on a top-level menu item in the main menu, we set mobileView to that item's name, which triggers the display of the corresponding submenu. The submenu then shows all the sections and links for that specific menu item. If we click the back button, we set mobileView back to null, which takes us back to the main menu. */}
          {mobileView === null ? (
            // Main menu
            <ul className="flex flex-col gap-5 text-slate-50 text-3xl font-medium cursor-pointer">
              {Object.keys(menuData).map((menu) => (
                <li
                  key={menu}
                  onClick={() => setMobileView(menu)}
                  className="hover:text-blue-400 transition-colors"
                >
                  {menu}
                </li>
              ))}
            </ul>
          ) : (
            // Submenu
            <div>
        {/* // This one is if the mobile view is a menu name, Show the links for that menu */}
              {menuData[mobileView].sections.map((section, i) => (
                <div key={i} className="mt-4">
                  <p className="text-sm text-gray-400 mb-2">{section.title}</p>
                  <ul className="space-y-2 text-white text-2xl">
                    {section.links.map((link, index) => (
                      <li key={index} className="cursor-pointer hover:text-blue-400">
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* HERO */}
      <section className="pt-20">
        <div className="text-center mt-12">
          <h1 className="text-slate-200 font-bold text-3xl md:text-5xl mb-1">
            iPhone 17 Pro
          </h1>

          <h3 className="text-slate-200 text-2xl font-semibold">
            All out Pro.
          </h3>

          <button className="mt-5 bg-blue-600 text-white text-xl md:text-base px-6 py-2 rounded-full hover:bg-blue-500 transition-all">
            Learn more
          </button>
        </div>

        <div className="mt-16">
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopIcon} />
            <img src={mobileIcon} alt="Hero" className="w-full max-w-5xl mx-auto object-cover" />
          </picture>
        </div>
      </section>
    </div>
  );
}
