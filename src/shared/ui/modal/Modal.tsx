import React, { useState } from 'react';
import { ModalContentStyled } from './Modal.Styled';
import { useForm } from '@mantine/hooks';
import {
  TextInput,
  Button,
  NativeSelect,
  Group,
  LoadingOverlay
} from '@mantine/core';
import axios from 'axios';
import { showNotification } from '@mantine/notifications';

export const ModalContent = () => {
  const category = ['aa', 'sss', 'asdasd'];
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      title: '',
      content: '',
      imgUrl: '',
      category: '',
      uniqueId: Date.now()
    }
  });

  const postData = async (values: any) => {
    setLoading(true);
    await axios.post('https://bloggy-api.herokuapp.com/posts', values);
    setLoading(false);
    form.reset();
    showNotification({
      title: 'Blog add',
      message: 'Blog added successfully'
    });
  };

  return (
    <ModalContentStyled>
      <LoadingOverlay visible={loading} />
      <form onSubmit={form.onSubmit((values) => postData(values))}>
        <TextInput
          required
          label="Title"
          placeholder="Blog title"
          {...form.getInputProps('title')}
        />

        <TextInput
          required
          label="Content"
          placeholder="Blog Content"
          className="address-inp"
          {...form.getInputProps('content')}
        />
        <TextInput
          required
          label="Image URL"
          placeholder="Paste image url"
          className="address-inp"
          {...form.getInputProps('imgUrl')}
        />
        <NativeSelect
          data={category}
          placeholder="Pick one"
          label="Category"
          size="md"
          className="nativeSelect-inp"
          required
          {...form.getInputProps('category')}
        />
        <Group mt="md" className="button-group">
          <Button type="submit">Create Restaurant</Button>
        </Group>
      </form>
    </ModalContentStyled>
  );
};
