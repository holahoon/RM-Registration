import { useField } from 'formik';

type PropTypes = {
  type: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
};

export default function TextInput({ ...props }: PropTypes) {
  //   const { type, id, name, label, placeholder } = props;

  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input type={props.type} id={props.id} placeholder={props.placeholder} {...field} />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </div>
  );
}
