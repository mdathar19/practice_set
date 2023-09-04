
import './App.css'
import GlobalModal from './global/GlobalModal';
import Table from './global/Table'
import useGlobalContext from './global/context/useGlobalContext'
import { tableType } from './global/type.table'


const DummyCom = () => {
  return (
    <div className="bg-primary" style={{height:'500px',width:'500px'}}>
        Hello 
      </div>
  )
}


function App() {   // App.jsx file will be actual parent of table. so we need to use this as a parent of all and do use context
  
  const {modalActive,setModalActive} = useGlobalContext()

  return (
    <div>
      <GlobalModal  component={<Table tableType={tableType.compensation_on_details}/>}/>
      <button   onClick={()=>setModalActive(!modalActive)}>click to open modal</button>
      <div className='p-2 container vw-50'>
        <Table tableType={tableType.client_list}/>
        <Table tableType={tableType.compensation_on_details}/>
        <Table tableType={tableType.holiday_list}/>
        <Table tableType={tableType.hr_compensation_list}/>
        <Table tableType={tableType.hr_employee_list}/>
        <Table tableType={tableType.hr_project_list}/>
        <Table tableType={tableType.manager_employee_list}/>
        <Table tableType={tableType.onBoarding_list}/>
        <Table tableType={tableType.project_list}/>
     </div>
    </div>
  )
}

export default App
