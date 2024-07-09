/*
// A functional component for a spacecraft dashboard that welcomes the pilot
const SpacecraftDashboard = () => {
  // TODO: Declare a constant for the pilot's name 'Captain Astro' and personalize the welcome message in the h2 tag, and return it.
  return null;
}

export default SpacecraftDashboard;
*/
// A functional component for a spacecraft dashboard that welcomes the pilot
const SpacecraftDashboard = () => {
  // TODO: Declare a constant for the pilot's name 'Captain Astro' and personalize the welcome message in the h2 tag, and return it.
  const pilot = 'Captain Astro';
  const message = `Welcome, ${pilot}!`;
  return <h2>{message}</h2>;
}

export default SpacecraftDashboard;