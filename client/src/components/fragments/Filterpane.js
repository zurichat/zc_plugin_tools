function Filterpane({ expand }) {
  return (
    <div
      className={` ${
        expand ? "h-36" : "h-0"
      } w-48 border bg-white absolute top-8 right-0 transition-all flex justify-center flex-col`}
    >
      <p className="block cursor-pointer my-1 mx-auto text-sm">{expand? "Enterprise-ready-apps" : null}</p>
      <p className="block cursor-pointer my-1 mx-auto text-sm">{expand ? "Daily Tools" : null}</p>
      <p className="block cursor-pointer my-1 mx-auto text-sm">{expand ? "Brilliant Bots" : null}</p>
      <p className="block cursor-pointer my-1 mx-auto text-sm">{expand ? "Work From Home" : null}</p>
      <p className="block cursor-pointer my-1 mx-auto text-sm">{expand ? "All" : null}</p>
    </div>
  );
}

export default Filterpane;
