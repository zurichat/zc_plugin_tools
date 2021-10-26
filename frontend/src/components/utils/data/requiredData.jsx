// when you search for a tool, and you click on add, you will be redirected to the app homepage

const toolsCommand = {
  name: "upload a document",
  popUpURL: "https://externaltools.zuri.chat/google/upload",
};

//filter by name, categoryGroup, categoryName
const tools = {
  id: 1,
  name: "Sales Force",
  categoryGroup: "dailyTools",
  description: "Get notifications about Google Drive files within Slack",
  appLogo: "./apps/gmail.png",
  categoryName: "Sales",
  url: "https://externaltools.zuri.chat/salesforce",
  language: ["English", "Spanish"],
  categories: ["Developer Tools", "Communication", "Productivity"],
  description: "<Html></Html>",
  features: "<Html></Html>",
  permission: "<Html></Html>",
  security: "<Html></Html>",
  commands: ["toolsCommand1", "toolsCommand2"],
};

const workspace = {
  name: "",
  id: "",
  toolsID: ["toolsId1", "toolsId2"],
};

// the installedTools code below requires a workspace unique identifier so as to return only the list of installed tools for this particular workspace

//filters
//name, categoryGroup,, categoryName (optional)
//workspace (required)
const InstalledTool = tools[""];

// List of all available in the market place of applications
const toolsDirectory = tools[""];

// id (required)
const GithubLink = tools;
