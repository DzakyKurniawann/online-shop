import React from "react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import HeaderMenu from "@/components/HeaderMenu";
import SearchBar from "@/components/SearchBar";
import CartIcon from "@/components/CartIcon";
import FavoritButton from "@/components/FavoritButton";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between">
        <Logo></Logo>
        <HeaderMenu></HeaderMenu>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar></SearchBar>
          <CartIcon></CartIcon>
          <FavoritButton></FavoritButton>
        </div>
      </Container>
    </header>
  );
};

export default Header;
