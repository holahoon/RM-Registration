import { useField } from 'formik';

type PropTypes = {
  id: string;
  name: string;
  label: string;
  optionsList: { label: string; value: string }[];
  // setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
};

export default function FormSelect(props: PropTypes) {
  const { id, name, label, optionsList } = props;
  const [field, meta, helper] = useField(props);

  return (
    <div>
      <label htmlFor={id || name}>{label}</label>
      <select name={name} id={id} onChange={field.onChange}>
        {optionsList.map((option, idx) => (
          <option key={`${option.value}-${idx}`} label={option.label} value={option.value} />
        ))}
      </select>
    </div>
  );
}
