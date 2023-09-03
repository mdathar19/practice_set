
import './App.css'
import Table from './global/Table'
import { tableType } from './global/type.table'

function App() {   // App.jsx file will be actual parent of table. so we need to use this as a parent of all and do use context
  return (
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
  )
}

export default App
