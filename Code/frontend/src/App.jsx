import React, { useState, useEffect } from 'react';
import {
  Pane,
  defaultTheme,
  Textarea,
  IconButton,
  Heading,
  toaster,
  Text,
} from 'evergreen-ui';

const App = () => {
  return (
    <Pane width="100%" height="100%" padding={23}>
      <Pane>Logo</Pane>

      <Pane display="flex" flexDirection="row" alignItems="center">
        <Pane
          backgroundColor="rgb(179, 179, 179)"
          width={4}
          height={30}
          marginRight={6}
        />
        <Heading fontFamily="Alatsi" size={900} color="rgb(179, 179, 179)">
          Was denkst du?
        </Heading>
      </Pane>
    </Pane>
  );
};

export default App;
