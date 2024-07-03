interface inputProps {
  label?: string;
  type: string;
  id: string;
  placeholder: string;
  register?: any;
  errors?: any;
}

const TextField = ({ type, id, placeholder, register, label, errors }: inputProps) => {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      {errors && errors[id] && <span className="text-red-600">{errors[id].message}</span>}
    </div>
  );
};

export default TextField;
