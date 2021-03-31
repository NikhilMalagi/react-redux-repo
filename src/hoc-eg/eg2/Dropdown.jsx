
import React from 'react';

const Dropdown = (props) => {
    const childrenWithProps = React.cloneElement(props.children, { onSelect: props.clickHandler, ...props.children.props });
  
    return (
      <div className="filter filter--simple">
        <div className="form-control" onClick={props.onToggle}>
          <label>{props.label}</label>
          <p>{props.value}</p>
        </div>
        {/* {Optional(props.showDropdown).map((index) =>
          <div key={`dropdown-${index}`} className={`filter__dropdown ${props.right ? 'filter__dropdown--right' : ''}`}>
            {childrenWithProps}
          </div>
        )} */}
      </div>
    );
  };
  
  export default Dropdown;