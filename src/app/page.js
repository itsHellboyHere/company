"use client";
import { useState, useEffect } from "react";
import './globals.css'
import { Phone, Briefcase, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    fetch("/api/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  const fetchDirectors = async (companyId) => {
    const res = await fetch(`/api/directors?company_id=${companyId}`);
    const data = await res.json();
    setDirectors(data);
  };

  return (
    <div className="min-h-screen home overflow-x-hidden">

      <div className="header bg-blue-950 text-white flex flex-row gap-3  justify-end ">

        <h3>www.registerkaro.com</h3><span className=" border-r border-white "></span>
        <Phone className="w-4 h-7 text-white" />
        <h3>6466575757</h3>

      </div>


      <nav className="bg-white text-blue-800 text-2xl font-bold py-4 shadow-md flex items-center justify-between px-6 md:px-8 w-full">

        <div className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-800" />
          <span>
            Register<span className="text-orange-500 font-bold">Karo</span>
          </span>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>


        <ul
          className={`absolute md:relative top-28 md:top-0 left-0 md:flex w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row md:items-center gap-6 font-normal text-xl shadow-md md:shadow-none transition-all duration-300 ${isOpen ? "flex" : "hidden"
            }`}
        >
          <li className="hover:text-orange-500 cursor-pointer px-6 py-2 md:p-0">
            Home
          </li>


          <li
            className="relative group cursor-pointer px-6 py-2 md:p-0"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-orange-500">
              Our Services <ChevronDown className="w-5 h-5" />
            </div>

            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">
                  Company Registration
                </li>
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">
                  Tax Filing
                </li>
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">
                  Legal Consulting
                </li>
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">
                  Business Licenses
                </li>
              </ul>
            )}
          </li>

          <Link href="/about"><li className="hover:text-orange-500 cursor-pointer px-6 py-2 md:p-0">
            About
          </li> </Link>
          <li className="hover:text-orange-500 cursor-pointer px-6 py-2 md:p-0">
            Contact Us
          </li>
        </ul>
      </nav>

      <div className="companies w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Company List</h2>
          <div className="space-y-4">
            {companies.map((company) => (
              <div
                key={company.id}
                className="company bg-gray-100 rounded-lg shadow cursor-pointer hover:bg-gray-300 transition"
                onClick={() => {
                  setSelectedCompany(company);
                  fetchDirectors(company.id);
                }}
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  {company.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {selectedCompany && (
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCompany.name}
            </h2>
            <p className="text-gray-600 mt-2">{selectedCompany.description}</p>

            <h3 className="text-xl font-semibold mt-4 text-gray-700">
              Directors
            </h3>
            <div className="mt-4 space-y-2">
              {directors.map((director) => (
                <div key={director.id} className="p-3 bg-gray-200 rounded-lg">
                  {director.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
