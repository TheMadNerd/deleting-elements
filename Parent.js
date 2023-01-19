const Child = (props) => {
    return(
        <li>
            {props.name}
            <button onClick={props.delete}>Usuń</button>
        </li>
    )
}


class Parent extends React.Component {
    state = {
        people: [
            { id: 1, name: "J.Kaczmarski"},
            { id: 2, name: "B.Wysowski"},
            { id: 3, name: "M.Porębski"},
            { id: 4, name: "M.Stypuła"}
        ]
    }

    handleDelete = (id) => {
        const people = [...this.state.people];
        const index = people.findIndex(person => person.id === id)
        people.splice(index, 1)
        this.setState({
            people,
        })
    }


render() {
    return(
        <ul>
           {this.state.people.map(person => <Child key={person.id} name={person.name} delete={this.handleDelete.bind(this, person.id)} />)}
        </ul>
    )
}

}

ReactDOM.render(<Parent />, document.getElementById('root'))