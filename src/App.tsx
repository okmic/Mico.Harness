import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/sections/Hero'
import { Toc } from '@/components/sections/Toc'
import { WhatIsAgent } from '@/components/sections/WhatIsAgent'
import { WhatIsDangerous } from '@/components/sections/WhatIsDangerous'
import { WhatIsExpensive } from '@/components/sections/WhatIsExpensive'
import { WhatToDo } from '@/components/sections/WhatToDo'
import { ChooseModel } from '@/components/sections/ChooseModel'
import { Outro } from '@/components/sections/Outro'
import { Footer } from '@/components/sections/Footer'

export default function App() {
  return (
    <Layout>
      <Hero />
      <Toc />
      <div className="mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8">
        <WhatIsAgent />
        <WhatIsDangerous />
        <WhatIsExpensive />
        <WhatToDo />
        <ChooseModel />
      </div>
      <Outro />
      <Footer />
    </Layout>
  )
}