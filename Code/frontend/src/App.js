import React, { useState, useEffect } from 'react';
import { toaster, ResetIcon } from 'evergreen-ui';
import View from './View/View';

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
  const [displayedThought, setDisplayedThought] = useState(data[0].thought);
  const [thoughtInTheMaking, setThoughtInTheMaking] = useState('');

  useEffect(() => {
    localStorageCallback(thoughts);
  }, [thoughts, localStorageCallback]);

  const updateDisplayedThought = () => {
    if (thoughts.length < 1) {
      // nothing to update
    } else if (thoughts.length < 1) {
      setDisplayedThought(thoughts[0].thought);
    } else {
      const sortedThoughts = thoughts.sort((a, b) => b.lastSeen - a.lastSeen);
      const oldest = sortedThoughts[thoughts.length - 1];
      const newest = sortedThoughts[0];
      oldest.lastSeen = Date.now();
      setDisplayedThought(newest.thought);
    }
  };

  const updateThoughtInTheMaking = (event) => {
    const text = event.target.value;
    if (text.length > 140) {
      toaster.notify('Keep your thoughts short!');
    } else {
      setThoughtInTheMaking(text);
    }
  };

  const submitThoughtInTheMaking = (event) => {
    if (event.key === 'Enter') {
      addThought();
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
    <View
      thoughts={thoughts}
      addThought={addThought}
      thoughtInTheMaking={thoughtInTheMaking}
      submitThoughtInTheMaking={submitThoughtInTheMaking}
      updateThoughtInTheMaking={updateThoughtInTheMaking}
      displayedThought={displayedThought}
      updateDisplayedThought={updateDisplayedThought}
    />
  );
};

export default App;
