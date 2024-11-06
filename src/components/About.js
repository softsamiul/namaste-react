import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoD: {
        name: "Sam",
        location: "Kolkata",
      },
    };

    console.log("parent constructor")
  }
  componentDidMount(){
    console.log("parent componentDidMount")
  }
  render() {
    console.log("parent render")
    return (
      <>
        <h1>About Page</h1>

        <UserClass info={this.state.infoD} />
      </>
    );
  }
}

// const About = () => {
//   const infoD = {
//     name: "Sam",
//     location: "Kolkata",
//   };
//   return (
//     <>
//       <h1>About Page</h1>

//       <UserClass info={infoD} />
//     </>
//   );
// };

export default About;
