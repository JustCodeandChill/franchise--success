import React from "react";
import { Field, reduxForm } from "redux-form";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import FormField from "./FormField";
import validateEmail from "../../utils/validateEmail";
import { connect } from "react-redux";
import * as actions from '../../actions';

const FIELDS = [
  {
    name: "recipientName",
    placeholder: "Họ và tên",
  },
  {
    name: "email",
    placeholder: "Email",
  },
];
class ContactForm extends React.Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
    this.setState({ forms: this.props.forms });
  }

  renderFields() {
    return FIELDS.map(({ name, placeholder }) => {
      return (
        <Field
          key={name}
          name={name}
          component={FormField}
          type="text"
          placeholder={placeholder}
          className="grey darken-4"
          onChange={(values) => console.log(values)}
        />
      );
    });
  }

  handleForm = (values) => {
    console.log("in hande forms value are", values);
    this.props.submitForm(values);
    
  };
  renderForm() {
    return (
      <div>
        {/* Cancel button */}
        <div className="modal-close" style={{ padding: "6px" }}>
          <i className="right material-icons deep-orange accent-3 white-text">
            clear
          </i>
        </div>
        {/* Form */}
        <form onSubmit={this.props.handleSubmit(this.handleForm)}>
          <div className="modal-content" style={{ padding: "0 10px" }}>
            <h5 className="center" style={{ marginTop: "7vh" }}>
              Đăng kí cập nhật thông tin miễn phí
            </h5>

            <p>
              Nhận thông tin cập nhật về các cơ hội kinh doanh và nhượng quyền
              mới nhất và lớn nhất được gửi đến hộp thư của bạn mỗi tuần. <br />
              Không có thư rác, chỉ là thông tin tốt, hữu ích cho các doanh nhân
              tham vọng.
              <br />
              <span style={{ fontSize: "0.9rem" }} className="red-text">
                Lưu ý: Đăng kí sẽ thất bại nếu thông tin nhập hiện lỗi đỏ
              </span>
            </p>
            <hr></hr>
            <div className="grey lighten-1">
              {this.renderFields()}

              <button
                className="modal-close waves-effect waves-green btn-flat white-text"
                type="submit"
                style={{
                  backgroundColor: "red",
                  margin: "15px 10px 5px",
                  width: "94%",
                }}
              >
                Đăng kí
              </button>
              <p style={{ font: "0.5rem", textAlign: "center" }}>
                Chúng tôi không SPAM <br />
                Chúng tôi không chia sẻ thông tin cá nhân
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }

  renderContent() {
    return (
      <div className={`right hide-on-small-and-down`}>
        {/* Trigger button */}
        <div
          className={`modal-trigger nav-btn contact-btn center`}
          style={this.props.formStyle}
          data-target="modal1"
        >
          Liên hệ
        </div>

        {/* Content */}
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
          style={{ width: "350px" }}
        >
          {this.renderForm()}
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function validate(values) {
  const errors = {};
  if (!values.recipientName) {
    errors.recipientName = "Xin hãy nhập tên của bạn";
  }

  if (!values.email) {
    errors.email = "Xin hãy nhập email của bạn";
  }

  errors.email = validateEmail(values.email || "");
  return errors;
}

ContactForm = reduxForm({
  validate,
  form: "contact",
})(ContactForm);

export default connect(null, actions)(ContactForm);
