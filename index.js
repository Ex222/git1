// React Props are like function arguments in JavaScript and attributes in HTML.
// 1
// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>
//   }
// }

// const myelement = <Car brand="Ford" />;

// ReactDOM.render(myelement, document.getElementById('root'));

//2 Pass Data
// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Who lives in my garage?</h1>
//       <Car brand="Ford" />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Garage />, document.getElementById('root'));

// 3 If you have a variable to send
// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     const carname = "Ford";
//     return (
//       <div>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={carname} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Garage />, document.getElementById('root'));

// 4 Or if it was an object:
// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand.model}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     const carinfo = {name: "Ford", model: "Mustang"};
//     return (
//       <div>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={carinfo} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Garage />, document.getElementById('root'));

// 5 Props in the Constructor: 
// //If your component has a constructor function, the props should always 
// // be passed to the constructor and also to the React.Component via the super() method.
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h2>I am a {this.props.model}!</h2>;
//   }
// }

// ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));


// //Note: React Props are read-only! You will get an error if you try to change their value.