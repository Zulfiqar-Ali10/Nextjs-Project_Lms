// src/pages/students.js
import { StudentTable } from "@/components/DataTables/StudentTable";
import { StudentModal } from "@/components/Dialogs/StudentModal"; 

const Students = () => {
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Students</h1>
        <StudentModal />
      </div>
      <StudentTable />
    </div>
  );
}

export default Students;
