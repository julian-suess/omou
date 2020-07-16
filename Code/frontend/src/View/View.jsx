import React, { useState, useEffect } from 'react';
import Box from 'ui-box';
import { ReactComponent as Logo } from './assets/Logo.svg';
import { ReactComponent as Basin } from './assets/Basin-1.svg';
import Localization from './Localization';
import { backgroundColor, fontColor } from './Style';

const TextArea = ({
  thoughtInTheMaking,
  submitThoughtInTheMaking,
  updateThoughtInTheMaking,
}) => {
  const [textAreaHeight, setTextAreaHeight] = useState('48px');
  const resize = (event) => {
    // https://stackoverflow.com/questions/10722058/height-of-textarea-increases-when-value-increased-but-does-not-reduce-when-value
    if (event.target) {
      event.target.style.height = '1px';
      setTextAreaHeight(event.target.scrollHeight + 'px');
      event.target.style.height = textAreaHeight;
    }
  };

  return (
    <textarea
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: fontColor,
        fontFamily: 'Alatsi',
        fontSize: '34px',
        border: 'none',
        borderLeft: '4px solid ' + fontColor,
        paddingLeft: '12px',
        outline: 'none',
        resize: 'none',
        height: textAreaHeight,
      }}
      rows="1"
      type="text"
      placeholder={Localization.thoughtInputPlaceholder}
      onChange={(event) => {
        updateThoughtInTheMaking(event);
        resize(event);
      }}
      onKeyDown={resize}
      onKeyUp={(event) => {
        submitThoughtInTheMaking(event);
        resize(event);
      }}
      onPaste={resize}
      onCut={resize}
      onDrop={resize}
      value={thoughtInTheMaking}
    ></textarea>
  );
};

const View = ({
  thoughts,
  addThought,
  thoughtInTheMaking,
  submitThoughtInTheMaking,
  updateThoughtInTheMaking,
  displayedThought,
  updateDisplayedThought,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      updateDisplayedThought();
    }, 2000);
    return () => clearInterval(interval);
  }, [updateDisplayedThought]);

  return (
    <Box
      backgroundColor={backgroundColor}
      width="100%"
      height="100%"
      overflow="hidden"
    >
      <Box
        as={'nav'}
        height={64}
        width="100%"
        display="flex"
        alignItems="center"
        padding={48}
        zIndex={100}
      >
        <Box color={fontColor} fontFamily="Alatsi">
          <Logo width="140px" />
        </Box>
      </Box>
      <Box position="absolute" marginTop={20} marginLeft={120} zIndex={10}>
        <TextArea
          thoughts={thoughts}
          addThought={addThought}
          thoughtInTheMaking={thoughtInTheMaking}
          submitThoughtInTheMaking={submitThoughtInTheMaking}
          updateThoughtInTheMaking={updateThoughtInTheMaking}
          updateDisplayedThought={updateDisplayedThought}
        />
      </Box>
      <Box display="flex" width="100%" justifyContent="center" zIndex={1}>
        <Box position="fixed" margin="auto" width="1024px" bottom="0px">
          <Basin width="100%" height="100%" />
        </Box>
        <p id="text">{displayedThought}</p>
      </Box>
    </Box>
  );
};

export default View;
