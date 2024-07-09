const status = 'ready for launch';
const checkSystems = () => (status === 'ready for launch' ? 'All systems go!' : 'Systems check required.');

const SpacecraftStatus = () => {
  return <h2>Mission Control: {checkSystems()}</h2>;
};

export default SpacecraftStatus;