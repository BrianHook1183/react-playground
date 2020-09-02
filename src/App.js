import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion'


// after
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <Split className='left' flexBasis='2'>
          This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
          {/* make another tooltip directly inside the App */}
          <Tooltip message='one more tooltip message'>
            Necessitatibus?
          </Tooltip>
          <hr />
          <h2>2.1.9 Assignments:</h2>
          <h3>Drill 1 - Hello World:</h3>
          <HelloWorld />
          <h3>Drill 2 - Bomb:</h3>
          <Bomb />
          <h3>Drill 3 - RouletteGun:</h3>
          <RouletteGun bulletInChamber={8} />
          <hr />
          <h2>2.1.10 Exercises</h2>
          <h3>Tabs</h3>
          <Tabs tabs={tabsProp} />
        </Split>
        <Split className='right'>
          This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
          <h2>2.1.9 Exercises:</h2>
          <h3>Click to Count:</h3>
          <Counter count={123} />
          <h3>Live Date:</h3>
          <TheDate />
          <hr />
          <h2>2.1.10 Assignment</h2>
          <Accordion sections={sectionsProp}/>
        </Split>
        
      </main>
    )
  }
}








export default App