
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import QuoteEditor from "./components/QuoteEditor";
import SuggestNewFeature from "./components/SuggestNewFeature"; // Import the new page
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the app page */}
        <Route
          path="/app"
          element={
            <div className="min-h-screen bg-gray-100">
              <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      className="mr-2"
                      style={{ color: "#14b8a6" }}
                    />
                    <h1 className="text-3xl font-bold text-gray-900">
                      ImprintWords
                    </h1>
                  </div>
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

        {/* Route for Suggest My Feature page */}
        <Route path="/suggest-new-feature" element={<SuggestNewFeature />} />
      </Routes>
    </Router>
  );
}

export default App;