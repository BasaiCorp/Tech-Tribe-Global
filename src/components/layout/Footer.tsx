const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} TechTribe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
