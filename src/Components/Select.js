import React, { useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Badge from "./molecules/Badge";
import PropTypes from "prop-types";
import clsx from "clsx";
import RemixIcon from "./molecules/RemixIcon";

const Select = ({
  label,
  id,
  labelAction,
  options,
  multiple,
  optional,
  helpText,
  placeholder,
  error,
  disabled,
  onChange, //setState method
}) => {
  // Multiple Select, Search
  const [selectedOption, setSelectedOption] = useState(multiple ? [] : "");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption, onChange]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onChangeHandler = (value) => {
    setSelectedOption(value);
  };

  return (
    <Listbox
      value={selectedOption}
      onChange={onChangeHandler}
      className="relative w-full text-left inline-flex flex-col gap-8px"
      as="div"
      multiple={multiple}
    >
      <div className="label-container text-body flex flex-row justify-between items-center">
        <Listbox.Label htmlFor={`${id}`} className="label-text">
          <span className="font-medium capitalize text-black">{label}</span>
          {optional && (
            <span className="label-optional italic text-gray-800">
              {" "}
              - optional
            </span>
          )}
        </Listbox.Label>
        {labelAction && (
          <button
            className="hover:underline underline-offset-2 text-info-base hover:text-info-hover"
            onClick={labelAction.action}
            type="button"
          >
            {labelAction.label}
          </button>
        )}
      </div>

      <Listbox.Button
        id={id}
        className={`p-12px w-full flex flex-row justify-between gap-4px overflow-clip text-body rounded-4px outline-none border transition-all ease-in ring ${
          isFocused
            ? error
              ? "ring-danger-base/40"
              : "ring-focusRing/40"
            : "ring-focusRing/0 "
        } ${
          error
            ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30"
            : "border-outline-default  placeholder-copy-placeholder"
        } ${
          disabled
            ? "bg-fill-disabled text-copy-disabled cursor-not-allowed"
            : "bg-primitive-white text-black "
        } `}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {Boolean(selectedOption) && selectedOption.length > 0
          ? multiple
            ? selectedOption.length <= 2
              ? options
                  .filter((option) => selectedOption.includes(option.value))
                  .map((option) => option.label)
                  .join(", ")
              : options
                  .filter((option) => selectedOption.includes(option.value))
                  .slice(0, 2)
                  .map((option) => option.label)
                  .join(", ") + `, and ${selectedOption.length - 2} more`
            : options.find((option) => option.value === selectedOption).label
          : placeholder}

        <RemixIcon name="arrow-down-s-line" className="font-bold text-[16px]" />
      </Listbox.Button>

      {multiple && selectedOption.length > 0 && (
        <div className="flex flex-wrap gap-4px mt-2">
          {options
            .filter((option) => selectedOption.includes(option.value))
            .map((option) => (
              <Badge
                key={option.id}
                label={option.label}
                variant="primary"
                dismissible
                onDismiss={() =>
                  setSelectedOption(
                    selectedOption.filter((v) => v !== option.value)
                  )
                }
              />
            ))}
        </div>
      )}
      <Transition
        enter="transition duration-100 ease-in"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-75 ease-in"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
        className="absolute w-full z-10"
      >
        <Listbox.Options className="absolute top-[75px] transition-all z-10 p-8px max-h-[200px] overflow-y-auto scroll-smooth flex flex-col gap-4px bg-white rounded-4px border border-outline-default w-full">
          {options.map((option) => (
            <Listbox.Option
              key={option.id}
              value={option.value}
              disabled={option?.disabled} //you can add a disabled key-value pair
              className={({ active, selected }) =>
                clsx(
                  "cursor-pointer px-8px py-8px rounded-4px text-body relative outline-none",
                  {
                    "font-semibold text-black": multiple
                      ? selectedOption.includes(option.value)
                      : selectedOption === option.value,
                    "text-copy-disabled": option?.disabled,
                    "bg-info-muted": active || selected,
                    "bg-primary-muted": selected && !active,
                  }
                )
              }
            >
              {option.label}

              {(multiple
                ? selectedOption.includes(option.value)
                : selectedOption === option.value) && (
                <div className="active-indicator absolute -left-[8px] bottom-[0px] h-full bg-primary-base w-[4px] rounded-e-4px"></div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
      {(helpText || error) && (
        <p
          className={`flex flex-row gap-4px text-body ${
            error ? "text-danger-base" : "text-gray-800"
          }`}
        >
          {error && <RemixIcon name="alert-fill" />}
          {error ? error : helpText}
        </p>
      )}
    </Listbox>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
