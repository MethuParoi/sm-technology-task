import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  loginModalOpen: boolean;
  registerModalOpen: boolean;
}
const initialState: ModalState = {
  loginModalOpen: false,
  registerModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.loginModalOpen = true;
    },
    openRegisterModal: (state) => {
      state.registerModalOpen = true;
    },
    closeLogInModal: (state) => {
      state.loginModalOpen = false;
    },
    closeRegisterModal: (state) => {
      state.registerModalOpen = false;
    },
  },
});

export const {
  openLoginModal,
  openRegisterModal,
  closeLogInModal,
  closeRegisterModal,
} = modalSlice.actions;
export default modalSlice;
