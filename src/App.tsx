import React from 'react';
import QuoteEditor from './components/QuoteEditor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPencilAlt} className="mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">ImprintWords</h1>
          </div>
        </div>
      </header>
      <main>
        <QuoteEditor />
        <footer className="text-center mt-4"> {/* Added footer section */}
          <p className="text-gray-600">Made with ❤️ by Akshay</p> {/* Added text */}
        </footer>
      </main>
    </div>
  );
}

export default App;