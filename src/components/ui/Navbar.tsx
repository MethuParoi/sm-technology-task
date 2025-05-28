"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Button,
  Avatar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Home as HomeIcon,
  Storefront as StorefrontIcon,
  InfoOutlined as InfoOutlinedIcon,
  ArticleOutlined as ArticleOutlinedIcon,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  closeLogInModal,
  closeRegisterModal,
  openLoginModal,
} from "../../store/features/modalSlice"; // Modal actions
import LoginModal from "../../components/auth/LoginModal"; // Import LoginModal component
import RegisterModal from "../../components/auth/RegisterModal";
import { AppDispatch } from "@/store/store";
import { RootState } from "@/store/store";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { user } = useSelector((state: RootState) => state.auth);
  const loginModalOpen = useSelector(
    (state: RootState) => state.modal.loginModalOpen
  );
  const registerModalOpen = useSelector(
    (state: RootState) => state.modal.registerModalOpen
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      )
        return;
      setDrawerOpen(open);
    };

  const drawerList = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { href: "/", icon: <HomeIcon />, text: "Home" },
          { href: "/shop", icon: <StorefrontIcon />, text: "Shop" },
          { href: "/about-us", icon: <InfoOutlinedIcon />, text: "About us" },
          { href: "/blog", icon: <ArticleOutlinedIcon />, text: "Blog" },
        ].map((item) => (
          <Link key={item.text} href={item.href}>
            <ListItemButton selected={pathname === item.href}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </Link>
        ))}
        <Link href="/favorites">
          <ListItemButton>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItemButton>
        </Link>
        <Link href="/checkout">
          <ListItemButton>
            <ListItemIcon>
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About us", href: "/about-us" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:
            scrolled || pathname !== "/" ? "white" : "transparent",
          boxShadow: "none",
          color: "black",
          width: "100%",
          maxWidth: "90rem",
          margin: "0 auto",
          left: 1 / 2,
          right: 1 / 2,
        }}
      >
        <Toolbar className="mx-auto w-full flex justify-between">
          <Link
            href="/"
            className="relative w-[160px] sm:w-[225px] aspect-[6/1]"
          >
            <Image src="/logo.svg" alt="Fresh Harvests" layout="fill" />
          </Link>

          <nav className="hidden lg:flex flex-1 justify-center space-x-10">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`relative font-medium text-[#101010] hover:text-[#5d7c2a] transition-colors
                  ${
                    pathname === href
                      ? "after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-3/4 after:bg-[#5d7c2a]"
                      : ""
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {/* Favorites */}
            <Link href="#" className="hidden lg:flex">
              <IconButton
                sx={{ color: scrolled || pathname !== "/" ? "black" : "white" }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Link>

            {/* Cart */}
            <Link href="#" className="hidden lg:flex">
              <IconButton
                sx={{ color: scrolled || pathname !== "/" ? "black" : "white" }}
              >
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* Avatar OR Sign‑in */}
            {user ? (
              <Link href="#">
                <Avatar
                  alt="User Avatar"
                  src="/avatar.png"
                  sx={{ width: 36, height: 36 }}
                />
              </Link>
            ) : (
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderColor: scrolled || pathname !== "/" ? "black" : "white",
                  color: scrolled || pathname !== "/" ? "black" : "white",
                  borderRadius: "8px",
                  textTransform: "none",
                  paddingX: "2px",
                  "&:hover": {
                    borderColor:
                      scrolled || pathname !== "/" ? "black" : "white",
                    backgroundColor: "rgba(255,255,255,0.15)",
                  },
                }}
                onClick={() => dispatch(openLoginModal())}
              >
                Sign In
              </Button>
            )}

            {/* Mobile cart icon */}
            <Link href="#" className="lg:hidden">
              <IconButton
                sx={{ color: scrolled || pathname !== "/" ? "black" : "white" }}
              >
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* Mobile hamburger */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="lg:hidden"
              sx={{
                color: scrolled || pathname !== "/" ? "black" : "white",
                "@media (min-width:1024px)": {
                  display: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>

      <LoginModal
        open={loginModalOpen}
        onClose={() => dispatch(closeLogInModal())}
      />
      <RegisterModal
        open={registerModalOpen}
        onClose={() => dispatch(closeRegisterModal())}
      />
    </>
  );
}
