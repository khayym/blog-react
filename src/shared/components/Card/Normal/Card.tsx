import React, { useState } from 'react';
import { CardContainer } from './Card.Styled';
import { Link } from 'react-router-dom';
import { Check, Pencil, Trash } from 'tabler-icons-react';
import { useAuth } from '../../../../context/AuthContext';
import axios from 'axios';
import { showNotification } from '@mantine/notifications';
import { useModals } from '@mantine/modals';
import { Modal, Text } from '@mantine/core';
import { useAppDispatch } from '../../../../hooks/redux';
import {
  fillPosts,
  setPostPageSingleData
} from '../../../../store/slices/post/postSlices';
import ModalUpdate from '../../Modal';

export const CustomCard = ({ data }: any) => {
  const { user }: any = useAuth();
  const modals = useModals();
  const [opened, setOpened] = useState(false);
  const dispatch = useAppDispatch();

  const deleting = async (id: number) => {
    await axios.delete(`https://bloggy-api.herokuapp.com/posts/${id}`);
    const { data } = await axios('https://bloggy-api.herokuapp.com/posts');
    dispatch(fillPosts(data));
    showNotification({
      id: 'hello-there',
      disallowClose: true,
      autoClose: 5000,
      title: "You've been compromised",
      message: 'Leave the building immediately',
      color: '#fff',
      icon: <Check />,
      className: 'my-notification-class',
      style: { backgroundColor: '#000' },
      sx: { backgroundColor: '#fff' }
      // loading: true
    });
  };

  const openConfirmModal = (deleteId: number) =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      centered: true,
      children: (
        <Text size="sm">You are sure that you want to delete this post</Text>
      ),
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'dark' },
      onConfirm: () => deleting(deleteId)
    });

  return (
    <CardContainer>
      <Link to="/post">
        <img
          src={data?.imgUrl}
          alt=""
          className="card-img"
          onClick={() => dispatch(setPostPageSingleData(data))}
        />
      </Link>
      <div className="card-con">
        <h5>{data?.category}</h5>
        <h6>JAN 16, 2022</h6>
      </div>
      <div className="card-text-container">
        <p className="card-text">{data.title}</p>
        {user && (
          <>
            <div className="icons">
              <p onClick={() => openConfirmModal(data?.id)} key={10}>
                <Trash size={22} strokeWidth={1} className="trash" />
              </p>
              <div key={12} onClick={() => setOpened(true)}>
                <Pencil size={24} strokeWidth={1} className="pencil" />
              </div>
            </div>
            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title="Introduce yourself!"
            >
              <ModalUpdate updateData={data} />
            </Modal>
          </>
        )}
      </div>
    </CardContainer>
  );
};
