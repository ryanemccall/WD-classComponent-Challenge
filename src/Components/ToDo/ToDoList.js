import React, {Component} from 'react';

export default class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            toDo: ['',],
            itemToDo: '',
        }
        this.newToDo = this.newToDo.bind(this);
    }

    newToDo(event) {
        event.preventDefault();
        this.setState({
            toDo: [...this.state.ToDo, this.state.itemToDo],
            itemToDo:'',
        })
    }

    changeHandler(event) {
        this.setState({ itemToDo: event.target.value });
    }

    render() {
        return(
            <div>
                <div>
                    <form onSubmit={this.newToDo}>
                        <input type='text' value={this.state.itemToDo}
                        onChange={(event) => this.changeHandler(event)}/>
                        <button type='submit'>Add To List</button>
                    </form>
                    <ItemList items={this.state.toDo} />
                </div>
            </div>
        )
    }
}

class ItemList extends Component {
    render() {
        return(
            <div>
                {this.props.items.map((item) => {
                    return <Item passingItem={item} />
                })}
            </div>
        )
    }
}

const Item = (props) => {
    return(
        <div>
            <h3>{props.passingItem}</h3>
        </div>
    )
}