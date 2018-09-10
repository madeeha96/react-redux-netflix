import React from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import { get } from "lodash";
import "./style.scss";
import "react-table/react-table.css";

import checkboxHOC from "react-table/lib/hoc/selectTable";
import { COLUMNS } from "../../utils/columns";
const CheckboxTable = checkboxHOC(ReactTable);

export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: COLUMNS,
      selection: props.activeUsers,
      selectAll: false
    };
  }

  componentDidMount() {
    this.props.onFetchUserList();
  }

  toggleSelection = key => {
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    if (keyIndex >= 0) {
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      selection.push(key);
    }

    this.setState(() => {
      this.props.setActiveUsers(selection);
      return { selection };
    });
  };

  isSelected = key => {
    return this.state.selection.includes(key);
  };

  getColumns = data => {
    const columns = [];
    const sample = data[0];
    Object.keys(sample).forEach(key => {
      if (key !== "_id") {
        columns.push({
          accessor: key,
          Header: key
        });
      }
    });
    return columns;
  };

  render() {
    const { toggleSelection, isSelected } = this;
    const { columns, selectAll } = this.state;
    const checkboxProps = {
      selectAll,
      isSelected,
      toggleSelection,
      selectType: "checkbox",
      getTrProps: (s, r) => {
        const selected = this.isSelected(get(r, "original._id"));
        return {
          style: {
            backgroundColor: selected ? "lightgreen" : "inherit"
          }
        };
      }
    };

    console.log("props active Users", this.props.activeUsers);

    return (
      <article>
        <CheckboxTable
          ref={r => (this.checkboxTable = r)}
          data={this.props.users}
          columns={columns}
          defaultPageSize={5}
          className="-striped -highlight"
          {...checkboxProps}
        />
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func
};
