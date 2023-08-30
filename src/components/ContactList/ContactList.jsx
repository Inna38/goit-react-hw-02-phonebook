// import { nanoid } from "nanoid";

export const ContactList = ({ contacts }) => {
 
   return (
    <ul>
      {/* {contacts.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))} */}
           <li>{contacts.name}</li>
    </ul>
  );
};
