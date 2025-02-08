import { FeatureSteps } from "@/components/blocks/feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'FOOD AND BEVERAGE SERVICE ',
    content: 'Start your Web3 journey by learning the basics of blockchain.', 
    image: '/whiteladies1.jpg' 
  },
  { 
    step: 'Step 2',
    title: 'PROTOCOL SERVICES',
    content: 'Dive deep into blockchain fundamentals and smart contract development.',
    image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'FOOD AND BEVERAGE CATERING ',
    content: 'Graduate with hands-on Web3 experience through building decentralized applications.',
    image: 'https://i.pinimg.com/236x/e9/75/bb/e975bb5f26f7711732b8178e22827b67.jpg'
  },
]

export default  function Services() {
  return (
      <FeatureSteps 
        features={features}
        title="What we deliver"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}