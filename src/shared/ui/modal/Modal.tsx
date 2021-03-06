import React, { useState } from 'react';
import { ModalContentStyled } from './Modal.Styled';
import { useForm } from '@mantine/hooks';
import {
  TextInput,
  Button,
  NativeSelect,
  Group,
  LoadingOverlay,
  Textarea
} from '@mantine/core';
import axios from 'axios';
import { showNotification } from '@mantine/notifications';
import { useAppDispatch } from '../../../hooks/redux';
import { fillPosts } from '../../../store/slices/post/postSlices';

export const ModalContent = () => {
  const category = [
    'Technology',
    'Design',
    'Photographs',
    'Interior',
    'Life Style'
  ];
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

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
    const { data } = await axios('https://bloggy-api.herokuapp.com/posts');
    dispatch(fillPosts(data));
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

        <Textarea
          label="Content"
          placeholder="Blog Content"
          autosize
          minRows={3}
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
