import { useField } from 'formik';

import { formatPhoneNum, formatDateOfBirth } from 'utils/fns';

type PropTypes = {
  type: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  customFormat: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
};

export default function TextInput({ ...props }: PropTypes) {
  const [field, meta, helper] = useField(props);

  const updateField = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    if (props.customFormat) {
      if (props.id === 'phoneNum') {
        props.setFieldValue(field.name, formatPhoneNum(e.target.value, field.value));
      }
      if (props.id === 'dob') {
        props.setFieldValue(field.name, formatDateOfBirth(e.target.value, field.value));
      }
    } else {
      field.onChange(e);
    }
  };

  return (
    <div>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        name={field.name}
        value={field.value}
        // onBlur={field.onBlur}
        onChange={(e) => updateField(e, field)}
      />

      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </div>
  );
}
