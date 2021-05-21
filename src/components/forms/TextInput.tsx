import { useField } from 'formik';

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

  //   const addDashes = (phoneNum: string): string => {
  //     let replacedPhonenNum = phoneNum.replace(/\D[^.]/g, '');
  //     return (
  //       replacedPhonenNum.slice(0, 3) +
  //       '-' +
  //       replacedPhonenNum.slice(3, 6) +
  //       '-' +
  //       replacedPhonenNum.slice(6)
  //     );
  //   };
  const normalizeInput = (value: string, previousValue: string) => {
    // return nothing if no value
    if (!value) return value;

    // only allows 0-9 inputs
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      // returns: "x", "xx", "xxx"
      if (cvLength < 4) return currentValue;

      // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
      if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;

      // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(
        6,
        10,
      )}`;
    }
  };

  const updateField = (e: any, field: any) => {
    if (props.customFormat)
      props.setFieldValue(field.name, normalizeInput(e.target.value, field.value));
    // field.onChange(e);
  };

  console.log(useField(props));
  return (
    <div>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        name={field.name}
        value={field.value}
        onBlur={field.onBlur}
        // onChange={field.onChange}
        onChange={(e) => updateField(e, field)}
      />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </div>
  );
}
