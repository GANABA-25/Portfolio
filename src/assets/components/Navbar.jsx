export default function Navbar() {
  return (
    <ul className="flex justify-end items-end gap-10 p-4 font-bold">
      <li className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90">
        Home
      </li>
      <li className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90">
        About
      </li>
      <li className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90">
        Projects
      </li>
      <li className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90">
        Contacts
      </li>
    </ul>
  );
}
