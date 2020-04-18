import React from "react";
import Chip from "@material-ui/core/Chip";
import { FunctionField } from "react-admin";

const BoolField = (props) => {
  const displayChip = (record) => {
    return record[props.source] ? (
      <Chip label="true" color="secondary" />
    ) : (
      <Chip label="false" color="primary" />
    );
  };

  return <FunctionField {...props} render={(record) => displayChip(record)} />;
};

export default BoolField;