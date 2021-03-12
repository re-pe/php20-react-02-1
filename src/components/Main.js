import { Component } from 'react'; // variantas su klasių komponentais

/**
 * Klasių komponentai su jsx
 */
class Main extends Component {
    constructor() {
        super()
        this.state = {
            likes: 0,
            hates: 0,
        }
        this.btnData = [
            ['success', this.countLikes, () => `Like ${this.state.likes}`],
            ['danger', this.countHates, () => `Hate ${this.state.hates}`],
            ['info', this.resetStatus, () => 'Reset'],
        ];
    }

    countLikes = () => this.setState({ likes: this.state.likes + 1 })
    countHates = () => this.setState({ hates: this.state.hates + 1 })
    resetStatus = () => this.setState({ likes: 0, hates: 0 })

    render = () => (
        <main className="row text-start">
            <div className="col">
                <h1>Post</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                suscipit, deserunt dicta quam soluta ipsum odio veritatis pariatur
                quia beatae error nisi delectus expedita, voluptatum nobis. Rem
                ducimus ad minima!</p>
                {this.btnData.map((props, id) => (
                    <button
                        key={id}
                        className={`btn btn-${props[0]} mx-2`}
                        onClick={props[1]}
                    >{props[2]()}</button>
                ))}
            </div>
        </main>
    )
}

export default Main;
