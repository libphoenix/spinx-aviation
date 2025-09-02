import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Fleet = () => {
  const aircraft = [
    {
      model: "Boeing 737-800",
      type: "Narrow-body",
      capacity: "162-189 passengers",
      range: "3,383 miles",
      features: ["Fuel Efficient", "High Reliability", "Global Support"],
      status: "Upon request",
    },
    {
      model: "Airbus A320neo",
      type: "Narrow-body",
      capacity: "140-180 passengers",
      range: "3,500 miles",
      features: ["New Engine Option", "Reduced Emissions", "Advanced Avionics"],
      status: "Upon request",
    },
    {
      model: "Boeing 787-9",
      type: "Wide-body",
      capacity: "242-290 passengers",
      range: "8,786 miles",
      features: ["Composite Construction", "Enhanced Comfort", "Long Range"],
      status: "Upon request",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Aircraft
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our modern fleet of commercial aircraft, maintained to the
            highest industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aircraft.map((plane, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-primary">
                    {plane.model}
                  </CardTitle>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      plane.status === "Available"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {plane.status}
                  </span>
                </div>
                <CardDescription className="text-sm font-medium text-foreground/70">
                  {plane.type}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Capacity:</span>
                    <p className="font-medium">{plane.capacity}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Range:</span>
                    <p className="font-medium">{plane.range}</p>
                  </div>
                </div>

                <div>
                  <span className="text-muted-foreground text-sm">
                    Key Features:
                  </span>
                  <ul className="mt-2 space-y-1">
                    {plane.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2">
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="aviation"
                  className="w-full mt-4"
                  disabled={plane.status !== "Available"}
                >
                  {plane.status === "Available"
                    ? "Request Quote"
                    : "Notify When Available"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
