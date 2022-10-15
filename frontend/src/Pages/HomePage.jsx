import React, { useState } from 'react'
import {Box, Button, Image, Text} from "@chakra-ui/react"
import Navbar from '../Components/Navbar'
import { useEffect } from 'react'

const HomePage = () => {
  const [product , setProduct] = useState([])

  const getData = async() => {
    const data = await fetch("https://limitless-journey-97291.herokuapp.com/main/");
    const newData = await data.json();
    setProduct(newData)
  }
  useEffect(() => {
    
      getData()
  
  }, [])
  const handleDeleted = async(el)=> {
    console.log(el)
    const id = el._id
    await fetch(`https://limitless-journey-97291.herokuapp.com/main/del/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },  
      
    }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error))
    getData()
  }
  const handleEdit = (el) => {
    console.log(el)
  }
  // console.log(product)
  return (
    <Box>
        <Navbar/>
          <Box w='90%'   m='auto' display='grid'  gridTemplateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)', lg:'repeat(4, 1fr)'}} gap='4' mt={12}>
          {product.map((el) => (
            <Box display='flex' flexDirection='column'  boxShadow='2xl' borderRadius='xl' p='4' justifyContent='center' textAlign={'center'} lineHeight={9}>
            <Box h='50%' w='80%' m='auto'  >
            <Image borderRadius='xl' w='100%' h='100%' src='https://media.istockphoto.com/photos/peanuts-plantation-in-countryside-thailand-near-mountain-picture-id1320570548?b=1&k=20&m=1320570548&s=170667a&w=0&h=8D3Kjd8Oaqhe4w5InKtb1w4qnvAuRumhq-eDEzFHUf0=' />
        </Box>
                <Text fontSize='xl' fontWeight='600' letterSpacing={2}>{el.property}</Text>
                <Text fontSize='xl' fontWeight='600' letterSpacing={2}>{el.region}</Text>
                <Text fontSize='xl' fontWeight='600' letterSpacing={2}>{el.field}</Text>
                <Text fontSize='xl' fontWeight='600' letterSpacing={2}>{el.crop_cycle}</Text>
                <Box>
                <Button mr={4} onClick={()=> handleDeleted(el)}>Delete</Button>
                <Button onClick={()=> handleEdit(el)}>Edit</Button>
                </Box>
                
          
            </Box>
  ))}
          
          </Box>
    </Box>
  )
}

export default HomePage
