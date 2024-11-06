import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }

        console.log("child constructor")
    }

    componentDidMount(){
        console.log("child componentDidMount")
    }
    render(){
        console.log("child render")
        const {name, location} = this.props.info

        return (<div>
            <p>Class Comp</p>
            <h3>{this.state.count}</h3>
            <button onClick={()=>this.setState({count: this.state.count +1})}>+++</button>
            <br />
            <br />
            <button onClick={()=>this.setState({count: this.state.count -1})}>---</button>


            <h1>{name}</h1>
            <h1>{location}</h1>
        </div>)
    }
}

export default UserClass