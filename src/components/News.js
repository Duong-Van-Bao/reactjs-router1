import React, { Component } from 'react';
import Newsitem from './Newsitem';
import dl from './dulieu.json';


class News extends Component {
    render() {
        // var so = [1,2,3,4,5,6,9];
        // var so2 =so.map((value,key)=> value*3 + "và chỉ số là " + key);
        // console.log(so2);
                
        return (
            <div> 
              <div>
                <header className="masthead tin">
                    <div className="container h-100">
                    <div className="tintuc"> Tin Tức </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row mt-3">
                        
                        {
                            dl.map((value,key) =>{
                            return(
                                <Newsitem key={key}
                                tinID={value.id}
                                anh={value.anh}
                                tieuDe={value.tieuDe}
                                trichDan={value.trichDan}
                                ></Newsitem>   
                            )                        
                            })
                        }
                    </div>
                    <hr />
                </div>
                </div>
            </div>
        );
    }
}

export default News;