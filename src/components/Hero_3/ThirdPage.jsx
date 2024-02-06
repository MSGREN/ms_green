import React, { useState } from 'react';
import pics from '../../assets/pics.jpg';

function ThirdPage() {
  const [videoVisible, setVideoVisible] = useState(false);

  const handlePlayClick = () => {
    // Set the video to be visible when the play button is clicked
    setVideoVisible(true);
  };

  const handleCancelClick = () => {
    // Set the video to be hidden when the cancel button is clicked
    setVideoVisible(false);
  };

  return (
    <div data-aos="fade-up" data-aos-duration="3000" className="flex flex-col items-center">
      <img src={pics} alt="Picture" className="mb-4" />
      
      <div className="relative bg-green-400 h-full rounded-full self-center-start-15 -m-80 w-20 ">
        <div className="absolute inset-0 flex items-center justify-center">
          {!videoVisible && (
            <button
              onClick={handlePlayClick}
              className="w-12 h-12 bg-green-500 rounded-full ring-4 ring-white grid place-items-center hover:bg-green-900 transition"
            >
              <span className="sr-only">Watch the video</span>
              <svg
                className="ml-1 w-4"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z"
                  fill="white"
                />
              </svg>
            </button>
          )}

          {videoVisible && (
            <div className="relative">
              <button
                onClick={handleCancelClick}
                className="absolute top-2 right-2 w-8 h-8 bg-red-500 rounded-full grid place-items-center hover:bg-red-700 transition"
              >
                <span className="sr-only">Cancel</span>
                <svg
                  className="w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66667 6.66667L13.3333 13.3333M6.66667 13.3333L13.3333 6.66667"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <iframe
                title="Vimeo Video"
                src="https://player.vimeo.com/video/854150536"
                width="800"
                height="400"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
