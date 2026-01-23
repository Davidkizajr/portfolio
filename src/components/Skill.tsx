import { FaPython } from "react-icons/fa";
import { FaC, FaCss3, FaHtml5, FaJs, FaPhp } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import {
  TbBrandCpp,
  TbBrandCSharp,
  TbBrandOffice,
  TbSql,
} from "react-icons/tb";

export default function Skill() {
  return (
    <>
      <h3 className="font-medium text-2xl mt-5">Programmation</h3>
      <ul className="flex flex-wrap items-center justify-center mt-3">
        <li className="me-4">
          <FaC size={64} />C
        </li>
        <li className="me-4">
          <TbBrandCpp size={64} />
          C++
        </li>
        <li className="me-4">
          <TbBrandCSharp size={64} />
          C#
        </li>
        <li className="me-4">
          <FaCss3 size={64} />
          CSS
        </li>
        <li className="me-4">
          <FaHtml5 size={64} />
          HTML
        </li>
        <li className="me-4">
          <FaJs size={64} />
          JavaScript
        </li>
        <li className="me-4">
          <FaPhp size={64} />
          PHP
        </li>
        <li className="me-4">
          <FaPython size={64} />
          Python
        </li>
      </ul>
      <h3 className="font-medium text-2xl mt-5">Autres</h3>
      <ul className="flex flex-wrap items-center justify-center mt-3">
        <li className="me-4">
          <SiCanva size={64} />
          Canva
        </li>
        <li className="me-4">
          <TbSql size={64} />
          SQL
        </li>
        <li className="me-4">
          <TbBrandOffice size={64} />
          Office
        </li>
      </ul>
    </>
  );
}
