function App() {


  const buttonText1 = "Hide Work Instruction";
  const buttonText2 = "Show Work Instruction";
  const [showMessage, setShowMessage] = React.useState(true);
  const [buttonText, setButtonText] = React.useState(buttonText1);
  
  function handleClick() {
    setShowMessage(!showMessage);
    showMessage ? setButtonText(buttonText2) : setButtonText(buttonText1)
  }

  return (
    <div>
      <h1>im in a fancy component no..!</h1>
      <br />
            <button onClick={handleClick}>
        {buttonText}
      </button>
      { showMessage && <WorkInstruction /> }
    </div>
  );
}

function WorkInstruction() {
  return (
    <p>I am some kind of work instruction</p>
  );
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);