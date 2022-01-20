import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated.js';

//cách lấy được địa chỉ id và tên tin trên thanh tìm kiếm VD:http://localhost:3000/tin-tuc/nguoi-soi.3.html lấy địa chỉ ID là 3 và tên là nguoi-soi gồm những bước sau bước 1:vào phần định hướng router 
class NewsDegil extends Component {
    render() {
        // var x =2;
        // var y="2";
        // y=parseInt(y,20);
        // console.log(typeof(y));
        // if(x===y){console.log('bằng nhau');}
        // else{
        //     console.log('không bằng nhau');
        // }
        // console.log(this.props.match.params.id);
        // console.log(typeof(this.props.match.params.id));
        // lấy ra địa chỉ id của google this.props.match.params.id
        var dem =1;
        return (
            <div>
                <div>
                    <header className="masthead tin">
                        <div className="container h-100">
                        <div className="tintuc"> Chi Tiết Tin </div>
                        </div>
                    </header>
                    {/* end main */}
                    {/* begin tin tuc */}
         
                        {
                            dl.map((value,key) => {
                                // console.log(typeof(this.props.match.params.id));
                                if(value.id === parseInt(this.props.match.params.id,20)){
                                    return(
                                        <div className="jumbotron jumbotron-fluid " key={key}>
                                        <div className="container">
                                        <img src={value.anh} className="img-fluid rong100" alt="for ract router" />
                                        <p className="lead">{value.tieuDe}</p>
                                        <hr className="my-2" />
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus dignissimos labore totam facilis, suscipit officia architecto deleniti? Commodi facilis dolorum ea? Nemo maxime cum quo eveniet earum! Corrupti, omnis.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus dignissimos labore totam facilis, suscipit officia architecto deleniti? Commodi facilis dolorum ea? Nemo maxime cum quo eveniet earum! Corrupti, omnis.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus dignissimos labore totam facilis, suscipit officia architecto deleniti? Commodi facilis dolorum ea? Nemo maxime cum quo eveniet earum! Corrupti, omnis.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus dignissimos labore totam facilis, suscipit officia architecto deleniti? Commodi facilis dolorum ea? Nemo maxime cum quo eveniet earum! Corrupti, omnis.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus dignissimos labore totam facilis, suscipit officia architecto deleniti? Commodi facilis dolorum ea? Nemo maxime cum quo eveniet earum! Corrupti, omnis.</p>
                                        </div>
                                    </div> 
                                    )
                                }
                               return true;
                            })
                        }



                        
                    <div className="container">
                        <h4 className="card-title text-center">Chi Tiết Tin </h4>
                        <div className="row">
                        <div className="col-12">
                            <div className="card-deck">
                        {/* phải khai báo key={key}  nếu không nó sẽ báo lỗi*/}
                        {/* hàm náy giới hạn in ra trong ba tin dùng hàm if */}
                        {
                            dl.map((value,key) =>{
                                   
                              if(value.id !== parseInt(this.props.match.params.id)){
                               if( dem <= 3){
                                    dem ++;
                                     return(
                                     <NewsRelated  key={key}
                                     tinID={value.id}
                                     anh={value.anh}
                                     tieuDe={value.tieuDe}
                                     trichDan={value.trichDan}                                            
                                     ></NewsRelated>
                                   )
                                }
                            }
                            return true;
                            })
                        }
                                
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        );
    }
}

export default NewsDegil;