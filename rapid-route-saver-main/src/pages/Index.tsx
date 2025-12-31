import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Map, Route, Building2, Shield, Users, Activity, ArrowRight, Droplets, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { WaterWaves } from "@/components/WaterWaves";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const features = [
  {
    icon: Map,
    title: "Live Flood Tracking",
    description: "Real-time visualization of flood-affected zones with street-level precision.",
    color: "text-alert-danger",
    bg: "bg-alert-danger/10",
  },
  {
    icon: Route,
    title: "Safe Evacuation Routes",
    description: "AI-optimized pathways to guide citizens away from danger zones.",
    color: "text-alert-safe",
    bg: "bg-alert-safe/10",
  },
  {
    icon: Building2,
    title: "Shelter Locator",
    description: "Find nearest emergency shelters and hospitals with real-time availability.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Authority Dashboard",
    description: "Decision support tools for emergency responders and rescue teams.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

const stats = [
  { value: 2500, suffix: "+", label: "Lives Protected" },
  { value: 150, suffix: "", label: "Active Shelters" },
  { value: 98, suffix: "%", label: "Route Accuracy" },
  { value: 24, suffix: "/7", label: "Monitoring" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
        
        {/* Water waves animation */}
        <WaterWaves />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
                <Droplets className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">
                  Hyper-Local Flood Response System
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight"
            >
              Transforming Flood Data into{" "}
              <span className="text-secondary">Life-Saving</span> Decisions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
            >
              ACTION, NOT JUST PREDICTION. Street-level guidance for citizens and real-time 
              decision support for authorities during floods.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/map">
                <Button variant="hero" size="xl" className="gap-2 group">
                  <Map className="h-5 w-5" />
                  View Live Flood Map
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/routes">
                <Button variant="heroOutline" size="xl" className="gap-2">
                  <Navigation className="h-5 w-5" />
                  Find Safe Routes
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Core Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive system designed for hyper-local, action-oriented flood response.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="interactive" className="h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Be Prepared. Stay Safe.
            </h2>
            <p className="text-muted-foreground mb-8">
              Access real-time flood information and evacuation guidance. 
              Every second counts during an emergency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="gap-2">
                  <Activity className="h-5 w-5" />
                  Authority Dashboard
                </Button>
              </Link>
              <Link to="/shelters">
                <Button variant="outline" size="lg" className="gap-2">
                  <Building2 className="h-5 w-5" />
                  Find Shelters
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-primary" />
              <span className="font-display font-bold text-foreground">FloodGuard</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 FloodGuard. Hyper-local flood response system.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
