import './App.css'
import ToDo from './ToDo.jsx'
import Actor from './Actor.jsx';
import Singer from './Singer.jsx';
import CountShow from './CountShow.jsx';
import { lazy, Suspense } from 'react';
const Users = lazy(() => import('./Users.jsx'));
function App() {

  const actors = ['Bappa ', 'Jasim', 'Kabila', "Sabnur", "Habu", 'Pasha'];

  const singers = [
    { id: 1, name: 'Tahsan', age: 45 },
    { id: 2, name: 'Kona', age: 35 },
    { id: 3, name: 'AB', age: 70 }
  ]

  return (
    <>
      <Suspense fallback={<h1>Users are Coming......</h1>}>
        <Users></Users>
      </Suspense>
      <CountShow></CountShow>
      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }
      <ToDo task='Js' isDone={true} time={100}></ToDo>
      <ToDo task='Python' isDone={false} time={200}></ToDo>
      <ToDo task='Java' isDone={true} time={50}></ToDo>
      {
        actors.map(actor => <Actor actor={actor}></Actor>)

        // actors.map((actor, index) => <Actor key={index} actor={actor}></Actor>)

      }
      <Person name='Masum' tech='JS'></Person>
      <Person name='Hasan' tech='Python'></Person>
      <Person name='Mahmudul' tech='Java'></Person>
      <Player name='Shakib' runs='20000'></Player>
      <Player name='Kashem'></Player>
    </>
  )

  // distructuring
  function Player({ name, runs = 0 }) {
    return (
      <div style={{
        border: '2px solid green',
        padding: '2px',
        borderRadius: '10px'
      }}>
        <h4> Name: {name}</h4>
        <h5> Runs :{runs}</h5>

      </div>
    )
  }

  // prop drilling
  function Person(props) {
    console.log(props)
    return (
      <div style={{
        border: '2px solid green',
        padding: '2px',
        borderRadius: '10px'
      }}>
        <h4>This is a man who want to do somwthing that change his life . Allah please help him . <br /> <br /> Name : {props.name}, Tech:{props.tech}</h4>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum voluptatum omnis rem rerum repellendus ea, deleniti voluptatibus? Dicta rerum, nihil obcaecati consequatur necessitatibus doloribus vel dolorem deserunt quidem est error!</p>
      </div>
    )
  }
}

export default App
