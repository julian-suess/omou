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

const storageAvailable = (type) => {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};

function App() {
  if (storageAvailable('localStorage')) {
    const debug = false;
    if (debug) {
      localStorage.clear();
    }

    const now = Date.now();
    const storageID = 'thoughts';
    const data = JSON.parse(localStorage.getItem(storageID)) || [
      {
        thought: 'I’m too drunk to taste this chicken.',
        createdAt: now,
        lastSeen: now,
      },
    ];

    return (
      <Omou
        data={data}
        localStorageCallback={(thoughts) => {
          localStorage.setItem(storageID, JSON.stringify(thoughts));
        }}
      />
    );
  } else {
    const data = [
      {
        thought:
          'People say nothing is impossible, but I do nothing every day.',
        createdAt: 1594233153181,
        lastSeen: 1594233153181,
      },
      {
        thought:
          'Nobody realizes that some people expend tremendous energy merely to be normal.',
        createdAt: 1594233235733,
        lastSeen: 1594233235733,
      },
      {
        thought: 'I’m too drunk to taste this chicken.',
        createdAt: 1594233241368,
        lastSeen: 1594233241368,
      },
      {
        thought:
          'My opinions may have changed, but not the fact that I’m right.',
        createdAt: 1594233246323,
        lastSeen: 1594233246323,
      },
    ];
    return <Omou data={data} />;
  }
}

const Omou = ({
  data,
  localStorageCallback = (value) => {
    console.log(value);
  },
}) => {
  const [thoughts, setThoughts] = useState(data);
  const [thought, setThought] = useState(data[0].thought);
  const [thoughtInTheMaking, setThoughtInTheMaking] = useState('');

  useEffect(() => {
    localStorageCallback(thoughts);
  }, [thoughts, localStorageCallback]);

  const updateThought = () => {
    if (thoughts.length < 1) {
      // nothing to update
    } else if (thoughts.length < 1) {
      setThought(thoughts[0].thought);
    } else {
      const sortedThoughts = thoughts.sort((a, b) => b.lastSeen - a.lastSeen);
      const oldest = sortedThoughts[thoughts.length - 1];
      const newest = sortedThoughts[0];
      oldest.lastSeen = Date.now();
      setThought(newest.thought);
    }
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
    } else {
      toaster.notify('Did you even write something?');
    }
    setThoughtInTheMaking('');
  };

  return (
    <Pane
      className="App"
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      marginBottom="10rem"
    >
      <Pane
        width="80vw"
        height="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Pane marginTop="5rem" marginBottom="3rem" width="80%">
          <Heading
            size={900}
            color={defaultTheme.palette.neutral.lightest}
            marginBottom="1rem"
            textAlign="center"
            wordWrap="break-word"
            height="10rem"
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
            height="5rem"
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
            onKeyUp={(event) => {
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
};

export default App;
