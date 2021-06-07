// React Components

// 1 Create a Class Component
// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }
// ReactDOM.render(<Car />, document.getElementById('root'));

// 2 Create a Function Component
// function Car() {
//     return <h2>Hi, I am also a Car!</h2>;
//   }
   
// ReactDOM.render(<Car />, document.getElementById('root'));

// 3 Component Constructor
// class Car extends React.Component {
//     constructor() {
//       super();
//       this.state = {color: "red"};
//     }
//     render() {
//       return <h2>I am a {this.state.color} Car!</h2>;
//     }
//   }
//   ReactDOM.render(<Car />, document.getElementById('root'));

// 4 Props
// class Car extends React.Component {
//     render() {
//       return <h2>I am a {this.props.color} Car!</h2>;
//     }
//   }
  
//   ReactDOM.render(<Car color="black"/>, document.getElementById('root'));

//5 Components in Components
// class Car extends React.Component {
//     render() {
//       return <h2>I am a Car!</h2>;
//     }
//   }
  
//   class Garage extends React.Component {
//     render() {
//       return (
//         <div>
//         <h1>Who lives in my Garage?</h1>
//         <Car />
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<Garage />, document.getElementById('root'));

