/*
* Base class used for gym equipment.
*
* Chema Salazar - 2022
* */
 import React from "react";
 import "./Equipment.css";

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
            <div className={"container mx-auto"}>
                <h1>Current Equipment: {this.state.name}</h1>
                <h2>Brand: {this.state.brand}</h2>
                <h3>Current usage counter: {this.state.usage}</h3>
                <h3>This machine is active: {String(this.state.isOn)}</h3>
                {/*<button type={"button"} onClick={this.changeUsage}>Click Me to Increase Usage</button>*/}
                <div className={"bg-slate-50"}>
                    <button id={"main-button"} className={"flex mx-auto text-rose-900"} type={"button"} onClick={this.changeActive}>Click Me to {this.state.activeText} machine</button>
                </div>
            </div>
        );
    }
}

export default Equipment;


