/*
// This is a functional component representing a greet message to astronauts.
const SpacecraftGreeting = () => {
  return <h1>Welcome aboard the Galactic Explorer!</h1>;
}

export default SpacecraftGreeting;
*/
// This is a functional component representing a greet message to astronauts.
const SpacecraftGreeting = () => {
  return <div><h1>Welcome onboard the Galactic Explorer!</h1><button onClick={() => alert('Prepare for liftoff!')}>Launch Sequence</button></div>;
}

export default SpacecraftGreeting;