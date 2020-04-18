
import TEXT_FIELD_TYPES from "./text_field_types";

const READABLE_FIELDS = {
  id: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
  first_name: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
  last_name: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
  email: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
  role: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
  verified: {
    type: TEXT_FIELD_TYPES.bool,
    sortable: false,
  },
  created_at: {
    type: TEXT_FIELD_TYPES.date,
    sortable: false,
  },
};

export default READABLE_FIELDS;