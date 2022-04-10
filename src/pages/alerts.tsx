import {NavBar} from "../components/NavBar"
import {useState} from "react"
import {
    Box,
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Textarea,
    useColorModeValue,
    Input,
    InputGroup,
    InputLeftElement,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Grid,
    GridItem,
  } from "@chakra-ui/react"

import { PhoneIcon } from "@chakra-ui/icons"
import { NumberInput } from "@chakra-ui/number-input"

const sendSMS = (phoneNumber: string, message: string) => {
    let headersList = {
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "phone": phoneNumber,
         "body": message,
       });
       
       fetch("INSERT PLACE HERE", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       }).then(function(response) {
         return response.text();
       }).then(function(data) {
         console.log(data);
       })
}

const alert = () => {
    // create handleSubmit function
    const [formData, setFormData] = useState({
        club: "",
        title: "",
        date: "",
        time: "",
        details: "",
      })
    const handleSubmit = (e: any) => {
        e.preventDefault()
        var msg = "";
        msg += "Club: " + formData.club + "\n" + "Title: " + formData.title + "\n" + "Date: " + formData.date + "\n" + "Time: " + formData.time + "\n" + "Details: " + formData.details;
        sendSMS("PHONE", msg);
    }
    return (
        <>
        <NavBar onSearchInputChanged={""}/>
        <Box minH={"90vh"} overflow={"hidden"} bg={useColorModeValue("#4b8bd9", "#4b8bd9")}>
            <Stack minH={"90vh"} overflow={"hidden"} direction={{ base: "column", md: "row" }}>
                <Flex p={10} flex={1}>
                    <Stack spacing={8} w={"full"} maxW={"lg"}>
                        <Heading fontSize={"3xl"}>
                            <Text color={"white"} as={"span"}>
                            Student?
                            </Text>
                        </Heading>
                        <Text fontSize={{ base: "xl", lg: "xl" }} color={"white"}>
                            Put your phone number and we'll send you texts highlighting events around campus!
                        </Text>
                    <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<PhoneIcon color='gray.300' />}
                            />
                        <Input type='tel' placeholder='Phone number' color={"white"} />
                    </InputGroup>
                        <Button rounded={"full"} bg={"#00356b"} color={"white"} _hover={{
                            bg: "#0050a0",
                        }}>
                            <Text>Submit</Text>
                        </Button>
                    </Stack>
                </Stack>
                </Flex>

                <Flex p={10} flex={1}>
                    <Stack spacing={8} w={"full"} maxW={"lg"}>
                        <Heading fontSize={"3xl"}>
                            <Text color={"white"} as={"span"}>
                            Club Officer?
                            </Text>
                        </Heading>
                        <Text fontSize={{ base: "xl", lg: "xl" }} color={"white"}>
                            Fill out this form to send alerts for upcoming events!

                        </Text>
                        <Stack direction={{ base: "column", md: "row" }}>
                        <form onSubmit={handleSubmit}>
                            <FormControl >
                                <Grid templateRows='repeat(3, 1fr)'
                                    templateColumns='repeat(2, 1fr)'
                                    gap={2}
                                    >
                                    <GridItem colSpan={1}>
                                        <FormLabel htmlFor="club" color={"white"}>Club</FormLabel>
                                        <Input id="club" color="white" value={formData.club}
                                            onChange={(e) => setFormData({...formData, club: e.target.value})} />
                                        <FormErrorMessage>This field is required</FormErrorMessage>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        <FormLabel htmlFor="EventTitle" color={"white"}>Event Title</FormLabel>
                                        <Input id="EventTitle" color="white" value={formData.title} 
                                            onChange={(e) => setFormData({...formData, title: e.target.value})} />
                                        <FormErrorMessage>This field is required</FormErrorMessage>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        <FormLabel htmlFor="EventDate" color={"white"}>Event Date</FormLabel>
                                        <Input id="EventDate" type="date" color="white" value={formData.date} 
                                            onChange={(e) => setFormData({...formData, date: e.target.value})} />
                                        <FormErrorMessage>This field is required</FormErrorMessage>
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        <FormLabel htmlFor="EventTime" color={"white"}>Event Time</FormLabel>
                                        <Input id="EventTime" type="time" color="white" value={formData.time}
                                            onChange={(e) => setFormData({...formData, time: e.target.value})} />
                                        <FormErrorMessage>This field is required</FormErrorMessage>
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel htmlFor="EventDetails" color={"white"} >Event Details</FormLabel>
                                        <Input id="EventDetails" color="white" value={formData.details} 
                                            onChange={(e) => setFormData({...formData, details: e.target.value})}/>
                                        <FormErrorMessage>This field is required</FormErrorMessage>
                                    </GridItem>
                                </Grid>
                            </FormControl>
                            <br />
                            <Button rounded={"full"} type="submit" bg={"#00356b"} color={"white"}>
                                <Text>Submit</Text>
                            </Button>   
                        </form>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
        </Box>
        </>
    );
}

export default alert
