import React from 'react';
import { Pane, Text, defaultTheme, Textarea, IconButton } from 'evergreen-ui';
function App() {
  return (
    <Pane
      className="App"
      width="100%"
      height="100%"
      backgroundColor={defaultTheme.palette.blue.dark}
    >
      <Pane>
        <Text color={defaultTheme.palette.neutral.lightest}>
          Stir something up
        </Text>
        <Text color={defaultTheme.palette.neutral.lightest}> - </Text>
        <Text color={defaultTheme.palette.neutral.lightest}>Let me think</Text>
      </Pane>
      <Pane
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Pane>
          <Textarea placeholder="What do you think?"></Textarea>
          <IconButton icon="lock">Keep that thought</IconButton>
        </Pane>
      </Pane>
    </Pane>
  );
}

export default App;
