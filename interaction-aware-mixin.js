var InteractionAwareMixin = {
  componentWillMount: function() {
    this.state = this.state || {};
    this.state.interactionHovered = false;
  },
  componentDidMount: function() {
    this.state = this.state || {};
    this.getDOMNode().addEventListener("mouseover", this.onOver.bind(this));
    this.getDOMNode().addEventListener("mouseout", this.onOut.bind(this));
  },
  componentWillUnmount: function() {
    this.getDOMNode().removeEventListener("mouseover", this.onOver);
    this.getDOMNode().removeEventListener("mouseout", this.onOut);
  },
  onOver: function() {
    console.error('Hover');
    this.setState({ interactionHovered: true });
  },
  onOut: function() {
    console.error('Out');
    this.setState({ interactionHovered: false });
  },
};