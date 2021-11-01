import { Drawer, Button } from "@mui/material";

const NavDrawer = () => {
  const anchor = 'left';
  return (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  );
};

export default NavDrawer