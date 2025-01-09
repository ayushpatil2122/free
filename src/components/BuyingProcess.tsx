import { CreditCard, FileText, Wallet, FileCheck } from 'lucide-react'

export default function BuyingProcess() {
  const steps = [
    {
      id: '01',
      icon: CreditCard,
      title: 'EMD',
      description: '10% of Reserve Price as Earnest Mony Deposit and KYC Submission to get eligibility to participate in auction'
    },
    {
      id: '02',
      icon: FileText,
      title: 'E-Auction',
      description: 'Participate in the live auction and become successful bidder'
    },
    {
      id: '03',
      icon: Wallet,
      title: '100% Payment',
      description: 'Comply with Auction Payment Terms of Sale Notice'
    },
    {
      id: '04',
      icon: FileCheck,
      title: 'Sale Certificate',
      description: 'Collect Documents and complete the sale certificate registration'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        HOW TO BUY PROPERTY
      </h2>
      
      <div className="relative">
        {/* Connecting lines */}
        <div className="hidden md:block absolute top-[52px] left-0 right-0 h-[2px] bg-gray-200 -z-10" />
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-[100px] h-[100px] bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-sm font-medium text-purple-600">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

