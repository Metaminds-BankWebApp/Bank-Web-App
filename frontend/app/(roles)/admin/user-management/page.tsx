import { AuthGuard } from "@/src/components/auth";
import { Sidebar } from "@/src/components/layout";
import AdminHeader from "@/src/components/ui/adminheader";

export default function UserManagementPage() {
  return (
    <AuthGuard requiredRole="ADMIN">
      <div className="flex h-screen bg-[linear-gradient(180deg,#0b1a3a_0%,#0a234c_58%,#08142d_100%)] overflow-hidden">
        <Sidebar role="ADMIN" className="max-lg:hidden h-full z-10 relative" />
        <main className="flex-1 flex flex-col bg-[#f3f4f6] overflow-hidden lg:rounded-l-[28px] shadow-2xl">
           <div className="flex-1 overflow-y-auto p-8 lg:p-10">
             <AdminHeader title="User Management" />
             <div className="mt-8">
               {/* Content goes here */}
             </div>
           </div>
        </main>
      </div>
    </AuthGuard>
  );
}
