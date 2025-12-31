import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup, Polyline } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Layers, 
  AlertTriangle, 
  Shield, 
  Building2, 
  Route, 
  Hospital,
  Users,
  Eye,
  EyeOff
} from "lucide-react";
import "leaflet/dist/leaflet.css";

// Custom icons
const dangerIcon = new Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ef4444'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const safeIcon = new Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2322c55e'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const shelterIcon = new Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233b82f6'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const hospitalIcon = new Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ec4899'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const rescueIcon = new Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f97316'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

// Sample data - Hyderabad area
export const floodZones = [
  { center: [17.4065, 78.4772] as LatLngExpression, radius: 800, severity: "high", name: "Musi River Bank", waterLevel: "3.2m", population: 12000 },
  { center: [17.4150, 78.4550] as LatLngExpression, radius: 600, severity: "medium", name: "Hussain Sagar", waterLevel: "1.8m", population: 5200 },
  { center: [17.3850, 78.4600] as LatLngExpression, radius: 500, severity: "high", name: "Old City Area", waterLevel: "2.5m", population: 8500 },
];

export const safeZones = [
  { position: [17.4275, 78.4480] as LatLngExpression, name: "Jubilee Hills Safe Zone", distance: "2.3 km" },
  { position: [17.4456, 78.3497] as LatLngExpression, name: "HITEC City Relief Camp", distance: "5.1 km" },
  { position: [17.3616, 78.4747] as LatLngExpression, name: "LB Nagar Community Center", distance: "3.8 km" },
];

export const shelters = [
  { position: [17.4320, 78.4410] as LatLngExpression, name: "Emergency Shelter 1", capacity: 500, available: 180, contact: "040-1234567" },
  { position: [17.3980, 78.4890] as LatLngExpression, name: "School Shelter", capacity: 300, available: 120, contact: "040-2345678" },
  { position: [17.4500, 78.3800] as LatLngExpression, name: "Community Hall", capacity: 400, available: 250, contact: "040-3456789" },
];

export const hospitals = [
  { position: [17.4280, 78.4520] as LatLngExpression, name: "Apollo Hospital", beds: 50, emergency: true, contact: "040-4567890" },
  { position: [17.4100, 78.4400] as LatLngExpression, name: "KIMS Hospital", beds: 35, emergency: true, contact: "040-5678901" },
  { position: [17.3900, 78.4800] as LatLngExpression, name: "Care Hospital", beds: 40, emergency: true, contact: "040-6789012" },
];

export const priorityRescueZones = [
  { position: [17.4050, 78.4800] as LatLngExpression, name: "Trapped Residents - Block A", people: 25, priority: "Critical", team: "Alpha" },
  { position: [17.3870, 78.4580] as LatLngExpression, name: "Elderly Care Home", people: 45, priority: "High", team: "Bravo" },
  { position: [17.4130, 78.4600] as LatLngExpression, name: "School Building", people: 80, priority: "High", team: "Charlie" },
];

export const evacuationRoutes = [
  {
    id: 1,
    name: "Route A - Musi to Jubilee Hills",
    path: [
      [17.4065, 78.4772],
      [17.4120, 78.4650],
      [17.4200, 78.4550],
      [17.4275, 78.4480],
    ] as LatLngExpression[],
    status: "Safe",
    distance: "4.2 km",
    time: "15 min",
  },
  {
    id: 2,
    name: "Route B - Old City to LB Nagar",
    path: [
      [17.3850, 78.4600],
      [17.3750, 78.4680],
      [17.3680, 78.4720],
      [17.3616, 78.4747],
    ] as LatLngExpression[],
    status: "Caution",
    distance: "3.1 km",
    time: "12 min",
  },
];

// Animated circle component
const AnimatedCircle = ({ center, radius, severity, name, waterLevel, population }: { 
  center: LatLngExpression; 
  radius: number; 
  severity: string;
  name: string;
  waterLevel: string;
  population: number;
}) => {
  const [currentRadius, setCurrentRadius] = useState(radius);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRadius(r => r === radius ? radius * 1.1 : radius);
    }, 1000);
    return () => clearInterval(interval);
  }, [radius]);

  const color = severity === "high" ? "#ef4444" : "#f59e0b";
  
  return (
    <Circle
      center={center}
      radius={currentRadius}
      pathOptions={{
        color: color,
        fillColor: color,
        fillOpacity: 0.3,
        weight: 2,
      }}
    >
      <Popup>
        <div className="font-sans p-1">
          <h3 className="font-semibold text-alert-danger flex items-center gap-1">
            <AlertTriangle className="h-4 w-4" />
            {name}
          </h3>
          <div className="mt-2 space-y-1 text-sm">
            <p><span className="text-muted-foreground">Water Level:</span> <strong>{waterLevel}</strong></p>
            <p><span className="text-muted-foreground">Affected:</span> <strong>{population.toLocaleString()}</strong></p>
            <Badge className={severity === "high" ? "bg-alert-danger mt-1" : "bg-alert-warning mt-1"}>
              {severity === "high" ? "Critical" : "Warning"}
            </Badge>
          </div>
        </div>
      </Popup>
    </Circle>
  );
};

