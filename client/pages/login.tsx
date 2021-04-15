import {Button, Box } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { Container } from '../components/Container'
import InputComponent from '../components/Input'
import { toErrorMap } from '../utils/toErrorMap'
import {useRouter} from 'next/router'
interface loginProps {
    
}

const Login: React.FC<loginProps> = ({}) => {
//TODO: const [, login] = useLoginMutation()
const router = useRouter()
  return (
    <Container variant="small">
      <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values, {setErrors}) => {
        const response = await login({options: values})

        if(response.data?.login.errors){
          setErrors(toErrorMap(response.data.login.errors))
        } else if(response.data?.login.user){
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
       >Sign In</Button> 
        </Form>
      )}
    </Formik>
    </Container>
  )
}

export default Login

