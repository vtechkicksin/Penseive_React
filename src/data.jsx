import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [totalPage, setPage] = useState([]);
  const [pageNum,setPageNum] = useState([]);

  

  const callApi = async()=>{
    try {
        const response = await axios.get('http://localhost:5000/pageData',{
            // headers: {"Authorization" : `Bearer ${token}`}
            headers: 
            {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
            }
            );
        
        let arr = response.data;
        console.log("sandeep",arr);
        setData(response.data.data);
        setPage(response.data.totalData);
        setPageNum(response.data.pageNum)
        arr.map((e)=>{
            console.log("Only one",e.DeviceId)
            console.log("Only one",e.Device_Type)
            console.log("Only one",e.Timestamp)
            console.log("Only one",e.Location);
            
        })
      } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    console.log("!!!!!!!!!!!!!!!!");
    callApi();
  }, []);


  return (
    <>
    <div className="container">
        <div class="container-fluid">
        <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="3" width="100%">
            <thead>
                <tr>
                <th class="th-sm">Name

                </th>
                <th class="th-sm">Position

                </th>
                <th class="th-sm">Office

                </th>
                <th class="th-sm">Age

                </th>
                </tr>
            </thead>
            {
                data.map((e)=>{
                    console.log("@@@@@@@@@@",e)
                    return(
                    <tbody>
                        <tr>
                        <td>{e.DeviceId}</td>
                        <td>{e.Device_Type}</td>
                        <td>{e.Timestamp}</td>
                        <td>{e.Location}</td>
                        </tr>
                    </tbody>)
                })
            }
            <div className='pagination-btn'>
              {/* <button onClick={()=> getPrevPage()}>PREV</button> */}
              <p>
                {pageNum} of {totalPage}
                <h1>
                  HELLO bhai
                </h1>
              </p>
              {/* <button onClick={()=> getNextPage()}></button> */}
            </div>
            
        </table>
        </div>
    </div>
    </>
  );
};

export default Pagination;
