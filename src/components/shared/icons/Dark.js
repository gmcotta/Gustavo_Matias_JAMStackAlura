import React from 'react';
import colors from '../../../theme/colors';
import { useThemeModeProvider } from '../../../context/ThemeModeContext';

export default function Dark() {
  const { themeMode } = useThemeModeProvider();

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 19.1193C11.0557 19.1193 10.1538 18.9083 9.34748 18.5389C11.5332 17.5363 13.061 15.3411 13.061 12.7872C13.061 10.2332 11.5332 8.03803 9.34748 7.03544C10.1538 6.66606 11.0557 6.45499 12 6.45499C13.6884 6.45499 15.3076 7.12213 16.5015 8.30964C17.6953 9.49715 18.366 11.1078 18.366 12.7872C18.366 14.4666 17.6953 16.0772 16.5015 17.2647C15.3076 18.4522 13.6884 19.1193 12 19.1193ZM20.4881 9.29391V4.34426H15.5119L12 0.851013L8.48806 4.34426H3.51194V9.29391L0 12.7872L3.51194 16.2804V21.2301H8.48806L12 24.7233L15.5119 21.2301H20.4881V16.2804L24 12.7872L20.4881 9.29391Z"
        fill={colors[themeMode].typography.main}
      />
    </svg>
  );
}
