import { TrainerTable } from "@/components/DataTables/TrainerTable"; 
import { TrainerModal } from "@/components/Dialogs/TrainerModals"; // Corrected import path

export default function Trainers() {
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Trainers</h1>
        <TrainerModal /> 
      </div>
      <TrainerTable />
    </div>
  );
}
