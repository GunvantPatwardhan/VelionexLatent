import { Box, Flex, HStack, VStack, Icon, Divider, Image, Text, Button } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import "@fontsource/inter";
import heroimg from "../assets/heroSectionImage.png";
import midimg from "../assets/midSection.png";
import cardimg from "../assets/rect.png";
import logoWhite from "../assets/logoWhite.png";
import footerBg from "../assets/footerBg.png";
import wirelessImg from "../assets/wirelessImg.png";
import internetImg from "../assets/internetImg.png";
import directvImg from "../assets/directvImg.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partnerListTitle from "../assets/partnerListTitle.png";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 950);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 625);
  const [isSmallTablet, setIsSmallTablet] = useState(window.innerWidth >= 530);
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 425);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth >= 390);
  const [isMinWidth, setIsMinWidth] = useState(window.innerWidth >= 320);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1000);
  const [isWideFooter, setIsWideFooter] = useState(window.innerWidth >= 1250);
  const [isMediumFooter, setIsMediumFooter] = useState(window.innerWidth >= 950);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 950);
      setIsTablet(window.innerWidth >= 625);
      setIsSmallTablet(window.innerWidth >= 530);
      setIsMobile(window.innerWidth >= 425);
      setIsSmallMobile(window.innerWidth >= 390);
      setIsMinWidth(window.innerWidth >= 320);
      setIsWideScreen(window.innerWidth >= 1000);
      setIsWideFooter(window.innerWidth >= 1250);
      setIsMediumFooter(window.innerWidth >= 950);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create an array of partners to loop through
  const partners = [partner1, partner2, partner3, partner4];

  // Duplicate the array to create a seamless loop effect
  const duplicatedPartners =
    [...partners, ...partners, ...partners, , ...partners,
    ...partners, ...partners, ...partners, ...partners,
    ...partners, ...partners, ...partners, ...partners,
    ...partners, ...partners, ...partners, ...partners];
  return (
    <Box maxH="fit-content" bg="#FBF9F8" overflowY="hidden">
      <Box maxW="1472px" mx="auto" px="20px">
        {/* Section 1: Hero Image */}
        <Box
          height="730px"
          mt="5px"
          mb="20px"
          position="relative"
          overflow="hidden"
          minWidth="320px"
        >
          <Image
            src={heroimg}
            alt="Hero Section"
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="10px"
            objectPosition={
              isDesktop ? "center" :
                isTablet ? "57% center" :  
                  isSmallTablet ? "62% center" :  
                    isMobile ? "67% center" : 
                      isSmallMobile ? "72% center" :  
                        isMinWidth ? "77% center" :  
                          "82% center"  
            }
            transition="object-position 0.3s ease-in-out, transform 0.5s ease-in-out"
            transform={
              isDesktop ? "scale(1)" :
                isTablet ? "scale(1.05)" :
                  isSmallTablet ? "scale(1.1)" :
                    isMobile ? "scale(1.15)" :
                      "scale(1.2)"
            }
            filter={
              isDesktop ? "none" :
                isTablet ? "brightness(1.05)" :
                  isSmallTablet ? "brightness(1.1)" :
                    isMobile ? "brightness(1.15)" :
                      "brightness(1.2)"
            }
          />

          {/* Text Overlay */}
          <Text
            position="absolute"
            top={isDesktop ? "325px" : "5px"}
            left={isDesktop ? "15px" : isSmallMobile ? "15px" : "5px"}
            fontFamily="inter"
            fontSize={
              isDesktop ? "80px" :
                isTablet ? "80px" :
                  isSmallTablet ? "65px" :
                    isMobile ? "50px" :
                      isSmallMobile ? "45px" : "45px"
            }
            lineHeight={
              isDesktop ? "80px" :
                isTablet ? "80px" :
                  isSmallTablet ? "65px" :
                    isMobile ? "50px" :
                      isSmallMobile ? "45px" : "45px"
            }
            letterSpacing="-0.08em"
            fontWeight="300"
            color="white"
            width={isDesktop ? "541px" : "auto"}
            height={isDesktop ? "80px" : "auto"}
            zIndex="1"
          >
            Flexible everyday
          </Text>
        </Box>

        {/* Section 2: Two Column Layout */}
        <Flex 
          height="500px" 
          mt="1px" 
          mb="80px" 
          gap="20px"
          flexDirection={isTablet ? "row" : "column"}
        >
          <Box 
            flex={1} 
            position="relative"
            width={isTablet ? "auto" : "100%"}
          >
            {/* Background Image */}
            <Image
              src={cardimg}
              alt="Card Section"
              w={isTablet ? "726px" : "100%"}
              h="500px"
              borderRadius="10px"
              objectFit="cover"
            />

            {/* Text Content Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              zIndex="1"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              {/* Top Section - Heading and Description */}
              <Box p={4} textColor="#FFFFFF">
                <Text
                  fontFamily="inter"
                  fontWeight="100"
                  fontSize="24px"
                  lineHeight="24px"
                  letterSpacing="-0.03em"
                  mb={4}
                >
                  Flexible everyday
                </Text>
                <Text
                  width={isDesktop ? "440px" : "250px"}
                  fontFamily="Inter"
                  fontWeight="100"
                  fontSize="16px"
                  lineHeight="20px"
                  letterSpacing="-0.03em"
                >
                  At Velionex, we connect you with the provider that best fits your needs.
                  Wireless services, high-speed internet, and premium entertainment –
                  simple, seamless, and tailored for your everyday life.
                </Text>
              </Box>

              {/* Bottom Section - Services List */}
              <Box mt={8} p="4">
                <VStack
                  align="stretch"
                  spacing={1}
                  borderTopWidth="1px"
                  borderTopColor="whiteAlpha.400"
                  pt={2}
                >
                  {/* Wireless Section */}
                  <Flex justify="space-between" align="center">
                    <Text
                      fontFamily="Inter"
                      fontWeight="300"
                      fontSize="16px"
                      letterSpacing="-0.03em"
                      color="white"
                    >
                      Wireless
                    </Text>
                    <Icon as={IoIosAddCircleOutline} w={6} h={6} color="white" />
                  </Flex>
                  <Divider borderColor="whiteAlpha.400" />

                  {/* Internet Section */}
                  <Flex justify="space-between" align="center">
                    <Text
                      fontFamily="Inter"
                      fontWeight="300"
                      fontSize="16px"
                      letterSpacing="-0.03em"
                      color="white"
                    >
                      Internet
                    </Text>
                    <Icon as={IoIosAddCircleOutline} w={6} h={6} color="white" />
                  </Flex>
                  <Divider borderColor="whiteAlpha.400" />

                  {/* Directv Section */}
                  <Flex justify="space-between" align="center">
                    <Text
                      fontFamily="Inter"
                      fontWeight="300"
                      fontSize="16px"
                      letterSpacing="-0.03em"
                      color="white"
                    >
                      Directv
                    </Text>
                    <Icon as={IoIosAddCircleOutline} w={6} h={6} color="white" />
                  </Flex>
                  <Divider borderColor="whiteAlpha.400" />
                </VStack>
              </Box>
            </Box>
          </Box>

          {/* Right Column - Mid Image */}
          {isTablet && (
            <Box flex={1}>
              <Image
                src={midimg}
                alt="Mid Section"
                w="726.41px"
                h="500px"
                borderRadius="10px"
                objectFit="cover"
              />
            </Box>
          )}
        </Flex>
      </Box >

      <Box mx="auto">
        {/* Section 3: Partners with Marquee Effect */}
        <Box
          mt="20px"
          mb="20px"
          width="100%"
          overflow="hidden"
          position="relative"
          px={0}
        >
          {/* Image Title Container */}
          <Flex
            width="100%"
            justifyContent="flex-start"
            pl="20px"
          >
            <Image
              src={partnerListTitle}
              alt="Our Partners"
              mb="40px"
              h="auto"
              w="auto"
              display="block"
            />
          </Flex>

          {/* Marquee Container */}
          <Box
            position="relative"
            whiteSpace="nowrap"
            width="100%"
            overflow="hidden"
          >
            {/* Animated HStack */}
            <HStack
              spacing={0}
              animation="scroll 30s linear infinite"
              css={{
                '@keyframes scroll': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-2000px)' }
                }
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <Image
                  key={index}
                  src={partner}
                  alt={`Partner ${index % partners.length + 1}`}
                  w="auto"
                  h="auto"
                  display="inline-block"
                  px={4}
                  objectFit="contain"
                />
              ))}
            </HStack>
          </Box>
        </Box>
      </Box>

      <Box maxW="1472px" mx="auto" px="20px">
        {/* Section 4: Product description cards */}
        <Flex 
          justify="space-between" 
          mt={20} 
          mb={20} 
          gap={4} 
          flexDirection={isWideScreen ? "row" : "column"}
          align={isWideScreen ? "stretch" : "center"}
        >
          {[wirelessImg, internetImg, directvImg].map((imgSrc, index) => {
            const content = [
              {
                category: "Wireless",
                caption: "Reliable Wireless Solutions",
                text: "Discover Wireless Freedom with Velionex – Explore flexible, high-speed options that keep you connected wherever you are.",
                bullets: ["Stay connected anywhere", "Seamless setup", "Flexible plans"],
                button: "Explore Wireless"
              },
              {
                category: "Internet",
                caption: "Powerful Connections",
                text: "Explore High-Speed Internet with Velionex – Flexible plans to keep you connected, every day.",
                bullets: ["Fast, Reliable Speeds", "Customized Options", "Dependable Service"],
                button: "Explore Internet"
              },
              {
                category: "Directv",
                caption: "Premium Entertainment",
                text: "Explore DIRECTV with Velionex – tailored plans to bring you the best in TV and streaming, wherever you are.",
                bullets: ["Hundreds of Channels", "Stream on Any Device", "Crystal-Clear HD"],
                button: "Explore Directv"
              }
            ][index];

            return (
              <Box
                key={content.category}
                w={isWideScreen ? "477px" : "90%"}
                maxW="477px"
                bg="white"
                borderRadius="10px"
                p="8px"
                position="relative"
                minH="600px"
                mb={isWideScreen ? 0 : 8}
              >
                <Image
                  src={imgSrc}
                  alt={content.category}
                  w={isWideScreen ? "437px" : "100%"}
                  h="286.54px"
                  borderRadius="5px"
                  mb="20px"
                  objectFit="cover"
                />

                {/* Content Container */}
                <Box
                  h="calc(100% - 306.54px)"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box>
                    {/* Category Headline */}
                    <Text
                      fontSize="16px"
                      lineHeight="20px"
                      letterSpacing="-0.03em"
                      color="black"
                    >
                      {content.category}
                    </Text>

                    {/* Category Caption */}
                    <Text
                      fontSize="24px"
                      letterSpacing="-0.03em"
                      mb="20px"
                      color="black"
                      lineHeight="28px"
                    >
                      {content.caption}
                    </Text>

                    {/* Preamble Text */}
                    <Text
                      fontSize="16px"
                      letterSpacing="-0.03em"
                      mb="5px"
                      color="black"
                      lineHeight="20px"
                      minH="72px"
                    >
                      {content.text}
                    </Text>

                    {/* Bullet Points */}
                    <VStack align="start" spacing={2} mb="60px">
                      {content.bullets.map((bullet) => (
                        <Text
                          key={bullet}
                          fontSize="16px"
                          lineHeight="10px"
                          letterSpacing="-0.03em"
                          color="black"
                          _before={{ content: '"• "' }}
                        >
                          {bullet}
                        </Text>
                      ))}
                    </VStack>
                  </Box>

                  {/* Fixed Position Button */}
                  <Box
                    position="absolute"
                    bottom="20px"
                    left="20px"
                    right="20px"
                    width="149px"
                    height="34px"
                  >
                    <Button
                      bg="#66DC99"
                      borderRadius="60px"
                      px="75px"
                      py="16px"
                      h="34px"
                      width="109px"
                      height="18px"
                      fontSize="16px"
                      fontWeight="400"
                      color="black"
                      _hover={{ bg: "#5acb8a" }}
                      _active={{ bg: "#4eba79" }}
                    >
                      {content.button}
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Flex>

        {/* Section 5: Why Velionex */}
        <Box mt={20} mb={20} color={"black"}>
          <Text
            fontSize="22px"
            fontWeight="400"
            fontFamily="inter"
            letterSpacing="-0.03em"
            mb="5px"
          >
            Why Velionex?
          </Text>
          <Flex 
            justify="space-between" 
            gap={4}
            flexDirection={isTablet ? "row" : "column"}
            align={isTablet ? "stretch" : "center"}
          >
            {/* Reliable Connections Card */}
            <Box
              w={isTablet ? "500px" : "100%"}
              maxW="500px"
              h={isTablet ? "300px" : "auto"}
              minH="250px"
              p="20px"
              bg="white"
              borderRadius="10px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              color={"#252525"}
              mb={isTablet ? 0 : 4}
            >
              <Text
                fontSize="22px"
                lineHeight="24px"
                letterSpacing="-0.03em"
                fontWeight="400"
                fontFamily="inter"
              >
                Reliable Connections
              </Text>
              <Box color={"#252525"}>
                <Divider borderColor="gray.300" mb="20px" />
                <Text
                  fontSize="16px"
                  lineHeight="20px"
                  letterSpacing="-0.03em"
                  fontWeight="400"
                  fontFamily="inter"
                >
                  Velionex ensures consistent, high-speed internet, so you're always connected when it matters most.
                </Text>
              </Box>
            </Box>

            {/* Tailored Solutions Card */}
            <Box
              w={isTablet ? "500px" : "100%"}
              maxW="500px"
              h={isTablet ? "300px" : "auto"}
              minH="250px"
              p="20px"
              bg="white"
              borderRadius="10px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              color={"#252525"}
              mb={isTablet ? 0 : 4}
            >
              <Text
                fontSize="22px"
                lineHeight="24px"
                letterSpacing="-0.03em"
                fontWeight="400"
                fontFamily="inter"
              >
                Tailored Solutions
              </Text>
              <Box color={"#252525"}>
                <Divider borderColor="gray.300" mb="20px" />
                <Text
                  fontSize="16px"
                  lineHeight="20px"
                  letterSpacing="-0.03em"
                  fontWeight="400"
                  fontFamily="inter"
                >
                  Our flexible plans are designed to meet your unique needs, providing the perfect fit for your lifestyle.
                </Text>
              </Box>
            </Box>

            {/* Trusted Providers Card */}
            <Box
              w={isTablet ? "500px" : "100%"}
              maxW="500px"
              h={isTablet ? "300px" : "auto"}
              minH="250px"
              p="20px"
              bg="white"
              borderRadius="10px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              color={"#252525"}
            >
              <Text
                fontSize="22px"
                lineHeight="24px"
                letterSpacing="-0.03em"
                fontWeight="400"
                fontFamily="inter"
              >
                Trusted Providers
              </Text>
              <Box color={"#252525"}>
                <Divider borderColor="gray.300" mb="20px" />
                <Text
                  fontSize="16px"
                  lineHeight="20px"
                  letterSpacing="-0.03em"
                  fontWeight="400"
                  fontFamily="inter"
                >
                  With a network of trusted providers, Velionex guarantees top-tier service and quality every day.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>

        {/* Section 6: Footer */}
        <Box position="relative" mt="40px" mb="10px" minH="550px">
          {/* Background Image */}
          <Image
            src={footerBg}
            alt="Footer Background"
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="10px"
            zIndex="0"
          />

          {/* Logo - Moved outside the Flex container */}
          <Image
            src={logoWhite}
            alt="Logo"
            position="absolute"
            top="20px"
            left="20px"
            w="159.03px"
            h="25px"
            zIndex="2"
          />

          {/* Footer Content Container */}
          {isMediumFooter ? (
            // Standard layout for screens >=950px
            <Box position="relative" zIndex="1" color="white" p="20px" w="95%" maxW="1400px" mx="auto">
              {/* Top Row - Middle and Right Sections */}
              <Flex 
                justify={isWideFooter ? "space-between" : "flex-start"}
                gap={isWideFooter ? "0" : "10%"}
                flexWrap="wrap"
              >
                {isWideFooter && (
                  /* Left Section when wide */
                  <Box>
                    <Text mt="498px" fontSize="16px" lineHeight="20px">
                      All rights reserved © 2024 Vellonex
                    </Text>
                  </Box>
                )}

                {/* Middle Section */}
                <Box fontSize="16px" lineHeight="20px">
                  <VStack align="start" spacing={6}>
                    {/* Products Section */}
                    <VStack align="start" spacing={1.5} mt="118px">
                      <Text>Products</Text>
                      <Divider 
                        borderColor="whiteAlpha.400" 
                        w={isWideFooter ? "425px" : "300px"} 
                        transition="width 0.3s ease-in-out"
                      />
                      <Text>Wireless</Text>
                      <Text>Internet</Text>
                      <Text>Directv</Text>
                    </VStack>

                    {/* Follow Us Section */}
                    <VStack align="start" spacing={1.5} mt="84px">
                      <Text>Follow us</Text>
                      <Divider 
                        borderColor="whiteAlpha.400" 
                        w={isWideFooter ? "425px" : "300px"}
                        transition="width 0.3s ease-in-out"
                      />
                      <Text>Instagram</Text>
                      <Text>Newsletter</Text>
                    </VStack>

                    <Text mt="48px">Privacy Policy</Text>
                  </VStack>
                </Box>

                {/* Right Section */}
                <Box maxW="450px">
                  <VStack align="start" spacing={6} justifyContent="-moz-initial" mt="118px">
                    {/* Company Section */}
                    <VStack align="start" spacing={1.5} fontSize="16px" lineHeight="20px">
                      <Text>Company</Text>
                      <Divider 
                        borderColor="whiteAlpha.400" 
                        w={isWideFooter ? "425px" : "300px"}
                        transition="width 0.3s ease-in-out"
                      />
                      <Text>About Us</Text>
                      <Text>Contact</Text>
                    </VStack>

                    <Text fontSize="14px" lineHeight="20px" mt="98.5px">
                      Vellonex is a trusted provider with 20+ years of experience of providing
                      tailored internet and mobile services. As an authorized partner and reseller
                      for renowned brands such as AT&T, Frontier Communications, and Kinetic/Windstream,
                      we provide customers with a variety of subscription options designed to meet
                      their unique needs.
                    </Text>

                    <Text fontSize="16px" lineHeight="20px" mt="38px">Cookie Policy</Text>
                  </VStack>
                </Box>
              </Flex>

              {/* Bottom Row - Left Section when narrow */}
              {!isWideFooter && (
                <Box mt="40px">
                  <Text fontSize="16px" lineHeight="20px">
                    All rights reserved © 2024 Vellonex
                  </Text>
                </Box>
              )}
            </Box>
          ) : (
            // Mobile layout for screens <950px
            <Box 
              position="relative" 
              zIndex="1" 
              color="white" 
              p="20px"
              w="100%"
              maxW="100%"
              px={["20px", "30px", "40px"]}
            >
              {/* Products Section */}
              <Box mt="170px">
                <Text fontSize="16px" fontWeight="400">Products</Text>
                <Divider borderColor="whiteAlpha.400" w="100%" my="10px" />
                <Flex gap={100} mb="20px">
                  <Text fontSize="16px">Wireless</Text>
                  <Text fontSize="16px">Internet</Text>
                </Flex>
                <Text fontSize="16px" mb="30px">Directv</Text>
              </Box>

              {/* Company Section */}
              <Box mt="90px">
                <Text fontSize="16px" fontWeight="400">Company</Text>
                <Divider borderColor="whiteAlpha.400" w="100%" my="10px" />
                <Flex gap={100} mb="30px">
                  <Text fontSize="16px">About Us</Text>
                  <Text fontSize="16px">Contact</Text>
                </Flex>
              </Box>

              {/* Follow Us Section */}
              <Box mt="90px">
                <Text fontSize="16px" fontWeight="400">Follow us</Text>
                <Divider borderColor="whiteAlpha.400" w="100%" my="10px" />
                <Flex gap={100} mb="30px">
                  <Text fontSize="16px">Instagram</Text>
                  <Text fontSize="16px">Newsletter</Text>
                </Flex>
              </Box>

              {/* Company Description */}
              <Box mt="90px">
                <Text fontSize="14px" lineHeight="20px">
                  Vellonex is a trusted provider with 20+ years of experience of providing
                  tailored internet and mobile services. As an authorized partner and reseller
                  for renowned brands such as AT&T, Frontier Communications, and Kinetic/Windstream,
                  we provide customers with a variety of subscription options designed to meet
                  their unique needs.
                </Text>
              </Box>

              {/* Policies */}
              <Flex gap={8} mt="90px">
                <Text fontSize="16px">Privacy Policy</Text>
                <Text fontSize="16px">Cookie Policy</Text>
              </Flex>

              {/* Copyright */}
              <Text fontSize="16px" mt="90px">
                All rights reserved © 2024 Vellonex
              </Text>
            </Box>
          )}
        </Box>
      </Box >
    </Box >
  );
};

export default LandingPage;