import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Hospital,
  MapPin,
  Users,
  Phone,
  Navigation,
  Clock,
  Bed,
  Car,
} from "lucide-react";

const shelters = [
  {
    id: 1,
    name: "Jubilee Hills Community Center",
    type: "shelter",
    address: "Road No. 10, Jubilee Hills",
    distance: "2.5 km",
    capacity: 500,
    available: 320,
    phone: "+91 40 1234 5678",
    facilities: ["Food", "Water", "Medical", "Beds"],
    status: "open",
  },
  {
    id: 2,
    name: "HITEC City Relief Camp",
    type: "shelter",
    address: "Madhapur, HITEC City",
    distance: "5.2 km",
    capacity: 400,
    available: 180,
    phone: "+91 40 2345 6789",
    facilities: ["Food", "Water", "Beds"],
    status: "open",
  },
  {
    id: 3,
    name: "LB Nagar School Shelter",
    type: "shelter",
    address: "LB Nagar Main Road",
    distance: "3.8 km",
    capacity: 300,
    available: 45,
    phone: "+91 40 3456 7890",
    facilities: ["Food", "Water"],
    status: "filling",
  },
];

const hospitals = [
  {
    id: 1,
    name: "Apollo Hospital",
    type: "hospital",
    address: "Jubilee Hills",
    distance: "3.1 km",
    beds: 200,
    available: 45,
    phone: "+91 40 4567 8901",
    facilities: ["Emergency", "ICU", "Surgery"],
    status: "open",
  },
  {
    id: 2,
    name: "Care Hospital",
    type: "hospital",
    address: "Banjara Hills",
    distance: "4.5 km",
    beds: 150,
    available: 28,
    phone: "+91 40 5678 9012",
    facilities: ["Emergency", "ICU"],
    status: "open",
  },
  {
    id: 3,
    name: "KIMS Hospital",
    type: "hospital",
    address: "Secunderabad",
    distance: "6.8 km",
    beds: 180,
    available: 62,
    phone: "+91 40 6789 0123",
    facilities: ["Emergency", "ICU", "Surgery", "Trauma"],
    status: "open",
  },
];

const getAvailabilityColor = (available: number, total: number) => {
  const ratio = available / total;
  if (ratio > 0.5) return "text-alert-safe";
  if (ratio > 0.2) return "text-alert-warning";
  return "text-alert-danger";
};

const Shelters = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Shelters & Hospitals
          </h1>
          <p className="text-muted-foreground">
            Find the nearest emergency shelters and medical facilities with real-time availability.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 mb-8"
        >
          <Button variant="default" className="gap-2">
            <Building2 className="h-4 w-4" />
            All
          </Button>
          <Button variant="outline" className="gap-2">
            <Building2 className="h-4 w-4" />
            Shelters
          </Button>
          <Button variant="outline" className="gap-2">
            <Hospital className="h-4 w-4" />
            Hospitals
          </Button>
        </motion.div>

        {/* Shelters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Emergency Shelters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shelters.map((shelter, index) => (
              <motion.div
                key={shelter.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card variant="interactive" className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <Badge
                        className={
                          shelter.status === "open"
                            ? "bg-alert-safe/10 text-alert-safe border-alert-safe/20"
                            : "bg-alert-warning/10 text-alert-warning border-alert-warning/20"
                        }
                      >
                        {shelter.status === "open" ? "Open" : "Filling Up"}
                      </Badge>
                    </div>
                    <CardTitle className="mt-4">{shelter.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {shelter.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Car className="h-4 w-4 text-muted-foreground" />
                        <span>{shelter.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className={getAvailabilityColor(shelter.available, shelter.capacity)}>
                          {shelter.available}/{shelter.capacity}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {shelter.facilities.map((facility) => (
                        <Badge key={facility} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="safe" className="flex-1 gap-2">
                        <Navigation className="h-4 w-4" />
                        Navigate
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hospitals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Hospital className="h-5 w-5 text-alert-danger" />
            Hospitals & Medical Facilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital, index) => (
              <motion.div
                key={hospital.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card variant="interactive" className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-xl bg-alert-danger/10">
                        <Hospital className="h-6 w-6 text-alert-danger" />
                      </div>
                      <Badge className="bg-alert-safe/10 text-alert-safe border-alert-safe/20">
                        24/7 Open
                      </Badge>
                    </div>
                    <CardTitle className="mt-4">{hospital.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {hospital.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Car className="h-4 w-4 text-muted-foreground" />
                        <span>{hospital.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 text-muted-foreground" />
                        <span className={getAvailabilityColor(hospital.available, hospital.beds)}>
                          {hospital.available} beds
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {hospital.facilities.map((facility) => (
                        <Badge key={facility} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="danger" className="flex-1 gap-2">
                        <Navigation className="h-4 w-4" />
                        Navigate
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Shelters;
