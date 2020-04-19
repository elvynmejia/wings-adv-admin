import React, { Fragment, useState } from "react";
import {
  Button,
  Confirm,
  useUpdateMany,
  useRefresh,
  useNotify,
  useUnselectAll,
} from "react-admin";

import CheckIcon from '@material-ui/icons/Check';

const VerifyButton = (props) => {
  console.log(`props => ${JSON.stringify(props)}`);
  const [open, setOpen] = useState(false);
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  // const [updateMany, { loading }] = useUpdateMany(
  //   "posts",
  //   selectedIds,
  //   { views: 0 },
  //   {
  //     onSuccess: () => {
  //       refresh();
  //       notify("Posts updated");
  //       unselectAll("posts");
  //     },
  //     onFailure: (error) => notify("Error: posts not updated", "warning"),
  //   }
  // );

  const loading = false;
  const updateMany = () => {
    console.log("................. doing something .............");
  };

  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleConfirm = () => {
    updateMany();
    setOpen(false);
  };

  const { record, source } = props;

  if (record[source]) {
    return null;
  }
  
  return (
    <Fragment>
      <Button label="Verify user" onClick={handleClick} startIcon={<CheckIcon />} />
      <Confirm
        isOpen={open}
        loading={loading}
        title="Verify New User"
        content="Are you sure you want to verify this new user?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
};

export default VerifyButton;
