import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Header: React.FC = () => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  return (
    <header
      className={`bg-white w-full sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "shadow-lg py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-6xl">
        <h1 className="text-3xl font-extrabold text-gray-800 flex items-center">
          <FontAwesomeIcon icon={faPencilAlt} className="text-teal-500 mr-2" />
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            ImprintWords
          </span>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="relative group">
                  <span className="hover:text-teal-500 transition-colors duration-300">{item.name}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
            <li>
              <button
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate("/app")}
              >
                Use the App
              </button>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-gray-700 focus:outline-none z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="h-6 w-6" />
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-semibold text-gray-800 hover:text-teal-500 transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {item.name}
            </a>
          ))}
          <button
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              navigate("/app")
              closeMobileMenu()
            }}
          >
            Use the App
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

