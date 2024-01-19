import React from 'react';
import "./regform.css"
import {TextField, Typography, Radio, RadioGroup, FormControl, FormControlLabel, 
FormLabel, Button, Stack} from "@mui/material";
import { MuiFileInput } from 'mui-file-input';

const Registration = () => {
  const [file, setFile] = React.useState(null)

  const handleChange = (newFile) => {
    setFile(newFile)
  }

  return (
    <div className='container'>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField
                fullWidth={true}
                margin='normal'
                label="Имя"
                variant="outlined"
                placeholder="Введите ваше имя"
            />
            <TextField
                fullWidth={true}
                margin='normal'
                label="Username"
                variant="outlined"
                placeholder="Введите ваш username"
            />
            <TextField
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
            />
            <TextField
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
            />
            <TextField
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder="Повторите ваш пароль"
            />
            <MuiFileInput 
             fullWidth={true}
             margin='normal'
            value={file} 
            label="Добавьте фото"
            onChange={handleChange} />
            <FormControl>
             <FormLabel id="demo-radio-buttons-group-label">Укажите пол</FormLabel>
             <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group" >
            <FormControlLabel 
            alue="female" 
            control={<Radio />} l
            abel="Female" />
            <FormControlLabel 
            value="male" 
            control={<Radio />} l
            abel="Male" />
            </RadioGroup>
           </FormControl>
           <Stack spacing={2} direction="row">
           <Button variant="contained">Регистрация!</Button>
          </Stack>
    </div>
  );
  };

export default Registration;