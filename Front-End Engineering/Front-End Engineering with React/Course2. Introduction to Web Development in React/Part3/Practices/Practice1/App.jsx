function PlanetCard(props) {
    return <div>Welcome to {props.planetName}, which is {props.distance} light years away!</div>;
  }

  PlanetCard.defaultProps = {
    planetName: 'Mystery Planet',
    distance: 'unmeasured'
  };

  function App() {
    return (
      <div>
        <PlanetCard planetName="Jupiter" distance="390.5" />
        <PlanetCard />
      </div>
    );
  }

  export default App;