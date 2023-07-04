import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const Page = () => {
  return (
    <div className="container mx-auto p-20 bg-white h-screen">
      <StudentTable students={students} />
    </div>
  );
};

export default Page;
