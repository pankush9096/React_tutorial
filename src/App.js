import React , { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// This is default import so we are using Greet as alias referring to function exact name welcome to import it.
import Welcome from './components/welcome'; 
// below one is name import where exact component name is requried for named export
// import { Welcome } from './components/welcome'
import Greet from './components/Greet';
import {Hello} from './components/Hello';
import { Withoutjsx } from './components/Hello'
import { Properties } from './components/Greet'
import { ClassProps } from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/EventHandling';
import { ClassClick } from './components/EventHandling';
import { BindingEvent } from './components/EventHandling'
import ParentComponent from './components/ParentComponent';
import Conditionalrendering from './components/ConditionalRendering';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet'
import Inline from './components/inlineStyling'
import './appStyles.css'
import Styles from './appStyles.module.css'
import FormHandling from './components/FormHandling'


class App extends Component {
  render() {
    return (
    <div className="App">
    {/* <Welcome />
    <Greet />
    <Hello />
    <Properties name='Pankush' lname='Kukreja' />
    <Withoutjsx />
    <Properties name='Props' />
    <Properties name='Reusable component via prop and childer prop'>
    <p1>This is Children Prop</p1>
    </Properties>
    <ClassProps name='Class' lname='Props' />
    <Message />
    <Counter />
    <FunctionClick />
    <ClassClick />
    <BindingEvent />
    <ParentComponent />  */}
    {/* <Conditionalrendering /> */}
    {/* <NameList /> */}
    {/* <StyleSheet primary={true} />
    <Inline />
    <h1 className='error'>Error</h1>
    <h1 className={Styles.success}>Success</h1> */}
    <FormHandling />
  
    </div>
  );
    }
  }

export default App;
