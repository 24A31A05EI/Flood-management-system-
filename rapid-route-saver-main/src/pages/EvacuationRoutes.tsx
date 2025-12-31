import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Navigation,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle,
  MapPin,
  Footprints,
  Car,
} from "lucide-react";
import { Link } from "react-router-dom";

const routes = [
  {
    id: 1,
    name: "Musi River to Jubilee Hills",
    status: "safe",
    distance: "8.5 km",
    duration: "25 mins",
    mode: "vehicle",
    capacity: "High",
    steps: [
      { type: "start", text: "Start from Musi River Bank", status: "warning" },
      { type: "turn", text: "Head North on NH65", status: "safe" },
      { type: "turn", text: "Take exit towards Banjara Hills", status: "safe" },
      { type: "turn", text: "Continue on Road No. 10", status: "safe" },
      { type: "end", text: "Arrive at Jubilee Hills Safe Zone", status: "safe" },
    ],
  },
  {
    id: 2,
    name: "Old City to LB Nagar",
    status: "caution",
    distance: "6.2 km",
    duration: "20 mins",
    mode: "vehicle",
    capacity: "Medium",
    steps: [
      { type: "start", text: "Start from Old City Area", status: "danger" },
      { type: "turn", text: "Head East on Salarjung Road", status: "warning" },
      { type: "blocked", text: "Avoid Charminar Road (Flooded)", status: "danger" },
      { type: "turn", text: "Take alternative via Malakpet", status: "safe" },
      { type: "end", text: "Arrive at LB Nagar Community Center", status: "safe" },
    ],
  },
  {
    id: 3,
    name: "Campus Evacuation Route",
    status: "safe",
    distance: "1.2 km",
    duration: "15 mins",
    mode: "walking",
    capacity: "High",
    steps: [
      { type: "start", text: "Start from Main Campus Building", status: "warning" },
      { type: "turn", text: "Exit via North Gate", status: "safe" },
      { type: "turn", text: "Walk along elevated pathway", status: "safe" },
      { type: "end", text: "Reach Campus Emergency Shelter", status: "safe" },
    ],
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "safe":
      return <Badge className="bg-alert-safe/10 text-alert-safe border-alert-safe/20">Safe Route</Badge>;
    case "caution":
      return <Badge className="bg-alert-warning/10 text-alert-warning border-alert-warning/20">Use Caution</Badge>;
    case "blocked":
      return <Badge className="bg-alert-danger/10 text-alert-danger border-alert-danger/20">Blocked</Badge>;
    default:
      return null;
  }
};

const getStepIcon = (type: string, status: string) => {
  const colorClass =
    status === "safe"
      ? "text-alert-safe"
      : status === "warning"
      ? "text-alert-warning"
      : "text-alert-danger";

  switch (type) {
    case "start":
      return <MapPin className={`h-5 w-5 ${colorClass}`} />;
    case "end":
      return <CheckCircle className={`h-5 w-5 ${colorClass}`} />;
    case "blocked":
      return <XCircle className={`h-5 w-5 ${colorClass}`} />;
    default:
      return <ArrowRight className={`h-5 w-5 ${colorClass}`} />;
  }
};

const EvacuationRoutes = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Evacuation Routes
          </h1>
          <p className="text-muted-foreground">
            Step-by-step evacuation guidance with real-time route status updates.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-8"
        >
          <Card variant="safe" className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-alert-safe/20">
                <Navigation className="h-6 w-6 text-alert-safe" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Get Directions</p>
                <p className="text-sm text-muted-foreground">Find nearest safe route</p>
              </div>
            </CardContent>
          </Card>
          <Card variant="warning" className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-alert-warning/20">
                <AlertTriangle className="h-6 w-6 text-alert-warning" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Report Blocked Road</p>
                <p className="text-sm text-muted-foreground">Help others stay safe</p>
              </div>
            </CardContent>
          </Card>
          <Link to="/map">
            <Card variant="info" className="cursor-pointer hover:shadow-lg transition-all h-full">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-alert-info/20">
                  <MapPin className="h-6 w-6 text-alert-info" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">View on Map</p>
                  <p className="text-sm text-muted-foreground">See all routes</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        {/* Routes List */}
        <div className="space-y-6">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card variant="elevated">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle>{route.name}</CardTitle>
                        {getStatusBadge(route.status)}
                      </div>
                      <CardDescription className="flex flex-wrap items-center gap-4">
                        <span className="flex items-center gap-1">
                          {route.mode === "walking" ? (
                            <Footprints className="h-4 w-4" />
                          ) : (
                            <Car className="h-4 w-4" />
                          )}
                          {route.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {route.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {route.capacity} capacity
                        </span>
                      </CardDescription>
                    </div>
                    <Button variant={route.status === "safe" ? "safe" : "warning"} className="gap-2">
                      <Navigation className="h-4 w-4" />
                      Start Navigation
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Route steps */}
                    <div className="space-y-4">
                      {route.steps.map((step, stepIndex) => (
                        <motion.div
                          key={stepIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + stepIndex * 0.05 }}
                          className="flex items-start gap-4"
                        >
                          <div className="flex flex-col items-center">
                            <div
                              className={`p-2 rounded-full ${
                                step.status === "safe"
                                  ? "bg-alert-safe/10"
                                  : step.status === "warning"
                                  ? "bg-alert-warning/10"
                                  : "bg-alert-danger/10"
                              }`}
                            >
                              {getStepIcon(step.type, step.status)}
                            </div>
                            {stepIndex < route.steps.length - 1 && (
                              <div className="w-0.5 h-8 bg-border mt-2" />
                            )}
                          </div>
                          <div className="flex-1 pt-1">
                            <p
                              className={`font-medium ${
                                step.status === "danger"
                                  ? "text-alert-danger"
                                  : "text-foreground"
                              }`}
                            >
                              {step.text}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EvacuationRoutes;
