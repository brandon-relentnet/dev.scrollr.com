import { useSelector, useDispatch } from "react-redux";
import { openPopup, closePopup, togglePopup, setPopupState } from "@/store/popupSlice";

export const usePopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.popup?.isOpen || false);
  const lastToggleTime = useSelector((state) => state.popup?.lastToggleTime || null);

  const open = () => {
    dispatch(openPopup());
  };

  const close = () => {
    dispatch(closePopup());
  };

  const toggle = () => {
    dispatch(togglePopup());
  };

  const setState = (isOpen) => {
    dispatch(setPopupState(isOpen));
  };

  return {
    isOpen,
    lastToggleTime,
    open,
    close,
    toggle,
    setState,
  };
};