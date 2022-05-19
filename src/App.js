import Form from "./component/Form";

function App() {


  const onSubmitHandler = (data) => {

  }

  return (
     <div className="App">
       <Form onSubmit={onSubmitHandler}/>
     </div>
  );
}

export default App;
