import React, { Component } from "react";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { connect } from "react-redux";
import { StoreState } from "../reducers";

interface TodoListProps {
  todos: Todo[];
  // error: Argument of type 'typeof TodoList' is not assignable to parameter of type
  // to overcome this error use Function instead of typeof fetchTodos
  // fetchTodos: typeof fetchTodos;
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}


interface TodoListState {
  isPending: boolean;
}

class TodoList extends Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps){
    super(props);
    this.state = {isPending: false};
  }

  onFetch = (): void => {
    this.setState({isPending: true});
    this.props.fetchTodos();
  };

  componentDidUpdate(prevProps: Readonly<TodoListProps>, prevState: Readonly<{}>, snapshot?: any): void {
    if(prevProps.todos.length === 0 && this.props.todos.length) {
      this.setState({isPending: false});
    }
  }

  onDelete = (id:number):void => {
    this.props.deleteTodo(id);
  }
  renderTodoList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => (
      <div key={todo.id} onClick={()=>this.onDelete(todo.id)} style={{cursor: 'pointer', margin: "5px auto 5px auto"}}>
        <span>{todo.title}</span>
        </div>
    ));
  };
  render() {
    return (
      <div>
        <button onClick={this.onFetch}>Fetch Todo</button>
        {this.state.isPending ? <h1>Loading</h1> :this.renderTodoList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  };
};
export default connect(mapStateToProps, { fetchTodos, deleteTodo })(TodoList);
