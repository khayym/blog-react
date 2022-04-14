import React, { useState } from 'react';
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
import { ModalContentStyled } from '../../ui/modal/Modal.Styled';

export const ModalUpdate = ({ updateData }: any) => {
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
      title: updateData.title,
      content: updateData.content,
      imgUrl: updateData.imgUrl,
      category: updateData.category
    }
  });

  const update = async (values: any) => {
    setLoading(true);
    await axios.put(
      `https://bloggy-api.herokuapp.com/posts/${updateData.id}`,
      values
    );
    const { data } = await axios('https://bloggy-api.herokuapp.com/posts');
    dispatch(fillPosts(data));
    setLoading(false);
    showNotification({
      title: 'Blog update',
      message: 'Blog update successfully'
    });
  };
  return (
    <ModalContentStyled>
      <LoadingOverlay visible={loading} />
      <form>
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
        <Group mt="md" className="ss-group">
          <Button onClick={() => update(form.values)}>Update</Button>
        </Group>
      </form>
    </ModalContentStyled>
  );
};
