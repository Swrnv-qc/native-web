import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SCModal } from "../../styledComponents/utils/SCModal";
import { CoreClasses } from "@wrappid/styles";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeH6 from "../dataDisplay/heading/NativeH6";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeBox from "../layouts/NativeBox";

export default function NativeModal(props) {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.modalOpen);
  const modalData = useSelector((state) => state.modal.modalData);
  const modalStyle = useSelector((state) => state.modal.modalStyle);
  const modalClose = useSelector((state) => state.modal.modalClose);
  const HandleModalClose = () => {
    dispatch(props.toggleModalState(null));
  };

  return (
    <SCModal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={open}
      onClose={modalClose}
      // {...props}
    >
      <NativeBox
        sx={{ bgcolor: "background.paper" }}
        styleClasses={
          props.containerStyle
            ? [CoreClasses.MODAL.MODAL_CONTAINER, ...modalStyle.containerStyle]
            : [CoreClasses.MODAL.MODAL_CONTAINER]
        }
      >
        <NativeBox
          styleClasses={
            props.headerStyle
              ? [
                  CoreClasses.MODAL.MODAL_HEADER,
                  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
                  ...modalStyle?.headerStyle,
                ]
              : [
                  CoreClasses.MODAL.MODAL_HEADER,
                  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
                ]
          }
          id="modal-modal-title"
        >
          <NativeBox>
            {<NativeH6>{modalData?.heading ? modalData.heading : ""}</NativeH6>}
          </NativeBox>
          <NativeIconButton onClick={HandleModalClose}>
            <NativeIcon>close</NativeIcon>
          </NativeIconButton>
        </NativeBox>
        <NativeBox
          styleClasses={
            props.bodyStyle
              ? [CoreClasses.MODAL.MODAL_BODY, ...modalStyle?.bodyStyle]
              : [CoreClasses.MODAL.MODAL_BODY]
          }
          id="modal-modal-description"
        >
          {React.isValidElement(modalData?.comp) ? modalData?.comp : null}
        </NativeBox>
      </NativeBox>
    </SCModal>
  );
}
