import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isRedirect:false,
            fNgay:"thu7"
         }
    }
    //trong biến event chứa các giá trị vào 
    // getstate những biến này vào state có các đối tượng rộng khi đã lấy được :tên và giá trị ở form
    //khi có nhiều trường thì phải import nó vào trong mảng cùng 1 và cũng import vào state và nó sẽ tạo thêm từng đối tượng trong state lúc không cần phải set từng cái vào 1 từ khóa tham khảo trên google handle multiple form input reactjs
    isChange = (event) => {
      const ten = event.target.name;
      const giatri = event.target.value;

      this.setState({
        [ten]:giatri
      });   
    }
    //trường ở hàm này là files chứ không phải là name và files này là 1 object chứa các phần tử của anh nên ta gọi từng phần 1 như lấy địa chỉ id của google và trong anh có những thuộc tính riêng VD: name, size,...  
    isFileChange = (event) => {
    //   const fAnh = event.target.files[0];
      const tenanh = event.target.files[0].name;

    //   console.log(fAnh)
   //
      this.setState(
          {
              fAnh:tenanh
          }
      );
    }
// chuyển mỗi giá trị trong form vào state khi muốn dùng thì gọi ra thôi
   submitForm = (event) => {
        event.preventDefault(); 
      this.setState({
          isRedirect:true
      });
   }
//các trường dữ liệu khi nhân vào 

//in vào state là fAnh
    getGiatri = () =>{
        var noidung ="";
        noidung +=" Ten nhan duoc la: " +this.state.fName;
        noidung +=" / Email nhan duoc la: " +this.state.fEmail;
        noidung +=" / Phone nhan duoc la: " +this.state.fPhone;
        noidung +=" / Mess nhan duoc la: " +this.state.fMess;
        noidung +=" / Ngay nhan duoc la: " +this.state.fNgay;
        noidung +=" / Anh nhan duoc la: " +this.state.fAnh;
        return noidung ;
    }
   //trước khi chuyển trang thì đã lấy được dữ liệu
    render() {
        if(this.state.isRedirect){
        // gọi hàm là phải có dấu ngoạc this.getGiatri()
          console.log(this.getGiatri())
            return <Redirect to="/" />;
        }
        return (
            <div>
               <div>
                <header className="masthead tin">
                    <div className="container h-100">
                    <div className="tintuc"> Trang Liên Hệ </div>
                    </div>
                </header>
                {/* end main */}
                {/* begin liên hệ */}
                <div className="container">
                    {/* Contact Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Diền Thông Tin Vào Đây Để Liên Hệ </h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                    </div>
                    <div className="divider-custom-line" />
                    </div>
                    {/* Contact Section Form */}
                    <div className="row">
                    <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Name</label>
                            <input name="fName" onChange={(event) => this.isChange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        {/* đặt cho từng cái form 1 cái trường VD: name="fName" lấy dữ liệu khi người dùng điền vào */}
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Email Address</label>
                            {/* khái báo 1 hàm VD:onChange={(event) => this.isChange(event)} */}
                            <input name="fEmail" onChange={(event) => this.isChange(event)} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Phone Number</label>
                            <input name="fPhone" onChange={(event) => this.isChange(event)} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Message</label>
                            <textarea name="fMess" onChange={(event) => this.isChange(event)} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Chọn Ngày</label>

                              <select value={this.state.fNgay} className="form-control" name="fNgay" onChange={(event) => this.isChange(event)} >
                                <option value="thu3">Ngày thứ 3</option>
                                <option value="thu5">Ngày thứ 5</option>
                                <option value="thu7">Ngày thứ 7</option>
                                <option value="chunhat">Ngày chủ nhật</option>
                              </select>

                              <p className="help-block text-danger" />
                            </div>
                           </div>
                        <br />

                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Chọn Ngày</label>

                            <input onChange={(event) => this.isFileChange(event)}  type="file" className="form-control-file" name="fAnh" />
                              
                              <p className="help-block text-danger" />
                            </div>
                           </div>
                        <br />
                        
                        <div id="success" />
                        <div className="form-group">
                            <button type="submit" onClick={(event) => this.submitForm(event)}className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Contact;