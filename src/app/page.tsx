import BreadCrumb from "@/components/BreadCrumb";
import { CRUM_SECTIONS } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="main-container my-9">
        <BreadCrumb sections={CRUM_SECTIONS} />
      </div>
    </main>
  )
}
