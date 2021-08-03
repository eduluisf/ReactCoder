import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function CartIcon() {
  return (
    <Button variant="contained" color="secondary">
      <ShoppingCartIcon />
    </Button>
  );
}
