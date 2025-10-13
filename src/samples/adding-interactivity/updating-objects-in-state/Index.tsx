import Person from "./components/Person";
import PlayerStatsViewer from "./components/PlayerStatsViewer";

export default function Index() {
  return (
    <div>
      Updating Objects in State
      <Person />
      <PlayerStatsViewer />
    </div>
  );
}
