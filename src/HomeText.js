import React from 'react'

class HomeText extends React.Component {
    constructor() {
        super()
        this.state = {
            cursorShow: "visible thin",
            line1: [],
            line2: []
        }
        this.timeouts1 = []
        this.timeouts2 = []
        this.line1time = null

    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.state.cursorShow === "visible" ? this.setState({ cursorShow: 'hidden' }) : this.setState({ cursorShow: "visible" }), 500)
        this.typeText("Hey there, welcome.", "Feel free to wander around...")
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        this.timeouts1.forEach((key) => clearInterval(key))
        this.timeouts2.forEach((key) => clearInterval(key))
        clearTimeout(this.timeout3)
        clearTimeout(this.timeout4)
        clearTimeout(this.timeout5)
    }

    typeText = (string1, string2) => {
        let array = string1.split("")
        this.line1time = (array.length - 1) * 100 + 500
        for (let i = 0; i < string1.length; i++) {
            this.timeouts1[i] = setTimeout(() => {
                let shallowCopy = this.state.line1
                shallowCopy.push(array[i])
                this.setState({ line1: shallowCopy })
            }, 100 * i + 500)
        }

        this.timeout4 = setTimeout(() => this.setState({ break: true }), this.line1time)

        let array2 = string2.split('')
        this.line2time = (array2.length - 1) * 100 + 2000
        for (let i = 0; i < string2.length; i++) {
            this.timeouts2[i] = setTimeout(() => {
                let shallowCopy = this.state.line2
                shallowCopy.push(array2[i])
                this.setState({ line2: shallowCopy })
            }, 100 * i + this.line1time + 2000)
        }

        this.timeout3 = setTimeout(() => this.setState({ break2: true, cursorShow:"hidden" }), this.line1time + this.line2time + 500)
        this.timeout5 = setTimeout(()=> clearInterval(this.interval), this.line1time + this.line2time + 500)

    }

    text = () => {
        if (this.props.showIntro) {
            return <React.Fragment><p className="home-text"><span >>> {this.state.line1.join('')}
                {this.state.break &&
                    <React.Fragment>
                        <br /> <span>>> {this.state.line2.join('')}</span>
                    </React.Fragment>}
                {this.state.break2 &&
                    <React.Fragment>
                        <br /> <span>>> <input className="input" type="text" onKeyDown={this.props.commands}></input></span>
                    </React.Fragment>}
                {<span className={this.state.cursorShow}>|</span>}
            </span></p></React.Fragment>
        } else {
            return <React.Fragment>
                <p>>> Welcome again.
                    <br />>> Feel free to wander around...
                    <br />>> <input className="input" type="text" onKeyDown={this.props.commands}></input>
                </p>
                
            </React.Fragment>
        }
    }
    render() {
        return (
            <div className="home-text-container">
                {this.text()}
            </div>)
    }
}

export default HomeText