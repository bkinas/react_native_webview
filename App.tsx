import React from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import WebView from 'react-native-webview';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <WebView
      style={backgroundStyle}
      allowsInlineMediaPlayback
      originWhitelist={['*']}
      source={{uri: 'https://efr.dev.remitly.com/'}}
      onLoadEnd={() => console.log('onLoadEnd')}
      onError={error => console.error(error)}
    />
  );
}

export default App;
