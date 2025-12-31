import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Progress } from "@/components/ui/progress";
import {
  AlertTriangle,
  Users,
  Building2,
  Activity,
  TrendingUp,
  TrendingDown,
  MapPin,
  Clock,
  Shield,
  Truck,
  Radio,
  BarChart3,
  Target,
  Package,
  Wrench,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  Zap,
  Droplets,
} from "lucide-react";

const overviewStats = [
  {
    title: "Active Flood Zones",
    value: 3,
    change: "+1",
    trend: "up",
    icon: AlertTriangle,
    color: "text-alert-danger",
    bg: "bg-alert-danger/10",
  },
  {
    title: "People Evacuated",
    value: 2450,
    change: "+320",
    trend: "up",
    icon: Users,
    color: "text-alert-safe",
    bg: "bg-alert-safe/10",
  },
  {
    title: "Shelters Active",
    value: 12,
    change: "0",
    trend: "stable",
    icon: Building2,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Rescue Teams",
    value: 45,
    change: "+5",
    trend: "up",
    icon: Shield,
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

const riskZones = [
  { name: "Musi River Bank", level: "Critical", severity: 95, population: 12000, waterLevel: "3.2m", trend: "rising" },
  { name: "Old City - Charminar", level: "High", severity: 78, population: 8500, waterLevel: "2.5m", trend: "stable" },
  { name: "Hussain Sagar Area", level: "Medium", severity: 55, population: 5200, waterLevel: "1.8m", trend: "falling" },
  { name: "Secunderabad Railway", level: "Low", severity: 25, population: 3000, waterLevel: "0.5m", trend: "falling" },
];

const rescuePriorities = [
  { id: 1, location: "Block A - Musi Bank", people: 25, priority: "Critical", status: "In Progress", team: "Alpha", eta: "5 min" },
  { id: 2, location: "Elderly Care Home", people: 45, priority: "Critical", status: "Queued", team: "Bravo", eta: "15 min" },
  { id: 3, location: "School Building", people: 80, priority: "High", status: "Queued", team: "Charlie", eta: "25 min" },
  { id: 4, location: "Residential Complex", people: 120, priority: "High", status: "Queued", team: "Delta", eta: "40 min" },
  { id: 5, location: "Market Area", people: 35, priority: "Medium", status: "Pending", team: "-", eta: "-" },
];

const resources = [
  { name: "Rescue Boats", total: 50, deployed: 35, available: 15 },
  { name: "Ambulances", total: 30, deployed: 22, available: 8 },
  { name: "Relief Trucks", total: 40, deployed: 28, available: 12 },
  { name: "Medical Teams", total: 20, deployed: 15, available: 5 },
  { name: "Food Packets", total: 50000, deployed: 32000, available: 18000 },
  { name: "Water Bottles", total: 100000, deployed: 65000, available: 35000 },
];

const recentActivities = [
  { action: "Evacuation Complete", location: "Abids Area", time: "5 mins ago", type: "success" },
  { action: "New Alert Issued", location: "Malakpet", time: "12 mins ago", type: "warning" },
  { action: "Shelter Opened", location: "HITEC City", time: "25 mins ago", type: "info" },
  { action: "Road Blocked", location: "MG Road", time: "35 mins ago", type: "danger" },
  { action: "Rescue Team Deployed", location: "Begumpet", time: "1 hour ago", type: "info" },
];

const rescueTeams = [
  { id: "Team Alpha", status: "Active", location: "Musi River", members: 8, vehicle: "Boat-01" },
  { id: "Team Bravo", status: "En Route", location: "Old City", members: 6, vehicle: "Boat-02" },
  { id: "Team Charlie", status: "Standby", location: "Base Camp", members: 10, vehicle: "Boat-03" },
  { id: "Team Delta", status: "Active", location: "Hussain Sagar", members: 7, vehicle: "Boat-04" },
];

const recoveryTasks = [
  { task: "Water Drainage - Musi Area", progress: 45, status: "In Progress" },
  { task: "Power Restoration - Old City", progress: 30, status: "In Progress" },
  { task: "Road Clearance - NH-65", progress: 80, status: "Near Complete" },
  { task: "Medical Camp Setup", progress: 100, status: "Complete" },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

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
                Authority Dashboard
              </h1>
              <p className="text-muted-foreground">
                Real-time monitoring, rescue prioritization, and resource management.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-alert-danger animate-pulse">
                <Radio className="h-3 w-3 mr-1" />
                Live
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Last updated: 2 mins ago
              </span>
            </div>
          </div>
        </motion.div>

        {/* Overview Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl ${stat.bg}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <Badge
                      className={
                        stat.trend === "up"
                          ? "bg-alert-safe/10 text-alert-safe"
                          : stat.trend === "down"
                          ? "bg-alert-danger/10 text-alert-danger"
                          : "bg-muted text-muted-foreground"
                      }
                    >
                      {stat.trend === "up" && <TrendingUp className="h-3 w-3 mr-1" />}
                      {stat.trend === "down" && <TrendingDown className="h-3 w-3 mr-1" />}
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <p className="text-3xl font-display font-bold text-foreground">
                      <AnimatedCounter end={stat.value} />
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="rescue" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">Rescue Priority</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Resources</span>
            </TabsTrigger>
            <TabsTrigger value="recovery" className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              <span className="hidden sm:inline">Recovery</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Risk Zones */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Droplets className="h-5 w-5 text-primary" />
                        Affected Area Identification
                      </CardTitle>
                      <Button variant="outline" size="sm">
                        View Map
                      </Button>
                    </div>
                    <CardDescription>Real-time water levels and population at risk</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {riskZones.map((zone, index) => (
                        <motion.div
                          key={zone.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <MapPin
                                className={`h-5 w-5 ${
                                  zone.severity > 80
                                    ? "text-alert-danger"
                                    : zone.severity > 50
                                    ? "text-alert-warning"
                                    : "text-alert-safe"
                                }`}
                              />
                              <div>
                                <p className="font-semibold text-foreground">{zone.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {zone.population.toLocaleString()} residents • Water: {zone.waterLevel}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                className={
                                  zone.trend === "rising"
                                    ? "bg-alert-danger/10 text-alert-danger"
                                    : zone.trend === "falling"
                                    ? "bg-alert-safe/10 text-alert-safe"
                                    : "bg-muted text-muted-foreground"
                                }
                              >
                                {zone.trend === "rising" && <TrendingUp className="h-3 w-3 mr-1" />}
                                {zone.trend === "falling" && <TrendingDown className="h-3 w-3 mr-1" />}
                                {zone.trend}
                              </Badge>
                              <Badge
                                className={
                                  zone.level === "Critical"
                                    ? "bg-alert-danger text-primary-foreground"
                                    : zone.level === "High"
                                    ? "bg-alert-warning text-primary-foreground"
                                    : zone.level === "Medium"
                                    ? "bg-alert-info text-primary-foreground"
                                    : "bg-alert-safe text-primary-foreground"
                                }
                              >
                                {zone.level}
                              </Badge>
                            </div>
                          </div>
                          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${zone.severity}%` }}
                              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                              className={`absolute inset-y-0 left-0 rounded-full ${
                                zone.severity > 80
                                  ? "bg-alert-danger"
                                  : zone.severity > 50
                                  ? "bg-alert-warning"
                                  : "bg-alert-safe"
                              }`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`w-2 h-2 mt-2 rounded-full ${
                              activity.type === "success"
                                ? "bg-alert-safe"
                                : activity.type === "warning"
                                ? "bg-alert-warning"
                                : activity.type === "danger"
                                ? "bg-alert-danger"
                                : "bg-alert-info"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-foreground">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.location}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {activity.time}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Rescue Teams */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" />
                      Rescue Team Status
                    </CardTitle>
                    <Button variant="outline" size="sm">
                      Deploy Team
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {rescueTeams.map((team, index) => (
                      <motion.div
                        key={team.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className={`p-4 rounded-lg border ${
                          team.status === "Active"
                            ? "border-alert-safe/30 bg-alert-safe/5"
                            : team.status === "En Route"
                            ? "border-alert-warning/30 bg-alert-warning/5"
                            : "border-border bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-foreground">{team.id}</p>
                          <Badge
                            className={
                              team.status === "Active"
                                ? "bg-alert-safe/10 text-alert-safe"
                                : team.status === "En Route"
                                ? "bg-alert-warning/10 text-alert-warning"
                                : "bg-muted text-muted-foreground"
                            }
                          >
                            {team.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {team.location}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <Users className="h-3 w-3" />
                          {team.members} members • {team.vehicle}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Rescue Priority Tab */}
          <TabsContent value="rescue">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-alert-danger" />
                  Rescue Prioritization Queue
                </CardTitle>
                <CardDescription>
                  AI-optimized rescue sequence based on criticality, accessibility, and resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rescuePriorities.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-lg border ${
                        item.status === "In Progress"
                          ? "border-alert-safe/30 bg-alert-safe/5"
                          : item.status === "Queued"
                          ? "border-alert-warning/30 bg-alert-warning/5"
                          : "border-border"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                            item.priority === "Critical" 
                              ? "bg-alert-danger text-primary-foreground" 
                              : item.priority === "High"
                              ? "bg-alert-warning text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {item.id}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{item.location}</p>
                            <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {item.people} people
                              </span>
                              <span>•</span>
                              <span>Team {item.team}</span>
                              {item.eta !== "-" && (
                                <>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    ETA: {item.eta}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={
                            item.priority === "Critical" 
                              ? "bg-alert-danger" 
                              : item.priority === "High"
                              ? "bg-alert-warning"
                              : "bg-muted text-muted-foreground"
                          }>
                            {item.priority}
                          </Badge>
                          <Badge className={
                            item.status === "In Progress"
                              ? "bg-alert-safe"
                              : item.status === "Queued"
                              ? "bg-alert-info"
                              : "bg-muted text-muted-foreground"
                          }>
                            {item.status === "In Progress" && <Zap className="h-3 w-3 mr-1" />}
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Resource Management
                </CardTitle>
                <CardDescription>
                  Track and manage emergency resources deployment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources.map((resource, index) => (
                    <motion.div
                      key={resource.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg border border-border"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-semibold text-foreground">{resource.name}</p>
                        <Badge className={
                          resource.available / resource.total < 0.2 
                            ? "bg-alert-danger/10 text-alert-danger"
                            : resource.available / resource.total < 0.4
                            ? "bg-alert-warning/10 text-alert-warning"
                            : "bg-alert-safe/10 text-alert-safe"
                        }>
                          {resource.available.toLocaleString()} available
                        </Badge>
                      </div>
                      <Progress 
                        value={(resource.deployed / resource.total) * 100} 
                        className="h-2 mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Deployed: {resource.deployed.toLocaleString()}</span>
                        <span>Total: {resource.total.toLocaleString()}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recovery Tab */}
          <TabsContent value="recovery">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Recovery Planning Dashboard
                </CardTitle>
                <CardDescription>
                  Track infrastructure restoration and recovery progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recoveryTasks.map((task, index) => (
                    <motion.div
                      key={task.task}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg border border-border"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {task.status === "Complete" ? (
                            <CheckCircle className="h-5 w-5 text-alert-safe" />
                          ) : task.status === "Near Complete" ? (
                            <AlertCircle className="h-5 w-5 text-alert-info" />
                          ) : (
                            <Clock className="h-5 w-5 text-alert-warning" />
                          )}
                          <p className="font-semibold text-foreground">{task.task}</p>
                        </div>
                        <Badge className={
                          task.status === "Complete"
                            ? "bg-alert-safe"
                            : task.status === "Near Complete"
                            ? "bg-alert-info"
                            : "bg-alert-warning"
                        }>
                          {task.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Progress value={task.progress} className="flex-1 h-2" />
                        <span className="text-sm font-medium text-muted-foreground w-12 text-right">
                          {task.progress}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
