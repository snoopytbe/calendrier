import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export const StyleTableCell = (theme) => ({
  root: {
    textAlign: "center",
    border: "1px solid",
    '&[class*="annee"]': {
      backgroundColor: "#070722ff",
      color: "#e2e8fbff"
    }
  }
});

export default withStyles(StyleTableCell, { name: "MyTableCell" })(TableCell);
