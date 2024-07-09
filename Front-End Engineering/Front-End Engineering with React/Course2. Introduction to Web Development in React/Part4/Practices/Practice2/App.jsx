/*
const ControlPanel = (props) => {
  return <button onClick={props.checkSystem}>System Check</button>;
}

const Spaceship = () => {
  const performSystemCheck = () => {
    alert("All systems go!");
  }
  return <ControlPanel checkSystem={performSystemCheck} />;
}

export default Spaceship;
*/
const ControlPanel = (props) => {
  return <button onClick={props.performSystemCheck}>System Check</button>;
}

const Spaceship = () => {
  const performSystemCheck = () => {
    alert("All systems go!");
  }
  return <ControlPanel performSystemCheck={performSystemCheck} />;
}

export default Spaceship;