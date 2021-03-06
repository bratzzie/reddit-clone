import {Button, Box } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { Container } from '../components/Container'
import InputComponent from '../components/Input'
import { toErrorMap } from '../utils/toErrorMap'
import {useRouter} from 'next/router'
interface registerProps {
    
}

const Register: React.FC<registerProps> = ({}) => {
//TODO: const [, register] = useRegisterMutation()
const router = useRouter()
  return (
    <Container variant="small">
      <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values, {setErrors}) => {
        const response = await register(values)

        if(response.data?.register.errors){
          setErrors(toErrorMap(response.data.register.errors))
        } else if(response.data?.register.user){
          router.push('/')
        }
      }}
    >
      {({isSubmitting}) => (
        <Form>
        <InputComponent name="username" placeholder="username"
        label="Username" />
        <Box mt={4}>
        <InputComponent name="password" placeholder="password"
        label="Password" type="password" />

        </Box>
         <Button type="submit" mt={4} maxW="100%" isLoading={isSubmitting}
       >Sign Up</Button> 
        </Form>
      )}
    </Formik>
    </Container>
  )
}

export default Register

