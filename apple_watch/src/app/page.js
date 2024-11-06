import NavMenuFull from "@/components/NavMenuFull"
import ContentFull from "@/components/ContentFull"
import AccordianContainer from "@/components/AccordianContainer"

  export default function Home() {
    return <div className="full_container">
      <NavMenuFull />
      <ContentFull />
      <AccordianContainer/>
    </div>
  }
