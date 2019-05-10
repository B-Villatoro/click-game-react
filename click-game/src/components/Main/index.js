import React from "react";
import CharCard from "../charCard";
import Characters from "../../characters.json"
import Counter from "../counter"
import "./style.css";

class Main extends React.Component {

    state = {
        Characters,
        Count:0,
        Best:0,
        Message:"Pluck A Duck! But Don't Muck Or You'll Be Out of Luck",
        value:0,
    }
  

    handleClickStore = id => {
        const Char = { ...this.state.Characters };
        let other = this.state.Characters
        if(Char[id].clicked){
            this.resetCount(other)
        }
        else {
            this.incrementCount(); 
            Char[id].clicked=true;
            this.winListen();
        }
        this.setState({ Char })
        
        
    }

    incrementCount = thingy => {
        let Count = this.state.Count;
        Count++;
        this.setState({Count})
    }

    resetCount = thingy => {
        let Count = this.state.Count;
        let Best = this.state.Best;
        let Message = this.state.Message;
        if (Count > Best && Count != 9){
            Best = Count
            Message = "You Beat Your Last Score!"
            this.resetChar(thingy)
        }
        else{
            Message = "Try Again"
            this.resetChar(thingy)
        }
        Count = 0;
        this.setState({Count,Best,Message}) 
    }

    resetChar = Char => {
        
        Char.map(ducks =>{
            return(
            ducks.clicked = false
            )
        })
        this.setState({Char})
    }
    
    winListen = chickenDinner =>{
       let num = this.state.Count + 1;
       let Message = this.state.Message;
       let Char = this.state.Characters
       console.log(num);
       if(num === 9){
           Message = "You Win! Play Again!"
           this.resetChar(Char)
           this.setState({Message,Count:0,Best:9})
           
       }
       
    }

    render() {
        return (
            <div className="text-center">
                <Counter text={this.state.Message}/>
                <Counter text="Count:" count={this.state.Count} />
                <Counter text="Best:" count={this.state.Best} />
                {this.state.Characters.map((item) => {
                return (
                    <CharCard
                    className="ducky"
                    handleClick={this.handleClickStore}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    clicked={item.clicked}

                />

                );
                })}
            </div>
        )
    }
}

export default Main;