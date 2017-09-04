import React from 'react';
import {
  Image,
  ImageBackground,
  View
} from 'react-native';

class ImageWithPlaceholder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isError: false
    };
  }

  onLoadEnd() {
    this.setState({
      isLoaded: true
    });
  }

  onError() {
    this.setState({
      isError: true
    });
  }

  render() {
    let showPlaceholder = !this.state.isLoaded || this.state.isError;
    return (
      <ImageBackground
        onLoadEnd={this.onLoadEnd.bind(this)}
        onError={this.onError.bind(this)}
        style={this.props.style}
        source={this.props.source}
        resizeMode={this.props.resizeMode} >
        {
          showPlaceholder &&
          <Image
            style={this.props.style}
            source={this.props.placeholderSource}
            resizeMode={this.props.resizeMode}>
          </Image>
        }
      </ImageBackground>
    );
  }
}

export default ImageWithPlaceholder;