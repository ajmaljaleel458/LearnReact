type WeaponStats = {
  name: string;
  kills: number;
  accuracy: number;
};

type PlayerStats = {
  username: string;
  level: number;
  overall: {
    totalKills: number;
    totalDeaths: number;
    kdRatio: number;
  };
  weapons: WeaponStats[];
};

const player: PlayerStats = {
  username: "GhostRiderX",
  level: 45,
  overall: {
    totalKills: 1240,
    totalDeaths: 890,
    kdRatio: +(1240 / 890).toFixed(2),
  },
  weapons: [
    { name: "M4A1", kills: 430, accuracy: 35.2 },
    { name: "AX-50", kills: 180, accuracy: 59.1 },
  ],
};

export default function PlayerStatsViewer() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl shadow-md w-fit">
      <h2 className="text-xl font-bold mb-3">Player: {player.username}</h2>
      <p>Level: {player.level}</p>

      <div className="mt-3 p-2 bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-1">Overall Stats</h3>
        <p>Total Kills: {player.overall.totalKills}</p>
        <p>Total Deaths: {player.overall.totalDeaths}</p>
        <p>K/D Ratio: {player.overall.kdRatio}</p>
      </div>

      <div className="mt-4 p-2 bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Weapons</h3>
        <ul className="space-y-1">
          {player.weapons.map((weapon) => (
            <li
              key={weapon.name}
              className="border border-gray-700 p-2 rounded-md"
            >
              <p>Name: {weapon.name}</p>
              <p>Kills: {weapon.kills}</p>
              <p>Accuracy: {weapon.accuracy}%</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
