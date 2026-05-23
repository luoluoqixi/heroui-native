"use strict";

import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
export const useKeyboardStatus = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [keyboardStatus]);
  return keyboardStatus;
};
//# sourceMappingURL=use-keyboard-status.js.map