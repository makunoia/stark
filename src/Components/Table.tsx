import React, { cloneElement, FC } from "react";
import Checkbox from "./molecules/Checkbox";
import Overline from "./molecules/Overline";
import Badge from "./molecules/Badge";
import { TableProps } from "stark-types";

//To do:
// Empty State
// Loading State
// Cell variants
// -- Badge Variant
// -- Dropdown Variant
// Pagination
// Table footer

const Table: FC<TableProps> = ({
  children,
  className,
  selectable,
  loading,
  isEmpty,
}) => {
  const tableHead = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) && child.type["displayName"] === "TableHead"
  );

  const tableBody = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) && child.type["displayName"] === "TableBody"
  );

  // console.log(tableHead);

  return (
    <table
      className={`${className} table-auto w-full border-separate border-spacing-0 bg-white rounded-8px overflow-hidden border border-outline-default`}
    >
      {/* {cloneElement(tableHead, { selectable })}
      {tableBody} */}
    </table>
  );
};

const TableHead = ({
  headings,
  selectable,
  checkbox,
  displayName = "Table.Head",
}) => {
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

const TableBody = ({ children, displayName = "TableBody" }) => {
  const tableRows = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) && child.type["displayName"] === "Table.Row"
  );

  return <tbody>{tableRows}</tbody>;
};

const TableRow = ({
  id,
  children,
  disabled,
  selected,
  onClick,
  displayName = "Table.Row",
}) => {
  const rowCells = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) && child.type["displayName"] === "Cell"
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
          ? "bg-primary-muted/40"
          : disabled
          ? "bg-fill-disabled"
          : "bg-white"
      } transition-all ease-in-out duration-200 hover:bg-gray-50 cursor-pointer border-b border-outline-default last-of-type:border-0`}
    >
      {modifiedRowCells}
    </tr>
  );
};

const TableFooter = ({}) => {
  return <div>Table Footer</div>;
};

export const Cell = ({ data, disabled, selected, type }) => {
  const defaultCell = (
    <td className="first-of-type:pl-20px px-16px w-auto">
      <div className={`flex justify-start items-center min-h-[48px] text-body`}>
        {data}
      </div>
    </td>
  );

  const badgeCell = (
    <td className="first-of-type:pl-20px px-16px w-auto">
      <div className={`flex justify-start items-center min-h-[48px] text-body`}>
        {type ? (
          <Badge label="Boarded" variant="outline" color="success" />
        ) : (
          data
        )}
      </div>
    </td>
  );

  return badgeCell;
};

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

TableHead.displayName = "Table.Head";
TableBody.displayName = "Table.Body";
TableRow.displayName = "Table.Row";
TableFooter.displayName = "Table.Footer";

//Cell displayNames
Cell.displayName = "Cell";
// Cell.Checkbox.displayName = "Cell";

export default Table;
