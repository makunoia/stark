import React, { useState, cloneElement } from "react";
import Checkbox from "../components/molecules/Checkbox";
import Overline from "../components/molecules/Overline";

const Table = ({ children, className, selectable, loading, isEmpty }) => {
  const tableHead = React.Children.toArray(children).find(
    (child) => child.type?.displayName === "Table.Head"
  );

  const tableBody = React.Children.toArray(children).find(
    (child) => child.type?.displayName === "Table.Body"
  );

  return (
    <table
      className={`${className} table-auto w-full border-separate border-spacing-0 bg-white rounded-8px overflow-hidden border border-outline-default`}
    >
      {cloneElement(tableHead, { selectable })}
      {tableBody}
    </table>
  );
};

Table.Head = ({ headings, selectable, checkbox }) => {
  return (
    <thead>
      <tr>
        {selectable && (
          <th
            className={`py-12px px-16px first-of-type:pl-20px max-h-40px w-[34px] h-fit bg-fill-default border-b border-b-outline-default`}
          >
            <Checkbox
              checked={checkbox?.checked}
              indeterminate={checkbox?.indeterminate}
              name={checkbox?.name ? checkbox.name : "header-checkbox"}
              id={checkbox?.id ? checkbox.id : "header-checkbox"}
              onChange={checkbox?.onChange}
            />
          </th>
        )}
        {headings.map((title, index) => (
          <th
            key={index}
            className={`py-12px px-16px first-of-type:pl-20px max-h-40px h-fit bg-fill-default border-b border-outline-default`}
          >
            <Overline label={title} />
          </th>
        ))}
      </tr>
    </thead>
  );
};

Table.Body = ({ children }) => {
  const tableRows = React.Children.toArray(children).filter(
    (child) => child.type?.displayName === "Table.Row"
  );

  return <tbody>{tableRows}</tbody>;
};

Table.Row = ({ id, children, disabled, selected, onClick }) => {
  const rowCells = React.Children.toArray(children).filter(
    (child) => child.type?.displayName === "Cell"
  );

  const modifiedRowCells = rowCells.map((cell) =>
    React.cloneElement(cell, { disabled, selected })
  );

  return (
    <tr
      id={id}
      onClick={onClick}
      className={`${
        selected
          ? "bg-primary-muted"
          : disabled
          ? "bg-fill-disabled"
          : "bg-white"
      } first:pl-20px transition-all ease-in-out duration-200 hover:bg-gray-50 cursor-pointer border-b border-outline-default last-of-type:border-0`}
    >
      {modifiedRowCells}
    </tr>
  );
};

Table.Footer = ({}) => {
  return <div>Table Footer</div>;
};

export const Cell = ({ data, disabled, selected }) => (
  <td className="first-of-type:pl-20px px-16px w-auto">
    <div className={`flex justify-start items-center min-h-[48px] text-body`}>
      {data}
    </div>
  </td>
);

Cell.Checkbox = ({ id, name, checked, onChange }) => {
  return (
    <td className="first-of-type:pl-20px px-16px w-auto">
      <div
        className={`flex justify-start items-center min-h-[48px] text-body w-fit text-copy-caption`}
      >
        <Checkbox
          checked={checked}
          name={name}
          id={id}
          onChange={onChange ? onChange : () => {}}
        />
      </div>
    </td>
  );
};

Table.Head.displayName = "Table.Head";
Table.Body.displayName = "Table.Body";
Table.Row.displayName = "Table.Row";
Table.Footer.displayName = "Table.Footer";

//Cell displayNames
Cell.displayName = "Cell";
Cell.Checkbox.displayName = "Cell";

export default Table;
