import { Burger, Modal } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { ModalButtonStyled } from '../../ui/button/Button.Styled';
import { HeaderContainer } from './Header.Styled';
import { Plus } from 'tabler-icons-react';
import ModalContent from '../../ui/modal';

interface IHeader {
  children?: React.ReactNode;
}

export const CustomHeader: React.FC<IHeader> = () => {
  const { user, logout }: any = useAuth();
  const [scroll] = useWindowScroll();
  const [opened, setOpened] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);

  return (
    <HeaderContainer
      fixed
      position={{ top: 0 }}
      height={
        210 - Math.round(scroll.y) >= 80 ? 210 - Math.round(scroll.y) : 80
      }
    >
      <div className="div-container">
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          mr="xl"
        />

        <div className="text-icon">
          <b>Khayym</b>
          <small>.Blog</small>
        </div>
        {user ? (
          <div className="login-add">
            <div>
              <ModalButtonStyled onClick={() => setOpenedModal(true)}>
                <Plus size={22} strokeWidth={1.5} className="plus-icon" />
              </ModalButtonStyled>
            </div>
            <div onClick={logout}>Logout</div>
          </div>
        ) : (
          <Link to="/login">
            <div className="login">Login</div>
          </Link>
        )}
      </div>

      <Modal
        opened={openedModal}
        onClose={() => setOpenedModal(false)}
        title="Add new post"
      >
        <ModalContent />
      </Modal>
    </HeaderContainer>
  );
};
