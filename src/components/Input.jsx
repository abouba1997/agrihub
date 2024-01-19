/* eslint-disable react/prop-types */
const Input = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="text-xs min-[320px]:text-sm sm:text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
