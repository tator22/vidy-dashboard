import { ASSET_PATHS } from "@repo/assets";
import clsx from "clsx";
import {
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from "react";
import { CheckBox } from "../Checkbox";
import { ErrorText } from "../ErrorText";
import { HelperText } from "../HelperText";
import { Input } from "../Input";
import { Label } from "../Label";
import { Portal } from "../Portal";
import { Text } from "../Text";
import "./style.css";

export interface DropdownProps {
  containerProps?: HTMLAttributes<HTMLDivElement>;
  buttonProps?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  data: any;
  selectedValue?: any;
  setSelectedValue: (value: any) => void;
  displayKey: string;
  valueKey: string;
  isSearch?: boolean;
  isMultiple?: boolean;
  styleMenuContainer?: CSSProperties;
  styleValueAndMenuListContainer?: CSSProperties;
  menuContainerClassName?: string;
  compareKey?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  isOptional?: boolean;
  placeholder?: string;
  valueTextContainerProps?: HTMLAttributes<HTMLElement>;
  iconContainerProps?: HTMLAttributes<HTMLElement>;
}

export const Dropdown = ({
  containerProps,
  buttonProps,
  label,
  errorText,
  data,
  setSelectedValue,
  selectedValue,
  displayKey,
  valueKey,
  isMultiple,
  helperText,
  isSearch = true,
  // styleMenuContainer,
  menuContainerClassName,
  styleValueAndMenuListContainer,
  compareKey,
  isOptional,
  placeholder = "Select",
  valueTextContainerProps,
  // iconContainerProps,
}: DropdownProps) => {
  //  Hooks
  const menuRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Local States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [displayName, setDisplayName] = useState<string>("");
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  // const [dropdownPosition, setDropdownPosition] = useState({
  //   top: 0,
  //   left: 0,
  //   width: 0,
  // });

  // Variables
  const Zero = 0;
  const selectFullItem = valueKey === "all";

  // Functions
  const selectedValueHandler = (value: any) => {
    if (isMultiple) {
      toggleItemSelection(value);
    } else {
      setSelectedValue(value);
      setIsOpen(false);
      setAnchor(null);
    }
  };

  const toggleItemSelection = (itemValue: any) => {
    const selectedIndex = selectedValue.indexOf(itemValue);
    const updatedSelection: any[] = [...selectedValue];
    if (selectedIndex !== -1) {
      updatedSelection.splice(selectedIndex, 1);
    } else {
      updatedSelection.push(itemValue);
    }
    setSelectedValue(updatedSelection);
  };

  const handleClick = (e: any) => {
    setAnchor(e.currentTarget);
    if (buttonProps?.disabled) {
      setIsOpen(false);
      setAnchor(null);
      return;
    }
    setIsOpen(!isOpen);
  };

  const findMatchingValues = (
    arrayOfObjects: any[],
    singleArray: any[],
    valueKey: string
  ) => {
    if (Array?.isArray(arrayOfObjects) && Array?.isArray(singleArray)) {
      return arrayOfObjects?.filter((obj: any) =>
        singleArray?.includes(selectFullItem ? obj : obj[valueKey])
      );
    } else {
      return [];
    }
  };

  const removeSelectedItem = (id: number) => {
    const indexToRemove = selectedValue?.indexOf(id);
    if (selectedValue && isMultiple) {
      const copyArray = [...selectedValue];
      copyArray.splice(indexToRemove, 1);
      setSelectedValue(copyArray);
    }
  };

  // Effects
  useEffect(() => {
    if (data && isSearch && displayKey) {
      const updateArray = [...data];
      const filteredData = updateArray?.filter((item: any) => {
        return String(item[displayKey])
          ?.toLowerCase()
          ?.includes(searchItem?.toLowerCase());
      });
      setFilteredData(filteredData);
    }
  }, [data, searchItem, isSearch, displayKey]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setAnchor(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // useEffect(() => {
  //   if (isMultiple) setSelectedValue(selectedValue);
  // }, [selectedValue, isMultiple, setSelectedValue]);

  useEffect(() => {
    if (!data) return;

    const foundKey = selectFullItem ? compareKey : valueKey;

    if (
      selectedValue === "" ||
      selectedValue === null ||
      selectedValue === undefined
    ) {
      setDisplayName("");
      return;
    }

    const found = data.find(
      (element: Record<string, any>) =>
        element?.[foundKey as string] === selectedValue
    );

    setDisplayName(found?.[displayKey] || "");
  }, [data, selectedValue, compareKey, displayKey, valueKey, selectFullItem]);

  useEffect(() => {
    if (isOpen) {
      const button = document.getElementById("customButton");
      if (button) button.style.position = "unset";
    }
  }, [isOpen]);

  // useEffect(() => {
  //   if (isOpen && containerRef.current) {
  //     const rect = containerRef.current.getBoundingClientRect();
  //     setDropdownPosition({
  //       top: rect.bottom + window.scrollY,
  //       left: rect.left + window.scrollX,
  //       width: rect.width,
  //     });
  //   }
  // }, [isOpen]);

  return (
    <>
      <div
        {...containerProps}
        className={clsx("Dropdown", containerProps?.className)}
        style={{
          ...containerProps?.style,
          opacity:
            containerProps?.style?.opacity || (buttonProps?.disabled ? 0.5 : 1),
        }}
      >
        {label ? <Label text={label} isOptional={isOptional} /> : null}

        <div
          style={{
            position: "relative",
            ...styleValueAndMenuListContainer,
          }}
          ref={containerRef}
        >
          <button
            {...buttonProps}
            className={clsx(
              "field",
              // "largeClickableElement",

              buttonProps?.className
            )}
            onClick={handleClick}
            style={{
              ...buttonProps?.style,
              borderColor: errorText ? "rgb(var(--error-color))" : "",
            }}
            type={buttonProps?.type || "button"}
          >
            <Text
              containerProps={{
                ...valueTextContainerProps,
                className: clsx(
                  "valueText",
                  valueTextContainerProps?.className,
                  !selectFullItem &&
                    !selectedValue &&
                    placeholder &&
                    "placeholderText"
                ),
              }}
              maximumNumberOfLines={1}
            >
              {isMultiple && selectedValue?.length > 0
                ? `${selectedValue?.length} ${
                    selectedValue?.length > 1 ? "items" : "item"
                  } selected`
                : displayName || placeholder || "Select"}
            </Text>

            <div className="upDownIconBox">
              <img
                src={ASSET_PATHS.SVGS.DROPDOWN_ICON}
                alt="Dropdown Icon"
                className={clsx("upDownIcon", isOpen && "downIcon")}
              />
            </div>
            {/* 
            <Icon
              icon={`fi fi-rr-angle-small-${isOpen ? "up" : "down"}`}
              containerProps={{
                ...iconContainerProps,
                className: clsx("upDownIcon", iconContainerProps?.className),
              }}
            /> */}
          </button>
        </div>

        {data &&
        selectedValue &&
        isMultiple &&
        findMatchingValues(data, selectedValue, valueKey)?.length > 0 ? (
          <div className="dropdownSelectedItemRender">
            {findMatchingValues(data, selectedValue, valueKey)?.map(
              (item: Record<string, any>, index: number) => {
                return (
                  <SelectedItemChip
                    item={item?.[displayKey]}
                    key={index}
                    onClick={() => {
                      removeSelectedItem(item?.[valueKey]);
                    }}
                  />
                );
              }
            )}
          </div>
        ) : null}

        {errorText ? (
          <ErrorText
            text={errorText}
            containerProps={{ className: "errorText" }}
          />
        ) : null}

        {helperText ? (
          <HelperText
            text={helperText}
            containerProps={{ className: "helperText" }}
          />
        ) : null}
      </div>

      {isOpen ? (
        <Portal anchorEl={anchor} offset={7}>
          <ul
            className={`dropdownMenuContainer ${menuContainerClassName}`}
            ref={menuRef}
          >
            {isSearch && (
              <li style={{ listStyle: "none" }}>
                <Input
                  inputProps={{
                    placeholder: "Search",
                    value: searchItem,
                    onChange: (e) => setSearchItem(e.target.value),
                  }}
                />
              </li>
            )}
            {(isSearch ? filteredData : data)?.length <= Zero ? (
              <li className="noDataFound">
                <Text tag="p">No Data Found</Text>
              </li>
            ) : (
              <>
                {(isSearch ? filteredData : data)?.map(
                  (item: Record<string, any>, index: number) => {
                    const isSelected = selectFullItem
                      ? selectedValue === item[compareKey as string]
                      : selectedValue === item[valueKey] && !isMultiple;

                    const dropdownClass = isSelected
                      ? "dropdownElementActive bodyText"
                      : "dropdownElement bodyText";

                    return (
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isMultiple) {
                            return;
                          } else {
                            selectedValueHandler(
                              selectFullItem ? item : item[valueKey]
                            );
                            setDisplayName(item[displayKey]);
                          }
                        }}
                        key={index}
                        className={`dropdownItem unselectable ${dropdownClass}`}
                      >
                        {isMultiple && (
                          <CheckBox
                            label={item[displayKey]}
                            inputProps={{
                              checked: selectedValue?.includes(
                                selectFullItem ? item : item[valueKey]
                              ),
                              onChange: () => {
                                toggleItemSelection(
                                  selectFullItem ? item : item[valueKey]
                                );
                              },
                            }}
                            containerProps={{
                              className: "dropdownItemWithCheckBox",
                            }}
                          />
                        )}

                        {!isMultiple ? item[displayKey] : null}
                      </li>
                    );
                  }
                )}
              </>
            )}
          </ul>
        </Portal>
      ) : null}
    </>
  );
};

const SelectedItemChip = ({
  item,
  onClick,
}: {
  item: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <div className="selectedItemChip">
      <span className="selectedItemName">{item}</span>
      <img
        src={ASSET_PATHS.SVGS.CLOSE_ICON}
        alt="close icon"
        onClick={onClick}
        className="selectedItemChipCloseIcon"
      />

      {/* <Clickable
        containerProps={{
          onClick: onClick,
        }}
      >
        <Icon
          icon="fi fi-sr-cross-circle"
          containerProps={{
            className: "selectedItemChipCloseIcon",
          }}
        />
      </Clickable> */}
    </div>
  );
};
