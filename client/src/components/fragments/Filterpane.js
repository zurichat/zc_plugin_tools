function Filterpane({ expand, clicked, closepane }) {
  return (
    <div
      className={` ${
        expand ? "h-36" : "h-0"
      } w-48 border bg-white absolute top-8 right-0 transition-all flex justify-center flex-col`}
    >
      <p
        className="block cursor-pointer my-1 mx-auto text-sm"
        onClick={() => {
          clicked("Enterprise-ready apps");
          closepane();
        }}
      >
        {expand ? "Enterprise-ready-apps" : null}
      </p>
      <p
        className="block cursor-pointer my-1 mx-auto text-sm"
        onClick={() => {
          clicked("Daily Tools");
          closepane();
        }}
      >
        {expand ? "Daily Tools" : null}
      </p>
      <p
        className="block cursor-pointer my-1 mx-auto text-sm"
        onClick={() => {
          clicked("Brilliant Bots");
          closepane();
        }}
      >
        {expand ? "Brilliant Bots" : null}
      </p>
      <p
        className="block cursor-pointer my-1 mx-auto text-sm"
        onClick={() => {
          clicked("Work From Home");
          closepane();
        }}
      >
        {expand ? "Work From Home" : null}
      </p>
      <p
        className="block cursor-pointer my-1 mx-auto text-sm"
        onClick={() => {
          clicked("All");
          closepane();
        }}
      >
        {expand ? "All" : null}
      </p>
    </div>
  );
}

export default Filterpane;
