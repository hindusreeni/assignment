






import React from "react";
import CreateNewBill from "./CreateNewBill";
import { Modal, Button } from "antd";

import "antd/dist/antd.css";
import "./index.css";

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.showModal}
          style={{
            color: "#1890ff",
            border: "1px dashed #1890ff",
            borderRadius: "18px",
            margin:"10px 30px",
            padding:"5px 20px 5px 20px"
          }}
        >
          + Add New
        </Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width={500}
        >
          <CreateNewBill onCancel={this.handleCancel} onSave={this.handleOk} />
        </Modal>
      </div>
    );
  }
}

export default App;