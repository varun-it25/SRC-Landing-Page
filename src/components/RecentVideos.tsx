import React from 'react';

const RecentVideos: React.FC = () => {
  // Replace these with your company's recent YouTube video IDs.
  const videoIds = ['6MfejY_rn8o', 'rXlknXkVrHQ', 'ZYd71QsBfiQ'];

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <h2 className="text-2xl font-bold mb-4">Recent Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {videoIds.map((videoId, index) => (
          <div
            key={index}
            className="w-full aspect-video rounded-xl border bg-zinc-300 overflow-hidden"
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentVideos;
