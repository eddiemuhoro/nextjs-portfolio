import Image from 'next/image';
import React from 'react';

const FiverrCard: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto my-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 h-32 flex items-center justify-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/825/825437.png"
            alt="Fiverr Logo"
            width={64}
            height={64}
            className="h-16 w-16"
          />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800">
            Check out my Fiverr Gigs
          </h3>
          <p className="text-gray-600 my-2">
            Hi, Im a full-stack web developer with expertise in React.js |
            Next.js, Node.js, and AWS. Click the button below to explore my
            Fiverr gigs!
          </p>
          <a
            href="https://www.fiverr.com/eddiemuhoro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-md shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            Visit my Fiverr
          </a>
        </div>
      </div>
    </div>
  );
};

export default FiverrCard;
