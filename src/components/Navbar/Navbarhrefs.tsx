import Anchor from "./Anchor";
import Hrefs from "./Hrefs";

const Navbarhrefs = () => {
  return (
    <div
      id="navbar"
      className="
      xl:px-10 lg:px-10 md:px-0 sm:px-0 
      py-4 w-full xl:rounded lg:rounded md:rounded-0 sm:rounded-0  bg-[#067E45] text-white 
      xl:flex lg:flex md:hidden sm:hidden
      flex justify-between items-center"
    >
      <Hrefs style={"flex flex-row gap-2 text-white"} />
      <input
        type="search"
        id="input"
        className="px-4 py-3 w-1/3 rounded-sm outline-none border-0 text-black"
        placeholder="Axtar..."
      />
      <Anchor
        href="https://wa.me/994553430353"
        style="px-5  py-3 text-sm 
          border-white rounded border-[1px]
           xl:block lg:block sm:hidden md:hidden"
        target={true}
        label="Phone number: +994 55 343 03 53"
        text=" Müraciət edin"
      />
    </div>
  );
};

export default Navbarhrefs;
