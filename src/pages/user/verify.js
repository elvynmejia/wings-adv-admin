import React, { Fragment, useState } from "react";
import {
  Button,
  Confirm,
  useUpdate,
  useNotify,
  Notification,
} from "react-admin";

import CheckIcon from "@material-ui/icons/Check";

const VerifyButton = (props) => {
  // apiAction is a hack to be able to PUT/PATCH to users/id/verify for example
  const apiAction = 'verify';
  const { record, source } = props;
  const [open, setOpen] = useState(false);
  const notify = useNotify();

  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const [confirm, { loading }] = useUpdate(
    "users",
    record.id,
    { apiAction },
    record,
    {
      undoable: true,
      onSuccess: ({ data }) => {
        setOpen(false);
        notify("User verified", "info", {}, true);
      },
      onFailure: (error) => {
        setOpen(false);
        notify(`Error: ${error.message}`, "warning");
      },
    }
  );

  if (record[source]) {
    return null;
  }

  return (
    <Fragment>
      <Button
        label="Verify user"
        onClick={handleClick}
        startIcon={<CheckIcon />}
      />
      <Notification />
      <Confirm
        isOpen={open}
        loading={loading}
        title="Verify New User"
        content="Are you sure you want to verify this new user?"
        onConfirm={confirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
};

export default VerifyButton;
