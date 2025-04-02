import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  Flex,
  Image,
  HStack,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  Text,
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import "@fontsource/inter";
import { BsGlobe2 } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import hamburgerIcon from "../assets/hamburgerIcon.png";
import "@fontsource/inter/300";

// Add hover state styles to all navigation links in both desktop and mobile views
const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return location.pathname === path || 
          (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <Link 
      to={to} 
      onClick={onClick}
      style={{ 
        fontSize: "24px", 
        fontWeight: "400",
        textDecoration: isActive(to) ? "underline" : "none",
        textUnderlineOffset: "4px",
        position: "relative"
      }}
      _hover={{
        "&::after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "2px",
          bottom: "-2px",
          left: 0,
          backgroundColor: "#00f0ff",
          visibility: "visible",
          transform: "scaleX(1)"
        }
      }}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1050);
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return location.pathname === path || 
          (path !== '/' && location.pathname.startsWith(path));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1050);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      bg="#FBF9F8"
      py={2}
      position="sticky"
      top="0"
      zIndex="sticky"
      color="black"
    >
      <Container maxW="1512px" height={isDesktop ? "80px" : "60px"}>
        <Flex
          h={isDesktop ? "80px" : "60px"}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Velionex Logo */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Flex alignItems="center">
              <Image
                src={logo}
                alt="Velionex Logo"
                height="25px"
                width="159.03px"
              />
            </Flex>
          </Link>

          {/* Mobile Hamburger Menu */}
          <IconButton
            display={isDesktop ? "none" : "flex"}
            aria-label="Open menu"
            fontSize="20px"
            variant="ghost"
            color="black"
            icon={<Image src={hamburgerIcon} alt="Menu" boxSize="20px" />}
            onClick={onOpen}
          />

          {/* Mobile Drawer */}
          <Drawer 
            isOpen={isOpen} 
            placement="right" 
            onClose={onClose} 
            size="full"
          >
            <DrawerOverlay />
            <DrawerContent bg="#FBF9F8">
              <Box position="relative" p={1}>
                <Flex justifyContent="space-between" alignItems="center" mb={6}>
                  <Image
                    src={logo}
                    alt="Velionex Logo"
                    height="25px"
                    width="159.03px"
                    ms={2}
                    mt={2}
                  />
                  <DrawerCloseButton color="black" position="static" ms={2} mt={2}/>
                </Flex>
              </Box>
              <DrawerBody>
                <VStack spacing={5} align="start" pt={8} color="black" width="275px" height="24px">
                  <Link to="/" onClick={onClose} style={{ 
                    fontSize: "24px", 
                    fontWeight: "400",
                    textDecoration: isActive('/') ? "underline" : "none",
                    textUnderlineOffset: "4px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textDecorationColor = "#00f0ff";
                    e.currentTarget.style.textDecorationThickness = "2px";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive('/')) {
                      e.currentTarget.style.textDecoration = "none";
                    } else {
                      e.currentTarget.style.textDecorationColor = "currentColor";
                      e.currentTarget.style.textDecorationThickness = "1px";
                    }
                  }}>Start</Link>
                  
                  <Link to="/wireless" onClick={onClose} style={{ 
                    fontSize: "24px", 
                    fontWeight: "400",
                    textDecoration: isActive('/wireless') ? "underline" : "none", 
                    textUnderlineOffset: "4px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textDecorationColor = "#00f0ff";
                    e.currentTarget.style.textDecorationThickness = "2px";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive('/wireless')) {
                      e.currentTarget.style.textDecoration = "none";
                    } else {
                      e.currentTarget.style.textDecorationColor = "currentColor";
                      e.currentTarget.style.textDecorationThickness = "1px";
                    }
                  }}>Wireless</Link>
                  
                  <Link to="/internet" onClick={onClose} style={{ 
                    fontSize: "24px", 
                    fontWeight: "400",
                    textDecoration: isActive('/internet') ? "underline" : "none", 
                    textUnderlineOffset: "4px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textDecorationColor = "#00f0ff";
                    e.currentTarget.style.textDecorationThickness = "2px";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive('/internet')) {
                      e.currentTarget.style.textDecoration = "none";
                    } else {
                      e.currentTarget.style.textDecorationColor = "currentColor";
                      e.currentTarget.style.textDecorationThickness = "1px";
                    }
                  }}>Internet</Link>
                  
                  <Link to="/directv" onClick={onClose} style={{ 
                    fontSize: "24px", 
                    fontWeight: "400",
                    textDecoration: isActive('/directv') ? "underline" : "none", 
                    textUnderlineOffset: "4px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textDecorationColor = "#00f0ff";
                    e.currentTarget.style.textDecorationThickness = "2px";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive('/directv')) {
                      e.currentTarget.style.textDecoration = "none";
                    } else {
                      e.currentTarget.style.textDecorationColor = "currentColor";
                      e.currentTarget.style.textDecorationThickness = "1px";
                    }
                  }}>Directv</Link>
                  
                  <Link to="/aboutus" onClick={onClose} style={{ 
                    fontSize: "24px", 
                    fontWeight: "400",
                    textDecoration: isActive('/aboutus') ? "underline" : "none", 
                    textUnderlineOffset: "4px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textDecorationColor = "#00f0ff";
                    e.currentTarget.style.textDecorationThickness = "2px";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive('/aboutus')) {
                      e.currentTarget.style.textDecoration = "none";
                    } else {
                      e.currentTarget.style.textDecorationColor = "currentColor";
                      e.currentTarget.style.textDecorationThickness = "1px";
                    }
                  }}>About Us</Link>
                  
                  {/* Language Selector */}
                  <Box w="275px" height="24px" display="flex" flexDirection="column" align="start">
                    <Text mb={4} fontWeight="400" fontSize="24px">Language</Text>
                    <Flex>
                      <Button 
                        size="md" 
                        variant={selectedLanguage === "Eng" ? "solid" : "outline"}
                        mr={4}
                        onClick={() => setSelectedLanguage("Eng")}
                        borderRadius="50px"
                        py={6}
                        px={8}
                        bg={selectedLanguage === "Eng" ? "#cbcac9" : "transparent"}
                        color="black"
                      >
                        English
                      </Button>
                      <Button 
                        size="md" 
                        variant={selectedLanguage === "Esp" ? "solid" : "outline"}
                        onClick={() => setSelectedLanguage("Esp")}
                        borderRadius="50px"
                        py={6}
                        px={8}
                        bg={selectedLanguage === "Esp" ? "#cbcac9" : "transparent"}
                        color="black"
                      >
                        Español
                      </Button>
                    </Flex>
                  </Box>
                  
                  {/* Phone Number */}
                  <Box
                    bg="#66DC99"
                    borderRadius="60px"
                    w="100%"
                    maxW="300px"
                    h="60px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    padding="8px 20px"
                    mt={20}
                    color="black"
                  >
                    <Text
                      fontWeight="500"
                      fontSize="18px"
                      letterSpacing="-0.03em"
                      fontFamily="inter"
                      textAlign="center"
                    >
                      Call us +1 09 5000 2000
                    </Text>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          {/* Desktop & Tablet Navigation */}
          <HStack
            as="nav"
            borderRadius="5px"
            bg="#f0ebea"
            px={4}
            py={2}
            height="40px"
            spacing="8"
            fontSize="16px"
            display={isDesktop ? "flex" : "none"}
          >
            <Link 
              to="/" 
              style={{ 
                textDecoration: isActive('/') ? "underline" : "none",
                textUnderlineOffset: "4px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textDecorationColor = "#00f0ff";
                e.currentTarget.style.textDecorationThickness = "2px";
              }}
              onMouseLeave={(e) => {
                if (!isActive('/')) {
                  e.currentTarget.style.textDecoration = "none";
                } else {
                  e.currentTarget.style.textDecorationColor = "currentColor";
                  e.currentTarget.style.textDecorationThickness = "1px";
                }
              }}
            >Start</Link>
            
            <Link 
              to="/wireless" 
              style={{ 
                textDecoration: isActive('/wireless') ? "underline" : "none",
                textUnderlineOffset: "4px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textDecorationColor = "#00f0ff";
                e.currentTarget.style.textDecorationThickness = "2px";
              }}
              onMouseLeave={(e) => {
                if (!isActive('/wireless')) {
                  e.currentTarget.style.textDecoration = "none";
                } else {
                  e.currentTarget.style.textDecorationColor = "currentColor";
                  e.currentTarget.style.textDecorationThickness = "1px";
                }
              }}
            >Wireless</Link>
            
            <Link 
              to="/internet" 
              style={{ 
                textDecoration: isActive('/internet') ? "underline" : "none",
                textUnderlineOffset: "4px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textDecorationColor = "#00f0ff";
                e.currentTarget.style.textDecorationThickness = "2px";
              }}
              onMouseLeave={(e) => {
                if (!isActive('/internet')) {
                  e.currentTarget.style.textDecoration = "none";
                } else {
                  e.currentTarget.style.textDecorationColor = "currentColor";
                  e.currentTarget.style.textDecorationThickness = "1px";
                }
              }}
            >Internet</Link>
            
            <Link 
              to="/directv" 
              style={{ 
                textDecoration: isActive('/directv') ? "underline" : "none",
                textUnderlineOffset: "4px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textDecorationColor = "#00f0ff";
                e.currentTarget.style.textDecorationThickness = "2px";
              }}
              onMouseLeave={(e) => {
                if (!isActive('/directv')) {
                  e.currentTarget.style.textDecoration = "none";
                } else {
                  e.currentTarget.style.textDecorationColor = "currentColor";
                  e.currentTarget.style.textDecorationThickness = "1px";
                }
              }}
            >Directv</Link>
            
            <Link 
              to="/aboutus" 
              style={{ 
                textDecoration: isActive('/aboutus') ? "underline" : "none",
                textUnderlineOffset: "4px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textDecorationColor = "#00f0ff";
                e.currentTarget.style.textDecorationThickness = "2px";
              }}
              onMouseLeave={(e) => {
                if (!isActive('/aboutus')) {
                  e.currentTarget.style.textDecoration = "none";
                } else {
                  e.currentTarget.style.textDecorationColor = "currentColor";
                  e.currentTarget.style.textDecorationThickness = "1px";
                }
              }}
            >About Us</Link>

            {/* Language Selector */}
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                aria-label="Language selector"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                rightIcon={<ChevronDownIcon />}
                color="black"
                height="30px"
                minWidth="50px"
                bg="#cbcac9"
                fontSize="sm"
              >
                <Flex align="center">
                  <BsGlobe2 style={{ marginRight: "8px" }} />
                  <Text>{selectedLanguage}</Text>
                </Flex>
              </MenuButton>
              <MenuList minWidth="100px" zIndex="dropdown" bg="#cbcac9" color="black">
                <MenuItem
                  onClick={() => setSelectedLanguage("Eng")}
                  bg={selectedLanguage === "Eng"}
                >
                  Eng
                </MenuItem>
                <MenuItem
                  onClick={() => setSelectedLanguage("Esp")}
                  bg={selectedLanguage === "Esp"}
                >
                  Esp
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          {/* Phone number - visible on tablet and desktop */}
          <Box
            bg="#66DC99"
            borderRadius="60px"
            color="black"
            w="216px"
            h="34px"
            display={isDesktop ? "flex" : "none"}
            alignItems="start"
            justifyContent="center"
            padding="8px 20px"
          >
            <Text
              fontWeight="400"
              fontSize="16px"
              letterSpacing="-0.03em"
              fontFamily="inter"
              textAlign="center"
            >
              Call us +1 09 5000 2000
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;