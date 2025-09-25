// src/components/UserProfile.jsx

function UserProfile() {
  return (
    // Container (div) Styling:
    // Base Responsive styles remain.
    // Transition-shadow: enables smooth shadow changes.
    // hover:shadow-xl: makes the shadow larger on hover (Lifting effect).
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-10 md:my-20 rounded-lg shadow-lg text-center 
                transition-shadow duration-300 ease-in-out hover:shadow-xl">
      
      {/* Image (img) Styling: */}
      {/* Base Responsive styles remain. */}
      {/* transition-transform duration-300 ease-in-out: makes the scale change smooth. */}
      {/* hover:scale-110: makes the image grow 10% on hover. */}
      {/* cursor-pointer: adds visual cue that the image is interactive. */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto 
                   transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
      />
      
      {/* Heading (h1) Styling: */}
      {/* Base Responsive styles remain. */}
      {/* transition-colors duration-300 ease-in-out: makes the color change smooth. */}
      {/* hover:text-blue-500: changes the text to a lighter blue on hover. */}
      {/* cursor-pointer: adds visual cue. */}
      <h1 className="text-blue-800 my-4 text-lg sm:text-lg md:text-xl 
                   transition-colors duration-300 ease-in-out hover:text-blue-500 cursor-pointer">
        John Doe
      </h1>
      
      {/* Paragraph (p) Styling: */}
      <p className="text-gray-600 text-sm sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>

    </div>
  );
}

export default UserProfile;