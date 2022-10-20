import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, useState } from "react";
import "./Selector.css";
const options = ["商城模式", "導流模式"];

const Selector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggling = () => {
    setIsOpen((open) => !open);
  };

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="selector-container">
      <div
        className="selector-header"
        onClick={toggling}
        style={{ borderColor: isOpen ? "#3db389" : "#d9d9d9" }}
      >
        <p>{selectedOption || "商城模式"}</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {isOpen && (
        <div className="list-container">
          <div className="paper">
            <ul className="option-list">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="option"
                  onClick={() => onOptionClicked(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selector;
