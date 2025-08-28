import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Professional aircraft fleet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-accent/35">
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pb-16 my-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            WE ARE AN EXPERT TEAM COMMITTED TO REDUCE
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent text-4xl">
              YOUR COMPLEXITIES OF MANAGING AN
            </span>
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ENTIRE AIRLINE!
          </h1>

          <p className="text-base md:text-lg mb-4 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            SPINX AVIATION PRIVATE LIMITED is a Bengaluru, Karnataka India based
            privately owned company that aims to reduce the complexities of the
            aerospace industry. Whether it is making your dream of owning an
            airline come to reality with our new startup air line services or if
            you require to expand your fleet with upgraded wings with our fleet
            expansion program, we cater to 360 degree aviation services which
            includes being a lesser as well.
          </p>
          <p className="text-base md:text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Our product portfolio includes a variety of high quality high
            utility transport aircraft ranging from the narrow body Boeing 737s
            through the wide body Boeing B747-200 series. In the smaller
            aircraft market Spinx Aviation Private Limited has Short 360 & Foker
            27 MK - 500 aircrafts available in various configurations.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
