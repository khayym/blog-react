import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  LoadingOverlay
} from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { IAuth, Idata } from '../../types';

export const LoginContainer = () => {
  const { login, loginError, user }: IAuth = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (data: Idata) => {
    data.preventDefault;
    setLoading(true);
    setError(null);
    await login(data.email, data.password);
    setLoading(false);
  };

  const form = useForm({
    initialValues: {
      email: '',
      password: 'secret'
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    }
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <LoadingOverlay visible={loading} />
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <Group position="right" mt="md">
          <Button type="submit" color="dark">
            Submit
          </Button>
        </Group>
        {loginError || (error && <div>{loginError}</div>)}
        {user && <Navigate replace to="/home" />}
      </form>
    </Box>
  );
};
