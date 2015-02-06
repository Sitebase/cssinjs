var Button = React.createClass({
  styles: {
    container: {
      fontSize: '13px',
      backgroundColor: 'rgb(233, 234, 237)',
      border: '1px solid #cdced0',
      borderRadius: 2,
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
      padding: '0 8px',
      margin: 2,
      lineHeight: '23px'
    },
    depressed: {
      backgroundColor: '#4e69a2',
      borderColor: '#1A356E',
      color: '#FFF'
    },
    smallSize: {
      fontSize: '10px',
      lineHeight: '20px'
    },
    largeSize: {
      fontSize: '17px',
      lineHeight: '30px'
    },
    hover: {
      backgroundColor: '#0F0'
    }
  },
  propTypes: {
    isDepressed: React.PropTypes.bool,
    style: React.PropTypes.object,
    size: React.PropTypes.oneOf(['small', 'default', 'large']),
  },
  mixins: [InteractionAwareMixin],
  getDefaultProps: function() {
    return {
      size: 'default'
    };
  },
  render: function() {
    console.error('Render button with state', this.state);
    return (
      <button style={m(
        this.styles.container,
        this.props.isDepressed && this.styles.depressed,
        this.props.size === 'small' && this.styles.smallSize,
        this.props.size === 'large' && this.styles.largeSize,
        this.state.hovered && this.styles.hover,
        this.props.style
      )}>{this.props.children}</button>
    );
  }
});