'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log("Fetching team members...");
      const response = await axios.get('/api/team');
      console.log("API Response:", response.data);
      
      if (response.data.success && response.data.data.length > 0) {
        const members = response.data.data;
        setTeamMembers(members);
        
        const uniqueTeams = [...new Set(members.map(member => member.team).filter(Boolean))];
        setTeams(uniqueTeams);
        
        console.log(`Retrieved ${members.length} team members across ${uniqueTeams.length} teams`);
      } else {
        setTeamMembers([]);
        setError(response.data.message || 'No team members found.');
      }
    } catch (err) {
      console.error('Error fetching team members:', err);
      setError(err.response?.data?.message || 'Failed to fetch team members.');
      setTeamMembers([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredMembers = selectedTeam === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.team === selectedTeam);

  return (
    <>
      <div
        className="min-h-screen bg-slate-500 py-8"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 0, 0, 0.57), rgba(255, 0, 0, 0.57)), url('./noisy-background.svg')",
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-6xl px-4">
            <h2 className="text-center text-4xl md:text-5xl font-semibold mb-6 bg-[#D9D9D9] border-4 border-black rounded-lg shadow-[6px_6px_0px_#060505] p-6">OUR TEAMS</h2>

            {error && (
              <div className="text-red-600 text-center font-medium mb-4 bg-white p-3 rounded">
                <p>{error}</p>
                <button 
                  onClick={fetchMembers}
                  className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Team selection filter */}
            {teams.length > 0 && (
              <div className="mb-6 flex justify-center">
                <div className="bg-[#D9D9D9] border-4 border-black rounded-lg shadow-[4px_4px_0px_#060505] p-3">
                  <label htmlFor="team-filter" className="font-semibold mr-2">Filter by Team:</label>
                  <select
                    id="team-filter"
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                    className="border-2 border-black rounded px-2 py-1 bg-white"
                  >
                    <option value="all">All Teams</option>
                    {teams.map(team => (
                      <option key={team} value={team}>{team}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {loading ? (
              <div className="text-center text-lg font-medium bg-white p-6 rounded border-4 border-black shadow-[4px_4px_0px_#060505]">Loading...</div>
            ) : filteredMembers.length === 0 ? (
              <div className="text-center text-lg font-medium bg-white p-6 rounded border-4 border-black shadow-[4px_4px_0px_#060505]">
                {error ? null : selectedTeam !== 'all' ? `No members found in the ${selectedTeam} team` : "No team members found"}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filteredMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white border-4 border-black rounded-lg shadow-md p-4 flex flex-col items-center"
                  >
                    <div className="relative w-48 h-48">
                      <Image
                        src={member.imageUrl || "/default-avatar.png"}
                        alt={member.name || "Team Member"}
                        fill
                        className="rounded-full border-2 border-black object-cover"
                        onError={(e) => {
                          console.error('Image Load Failed:', member);
                          e.target.src = "/default-avatar.png";
                        }}
                      />
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-lg font-semibold">{member.name || "Unknown Name"}</p>
                      <p className="text-sm text-gray-600">{member.position || "Position not specified"}</p>
                      {member.team && <p className="text-sm font-medium bg-gray-100 px-2 py-1 rounded mt-1">{member.team}</p>}
                      <p className="text-sm text-gray-600 mt-1">{member.year || ""}</p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 mt-2 inline-block"
                        >
                          <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;