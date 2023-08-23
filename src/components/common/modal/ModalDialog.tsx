'use client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

interface ModalDialogProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClickOpenModal?: (value: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleConfirmDel?: (value: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCloseModal: (value: any) => void;
  showModal: boolean;
}

export default function ModalDialog({
  showModal,
  handleConfirmDel,
  handleCloseModal,
}: ModalDialogProps) {
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpenModal}>
        Open alert dialog
      </Button> */}
      <Dialog open={showModal} onClose={handleCloseModal} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">{'Deseja deletar o produto?'}</DialogTitle>

        <DialogActions>
          <Button onClick={handleConfirmDel}>Confirmar</Button>
          <Button onClick={handleCloseModal} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
