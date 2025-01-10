import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {

  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname ===link;
  }

    const navLinks = [
        {
        icon: RxDashboard,
        text: "Dashboard",
        link: "/",

    },

    {
        icon: BsArrowDownUp,
        text: "Transaction",
        link: "/transaction",
    }

];

  return (
  
    <Stack 
    bg="white"
    justify="space-between" 
    boxShadow={{
      base:"none",
      lg:"lg"
    }} 
    w={{
      base:"full",
      lg:"16rem"
    }} 
    h="100vh"
    >
    <Box>
    <Heading textAlign="center" fontSize="20px"  as="h1" pt="3.5rem">@DOSOMECODING</Heading>
    <Box mt="6" mx="3" >
    {
     navLinks.map((nav) => (
         <Link to={nav.link} key={nav.text}>
         <HStack 
         
         bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
         color={isActiveLink(nav.link) ? "#171717" : "#79E82"}

         py="3" px="4"
         borderRadius="10px"

         _hover={{
            bg:"#F3F3F7",
            color:"#171717"
         }}

      
         >
            <Icon as={nav.icon} />
            <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
         </HStack>
         </Link>
     ) ) }
    </Box>
    </Box>

    <Box  mt="6" mx="3" mb="6">
    <Link to="/support">
    <HStack 

    bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
    color={isActiveLink("/support") ? "#171717" : "#79E82"}
    
    py="3" px="4"
         borderRadius="10px"
         _hover={{
            bg:"#F3F3F7",
            color:"#171717"
         }}

        
         >
            <Icon  as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">Support</Text>
         </HStack>
    </Link>
    </Box>

    

  </Stack>
  );
}

export default Sidenav
