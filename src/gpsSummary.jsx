import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const GpsSummary = (props) => {
  let location = useLocation();
  const [data, setData] = useState([]);
  console.log("calling summary",location.state?.charts);
  
  const [charts, setCharts] = useState(location.naren?.charts);

  const callApi = async()=>{
    try 
    {
      console.log("========",charts);
        const response = await axios.get(`http://localhost:5000/searchData?search=D-1567`,{
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
        console.log("response.data.pageNum",Math.ceil(response.data.totalPages));
        setData(response.data.data);
        // setPage(response.data.totalData);
        // setPageNum(Math.ceil(response.data.totalPages));
        arr.map((e)=>{
            console.log("Only one",e.DeviceId)
            console.log("Only one",e.Device_Type)
            console.log("Only one",e.Timestamp)
            console.log("Only one",e.Location);
            
        })
      } 
      catch (error) 
      {
        console.error(error);
      }
  }

  useEffect(() => {
    console.log("!!!!!!!!!!!!!!!!");
    callApi();
    console.log("Narendra")
  }, []);


  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = data.slice(firstPostIndex,lastPostIndex);
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(totalPage / 7); i++) {
  //   pageNumbers.push(i);
  // }
  return (
    <>
    <div className="container">
        <div class="container-fluid">
        
        <table id="dtBasicExample" class="table_sum table-striped table-bordered table-sm" cellspacing="3" width="100%">
            <thead>
                <tr>
                
                <th class="th-sm">TimeStamp

                </th>
                <th class="th-sm">Location

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
            
            
              
            
            
        </table>
        </div>
    </div>
    </>
  );
};

export default GpsSummary;
