const About = () => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "150+", label: "Aircraft Managed" },
    { number: "40+", label: "Countries Served" },
    { number: "99.7%", label: "Fleet Availability" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Leading Aviation
              <span className="block text-accent">Excellence Since 1998</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AeroLease has established itself as a premier aircraft leasing company, delivering 
              innovative financing solutions and comprehensive fleet management services to airlines, 
              lessors, and operators worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our experienced team combines deep industry knowledge with cutting-edge technology 
              to optimize aircraft utilization, reduce operational costs, and maximize asset value 
              throughout the aircraft lifecycle.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground">
                  Operating across six continents with local expertise in key aviation markets.
                </p>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="font-semibold text-accent mb-2">Technical Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Industry-leading maintenance standards and technical records management.
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="font-semibold text-accent mb-2">Financial Strength</h3>
                <p className="text-sm text-muted-foreground">
                  Strong balance sheet and diverse funding sources for competitive financing.
                </p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Customer Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated relationship management and 24/7 technical support worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;