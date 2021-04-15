import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { useField } from 'formik'
import React, { InputHTMLAttributes } from 'react'
type InputProps = 
    InputHTMLAttributes<HTMLInputElement> & {
        label?: string;
        name: string;
    }


const InputComponent: React.FC<InputProps> = ({label, size:_, ...props}) => {
    const [field, {error}] = useField(props)
    return (
        <FormControl isInvalid={!!error}>
             <FormLabel htmlFor={field.name}>{label}</FormLabel>
             <Input {...field}
             id={field.name} {...props} />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
           </FormControl>
    )
}

export default InputComponent
