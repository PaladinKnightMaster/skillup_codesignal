const planets = [
    { name: 'Mercury', isColonized: false },
    { name: 'Venus', isColonized: false },
    { name: 'Earth', isColonized: true },
    { name: 'Mars', isColonized: true },
  ];

  export default function PlanetList() {
    return (
      <div>
        {planets.map((planet, index) => (
          <p key={index} style={{ color: planet.isColonized ? 'blue' : 'gray' }}>
            {planet.name} - {planet.isColonized ? 'Colonized' : 'Not Colonized'}
          </p>
        ))}
      </div>
    );
  }