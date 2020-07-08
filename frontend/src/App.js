import React, { useState } from 'react';
import {
  Pane,
  defaultTheme,
  Textarea,
  IconButton,
  Heading,
  toaster,
  Text,
} from 'evergreen-ui';

const data = [
  {
    thought: 'This is what I think.',
    createdAt: 1594233153181,
    lastSeen: 1594233153181,
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
  const [thought, setThought] = useState('I wanna eat your soul.');
  const [thoughtInTheMaking, setThoughtInTheMaking] = useState('');

  const updateThought = () => {
    const sortedThoughts = thoughts.sort((a, b) => b.lastSeen - a.lastSeen);
    const oldest = sortedThoughts[thoughts.length - 1];
    const newest = sortedThoughts[0];
    oldest.lastSeen = Date.now();
    setThought(newest.thought);
  };

  const addThought = () => {
    if (thoughtInTheMaking.trim().length > 0) {
      setThoughts([
        ...thoughts,
        {
          thought: thoughtInTheMaking.trim(),
          createdAt: Date.now(),
          lastSeen: Date.now(),
        },
      ]);
    }
    setThoughtInTheMaking('');
  };

  return (
    <Pane
      className="App"
      width="100%"
      height="100%"
      backgroundColor={defaultTheme.scales.neutral.N10}
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
            wordWrap="break-word"
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
            placeholder="What do you think?"
            value={thoughtInTheMaking}
            onChange={(event) => {
              const text = event.target.value;
              if (text.length > 140) {
                toaster.notify('Keep your thoughts short!');
              } else {
                setThoughtInTheMaking(text);
              }
            }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                addThought();
              }
            }}
            padding={24}
          ></Textarea>
          <Pane
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
          >
            <Text color={defaultTheme.palette.neutral.lightest}>
              Characters left: {140 - thoughtInTheMaking.length}
            </Text>
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
