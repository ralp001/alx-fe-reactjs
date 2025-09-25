// src/components/UserProfile.jsx

function UserProfile() {
  return (
    // Container (div) Styling:
    // Base: p-4, max-w-xs, my-10
    // sm: p-4, max-w-xs
    // md: p-8, max-w-sm, my-20
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-10 md:my-20 rounded-lg shadow-lg text-center">
      
      {/* Image (img) Styling: */}
      {/* Base: w-24 h-24 */}
      {/* sm: w-24 h-24 (Explicitly included as requested) */}
      {/* md: w-36 h-36 */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto"
      />
      
      {/* Heading (h1) Styling: */}
      {/* Base: text-lg */}
      {/* sm: text-lg */}
      {/* md: text-xl */}
      <h1 className="text-blue-800 my-4 text-lg sm:text-lg md:text-xl">
        John Doe
      </h1>
      
      {/* Paragraph (p) Styling: */}
      {/* Base: text-sm */}
      {/* sm: text-sm */}
      {/* md: text-base */}
      <p className="text-gray-600 text-sm sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>

    </div>
  );
}

export default UserProfile;