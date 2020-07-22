import { createMuiTheme } from '@material-ui/core';

import palette from '@theme/materialUITheme/palette';
import typography from '@theme/materialUITheme/typography';

const theme = createMuiTheme({
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
