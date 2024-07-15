// src/components/Loading.js

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <div className="flex flex-col items-center">
        <img
          src="/img/logo.png"
          alt="Loading"
          className="animate-heartbeat w-60"
        />
        <span className="mt-4 text-lg text-gray-800">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
