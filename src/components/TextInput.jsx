export default function TextInput({
  labelDescription = 'Descrição do label:',
  inputValue = 'Valor padrão do input',
  onInputChange = null,
  id = 'id_do_input_text',
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col m-0 p-2">
      <label className="text-xl mb-2" htmlFor={id}>
        {labelDescription}
      </label>

      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-2 mb-2"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
