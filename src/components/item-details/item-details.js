import React, { Component } from "react";
import ErrorBoundary from "../error-boundary/error-boundary";
import ErrorBtn from "../error-btn/error-btn";
import Spinner from "../spinner";
import "./item-details.css";

const Record = ({ item, label, field }) => {
  return (
    <li className="list-group-item">
      <span>{ label }</span>
      <span>{ item[field] }</span>
    </li>
  );
};
export { Record };

export default class ItemDetails extends Component {
  state = {
<<<<<<< HEAD
    item: 3,
=======
    item: 1,
>>>>>>> bcdd8127c00dbfad94be5a5df46656e35a677740
    loading: true,
    itemImg: ""
  };

  updateItem() {
    console.log('updateItem', this.props);

    const { itemId, getData, getImg } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then(item => this.setState({ item, loading: false }));

    console.log("getImg", getImg(itemId));
    const itemImg = getImg(itemId);
    this.setState({ itemImg });
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImg !== prevProps.getImg
    ) {
      this.setState({ loading: true });
      this.updateItem();
      console.log("componentDidUpdate+updateItem");
    }
  }

  render() {
    if (!this.state.item) {
      return (
        <div className="card ml-3 mb-3 list-group-item">
          <h3 className="m-auto">Select item ...</h3>
        </div>
      );
    }

    const {
      loading,
      item,
      item: { name },
    } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <ErrorBoundary>
        <div className="card flex-row mb-3 border-secondary ">
          <div className="col-md-5">
            <img
              className="m-3 rounded detail-img img-fluid"
              src={ this.state.itemImg }
              alt="Img here..."
            />
          </div>
          <div className="card-body pb-0 ">
            <h3 className="card-title">
              { name } { this.props.personId }
            </h3>
            <ul className=" list-group-flush p-0">
              { React.Children.map(this.props.children, child => {
                //React element are IMMUTABLE!!!
                //copy elem + prop "item";
                return React.cloneElement(child, { item });
              }) }
              <ErrorBtn />
            </ul>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
