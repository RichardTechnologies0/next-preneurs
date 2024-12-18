
import React from 'react';

const NotificationsPage = () => {
    const notifications = [
        { title: 'Meeting Reminder', content: 'You have a meeting at 3 PM.', timestamp: '10:00 AM' },
        { title: 'System Update', content: 'Your system has been updated.', timestamp: 'Yesterday' },
      ];
  return (

    <div className="p-6 mx-auto lg:flex-row  items-center justify-center flex flex-cols  max-w-4x1 mt-10">
      <h1 className="text-xl font-semibold mb-4 text-blue-500">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition-all"
          >
            <h2 className="text-lg font-medium text-gray-800">
              {notification.title}
            </h2>
            <p className="text-gray-600">{notification.content}</p>
            <span className="text-sm text-gray-400">
              {notification.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
