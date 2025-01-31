import type React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt, faPaperPlane, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const SuggestNewFeature: React.FC = () => {
  const [feature, setFeature] = useState("")
  const [description, setDescription] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Here, you can integrate API logic to send the suggestion
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900">
      <header className="bg-white shadow-lg w-full sticky top-0 z-50 transition-all duration-300 ease-in-out">
        <div className="container mx-auto flex items-center justify-between py-4 px-6 max-w-6xl">
          <Link to="/" className="text-3xl font-extrabold text-gray-800 flex items-center">
            <FontAwesomeIcon icon={faPencilAlt} className="text-teal-500 mr-2" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
              ImprintWords
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Suggest a Feature</h2>

          {submitted ? (
            <div className="text-center animate-fade-in-up">
              <FontAwesomeIcon icon={faLightbulb} className="text-5xl text-yellow-400 mb-4" />
              <p className="text-green-600 font-semibold text-xl">Thank you for your brilliant suggestion!</p>
              <p className="text-gray-600 mt-2">We appreciate your input and will consider it for future updates.</p>
              <Link
                to="/"
                className="mt-6 inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-2 px-4 rounded-full hover:from-teal-600 hover:to-blue-700 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Feature Title</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Enter your feature title"
                  value={feature}
                  onChange={(e) => setFeature(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Describe your feature in detail"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Submit Suggestion
              </button>
            </form>
          )}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 ImprintWords. All rights reserved.</p>
          <Link to="/" className="text-teal-400 hover:text-teal-300 mt-2 inline-block">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default SuggestNewFeature