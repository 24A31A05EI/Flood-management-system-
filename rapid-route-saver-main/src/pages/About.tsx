import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Droplets,
  Target,
  Lightbulb,
  Rocket,
  MapPin,
  Route,
  Building2,
  Shield,
  Wifi,
  Smartphone,
  Brain,
  Satellite,
  Radio,
  Cloud,
} from "lucide-react";

const timelineItems = [
  {
    icon: Droplets,
    title: "The Problem",
    description:
      "Floods cause devastating losses of life and property. Traditional warning systems lack hyper-local precision and actionable guidance for citizens.",
    color: "text-alert-danger",
    bg: "bg-alert-danger/10",
  },
  {
    icon: Target,
    title: "Our Solution",
    description:
      "An action-oriented flood response system that transforms real-time flood data into life-saving decisions through interactive maps and smart guidance.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Lightbulb,
    title: "The Impact",
    description:
      "Street-level evacuation guidance for citizens and real-time decision support for authorities, reducing response time and saving lives.",
    color: "text-alert-safe",
    bg: "bg-alert-safe/10",
  },
];

const features = [
  { icon: MapPin, title: "Hyper-Local Tracking", description: "Street & campus-level flood monitoring" },
  { icon: Route, title: "Smart Evacuation", description: "AI-optimized safe route guidance" },
  { icon: Building2, title: "Shelter Locator", description: "Real-time availability updates" },
  { icon: Shield, title: "Authority Tools", description: "Decision support dashboard" },
];

const futureFeatures = [
  { icon: Cloud, title: "Weather Forecasts", description: "Real-time weather integration" },
  { icon: Wifi, title: "IoT Sensors", description: "Water-level monitoring sensors" },
  { icon: Smartphone, title: "Mobile Alerts", description: "Push notification system" },
  { icon: Brain, title: "AI Optimization", description: "ML-based evacuation planning" },
  { icon: Radio, title: "Emergency Integration", description: "Government system connectivity" },
  { icon: Satellite, title: "Satellite Imagery", description: "Damage assessment analysis" },
];

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary mb-6"
          >
            <Droplets className="h-10 w-10 text-primary-foreground" />
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            About <span className="gradient-text">FloodGuard</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A hyper-local, action-oriented flood response system designed to save lives
            through real-time guidance and smart decision support.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-10">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-8 md:space-y-0">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className={`md:flex md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 md:px-8">
                    <Card variant="elevated" className="relative">
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                          <item.icon className={`h-7 w-7 ${item.color}`} />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"
                    style={{ top: `${index * 33.33 + 16.66}%` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-10">
            Core Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="interactive" className="text-center h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                    >
                      <feature.icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Scope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-4">
            Future Scope
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Our roadmap for expanding FloodGuard's capabilities to provide even more
            comprehensive flood response solutions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/50 shrink-0">
                      <feature.icon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
            <CardHeader>
              <CardTitle className="text-center">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {["React", "TypeScript", "Leaflet.js", "Framer Motion", "Tailwind CSS", "OpenStreetMap"].map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
