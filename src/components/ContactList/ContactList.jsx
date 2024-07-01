import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ filteredContacts, onDelete }) {
  return (
    <ul className={css.container}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
