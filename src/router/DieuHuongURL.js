import React, { Component } from 'react';
import { Route } from "react-router-dom";
import News from '../components/News';
import Contact from '../components/Contact';
import Home from '../components/Home';
import NewsDegil from '../components/NewsDegil';

//vào trang reactjs để xem những cập nhật mới vào phần Quick Start và cài đặt router dom ở đây ở phần router này là phải biết đọc file hướng dẫn trên trang web của react router "DieuHuongURL" thay đổi đường Link là /tin-tuc/:slug.:id.html ở đây đường Link /tin-tuc/ ứng với trang tin tức nhưng vì đây router là trang khác nên khi ta nhất vào phần này trên thì nó sẽ chuyển sang sang khác Bước 2: gọi các thuộc tính ra bằng hàm props ở file NewsDegil.js  
//Setup đường dẫn VD: /tin thì nó sẽ link sang component ten là <News/>

class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>                
                <Route exact path="/home" component={Home}/>                
                <Route exact path="/tin" component={News}/> 
                <Route exact path="/chi-tiet-tin" component={NewsDegil}/>           
                <Route exact path="/tin-tuc/:slug.:id.html" component={NewsDegil} />               
                <Route exact path="/dang-ky" component={Contact}/>    
            </div>
        );    
    }
}

export default DieuHuongURL;