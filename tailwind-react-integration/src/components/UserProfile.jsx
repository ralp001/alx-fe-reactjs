// src/components/UserProfile.jsx

function UserProfile() {
  return (
    // Container (div) Styling:
    // Base (default/mobile-first): bg-gray-100, mx-auto, my-10 (a slightly smaller my-value for mobile), rounded-lg, shadow-lg, text-center
    // Small screens (sm): p-4, max-w-xs (max width 320px)
    // Medium screens (md) and above: p-8, max-w-sm (max width 400px), my-20
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-10 md:my-20 rounded-lg shadow-lg text-center">
      
      {/* Image (img) Styling: */}
      {/* Base/Small screens (sm): w-24 h-24 (96px) */}
      {/* Medium screens (md) and above: w-36 h-36 (144px) */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto"
      />
      
      {/* Heading (h1) Styling: */}
      {/* Base/Small screens (sm): text-lg (18px) */}
      {/* Medium screens (md) and above: text-xl (20px) */}
      <h1 className="text-blue-800 my-4 text-lg md:text-xl">
        John Doe
      </h1>
      
      {/* Paragraph (p) Styling: */}
      {/* Base/Small screens (sm): text-sm (14px) */}
      {/* Medium screens (md) and above: text-base (16px) */}
      <p className="text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>

    </div>
  );
}

export default UserProfile;