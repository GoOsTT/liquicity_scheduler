import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
  
  interface AlertProps {
    handleAlertClose: (state: boolean) => void;
    alertState: boolean
  }
  
  export const Alert = ({ handleAlertClose, alertState }: AlertProps) => {

    const handleCancelClick = () => handleAlertClose(false);
    return (
<AlertDialog open={alertState} onOpenChange={(open) => handleAlertClose(open)}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>You have to add artists in order to download ics</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={handleCancelClick}>Cancel</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    )
}

