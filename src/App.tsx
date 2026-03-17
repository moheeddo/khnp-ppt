import Presentation from './components/Presentation'
import CoverSlide from './slides/CoverSlide'
import AgendaSlide from './slides/AgendaSlide'
import BusinessSlide from './slides/BusinessSlide'
import InstituteSlide from './slides/InstituteSlide'
import EducationSlide from './slides/EducationSlide'
import ConsortiumSlide from './slides/ConsortiumSlide'
import SystemSlide from './slides/SystemSlide'
import AchievementSlide from './slides/AchievementSlide'
import DifferentiationSlide from './slides/DifferentiationSlide'
import FutureSlide from './slides/FutureSlide'
import ClosingSlide from './slides/ClosingSlide'

export default function App() {
  return (
    <Presentation>
      <CoverSlide />
      <AgendaSlide />
      <BusinessSlide />
      <InstituteSlide />
      <EducationSlide />
      <ConsortiumSlide />
      <SystemSlide />
      <AchievementSlide />
      <DifferentiationSlide />
      <FutureSlide />
      <ClosingSlide />
    </Presentation>
  )
}
