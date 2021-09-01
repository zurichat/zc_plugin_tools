import GoogleDrive from "./components/GoogleDrive/index.component";
import Layout from "./components/layout";
import MainPage from "./components/MainPage";
import SearchBar from "./components/searchbar.component";
import TestInput from "./components/TextInput/textinput.component";

function App() {
  return (
    <div className="">
      <Layout>
        <SearchBar />
        <MainPage />
        <TestInput />
        <GoogleDrive />
      </Layout>
    </div>
  );
}

export default App;
