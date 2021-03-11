// Utility Functions

export const ContentView = props => {
  return (
    <div style={{ padding: 20, "text-align":"center" }}>
      <h1><b>{"Welcome to " +  props.location.pathname}</b></h1>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adip.</p> */}
    </div>
  );
}

