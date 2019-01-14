import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: amber,
  },
});
