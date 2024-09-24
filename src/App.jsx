import "./App.css";

function App() {
  const numbers = [1, 2, 3, 3, 4, 5];
  //   const demoHtml = numbers.map((item, index) => <p key={index}>{item}</p>);
  const users = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Pete", age: 18 },
    { id: 3, name: "Mary", age: 25 }
  ];

  return (
    <>
      <div className="App">
        <h1>React with Arrays Demo</h1>
        {numbers.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <ul>
          {users
            .toSorted((a, b) => b.age - a.age)
            .map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
