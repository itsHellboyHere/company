"use client";
import { useState, useEffect } from "react";
import './globals.css'
import { Phone, Briefcase, ChevronDown } from "lucide-react";
export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="min-h-screen home  ">
      <div className="bg-blue-950 text-white flex flex-row gap-3 px-4 py-2 justify-end ">

        <h3 className="pr-3 border-r border-white">www.registerkaro.com</h3>
        <Phone className="w-4 h-7 text-white" />
        <h3>6466575757</h3>

      </div>
      <nav className="bg-white text-blue-800 text-xl font-bold py-4 shadow-md flex items-center justify-between px-8">

        <div className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-800" />
          <span>
            Register<span className="text-orange-500 font-bold">Karo</span>
          </span>
        </div>

        <ul className="flex gap-6 font-medium ">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-orange-500">
              Our Services <ChevronDown className="w-5 h-5" />
            </div>

            {isOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">Company </li>
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">Tax Filing</li>
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">Legal Consulting</li>
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">Business Licenses</li>
              </ul>
            )}
          </li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
        </ul>
      </nav>

      <div className=" companies max-w-6xl mx-10 grid grid-cols-1 md:grid-cols-3 gap-6 ">

        <div className="bg-white p-6 rounded-lg shadow-lg ">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Company List</h2>
          <div className="space-y-4 ">
            {companies.map((company) => (
              <div
                key={company.id}
                className=" company p-4 bg-gray-100 rounded-lg shadow cursor-pointer hover:bg-gray-300 transition"
                onClick={() => {
                  setSelectedCompany(company);
                  fetchDirectors(company.id);
                }}
              >
                <h3 className="text-lg font-semibold text-gray-700">{company.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {selectedCompany && (
          <div className="md:col-span-2  bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">{selectedCompany.name}</h2>
            <p className="text-gray-600 mt-2">{selectedCompany.description}</p>


            <h3 className="text-xl font-semibold mt-4 text-gray-700">Directors</h3>
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
