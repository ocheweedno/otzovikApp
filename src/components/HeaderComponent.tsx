import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { ReactComponent as MoreIcon } from "../assets/moreBtn.svg";
import { Header } from "./Layout/Header";
import { MenuComponent } from "./Menu";
import { Drawer } from "antd";
import { useAuthCheck } from "../hooks/useAuthCheck";

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const drawerSize = document.documentElement.scrollWidth;

  const { auth } = useAuthCheck();

  return (
    <Header>
      <LogoIcon />
      {auth ? (
        <>
          <MoreIcon onClick={showDrawer} style={{ cursor: "pointer" }} />
          <Drawer
            placement="right"
            onClose={onClose}
            open={open}
            width={drawerSize}
          >
            <MenuComponent onHeaderClose={onClose} />
          </Drawer>
        </>
      ) : (
        <></>
      )}
    </Header>
  );
};
