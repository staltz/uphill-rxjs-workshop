const React = require('react');
const ReactDOM = require('react-dom');
const {Subject} = require('rxjs');
const {map, scan, delay} = require('rxjs/operators')

class Hello extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };

    this.subject = new Subject();

    this.subject.pipe(
      map(ev => +1),
      scan((acc, x) => acc + x),
      delay(1000),
    ).subscribe(x => {
      this.setState({ count: x });
    });
  }

  render() {
    return (
      <div onClick={ev => this.subject.next(ev)}>
        {`${this.state.count} Hello ${this.props.name}`}
      </div>
    );
  }
}

ReactDOM.render(<Hello name="Uphill" />, document.querySelector("#app"));
