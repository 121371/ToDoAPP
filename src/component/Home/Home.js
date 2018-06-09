import React from 'react';
import './Home.css';



class  Todo extends React.Component{
    

        state = {
            userInput: '',
            list: []
        }
       

    onChangeHandler(input){

      //  if(input.length > 0 ){
            this.setState({userInput : input});
            
      //  }
    }

    onClickHandler(lst){
        if(lst.length > 0){
            let listArray = this.state.list;
            listArray.push(lst);
            this.setState({
                list: listArray,
                userInput: ''}
            );
    }
        
       // console.log(this.state.list);
    }

    onRemove(id) {
        let list = this.state.list.filter((list, index) =>
        index !== id);
      //  list.splice(index, 1);
        this.setState({
            list: list
        });
    }



  render(){
      return(
          <div>
            <div className="home">
                <input className="textbox" type="text" value={this.state.userInput} onChange={(e)=>this.onChangeHandler(e.target.value)} />
                <button className="button" onClick={() => this.onClickHandler(this.state.userInput)}>Press Me</button>

            </div>
            <div className="list">
                <ul>
                      {
                            this.state.list.map( (val,index) =>  
                                          
                            <div>
                                <li>{val}</li> <button key={index} onClick={() => this.onRemove(index)}>Remove</button>
                            </div>)
                            
                      }
                        
                </ul>
            </div>
          </div>
  
      );
  }

}

export default Todo;