import React from 'react';
import colors from '../../../theme/colors';
import { useThemeModeProvider } from '../../../context/ThemeModeContext';

export default function Light() {
  const { themeMode } = useThemeModeProvider();

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 18.366C10.3116 18.366 8.69239 17.6953 7.49852 16.5015C6.30466 15.3076 5.63395 13.6884 5.63395 12C5.63395 10.3116 6.30466 8.69239 7.49852 7.49852C8.69239 6.30466 10.3116 5.63395 12 5.63395C13.6884 5.63395 15.3076 6.30466 16.5015 7.49852C17.6953 8.69239 18.366 10.3116 18.366 12C18.366 13.6884 17.6953 15.3076 16.5015 16.5015C15.3076 17.6953 13.6884 18.366 12 18.366ZM20.4881 15.5119L24 12L20.4881 8.48806V3.51194H15.5119L12 0L8.48806 3.51194H3.51194V8.48806L0 12L3.51194 15.5119V20.4881H8.48806L12 24L15.5119 20.4881H20.4881V15.5119Z"
        fill={colors[themeMode].typography.main}
      />
    </svg>
  );
}
