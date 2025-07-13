import React from "react"

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count :0,
        }
    }
    render(){
        const {count} =this.state;
        return(
            <div>
                <h6>Class Based React Component</h6>
                <h6>{count}</h6>
                <button onClick={()=> {this.setState(
                    {
                        count: 1,

                    })

                }}>Click me </button>
            </div>
        )
    }

    componentDidMount(){
        //API calls as this this called after initial render
        console.log("comonentDidMount")
    }

    componentDidUpdate(){
        //called after every re-render
    }

    componentWillUnmount(){
        //stops the operations after the component is out of DOM
    }
}

export default Profile;




// Render Phase
// constructor() and render()

// Commit Phase
// componentDidMount, componentDidUpdate, all diffing and reconcilliation