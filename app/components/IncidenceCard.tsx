import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { Incident } from '../data/mockIncidents';
import Link from 'next/link';

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-4 mb-4 hover:bg-gray-50 transition-colors">
      <Link href={`/incident/${incident.id}`} className="block">
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{incident.title}</h3>
        
        <div className="flex flex-wrap gap-y-2 mb-3 text-sm">
          <div className="flex items-center text-gray-600 mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(incident.date)}</span>
          </div>
          
          <div className="flex items-center text-gray-600 mr-4">
            <MapPin size={14} className="mr-1" />
            <span>
              {incident.location.town && `${incident.location.town}, `}
              {incident.location.state}
            </span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users size={14} className="mr-1" />
            <span>
              {incident.victims.killed} killed, {incident.victims.injured} injured
              {incident.victims.kidnapped && incident.victims.kidnapped > 0 ? `, ${incident.victims.kidnapped} kidnapped` : ''}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-700 line-clamp-2">
          {incident.description.substring(0, 160)}...
        </p>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {incident.type.map((type, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-sm"
            >
              {type}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default IncidentCard;