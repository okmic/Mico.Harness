import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/sections/Hero'
import { Toc } from '@/components/sections/Toc'
import { Outro } from '@/components/sections/Outro'

export default function App() {
  return (
    <Layout>
      <Hero />
      <Toc />
      {/* Section 01: WhatIsAgent */}
      {/* Section 02: WhatIsDangerous */}
      {/* Section 03: WhatIsExpensive */}
      {/* Section 04: WhatToDo */}
      <Outro />
    </Layout>
  )
}