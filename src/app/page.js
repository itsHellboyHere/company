"use client";
import { useState, useEffect } from "react";
import './globals.css'
export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [directors, setDirectors] = useState([]);

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

      <nav className="bg-blue-950 text-white text-center text-2xl font-semibold py-4   shadow-md ">
        Company Directory
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
