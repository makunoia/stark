import React, { useState, useEffect, FC } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ComboboxProps } from "stark-types";
import clsx from "clsx";
import RemixIcon from "./molecules/RemixIcon";

const ComboboxInput: FC<ComboboxProps> = ({
  label,
  id,
  labelAction,
  options,
  optional,
  helpText,
  placeholder,
  error,
  disabled,
  onChange,
  onClear,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number>("");
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption, onChange]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClear = () => {
    setSearchValue(() => "");

    onClear && onClear();
  };

  const handleSelectOption = (value: string | number) => {
    setSelectedOption(value);

    interface OptionType {
      id: string;
      label: string;
      value: string | number;
      disabled?: boolean;
    }

    const searchValue: OptionType | undefined = options.find(
      (option) => option.value === value
    );

    if (searchValue) {
      setSearchValue(searchValue.label);
    }
  };

  return (
    <Combobox
      value={selectedOption}
      onChange={handleSelectOption}
      className="relative w-full text-left inline-flex flex-col gap-4px"
      as="div"
    >
      {({ open }) => (
        <>
          {label && (
            <div className="label-container text-body flex flex-row justify-between items-center">
              <Combobox.Label htmlFor={`${id}`} className="label-text">
                <span className="text-body font-medium capitalize text-black">
                  {label}
                </span>
                {optional && (
                  <span className="label-optional italic text-gray-800">
                    {" "}
                    - optional
                  </span>
                )}
              </Combobox.Label>
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
          )}
          <div className="relative w-full">
            <Combobox.Input
              id={id}
              className={`py-10px px-12px w-full flex flex-row justify-between gap-4px overflow-clip text-body rounded-4px outline-none border transition-all ease-in ring ${
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
              displayValue={() => searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={placeholder}
              autoComplete="off"
            />

            {searchValue && (
              <div
                onClick={handleClear}
                className="absolute top-[0px] right-[16px] bottom-[0px] flex items-center justify-center px-2 cursor-pointer"
              >
                <RemixIcon
                  name="close-fill"
                  className="font-bold text-[14px] text-danger-base/80"
                />
              </div>
            )}
          </div>

          {open && searchValue && (
            <Transition
              enter="transition duration-100 ease-in"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition duration-75 ease-in"
              leaveFrom="transform opacity-100"
              leaveTo="transform opacity-0"
              className="absolute w-full z-10"
            >
              <Combobox.Options
                className={`${
                  label ? "top-[65px]" : "top-[45px]"
                } absolute transition-all z-10 p-8px max-h-[200px] overflow-y-auto scroll-smooth flex flex-col gap-4px bg-white rounded-4px border border-outline-default w-full focus:outline-none`}
                static
              >
                {options
                  .filter((option) =>
                    option.label
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                  .map((option) => (
                    <Combobox.Option
                      key={option.id}
                      value={option.value}
                      disabled={option?.disabled} //you can add a disabled key-value pair
                      className={({ active, selected }) =>
                        clsx(
                          "cursor-pointer px-8px py-8px rounded-4px text-body relative",
                          {
                            "font-semibold text-black":
                              selectedOption === option.value,
                            "text-copy-disabled": option?.disabled,
                            "bg-info-muted": active,
                            "bg-primary-muted": selected,
                          }
                        )
                      }
                    >
                      {option.label}

                      {selectedOption === option.value && (
                        <div className="active-indicator absolute -left-[8px] bottom-[0px] h-full bg-primary-base w-[4px] rounded-e-4px"></div>
                      )}
                    </Combobox.Option>
                  ))}

                {options.filter((option) =>
                  option.label.toLowerCase().includes(searchValue.toLowerCase())
                ).length === 0 && (
                  <div className="px-8px py-8px text-body text-gray-800">
                    No results
                  </div>
                )}
              </Combobox.Options>
            </Transition>
          )}
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
        </>
      )}
    </Combobox>
  );
};

export default ComboboxInput;
