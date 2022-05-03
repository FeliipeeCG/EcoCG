const ModalCustom = ({ handleClose, open, children }) => {
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        {children}
      </Dialog>
    </>
  );
};
export default ModalCustom;
