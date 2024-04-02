import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";

// this interface is necessary if we want to use props
interface AppProps {
    color?: string; // ? is used to make it optional
  }
  
  // this interface is necessary if we define component state inside constructor method
  interface AppState {
      counter2?: number;    
  }
  
  // we can pass generics to React.Component, first generics related to props
  // P is for props, S is for state 
  // class React.Component<P = {}, S = {}, SS = any>
  class App extends React.Component<AppProps, AppState> {
      //we can use below synted to define our state
      //as it will override the existing state definition
      // state = { counter: 0 };
      constructor(props: AppProps){
          super(props);
  
          // we can not use this syntex to define new property of state 
          // because it is using parent class Component's definition of state and
          // expects some generic while extending the Component class
          this.state = {counter2: 2};
      }
    
      increment = ():void=>{
        let count = this.state.counter2;
        this.setState({counter2: (count?count:0)+1});
      }

      decrement = ():void=>{
        let count = this.state.counter2;
        this.setState({counter2: (count?count:0)-1});
      }
    render() {
      return (
        <div>
          <Header text="This is first React app using Typescript" />
          <div style={{ color: this.props.color }}>Use below buttons</div>
          <br/>
          <div>
              <button onClick={this.increment}>Increment</button>
              {/* {this.state.counter} */}
              <span> { this.state.counter2 } </span>
              <button onClick={this.decrement}>Decrement</button>
          </div>
          <h1>Todo Application with Typescript</h1>
          <TodoList />
        </div>
      );
    }
  }
  
  export default App;