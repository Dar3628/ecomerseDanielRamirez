export class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: "Juan",
            surname: "Pintos",
        };
    }

    updateName = () => {
        this.setState({name: "Leo"});
    }


    render() {
        const {name, age} = this.props;
        //console.log("Props classComponent", this.props);
        return (
            <Fragment>
                <h1>ClassComponent</h1>
                <div onClick={this.updateName}>
                    <h2>Nombre del estado: {this.state.name}</h2>
                </div>
                <div onClick={this.updateName}>
                    <h2>Nombre del estado: {this.state.surname}</h2>
                </div>
                <h2> Nombre: {name}</h2>
                <h2> Edad: {age}</h2>

            </Fragment>
        )
        
    }
}