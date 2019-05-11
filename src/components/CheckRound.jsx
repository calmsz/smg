import React from 'react'
// import { connect } from 'react-redux';
import { CheckButton } from '../styles'
// import { AddRound } from '../actions'

// helpers
import { getRandomElement } from '../helpers'

export class CheckRound extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { CardsSequence: [] };
  // }

  // handleAddRound = () => {
  //   this.props.AddRound(getRandomElement(this.props.elements));
  // };

  render () {
    return (
      <CheckButton onClick={() => { console.log(getRandomElement(this.props.elements)) }} >
        <h3>Check!</h3>
      </CheckButton>
    )
  }
};

// export default connect(
//   null,
//   { AddRound }
// )(CheckRound);

// import React from 'react';
// import { connect } from 'react-redux';
// import { addTodo } from '../redux/actions';

// class AddTodo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { input: '' };
//   }

//   updateInput = input => {
//     this.setState({ input });
//   };

//   handleAddTodo = () => {
//     this.props.addTodo(this.state.input);
//     this.setState({ input: '' });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           onChange={e => this.updateInput(e.target.value)}
//           value={this.state.input}
//         />
//         <button className='add-todo' onClick={this.handleAddTodo}>
//           Add Todo
//         </button>
//       </div>
//     );
//   }
// }

// export default connect(
//   null,
//   { addTodo }
// )(AddTodo);
// // export default AddTodo;
