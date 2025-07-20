import React from 'react';

interface UserAvatarProps {
  username: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ username }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-teal-500'
    ];
    
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  return (
    <div className={`flex-shrink-0 h-8 w-8 rounded-full ${getAvatarColor(username)} flex items-center justify-center`}>
      <span className="text-sm font-medium text-white">
        {getInitials(username)}
      </span>
    </div>
  );
}; 