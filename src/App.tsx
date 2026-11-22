import { Layout } from '@/components/layout/Layout'
import { ProgressBar } from '@/components/layout/ProgressBar'
import { SideToc } from '@/components/layout/SideToc'
import { Hero } from '@/components/sections/Hero'
import { Toc } from '@/components/sections/Toc'
import { WhatIsAgent } from '@/components/sections/WhatIsAgent'
import { WhatIsDangerous } from '@/components/sections/WhatIsDangerous'
import { WhatIsExpensive } from '@/components/sections/WhatIsExpensive'
import { WhatToDo } from '@/components/sections/WhatToDo'
import { Outro } from '@/components/sections/Outro'

export default function App() {
  return (
    <Layout>
      <ProgressBar />
      <Hero />
      <Toc />
      <div className="mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12">
          <div className="min-w-0">
            <WhatIsAgent />
            <WhatIsDangerous />
            <WhatIsExpensive />
            <WhatToDo />
          </div>
          <SideToc />
        </div>
      </div>
      <Outro />
    </Layout>
  )
}