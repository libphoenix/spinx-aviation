import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const offices = [
    {
      name: "Mr VARUN YADAV",
      position: "FOUNDER & CEO",
      phone: "+91 99010 49589",
      email: "varun_varun62@yahoo.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            So become the early adopter with Spinx Aviation and tap into the
            business opportunities that awaits in the skies of West Africa…
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {offices.map((office, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {office.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium">{office.position}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Phone:</span>
                  <p className="text-sm font-medium">{office.phone}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Email:</span>
                  <p className="text-sm font-medium text-accent">
                    {office.email}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

