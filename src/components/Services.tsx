import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  GraduationCap,
  Plane,
  Settings,
  Shield,
  Users,
  TrendingUp,
  Building,
  FileText,
  SearchCheck,
  PlaneTakeoff,
  Calendar,
  Wrench,
  ShoppingCart,
  Cog,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import boeing747Image from "@/assets/boeing-747-200f.jpg";
import boeing737200Image from "@/assets/boeing-737-200f.jpg";
import boeing727Image from "@/assets/boeing-727-200f.jpg";
import boeing737400Image from "@/assets/boeing-737-400f.jpg";
import boeing737300Image from "@/assets/boeing-737-300f.jpg";
import fokker27Image from "@/assets/fokker-27.jpg";
import bae146100Image from "@/assets/bae146-100.jpg";
import bae146300Image from "@/assets/bae146-300.jpg";

const Services = () => {
  const mainServices = [
    { name: "MARKET ANALYSIS OPERATING", icon: TrendingUp },
    { name: "ENVIRONMENT", icon: Building },
    { name: "BUSINESS PLANNING", icon: FileText },
    { name: "FEASIBILITY STUDIES", icon: SearchCheck },
    { name: "AIRPLANE SELECTION & ACQUISITION", icon: PlaneTakeoff },
    { name: "OPERATIONAL PLANNING", icon: Calendar },
    { name: "MAINTENANCE PLANNING", icon: Wrench },
    { name: "COMMERCIAL PLANNING", icon: ShoppingCart },
    { name: "MAINTENANCE SUPPORT", icon: Cog },
    { name: "OPERATIONAL SUPPORT", icon: Headphones },
    { name: "REGULATORY COMPLIANCE", icon: ShieldCheck },
  ];

  const acmiServices = [
    "AIRCRAFT",
    "CREW",
    "MAINTENANCE",
    "INSURANCE MAINTENANCE SUPPORT",
    "OPERATIONAL SUPPORT",
  ];

  const trainingTypes = [
    "AIRCRAFT TYPE CONVERSIONS",
    "AIRCRAFT TYPE INITIAL TRAINING / TYPE RATING; CURRENCY FOR CREWS",
    "RECURRENT TRAINING",
  ];

  const aircraftPortfolio = [
    {
      model: "B747-200F",
      payload: "105 TONS",
      cruisingSpeed: "0.84 Mach",
      range: "5300 Nautical Miles",
      takeoffLength: "10900 ft",
      landingLength: "12000 ft",
      image: boeing747Image,
    },
    {
      model: "B737-200F",
      payload: "14-15 TONS",
      cruisingSpeed: "0.78 Mach",
      range: "1200 Nautical Miles",
      takeoffLength: "6000 ft",
      landingLength: "5000 ft",
      image: boeing737200Image,
    },
    {
      model: "B727-200F",
      payload: "14-15 TONS",
      cruisingSpeed: "0.78 Mach",
      range: "1200 Nautical Miles",
      takeoffLength: "6000 ft",
      landingLength: "5000 ft",
      image: boeing727Image,
    },
    {
      model: "B737-400F",
      payload: "20 TONS",
      cruisingSpeed: "0.82 Mach",
      range: "2750 Nautical Miles",
      takeoffLength: "7500 ft",
      landingLength: "5000 ft",
      image: boeing737400Image,
    },
    {
      model: "B737-300F",
      payload: "16 TONS",
      cruisingSpeed: "0.82 Mach",
      range: "2200 Nautical Miles",
      takeoffLength: "7500 ft",
      landingLength: "4100 ft",
      image: boeing737300Image,
    },
    {
      model: "FOKKER 27",
      payload: "7 TONS",
      cruisingSpeed: "0.34 Mach",
      range: "900 Nautical Miles",
      takeoffLength: "4000 ft",
      landingLength: "3300 ft",
      image: fokker27Image,
    },
    {
      model: "BAE146-100",
      configuration: "77 ECONOMY SEATS",
      cruisingSpeed: "0.73 Mach",
      range: "1600 Nautical Miles",
      takeoffLength: "3921 ft",
      image: bae146100Image,
    },
    {
      model: "BAE146-300",
      configuration: "110 ECONOMY SEATS",
      cruisingSpeed: "0.74 Mach",
      range: "1500 Nautical Miles",
      takeoffLength: "5000 ft",
      image: bae146300Image,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive aviation solutions tailored to meet your operational
            and financial objectives.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Core Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in text-center"
                >
                  <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{service.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ACMI/Wet Lease Programme */}
        <div className="mb-20">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-card">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center items-center mb-4">
                <Plane className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-3xl text-primary mb-4">
                ACMI / WET LEASE PROGRAMME
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg">
                Complete aircraft, crew, maintenance, and insurance solutions
                for your operational needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {acmiServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center text-foreground bg-card/30 rounded-lg p-3"
                  >
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crew Training Programme */}
        <div className="mb-20">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-card">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center items-center mb-4">
                <GraduationCap className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-3xl text-primary mb-4">
                CREW TRAINING PROGRAMME
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg mb-6">
                We also arrange and provide, crew training program for qualified
                pilots.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-primary mb-4">
                  Types of training include:
                </h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {trainingTypes.map((training, index) => (
                    <div
                      key={index}
                      className="flex items-center text-foreground bg-card/30 rounded-lg p-3"
                    >
                      <div className="w-3 h-3 bg-accent rounded-full mr-3">
                      </div>
                      <span className="font-medium">{training}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  All trainings are carried out by qualified instructors and
                  Full Simulator Training on
                  <span className="font-semibold text-primary">
                    IATA/ESSA/FAA approved simulators
                  </span>. Most training is carried out for our own
                  requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Aircraft Portfolio */}
        <div id="fleet" className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-4 text-primary">
            FEATURING
          </h3>
          <h4 className="text-2xl font-semibold text-center mb-12 text-muted-foreground">
            AIRCRAFT PORTFOLIO
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aircraftPortfolio.map((aircraft, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={aircraft.image}
                    alt={aircraft.model}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg font-bold">
                    {aircraft.model}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {aircraft.payload && (
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Payload:</span>
                        <span className="font-semibold text-foreground">
                          {aircraft.payload}
                        </span>
                      </div>
                    )}
                    {aircraft.configuration && (
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          Configuration:
                        </span>
                        <span className="font-semibold text-foreground">
                          {aircraft.configuration}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Cruising Speed:
                      </span>
                      <span className="font-semibold text-foreground">
                        {aircraft.cruisingSpeed}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Range:</span>
                      <span className="font-semibold text-foreground">
                        {aircraft.range}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Takeoff Length:
                      </span>
                      <span className="font-semibold text-foreground">
                        {aircraft.takeoffLength}
                      </span>
                    </div>
                    {aircraft.landingLength && (
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          Landing Length:
                        </span>
                        <span className="font-semibold text-foreground">
                          {aircraft.landingLength}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

