"use client";

import { AlertTriangle, Map, Users, UserX } from "lucide-react";
import Navbar from "./components/Navbar";
import StatCard from "./components/ui/stat-card";
import mockIncidents from "./data/mockIncidents";
import Footer from "./components/Footer";
import IncidentCard from "./components/IncidenceCard";

export default function Home() {
  const totalIncidents = mockIncidents.length;
  const totalKilled = mockIncidents.reduce(
    (sum, incident) => sum + incident.victims.killed,
    0
  );
  const totalInjured = mockIncidents.reduce(
    (sum, incident) => sum + incident.victims.injured,
    0
  );

  const perpetrators = [...new Set(mockIncidents.map((i) => i.perpetrator))];
  const locations = [...new Set(mockIncidents.map((i) => i.location.state))];
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f3ee]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className=" text-4xl font-bold text-gray-900 mb-4">
              Nigerian Terror Archive Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive database of terrorist incidents in Nigeria for
              research, education, and historical documentation.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <StatCard
              title="Documented Incidents"
              value={totalIncidents}
              icon={<AlertTriangle size={20} />}
            />
            <StatCard
              title="Deaths Recorded"
              value={totalKilled}
              icon={<UserX size={20} />}
            />
            <StatCard
              title="Injured Victims"
              value={totalInjured}
              icon={<Users size={20} />}
            />
            <StatCard
              title="Affected States"
              value={locations.length}
              icon={<Map size={20} />}
            />
          </div>
          <div>
            <div>
              {mockIncidents.length > 0 ? (
                mockIncidents.map((incident) => (
                  <IncidentCard key={incident.id} incident={incident} />
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">
                    No incidents found matching your search.
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Perpetrator Organizations */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold wiki-heading mb-4">
              Perpetrator Organizations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {perpetrators.map((perpetrator, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-4 rounded-sm hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium text-lg">{perpetrator}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {
                      mockIncidents.filter((i) => i.perpetrator === perpetrator)
                        .length
                    }{" "}
                    documented incidents
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
