import * as Headless from '@headlessui/react';
import React from 'react';
import FocusLock from 'react-focus-lock';

const ReactLiveScope = {
  React,
  ...React,
  ...Headless,
  FocusLock,
};

export default ReactLiveScope;
