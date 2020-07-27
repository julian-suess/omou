import React, { useState, useEffect } from 'react';
import Box from 'ui-box';
import { motion } from 'framer-motion';
import Basin from './Basin';
import { backgroundColor, fontColor, fontFamily } from './Style';
import Localization from './Localization';
import { useWindowDimensions } from '../hooks';

const TextArea = ({
  thoughtInTheMaking,
  submitThoughtInTheMaking,
  updateThoughtInTheMaking,
}) => {
  const [textAreaHeight, setTextAreaHeight] = useState('48px');
  const resize = (event) => {
    if (event.key === 'Enter') {
      setTextAreaHeight('48px');
    } else {
      // https://stackoverflow.com/questions/10722058/height-of-textarea-increases-when-value-increased-but-does-not-reduce-when-value
      if (event.target) {
        console.log(event.target.scrollHeight);
        event.target.style.height = '1px';
        setTextAreaHeight(event.target.scrollHeight + 'px');
        event.target.style.height = textAreaHeight;
      }
    }
  };

  return (
    <textarea
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: 'white',
        fontFamily: fontFamily,
        fontSize: '34px',
        border: 'none',
        borderLeft: '4px solid white',
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
      value={thoughtInTheMaking}
    ></textarea>
  );
};

const BREAKPOINTS = {
  MOBILE: 320,
  TABLET: 800,
};

const View = (props) => {
  const { width, height } = useWindowDimensions();

  let component = <Tablet {...props} />;
  switch (true) {
    case width > BREAKPOINTS.TABLET:
      component = <Desktop {...props} width={width} height={height} />;
      break;
    case width < BREAKPOINTS.TABLET && width > BREAKPOINTS.MOBILE:
      component = <Tablet {...props} />;
      break;
    default:
      break;
  }
  return component;
};

const Tablet = ({
  thoughts,
  addThought,
  thoughtInTheMaking,
  submitThoughtInTheMaking,
  updateThoughtInTheMaking,
  displayedThought,
  updateDisplayedThought,
}) => {
  return (
    <Box
      backgroundColor={backgroundColor}
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box color={fontColor} fontFamily={fontFamily}>
        Hello Omou
      </Box>
    </Box>
  );
};

// w / h
const ratio = 1920 / 1080;
const Desktop = ({
  thoughts,
  addThought,
  thoughtInTheMaking,
  submitThoughtInTheMaking,
  updateThoughtInTheMaking,
  displayedThought,
  updateDisplayedThought,
  width,
  height,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  const variants = {
    rising: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const cWidth = height * ratio;

  // 12/7
  let left = 100;
  let position = 'relative';

  return (
    <Box
      backgroundColor={backgroundColor}
      overflow="hidden"
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="start"
      overflow="hidden"
    >
      <Box width={cWidth} height="100%">
        <Basin
          height="100%"
          giveMeAThought={(event) => {
            event.preventDefault();
            event.stopPropagation();
            if (isHidden) {
              updateDisplayedThought();
            }
            setIsHidden(!isHidden);
          }}
        />
        <Box
          position={position}
          top={'-80vh'}
          left={left}
          zIndex={10}
          overflow="hidden"
        >
          <TextArea
            thoughts={thoughts}
            addThought={addThought}
            thoughtInTheMaking={thoughtInTheMaking}
            submitThoughtInTheMaking={submitThoughtInTheMaking}
            updateThoughtInTheMaking={updateThoughtInTheMaking}
            updateDisplayedThought={updateDisplayedThought}
          />
        </Box>
        <Box
          position="relative"
          top={'-60vh'}
          left={0}
          zIndex={20}
          overflow="hidden"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <motion.div
            animate={isHidden ? 'hidden' : 'rising'}
            variants={variants}
          >
            <Box
              fontFamily={fontFamily}
              color={fontColor}
              fontSize="3em"
              width={cWidth / 2.5}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                textAlign="center"
                wordWrap="break-word"
                wordBreak="break-all"
              >
                {displayedThought}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default View;
