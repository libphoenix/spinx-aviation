import landingAircraft from "@/assets/landing-aircraft.jpg";

const Landing = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={landingAircraft}
          alt="Professional aircraft fleet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/40">
        </div>
      </div>

      {/* Company Name */}
      <div className="relative z-10 text-center text-primary-foreground animate-fade-in">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent drop-shadow-2xl">
          SPINX AVIATION
        </h1>
        <p className="text-xl md:text-2xl mt-8 text-primary-foreground/90 font-light tracking-wide">
          YOUR AVIATION EXCELLENCE PARTNER
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;