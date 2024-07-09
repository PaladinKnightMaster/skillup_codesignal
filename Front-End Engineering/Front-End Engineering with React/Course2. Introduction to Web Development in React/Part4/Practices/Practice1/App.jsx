const ThrusterInfo = ({ checkFuelLevel }) => {
    return <p>Fuel Level: {checkFuelLevel()}%</p>;
  };

  const Spaceship = () => {
    const checkFuelLevel = () => 85; // Fuel level in percentage

    return (
      <div>
        <h2>Galactic Explorer</h2>
        <ThrusterInfo checkFuelLevel={checkFuelLevel} />
      </div>
    );
  };

  export default Spaceship;