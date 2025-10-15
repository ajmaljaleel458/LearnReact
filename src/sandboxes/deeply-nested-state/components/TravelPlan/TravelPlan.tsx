import { useState } from "react";
import {
  initialTravelPlan,
  initialTravelPlanBad,
  type Places,
  type TravelPlan,
} from "./Places";
import "./TravelPlan.css";

function PlaceTreeBad({ place }: { place: Places }) {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((child) => (
            <PlaceTreeBad key={child.id} place={child} />
          ))}
        </ol>
      )}
    </li>
  );
}

export function TravelPlanBad() {
  const [plan] = useState(initialTravelPlanBad);
  const planets = plan.childPlaces;
  return (
    <div className="TravelPlan">
      Hello from TravelPlan
      <div>
        <h2>Places to visit</h2>
        <ol>
          {planets.map((place) => (
            <PlaceTreeBad key={place.id} place={place} />
          ))}
        </ol>
      </div>
    </div>
  );
}

function PlaceTree({ id, placesById }: { id: number; placesById: TravelPlan }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree key={childId} id={childId} placesById={placesById} />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan() {
  const [plan] = useState<TravelPlan>(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <div className="TravelPlan">
      Hello from TravelPlan
      <div>
        <h2>Places to visit</h2>
        <ol>
          {planetIds.map((id) => (
            <PlaceTree key={id} id={id} placesById={plan} />
          ))}
        </ol>
      </div>
    </div>
  );
}
