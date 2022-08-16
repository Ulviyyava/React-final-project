import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100px;
  margin-top:30px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//Left
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none ;
`;
// Center
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

// Right
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content:flex-end;
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left:25px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color:"gray",fontSize:"16px"}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Nova Fashion.</Logo>
        </Center>
        <Right>
          <MenuItem><Link to={"login"} style={{backgroundColor:"rgba(104, 85, 224, 1)",border:"0",padding:"10px 22px", textDecoration:"none",color:"white" ,fontSize:"23px",borderRadius:"12px"}}>Login</Link></MenuItem>
          <MenuItem><Link to={"register"} style={{backgroundColor:"rgba(104, 85, 224, 1)",border:"0",padding:"10px 22px", textDecoration:"none",color:"white" ,fontSize:"23px",borderRadius:"12px"}}>Register</Link></MenuItem>
          <MenuItem>
            <IconButton aria-label="cart">
              <Link to={"cart"}>
              <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
              </Badge>
              </Link>
            </IconButton>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
