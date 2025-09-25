// src/components/UserProfile.jsx

function UserProfile() {
  return (
    // Container (div.user-profile) Styling:
    // bg-gray-100: cool gray background
    // p-8: padding of 8 units
    // max-w-sm: maximum width of 400px
    // mx-auto: center horizontally
    // my-20: center vertically on the page
    // rounded-lg: medium rounded border
    // shadow-lg: large shadow for depth
    // text-center: centers the text content inside the container
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      
      {/* Image (img) Styling: */}
      {/* rounded-full: makes the image circular */}
      {/* w-36 h-36: sets width and height to 144px (150px is approximate) */}
      {/* mx-auto: centers the image (works because img is an inline/inline-block element within a text-centered parent) */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto"
      />
      
      {/* Heading (h1) Styling: */}
      {/* text-xl: larger font size (20px) */}
      {/* text-blue-800: deep blue color */}
      {/* my-4: vertical margin (top and bottom) of 4 units */}
      <h1 className="text-xl text-blue-800 my-4">
        John Doe
      </h1>
      
      {/* Paragraph (p) Styling: */}
      {/* text-gray-600: gray text color */}
      {/* text-base: default font size (16px) - slightly smaller than text-xl heading */}
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>

    </div>
  );
}

export default UserProfile;