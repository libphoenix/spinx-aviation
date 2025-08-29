import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import operationsBackground from "@/assets/operations-background.jpg";
import {
  AlertTriangle,
  BarChart3,
  Building,
  CheckCircle,
  Globe,
  MapPin,
  Plane,
  Shield,
  Target,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";

const GlobalOperations = () => {
  return (
    <div id="global-operations" className="bg-background">
      {/* Hero Section with Aircraft Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={operationsBackground}
            alt="Global aviation operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/30">
          </div>
        </div>
        {/* Floating Elements Overlay */}
        <div className="absolute inset-0 z-5">
          {/* Flying Airplanes */}
          <div className="absolute top-1/4 left-1/4 animate-bounce">
            <Plane className="w-8 h-8 text-primary-foreground/60 transform rotate-45" />
          </div>
          <div className="absolute top-3/4 right-1/4 animate-pulse">
            <Plane className="w-6 h-6 text-accent/60 transform -rotate-12" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-300">
            <Plane className="w-7 h-7 text-primary-foreground/40 transform rotate-90" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Problem Statement Section */}
              <div className="bg-background/80 backdrop-blur-md rounded-2xl p-8 my-4 border border-primary-foreground/20 hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-destructive/20 p-4 rounded-full">
                    <AlertTriangle className="w-12 h-12 text-destructive" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-destructive to-destructive/70 bg-clip-text text-transparent">
                  PROBLEM STATEMENT
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  The consensus is that aircraft lessors and financiers are
                  still reluctant to lease or finance aircraft to operators
                  world wide, which are considered high risk. This inconsistent
                  setup requires a significant expenditure on crew training,
                  pilot acquisition costs, maintenance approvals and programmes
                  etc. Fleet consistency can help to reduce costs and support a
                  leaner operation. If an airline has this in place, there will
                  be less reluctance for leasing and financing opportunities.
                </p>
              </div>

              {/* Solution Section */}
              <div className="bg-background/80 backdrop-blur-md rounded-2xl p-8 my-4 border border-primary-foreground/20 hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary/20 p-4 rounded-full">
                    <Plane className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SOLUTION
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  Spear headed by Mr. Varun Yadav with over a decade and more
                  years of experience; in the aviation industry, SPINX AVIATION
                  PRIVATE LIMITED strength revolves around a knowledgeable,
                  professional and highly experienced management team. Their
                  expertise enables SPINX AVIATION PRIVATE LIMITED to offer
                  flexible and uniquely structured aircraft acquisition programs
                  tailored to the customer's needs and affordability.
                </p>
              </div>
            </div>

            {/* <div className="flex flex-wrap gap-4 justify-center"> */}
            {/*   <Button size="lg" className="animate-fade-in"> */}
            {/*     View Network Map */}
            {/*   </Button> */}
            {/*   <Button variant="outline" size="lg" className="animate-fade-in"> */}
            {/*     Global Statistics */}
            {/*   </Button> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Market Analysis
            </h2>
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6 mb-8 backdrop-blur-sm border border-border/50">
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                Global Air Cargo Market Growth
              </p>
              <p className="text-lg text-muted-foreground">
                Projected to grow at a{" "}
                <span className="font-bold text-primary">CAGR of 8%</span>{" "}
                to reach{" "}
                <span className="font-bold text-primary">
                  US$ 223.29 Billion
                </span>{" "}
                from 2021 to 2028
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                (The Insights Partner, 2021)
              </p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-20">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  Overview of Global Transport and Air Freight Industry
                </h3>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                The global air freight industry presents a unique blend of
                challenges and opportunities with interconnected economies, a
                growing global population, and diverse flows of goods and
                resources, the sector has immense potential for driving
                international trade and economic growth. However, several
                factors, including infrastructure constraints, regulatory
                complexities, and evolving market dynamics, continue to hinder
                the industry from reaching its full potential.
              </p>
            </div>
          </div>

          {/* Market Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-bold">
                  Industry Size and Potential
                </h4>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0">
                  </span>
                  The global air freight market accounts for a substantial share
                  of Freight Tonne-Kilometers, reflecting its critical role in
                  international trade, while also leaving room for growth in
                  emerging regions.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0">
                  </span>
                  With nearly 200 countries spanning over 510 million km², the
                  industry serves highly diverse markets, each with distinct
                  demands, infrastructure capabilities, and regulatory
                  frameworks.
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-bold">Key Drivers of Growth</h4>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0">
                  </span>
                  Increased global connectivity, infrastructure development, and
                  harmonized regulatory reforms are key drivers of growth in the
                  air freight industry.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0">
                  </span>
                  Strategic initiatives to enhance cross-border logistics and
                  streamline regulatory processes are critical for attracting
                  and retaining international air cargo players.
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-bold">
                  Opportunities for Investors
                </h4>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0">
                  </span>
                  Infrastructure Investment: Expanding airport capacity and
                  adopting advanced technologies present major opportunities for
                  strengthening global air freight operations.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0">
                  </span>
                  Collaborative Initiatives: Partnerships among governments,
                  industry stakeholders, and international organizations are
                  essential to drive efficiency, standardization, and
                  sustainable growth.
                </li>
              </ul>
            </Card>
          </div>

          <div className="mb-20">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                The global air freight sector, while navigating ongoing
                challenges, holds significant promise for sustained growth.
                Addressing infrastructure constraints, regulatory complexities,
                and accelerating the adoption of technological solutions are
                crucial steps toward unlocking the industry’s full potential.
                Investors and stakeholders are encouraged to explore
                opportunities within the sector’s rapidly evolving global
                landscape.
              </p>
            </div>
          </div>

          {/* SWOT Analysis */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
              SWOT Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Strengths */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-primary mr-3" />
                  <h4 className="text-xl font-bold text-primary">STRENGTHS</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Solid economic foundation and scale:
                  </span>
                  In 2023, the global aviation sector supported{" "}
                  <span className="font-semibold text-foreground">
                    86.5 million jobs and contributed $4.1 trillion
                  </span>{" "}
                  to the global economy—representing about{" "}
                  <span className="font-semibold text-foreground">
                    3.9% of global GDP.
                  </span>{" "}
                  Moreover, aviation carried{"  "}
                  <span className="font-semibold text-foreground">
                    33% of global trade by value,
                  </span>{" "}
                  facilitating high-value shipments like perishables and medical
                  supplies
                </p>
              </Card>

              {/* Weaknesses */}
              <Card className="p-6 bg-gradient-to-br from-destructive/5 to-destructive/10 border border-destructive/20 hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <div className="flex items-center mb-4">
                  <XCircle className="w-8 h-8 text-destructive mr-3" />
                  <h4 className="text-xl font-bold text-destructive">
                    WEAKNESSES
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Volatile demand trends:
                  </span>{" "}
                  While the latter part of 2023 and 2024 saw robust cargo
                  demand, recent months have shown a slowdown. For instance,
                  December 2024 demand was up 6.1% from the prior year—but
                  February 2025 experienced the{" "}
                  <span className="font-semibold text-foreground">
                    first year-over-year decline since mid-2023
                  </span>, as noted by IATA’s Director General Willie Walsh
                </p>
              </Card>

              {/* Opportunities */}
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-accent mr-3" />
                  <h4 className="text-xl font-bold text-accent">
                    OPPORTUNITIES
                  </h4>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    The Timing is Right
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">
                      Strong recovery momentum and rising cargo volumes:
                    </span>
                    Full-year 2024 air cargo demand (measured in CTKs) grew{" "}
                    <span className="font-semibold text-foreground">
                      11.3%
                    </span>{" "}
                    over 2023, exceeding the record levels of 2021. Capacity
                    (ACTKs) also rose by
                    <span className="font-semibold text-foreground">
                      7.4%
                    </span>
                    , signaling renewed strength and growth potential
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">
                      Passenger traffic recovery feeding cargo growth:
                    </span>{" "}
                    In 2023, global passenger traffic reached{" "}
                    <span className="font-semibold text-foreground">
                      94.1%
                    </span>{" "}
                    of 2019 levels, with a strong year-end showing. This
                    rejuvenation supports belly capacity that reinforces air
                    cargo operations
                  </p>
                </div>
              </Card>

              {/* Threats */}
              <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-orange-500/10 border border-orange-500/20 hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-500 mr-3" />
                  <h4 className="text-xl font-bold text-orange-500">THREATS</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    External disruptions and geopolitical risks:
                  </span>{" "}
                  Events such as geopolitical instability (e.g., Red Sea
                  disruptions) and trade tensions continue to expose
                  vulnerabilities in global cargo networks. These challenges can
                  cause route disruptions, capacity shifts, and unpredictable
                  demand fluctuations
                </p>
              </Card>
            </div>
          </div>

          {/* Business Model */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border/50 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Building className="w-12 h-12 text-primary mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Business Model
              </h3>
            </div>
            <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <span className="font-bold text-foreground">
                SPINX AVIATION PRIVATE LIMITED
              </span>{" "}
              purpose is to co-create, nurture and technologically advance your
              airline continually to the best version of itself! Hence, we are
              rendering our expertise into three categories of services to meet
              the 360 degree requirements of the aviation industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalOperations;
