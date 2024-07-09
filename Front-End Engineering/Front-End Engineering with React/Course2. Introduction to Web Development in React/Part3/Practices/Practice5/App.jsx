/*
// TODO: Define a functional component called 'Planet' that returns an h2 element greeting the passed 'name' prop.
// TODO: Assign a default value to 'name' using defaultProps for when no prop is provided.
// TODO: Make the Planet component available for use in other files with the appropriate export statement.
*/
// TODO: Define a functional component called 'Planet' that returns an h2 element greeting the passed 'name' prop.
function Planet({ name }) {
  // TODO: Return an h2 element greeting the passed 'name' prop.
  return <h2>Hello, {name}!</h2>;
}
// TODO: Assign a default value to 'name' using defaultProps for when no prop is provided.
Planet.defaultProps = {
  name: 'Earth'
};
// TODO: Make the Planet component available for use in other files with the appropriate export statement.
export default Planet;