// Layer toggle button component
const LayerToggle = ({ 
  label, 
  icon: IconComponent, 
  active, 
  onClick, 
  color 
}: { 
  label: string; 
  icon: React.ElementType; 
  active: boolean; 
  onClick: () => void;
  color: string;
}) => (
  <Button
    variant={active ? "default" : "outline"}
    size="sm"
    onClick={onClick}
    className={`flex items-center gap-2 text-xs transition-all ${
      active ? `bg-${color} hover:bg-${color}/90` : ""
    }`}
  >
    <IconComponent className="h-3.5 w-3.5" />
    {label}
    {active ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3 opacity-50" />}
  </Button>
);

// Map legend component
const MapLegend = ({ layers }: { layers: Record<string, boolean> }) => (
  <div className="absolute bottom-4 left-4 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border">
    <h4 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2">
      <Layers className="h-4 w-4" />
      Map Legend
    </h4>
    <div className="space-y-2 text-xs">
      {layers.floodZones && (
        <>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-alert-danger/50 border-2 border-alert-danger animate-pulse" />
            <span className="text-muted-foreground">High Risk Zone</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-alert-warning/50 border-2 border-alert-warning" />
            <span className="text-muted-foreground">Medium Risk Zone</span>
          </div>
        </>
      )}
      {layers.safeZones && (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-alert-safe border-2 border-alert-safe" />
          <span className="text-muted-foreground">Safe Zone</span>
        </div>
      )}
      {layers.shelters && (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-primary border-2 border-primary" />
          <span className="text-muted-foreground">Shelter</span>
        </div>
      )}
      {layers.hospitals && (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-pink-500 border-2 border-pink-500" />
          <span className="text-muted-foreground">Hospital</span>
        </div>
      )}
      {layers.rescueZones && (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-orange-500 animate-pulse" />
          <span className="text-muted-foreground">Priority Rescue</span>
        </div>
      )}
      {layers.routes && (
        <div className="flex items-center gap-2">
          <div className="w-8 h-1 bg-alert-safe rounded" />
          <span className="text-muted-foreground">Safe Route</span>
        </div>
      )}
    </div>
  </div>
);

interface FloodMapProps {
  showControls?: boolean;
  className?: string;
  defaultLayers?: {
    floodZones?: boolean;
    safeZones?: boolean;
    shelters?: boolean;
    hospitals?: boolean;
    routes?: boolean;
    rescueZones?: boolean;
  };
}

export const FloodMap = ({ 
  showControls = true, 
  className = "",
  defaultLayers = {
    floodZones: true,
    safeZones: true,
    shelters: true,
    hospitals: true,
    routes: true,
    rescueZones: true,
  }
}: FloodMapProps) => {
  const mapCenter: LatLngExpression = [17.4065, 78.4772];
  const [layers, setLayers] = useState(defaultLayers);

  const toggleLayer = (layer: keyof typeof layers) => {
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl overflow-hidden shadow-lg ${className}`}
    >
      {/* Layer Controls */}
      {showControls && (
        <div className="absolute top-4 right-4 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border">
          <h4 className="font-semibold text-xs mb-2 text-muted-foreground uppercase tracking-wider">Toggle Layers</h4>
          <div className="flex flex-wrap gap-2">
            <LayerToggle
              label="Flood Zones"
              icon={AlertTriangle}
              active={layers.floodZones ?? true}
              onClick={() => toggleLayer('floodZones')}
              color="alert-danger"
            />
            <LayerToggle
              label="Safe Zones"
              icon={Shield}
              active={layers.safeZones ?? true}
              onClick={() => toggleLayer('safeZones')}
              color="alert-safe"
            />
            <LayerToggle
              label="Shelters"
              icon={Building2}
              active={layers.shelters ?? true}
              onClick={() => toggleLayer('shelters')}
              color="primary"
            />
            <LayerToggle
              label="Hospitals"
              icon={Hospital}
              active={layers.hospitals ?? true}
              onClick={() => toggleLayer('hospitals')}
              color="pink-500"
            />
            <LayerToggle
              label="Routes"
              icon={Route}
              active={layers.routes ?? true}
              onClick={() => toggleLayer('routes')}
              color="alert-safe"
            />
            <LayerToggle
              label="Rescue"
              icon={Users}
              active={layers.rescueZones ?? true}
              onClick={() => toggleLayer('rescueZones')}
              color="orange-500"
            />
          </div>
        </div>
      )}

      <MapContainer
        center={mapCenter}
        zoom={13}
        className="h-full w-full min-h-[500px]"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Flood zones */}
        {layers.floodZones && floodZones.map((zone, index) => (
          <AnimatedCircle
            key={index}
            center={zone.center}
            radius={zone.radius}
            severity={zone.severity}
            name={zone.name}
            waterLevel={zone.waterLevel}
            population={zone.population}
          />
        ))}

        {/* Safe zones */}
        {layers.safeZones && safeZones.map((zone, index) => (
          <Marker key={`safe-${index}`} position={zone.position} icon={safeIcon}>
            <Popup>
              <div className="font-sans p-1">
                <h3 className="font-semibold text-alert-safe flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  {zone.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Safe area for evacuation</p>
                <p className="text-sm mt-1"><strong>Distance:</strong> {zone.distance}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Shelters */}
        {layers.shelters && shelters.map((shelter, index) => (
          <Marker key={`shelter-${index}`} position={shelter.position} icon={shelterIcon}>
            <Popup>
              <div className="font-sans p-1">
                <h3 className="font-semibold text-primary flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  {shelter.name}
                </h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p><span className="text-muted-foreground">Capacity:</span> <strong>{shelter.capacity}</strong></p>
                  <p><span className="text-muted-foreground">Available:</span> <strong className="text-alert-safe">{shelter.available}</strong></p>
                  <p><span className="text-muted-foreground">Contact:</span> <strong>{shelter.contact}</strong></p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Hospitals */}
        {layers.hospitals && hospitals.map((hospital, index) => (
          <Marker key={`hospital-${index}`} position={hospital.position} icon={hospitalIcon}>
            <Popup>
              <div className="font-sans p-1">
                <h3 className="font-semibold text-pink-500 flex items-center gap-1">
                  <Hospital className="h-4 w-4" />
                  {hospital.name}
                </h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p><span className="text-muted-foreground">Available Beds:</span> <strong>{hospital.beds}</strong></p>
                  <p><span className="text-muted-foreground">Contact:</span> <strong>{hospital.contact}</strong></p>
                  {hospital.emergency && (
                    <Badge className="bg-alert-danger mt-1">24/7 Emergency</Badge>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Priority Rescue Zones */}
        {layers.rescueZones && priorityRescueZones.map((zone, index) => (
          <Marker key={`rescue-${index}`} position={zone.position} icon={rescueIcon}>
            <Popup>
              <div className="font-sans p-1">
                <h3 className="font-semibold text-orange-500 flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {zone.name}
                </h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p><span className="text-muted-foreground">People:</span> <strong>{zone.people}</strong></p>
                  <p><span className="text-muted-foreground">Team:</span> <strong>Team {zone.team}</strong></p>
                  <Badge className={zone.priority === "Critical" ? "bg-alert-danger mt-1" : "bg-alert-warning mt-1"}>
                    {zone.priority} Priority
                  </Badge>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Evacuation routes */}
        {layers.routes && evacuationRoutes.map((route) => (
          <Polyline
            key={route.id}
            positions={route.path}
            pathOptions={{
              color: route.status === "Safe" ? "#22c55e" : "#f59e0b",
              weight: 5,
              opacity: 0.8,
              dashArray: route.status === "Safe" ? undefined : "10, 10",
            }}
          >
            <Popup>
              <div className="font-sans p-1">
                <h3 className="font-semibold text-alert-safe">{route.name}</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p><span className="text-muted-foreground">Distance:</span> <strong>{route.distance}</strong></p>
                  <p><span className="text-muted-foreground">Est. Time:</span> <strong>{route.time}</strong></p>
                  <Badge className={route.status === "Safe" ? "bg-alert-safe mt-1" : "bg-alert-warning mt-1"}>
                    {route.status}
                  </Badge>
                </div>
              </div>
            </Popup>
          </Polyline>
        ))}
      </MapContainer>

      <MapLegend layers={layers} />
    </motion.div>
  );
};
