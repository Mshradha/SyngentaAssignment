import React from "react";
import {
  Box,
  Select,
  Input,
  TagLabel,
  Radio,
  RadioGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useState } from "react";
 import axios from "axios";

const Form = () => {
  const [region, setRegion] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [field, setField] = useState("");
  const [cropCycle, setCropCycle] = useState("");


  const handleSubmit = () => {
    const data = [subRegion, state, country];
    const body = {
      property: data,region: region ,field: field,crop_cycle : cropCycle
    }
  axios.post("https://limitless-journey-97291.herokuapp.com/main/post", body)
  .then((res)=> console.log(res))
  .catch((err)=> console.log(err));
  };
  return (
    <Box>
      <Navbar />
      <Box
        w={{ base: "90%", md: "70%", lg: "30%" }}
        m="auto"
        mt="50px"
        boxShadow="xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRadius="10px"
        bg="gray.200"
      >
        <Input
          type="text"
          placeholder="Region"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setRegion(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Enter Subregion"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setSubRegion(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Enter State"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setState(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter Country "
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setCountry(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Field"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setField(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Crop Cycle"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setCropCycle(e.target.value)}
        />

        <Button mb="8" mt="8" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
