import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@zuri/zuri-plugin-tools",
  app: () => System.import("@zuri/zuri-plugin-tools"),
  activeWhen: ["/tools"],
});

start({
  urlRerouteOnly: true,
});
