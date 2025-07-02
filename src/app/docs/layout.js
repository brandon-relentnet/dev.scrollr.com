import SideNavigation from "@/app/docs/components/SideNavigation";

export default function DocsLayout({ children }) {
  return (
    <div className="p-4 flex justify-center gap-4 ">
      <SideNavigation />
      {children}
    </div>
  );
}
