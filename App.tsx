import React from 'react';
import {styled, StyledProvider} from '@gluestack-style/react';
import {config} from './gluestack-style.config';
import {Pressable, SafeAreaView, Text as RNText} from 'react-native';
import {Root, Text} from './styled-components';

const MountTest = () => {
  const MountElements = new Array(100).fill(0).map((_, i) => (
    <Root key={i}>
      <Text>Gluestack Style</Text>
    </Root>
  ));
  return <>{MountElements}</>;
};
const App = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  return (
    <StyledProvider config={config.theme}>
      <SafeAreaView>
        <Pressable
          onPress={() => setIsMounted(!isMounted)}
          style={{
            backgroundColor: 'red',
            padding: 10,
          }}>
          <Text>Toggle Mount</Text>
        </Pressable>
        {isMounted ? <MountTest /> : <></>}
      </SafeAreaView>
    </StyledProvider>
  );
};

export default App;
