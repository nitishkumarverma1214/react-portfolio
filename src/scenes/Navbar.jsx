import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase(); //To convert Lower Case

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
      hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isToggledMenu, setIsToggledMenu] = useState(false);
  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <nav className={`z-40 w-full  fixed top-0 py-6 `}>
      <div className="flex items-center justify-between w-5/6 mx-auto">
        <h4 className="font-playflair text-3xl font-bold">NK</h4>
        {console.log(isDesktop)}
        {/* Desktop Screen  */}

        {isDesktop ? (
          <div className="flex gap-4 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div className="flex justify-end p-4">
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsToggledMenu(!isToggledMenu)}
            >
              <img alt="menu-icon" src="../assets/menu-icon.svg" />
            </button>
          </div>
        )}
      </div>
      {/* MOBILE MENU POPUP */}
      {!isDesktop && isToggledMenu && (
        <div className="h-full fixed right-0 bottom-0 flex flex-col bg-blue w-[300px]">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsToggledMenu(!isToggledMenu)}>
              <img src="../assets/close-menu.svg" alt="close-menu" />
            </button>
          </div>
          <div className="flex flex-col gap-10  ml-[33%] text-2xl text-deep-blue">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
