const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-4 text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} TechTribe. All rights reserved.</p>
        {/* Add additional footer content if needed */}
      </div>
    </footer>
  );
};

export default Footer;
