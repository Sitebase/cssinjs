var InteractionAwareMixin = {
  componentWillMount: function() {
    this.state = this.state || {};
    this.state.hovered = false;
  },
  componentDidMount: function() {
    this.getDOMNode().addEventListener("mouseover", this.onOver.bind(this));
    this.getDOMNode().addEventListener("mouseout", this.onOut.bind(this));
  },
  componentWillUnmount: function() {
    this.getDOMNode().removeEventListener("mouseover", this.onOver);
    this.getDOMNode().removeEventListener("mouseout", this.onOut);
  },
  onOver: function() {
    console.error('Hover');
    this.setState({ hovered: true });
  },
  onOut: function() {
    console.error('Out');
    this.setState({ hovered: false });
  },
};