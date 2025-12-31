import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FloodMap, shelters, hospitals, evacuationRoutes, floodZones } from "@/components/FloodMap";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  CheckCircle, 
  AlertCircle, 
  MapPin, 
  Navigation, 
  Building2, 
  Hospital, 
  Phone, 
  Route,
  Shield,
  Bell,
  Users,
  Clock,
  ChevronRight
} from "lucide-react";

const alerts = [
  {
    type: "danger",
    title: "High Water Level",
    location: "Musi River Bank",
    time: "2 mins ago",
    icon: AlertTriangle,
    instruction: "Evacuate immediately via Route A",
  },
  {
    type: "warning",
    title: "Rising Water",
    location: "Hussain Sagar Area",
    time: "15 mins ago",
    icon: AlertCircle,
    instruction: "Prepare for evacuation",
  },
  {
    type: "safe",
    title: "Route Cleared",
    location: "HITEC City Road",
    time: "30 mins ago",
    icon: CheckCircle,
    instruction: "Safe for travel",
  },
];

const emergencyContacts = [
  { name: "Flood Control Room", number: "1800-123-4567", available: true },
  { name: "NDRF Helpline", number: "011-24363260", available: true },
  { name: "Medical Emergency", number: "108", available: true },
  { name: "Police Control", number: "100", available: true },
];

const LiveMap = () => {
  const [selectedTab, setSelectedTab] = useState("map");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                Live Flood Map
              </h1>
              <p className="text-muted-foreground">
                Real-time visualization of flood-affected zones, safe routes, and emergency services.
              </p>
            </div>
            <Badge className="bg-alert-danger animate-pulse w-fit">
              <Bell className="h-3 w-3 mr-1" />
              3 Active Alerts
            </Badge>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map */}
          <div className="lg:col-span-3">
            <FloodMap className="h-[600px]" />
          </div>

          {/* Citizen Module Sidebar */}
          <div className="space-y-4">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="map" className="text-xs">Alerts</TabsTrigger>
                <TabsTrigger value="routes" className="text-xs">Routes</TabsTrigger>
                <TabsTrigger value="help" className="text-xs">Help</TabsTrigger>
              </TabsList>

              {/* Alerts Tab */}
              <TabsContent value="map" className="space-y-4 mt-4">
                {/* Current Status */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card variant="danger">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Current Status</CardTitle>
                        <Badge variant="destructive" className="animate-pulse">
                          ALERT
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Active Zones</span>
                          <span className="font-semibold text-alert-danger">{floodZones.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Risk Level</span>
                          <span className="font-semibold text-alert-danger">High</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Evacuated</span>
                          <span className="font-semibold text-alert-safe">1,250</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Recent Alerts with Instructions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Bell className="h-4 w-4 text-alert-danger" />
                        Emergency Alerts
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {alerts.map((alert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className={`p-3 rounded-lg border ${
                            alert.type === "danger"
                              ? "bg-alert-danger/5 border-alert-danger/20"
                              : alert.type === "warning"
                              ? "bg-alert-warning/5 border-alert-warning/20"
                              : "bg-alert-safe/5 border-alert-safe/20"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <alert.icon
                              className={`h-5 w-5 mt-0.5 ${
                                alert.type === "danger"
                                  ? "text-alert-danger"
                                  : alert.type === "warning"
                                  ? "text-alert-warning"
                                  : "text-alert-safe"
                              }`}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm text-foreground">{alert.title}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <MapPin className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground truncate">
                                  {alert.location}
                                </span>
                              </div>
                              <p className="text-xs text-primary font-medium mt-2 flex items-center gap-1">
                                <Navigation className="h-3 w-3" />
                                {alert.instruction}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Routes & Shelters Tab */}
              <TabsContent value="routes" className="space-y-4 mt-4">
                {/* Safe Routes */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Route className="h-4 w-4 text-alert-safe" />
                      Safe Routes
                    </CardTitle>
                    <CardDescription>Recommended evacuation paths</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {evacuationRoutes.map((route, index) => (
                      <motion.div
                        key={route.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-3 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors ${
                          route.status === "Safe" 
                            ? "border-alert-safe/30 bg-alert-safe/5" 
                            : "border-alert-warning/30 bg-alert-warning/5"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">{route.name}</p>
                            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                              <span>{route.distance}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {route.time}
                              </span>
                            </div>
                          </div>
                          <Badge className={route.status === "Safe" ? "bg-alert-safe" : "bg-alert-warning"}>
                            {route.status}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                {/* Nearest Shelters */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      Nearest Shelters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {shelters.slice(0, 3).map((shelter, index) => (
                      <div key={index} className="p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">{shelter.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {shelter.available}/{shelter.capacity} available
                            </p>
                          </div>
                          <Button size="sm" variant="outline" className="h-7 text-xs">
                            <Navigation className="h-3 w-3 mr-1" />
                            Go
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Nearest Hospitals */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Hospital className="h-4 w-4 text-pink-500" />
                      Nearest Hospitals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {hospitals.slice(0, 3).map((hospital, index) => (
                      <div key={index} className="p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">{hospital.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {hospital.beds} beds • 24/7 Emergency
                            </p>
                          </div>
                          <Button size="sm" variant="outline" className="h-7 text-xs">
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Help Tab */}
              <TabsContent value="help" className="space-y-4 mt-4">
                {/* Emergency Contacts */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Phone className="h-4 w-4 text-alert-danger" />
                      Emergency Contacts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {emergencyContacts.map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-sm">{contact.name}</p>
                          <p className="text-xs text-primary font-mono">{contact.number}</p>
                        </div>
                        <Button size="sm" variant="default" className="h-7 text-xs bg-alert-safe hover:bg-alert-safe/90">
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                {/* Safety Instructions */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      Safety Instructions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      {[
                        "Move to higher ground immediately",
                        "Avoid walking through floodwater",
                        "Stay away from electrical equipment",
                        "Keep emergency kit ready",
                        "Follow official evacuation routes",
                      ].map((instruction, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-alert-safe mt-0.5" />
                          <span className="text-muted-foreground">{instruction}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* SOS Button */}
                <Button className="w-full h-14 bg-alert-danger hover:bg-alert-danger/90 text-lg font-bold animate-pulse">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Send SOS Alert
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LiveMap;
