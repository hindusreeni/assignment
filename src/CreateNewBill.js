import React from "react";
import { Input, Select, Button, DatePicker, InputNumber, Upload } from "antd";
import "antd/dist/antd.css";

import "./index.css";

const { Option } = Select;
const { Dragger } = Upload;
class CreateNewBill extends React.Component {
  // state = {
  //   name: null,
  //   paidType: null,
  //   amount: null,
  //   dateOfBill: null,
  //   fileList: null
  // };
  render() {
    const uploaderProps = {
      accept: ".pdf, .jpg, .png, .jpeg",
      multiple: false,
      action: "",
      onRemove: file => this.setState({ fileList: [] }),
    //   beforeUpload: file => {
    //     this.setState({
    //       fileList: [file]
    //     });
    //     return false;
    //   },
    //   fileList: this.state.fileList
    };
    const { onCancel, onSave } = this.props;
    return (
      <div style={{ color: "#8b8b9b" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            paddingBottom: "20px"
          }}
        >
          <div
            style={{
              fontWeight: "600"
            }}
          >
            ADD YOUR BILLS
          </div>
          <div>Submit Your Extra Expenses/Bills for Reimbersement</div>
        </div>
        <div style={{padding:'10px 40px'}}>
          <div className="each-field">
            <div className="label-field">
              <label>Bill Name</label>
            </div>
            <div className="input-field">
              <div>
                <Input type="text" placeholder="Bill Name" />
              </div>
            </div>
          </div>
          <div className="each-field">
            <div className="label-field">
              <label>Paid type</label>
            </div>
            <div className="input-field">
              <div>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  style={{ width: "100%" }}
                  placeholder="Choose one option"
                >
                  <Option key="cash" value="cash">
                    Cash
                  </Option>
                  <Option key="card" value="card">
                    Debit/Credit Card
                  </Option>
                </Select>
              </div>
            </div>
          </div>
          <div className="each-field">
            <div className="label-field">
              <label>Amount(₹)</label>
            </div>
            <div className="input-field">
              <div>
                <InputNumber
                  min={0}
                  placeholder="Amount"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="each-field">
            <div className="label-field">
              <label>Date of Bill</label>
            </div>
            <div className="input-field">
              <div>
                <DatePicker style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div className="each-field">
            <div className="label-field">
              <label>Attach Your Bills</label>
            </div>
            <div className="input-field">
              <div>
                <Dragger {...uploaderProps} className="resume-drag-area">
                  <div style={{ color: "#D9DCE2" }}>
                    <div>Drag Files here</div>
                    <div>Or</div>
                    <div
                      style={{
                        border: "1px solid #D9DCE2",
                        borderRadius: "18px",
                        margin: "4px 50px",
                        padding:"5px 10px",
                        backgroundColor: "#D9DCE2",
                        color: "#fff"
                      }}
                    >
                      Select files
                    </div>
                  </div>
                </Dragger>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{ paddingRight: "18px", cursor: "pointer" }}
            onClick={() => onCancel()}
          >
            cancel
          </div>
          <div>
            <Button
              onClick={() => onSave()}
              style={{
                border: '1px solid "#8b8b9b',
                borderRadius: "18px",
                padding: "0px 18px"
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewBill;
