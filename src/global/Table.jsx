import React, { useRef, useState } from 'react';
import {FiFilter} from 'react-icons/fi';
import './table.css'




function FilterHeader (props) {
    const {data,isActive,setIsActive,index} = props;
    const {key,filterType,type} = data;
    const inputRef = useRef(null)
    const [selected, setIsSelected] = useState("Choose one");

    function handleSelection (e,item) {
        e.stopPropagation();
        setIsSelected(item);
        // console.log("item",item)
    }
    function handleFilter (e) {
        e.preventDefault();
        // console.log("ref",inputRef.current.value,selected)
        inputRef.current.value = "";
        setIsActive(isActive===index?null:index);
    }

    return  (
        <th className="App">
        <div className="main">
          <div
            onClick={(e) => {
                // inputRef.current.focus()
              setIsActive(isActive===index?null:index);
            }}
            className="dropdown-btn"
          >
            <div>{key}</div>
            {
                filterType.length>0 && (
                    <div className='dropdown'>
                    <FiFilter/>
                        <div className="dropdown-content" style={{ display: isActive===index ? "block" : "none" }}>
                        <form onSubmit={handleFilter} className='w-100'>
                            <div className='w-100 text-center p-2'>
                                        <p>Select Any Filter</p>
                                        {
                                            filterType.map((type,index)=>(
                                                <span title={type.title} onClick={(e)=>handleSelection(e,type.title)} style={{fontSize:'1rem'}} className={`p-2 border rounded-3 m-1 ${selected===type.title && 'bg-primary text-white'}`}>{type.shortTitle}</span>
                                            ))
                                        }
                                    </div>
                            <div className="p-2">
                                <input type={type} required ref={inputRef} onClick={(e)=>e.stopPropagation()} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className='p-2'>
                                <button type="submit" onClick={(e)=>e.stopPropagation()} className="form-control">Submit</button>
                            </div>
                            <div>

                            </div>
                        </form>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </th>
    )
}

function BodyData () {
    return (
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
    )
}


function Table(props) {
    const {tableType} = props;
    const [isActive, setIsActive] = useState(null);
    console.log("tableType",tableType)
    return (
        <div>
            <h1 className="text-center">{tableType.name}</h1>
            <table className="table table-hover table-striped table-primary">
                <thead>
                <tr>
                    {
                        tableType.headers.length>0 && tableType.headers.map((data,index)=>(
                            <FilterHeader key={index+"header"} data={data} isActive={isActive} setIsActive={setIsActive} index={index}/>
                        ))
                    }
                </tr>
                   
                </thead>
                <tbody>
                <BodyData/>
                <BodyData/>
                <BodyData/>
                <BodyData/>
                </tbody>
            </table>
        </div>
    )
}

export default Table
