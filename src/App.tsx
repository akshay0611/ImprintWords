import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import QuoteEditor from "./components/QuoteEditor";
import SuggestNewFeature from "./components/SuggestNewFeature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/app"
          element={
            <div className="min-h-screen bg-gray-100">
              <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <Header />
                </div>
              </header>
              <main>
                <QuoteEditor />
                <footer className="text-center mt-4">
                  <p className="text-gray-600">Made with ❤️ by Akshay</p>
                </footer>
              </main>
            </div>
          }
        />
        <Route path="/suggest-new-feature" element={<SuggestNewFeature />} />
      </Routes>
    </Router>
  );
}

const Header = () => {
  const navigate = useNavigate();

  return (
    <h1 className="text-3xl font-extrabold text-gray-800 flex items-center">
      <FontAwesomeIcon icon={faPencilAlt} className="text-teal-500 mr-2" />
      <span
        className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        ImprintWords
      </span>
    </h1>
  );
};

export default App;