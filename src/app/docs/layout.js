import SideNavigation from "@/app/docs/components/SideNavigation";

export default function DocsLayout({ children }) {
  return (
    <div className="p-4 flex gap-4 container mx-auto">
      <SideNavigation />
      {children}
    </div>
  );
}
