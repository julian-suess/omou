import React, { useState, useEffect } from 'react';
import Box from 'ui-box';
import { ReactComponent as Logo } from './assets/Logo.svg';
import { ReactComponent as Basin } from './assets/Basin-1.svg';

const backgroundColor = '#f7f7f7';
const fontColor = '#B2B2B2'; //'#d9d9d9'; //'#e5e5e5'; //'#f2f2f2';
const text = {
  inputFieldPlaceholder: 'What do you think?',
};

const App = () => {
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
      >
        <Box color={fontColor} fontFamily="Alatsi">
          <Logo width="140px" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" padding={24}>
        <Box width={1024}>
          <Box position="fixed" left="20vw">
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
              placeholder={text.inputFieldPlaceholder}
              onChange={resize}
              onKeyDown={resize}
              onPaste={resize}
              onCut={resize}
              onDrop={resize}
            ></textarea>
          </Box>
          <Box height="100vh">
            <Basin width="100%" height="100%" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
