/*
* Base class used for gym equipment.
*
* Chema Salazar - 2022
* */
 import React from "react";
 import "./Equipment.css";
 import eventBus from "./Components/EventBus/EventBus";

class Equipment extends React.Component{
    //We instantiate our gym equipment.
    constructor(props){
        super(props);
        this.state = {
            name: "Treadmill",
            usage: 0,
            brand: "ChemTech",
            isOn: false,
            activeText: "Start"
        };
    }

    list = ["Treadmill", "Stepper", "Indoor Bike"];

    componentDidMount() {

        eventBus.on("toggleMachine", (data) =>

            this.setState({ isOn: data.isOn })
        );

    }

    unmountToggle(){
        eventBus.remove("toggleMachine");
    }


    /*Methods that update our state data.*/
    changeUsage = () =>{
        this.setState({usage: this.state.usage+1});
    }

    changeActive = () =>{
        if(this.state.isOn){
            this.setState({isOn: false});
            this.setState({activeText: "Start"});

        }
        else{
            this.setState({isOn: true});
            this.setState({activeText: "Stop"});
            this.changeUsage();

        }
    }



    /*render
    *
    * we are using tailwind css
    * */
    render() {
        return(
            <div className={"container mx-auto equipment-interface"}>
                <h1>{this.state.name} by {this.state.brand}</h1>

                {/*<button type={"button"} onClick={this.changeUsage}>Click Me to Increase Usage</button>*/}
                <div className={"bg-slate-50"}>
                    <button id={"main-button"} className={"flex mx-auto text-rose-900"} type={"button"} onClick={this.changeActive}>Click Me to {this.state.activeText} machine</button>
                </div>
                <hr/>
                <h3>Switch Machine: </h3>
                <ul>{this.list.map(eq=>(<li><button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"} type={"button"}>{eq}</button></li>))}</ul>

            </div>
        );
    }
}

export default Equipment;


