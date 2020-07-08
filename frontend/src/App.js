import React, { useState } from 'react';
import {
  Pane,
  defaultTheme,
  Textarea,
  IconButton,
  Heading,
} from 'evergreen-ui';

const data = [
  {
    thought: 'This is what I think.',
    createdAt: 1594233153131,
    lastSeen: 1594233153131,
  },
  {
    thought: 'I should buy a horse.',
    createdAt: 1594233235733,
    lastSeen: 1594233235733,
  },
  {
    thought: 'Omou changed my life.',
    createdAt: 1594233241368,
    lastSeen: 1594233241368,
  },
  {
    thought: 'All I know is written on this page.',
    createdAt: 1594233246323,
    lastSeen: 1594233246323,
  },
];

function App() {
  const [thoughts, setThoughts] = useState(data);
  const [thought, setThought] = useState(thoughts[0].thought);
  const [thoughtInTheMaking, setThoughtInTheMaking] = useState(null);

  const updateThought = () => {
    const sortedThoughts = thoughts.sort((a, b) => b.lastSeen - a.lastSeen);
    const oldest = sortedThoughts[thoughts.length - 1];
    oldest.lastSeen = Date.now();
    setThought(oldest.thought);
  };

  const addThought = () => {
    setThoughts([
      ...thoughts,
      {
        thought: thoughtInTheMaking,
        createdAt: Date.now(),
        lastSeen: Date.now(),
      },
    ]);

    setThoughtInTheMaking('');
  };

  return (
    <Pane
      className="App"
      width="100%"
      height="100%"
      backgroundColor={defaultTheme.scales.neutral.N10}
      overflow="hidden"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Pane
        width="80vw"
        height="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Pane marginY={120} width="80%">
          <Heading
            size={900}
            color={defaultTheme.palette.neutral.lightest}
            marginBottom={64}
            textAlign="center"
          >
            {thought}
          </Heading>
          <Pane
            width="100%"
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            flexDirection="column"
          >
            <IconButton onClick={updateThought} icon="reset">
              Keep that thought
            </IconButton>
          </Pane>
        </Pane>
        <Pane width="80%">
          <Textarea
            validationMessage="Keep your thoughts to 140 characters."
            placeholder="What do you think?"
            value={thoughtInTheMaking}
            onChange={(event) => setThoughtInTheMaking(event.target.value)}
            padding={24}
          ></Textarea>
          <Pane
            width="100%"
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            flexDirection="column"
          >
            <IconButton onClick={addThought} icon="lock">
              Keep that thought
            </IconButton>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
}

export default App;
