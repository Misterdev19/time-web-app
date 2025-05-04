import React from 'react';
import 'weather-icons/css/weather-icons.min.css';

// Mapeo preciso de iconos según tu API
const WEATHER_ICON_MAP: Record<string, string> = {
  'clear-day': 'wi-day-sunny',
  'clear-night': 'wi-night-clear',
  'rain': 'wi-rain',
  'snow': 'wi-snow',
  'sleet': 'wi-sleet',
  'wind': 'wi-strong-wind',
  'fog': 'wi-fog',
  'cloudy': 'wi-cloudy',
  'partly-cloudy-day': 'wi-day-cloudy-high',
  'partly-cloudy-night': 'wi-night-cloudy-high',
  'thunderstorm': 'wi-thunderstorm',
  'overcast': 'wi-cloudy'
};

interface WeatherIconProps {
  iconName: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  iconName, 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl'
  };

  const iconClass = WEATHER_ICON_MAP[iconName] || 'wi-na';

  return (
    <i 
      className={`wi ${iconClass} ${sizeClasses[size]} ${className}`} 
      aria-hidden="true"
    />
  );
};

export default WeatherIcon;