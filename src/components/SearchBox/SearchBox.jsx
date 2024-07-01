import css from "./SearchBox.module.css";
export default function SearchBox({ handleChange, inputValue }) {
  return (
    <div className={css.container}>
      <label className={css.lable}>Find contacts by name</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
}
