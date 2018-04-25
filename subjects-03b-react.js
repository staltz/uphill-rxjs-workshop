class Hello extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };

    this.subject = new Rx.Subject();

    this.subject
      .map(ev => +1)
      .scan((acc, x) => acc + x)
      .delay(1000)
      .subscribe(x => {
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

ReactDOM.render(<Hello name="Codestar" />, document.querySelector("#app"));
