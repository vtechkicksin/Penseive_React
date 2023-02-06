import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const PAgination = () => {

  const [data, setData] = useState([]);
  const [totalPage, setPage] = useState([]);
  const [pageNum,setPageNum] = useState([]);
  const [ currentPage , setCurrentPage ] = useState(1);
  const [postsPerPage , setPostsPerPage] = useState(8);

  const [page,setPagu] = useState(0);
  const [limit,steLimit] = useState('');

  const [ searchBar , setsearchbar ] = useState('');
  // const navigate = useNavigate();
  const callApi = async(number)=>{
    try 
    {
      
        const response = await axios.get(`http://localhost:5000/pageData?page=${number}`,{
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
        setPage(response.data.totalData);
        setPageNum(Math.ceil(response.data.totalPages));
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
  const searchAPi = async(number)=>{
    try 
    {
      console.log("searchAPI function========",number)
      const response = await axios.get(`http://localhost:5000/gpsData?search=${number}`,{
        // headers: {"Authorization" : `Bearer ${token}`}
        headers: 
        {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
        }
        );
        setData(response.data.data);
        
      } 
      catch (error) 
      {
        console.error(error);
      }
  }
  useEffect(() => {
    console.log("!!!!!!!!!!!!!!!!");
    let y=1;
    callApi(y);
    console.log("Narendra")
  }, []);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex,lastPostIndex);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / 7); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
    <div className="container">
        <div class="container-fluid">
        <div class="input-group">
          <input type="search" value={searchBar}  onChange={(e) => setsearchbar(e.target.value)}class="form-control rounded" placeholder="Search by DeviceId" aria-label="Search" aria-describedby="search-addon" id="searchBar" name="searchBar" />
          <button type="button" class="btn btn-outline-primary" onClick={()=> searchAPi(searchBar)}>search</button>
        </div>
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
                        <td>{<NavLink to="/GPS" >{e.Location}</NavLink>}</td>
                        {/* <td>{<NavLink to={{pathname:"/GPS" , naren:e.DeviceId}} >{e.Location}</NavLink>}</td> */}
                        {/* <td>{navigate("/GPS",{state:{charts:e.DeviceId}})}</td> */}
                        </tr>
                    </tbody>)
                })
            }
            
              <nav>
              <ul className='pagination'>
                {pageNumbers.map((number) => (
                  
                  <li key={number} className='page-item'>
                    {console.log("OUR NUM++++++",number)}
                    <button onClick={() => { setPagu(number); callApi(number)}} className='page-link'>
                      {number}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            
        </table>
        </div>
    </div>
    </>
  );
};

export default PAgination;
