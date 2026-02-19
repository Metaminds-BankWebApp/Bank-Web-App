"use client";

import { AuthGuard } from "@/src/components/auth";
import { Sidebar } from "@/src/components/layout";
import { Bell, Lock, Mail, ShieldCheck, User } from "lucide-react";
import type { UserRole } from "@/config/site";

type StaffProfilePageProps = {
  role: Extract<UserRole, "BANK_OFFICER" | "ADMIN">;
  roleLabel: "Bank Officer" | "Admin";
};

export function StaffProfilePage({ role, roleLabel }: StaffProfilePageProps) {
  return (
    <AuthGuard requiredRole={role}>
      <div className="flex min-h-screen bg-[#f3f4f6]">
        <Sidebar role={role} className="max-lg:hidden" />
        <main className="flex-1 overflow-y-auto p-8 lg:p-10">
          <header className="mb-6 flex flex-col gap-4 rounded-xl bg-[linear-gradient(180deg,#0b1a3a_0%,#0a234c_58%,#08142d_100%)] p-4 text-white shadow-sm md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <button className="relative text-white/80 hover:text-white">
                  <Mail size={20} />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">2</span>
                </button>
                <button className="relative text-white/80 hover:text-white">
                  <Bell size={20} />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">8</span>
                </button>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/10">
                  <img src="https://ui-avatars.com/api/?name=Kamal+E&background=random" alt="User" className="h-full w-full object-cover" />
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0d3b66] bg-green-500"></div>
                </div>
                <div className="hidden text-sm md:block">
                  <p className="font-semibold leading-none">Kamal Edirisinghe</p>
                  <p className="text-white/60">{roleLabel}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="mb-8 text-sm text-slate-500">
            Dashboard <span className="mx-2 text-slate-400">▶</span> <span className="font-medium text-[#3e9fd3]">Profile</span>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_1.8fr]">
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-4">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-[#e2edf6] text-3xl font-bold text-[#0d3b66]">KE</div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0d3b66]">Kamal Edirisinghe</h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#3e9fd3]">{roleLabel}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                  <span className="text-slate-500">Employee ID</span>
                  <span className="font-semibold text-[#0d3b66]">#EMP-8821</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                  <span className="text-slate-500">Branch</span>
                  <span className="font-semibold text-[#0d3b66]">Colombo Central Branch</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                  <span className="text-slate-500">Joined</span>
                  <span className="font-semibold text-[#0d3b66]">Jan 12, 2021</span>
                </div>
              </div>
            </section>

            <div className="space-y-6">
              <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-2 text-[#0d3b66]">
                  <User size={16} />
                  <h3 className="text-sm font-semibold uppercase tracking-wider">Personal Information</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase text-slate-400">Full Name</p>
                    <input defaultValue="Kamal Edirisinghe" className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase text-slate-400">Email</p>
                    <input defaultValue="kamal@primecore.bank" className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase text-slate-400">Phone</p>
                    <input defaultValue="+94 71 982 1001" className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase text-slate-400">Designation</p>
                    <input defaultValue={roleLabel} className="h-11 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 text-sm text-slate-500 outline-none" readOnly />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-2 text-[#0d3b66]">
                  <Lock size={16} />
                  <h3 className="text-sm font-semibold uppercase tracking-wider">Security Settings</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <p className="mb-1 text-xs font-semibold uppercase text-slate-400">Current Password</p>
                    <input defaultValue="••••••••••" className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase text-slate-400">New Password</p>
                    <input placeholder="Enter new password" className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase text-slate-400">Confirm Password</p>
                    <input placeholder="Repeat new password" className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none" />
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
                  <ShieldCheck size={14} className="mt-0.5" />
                  <p>Use a strong password with uppercase, lowercase, numbers, and symbols.</p>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button className="rounded-full border border-slate-200 px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button>
                  <button className="rounded-full bg-[#0d3b66] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0a2e50]">Save Changes</button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
