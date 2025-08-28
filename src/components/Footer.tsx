import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Spinx Aviation Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Spinx Aviation</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              SPINX AVIATION PRIVATE LIMITED strength revolves around a
              knowledgeable, professional and highly experienced management
              team.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <span className="text-xs">LI</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <span className="text-xs">TW</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Aircraft Leasing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Fleet Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Aviation Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Technical Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  News & Insights
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; 2025 Spinx Aviation
          </p>
          <p>
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

