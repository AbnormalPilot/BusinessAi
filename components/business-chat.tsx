"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Mic, Send, Sparkles, User, MoreHorizontal } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function BusinessChat() {
  const [messages, setMessages] = useState<{ id: string; text: string; role: 'user' | 'assistant' }[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTypingUser, setIsTypingUser] = useState(false)
  const [isTypingAI, setIsTypingAI] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const chatSteps = [
    {
      question: "Mera stock kab khatam hone wala hai?",
      answer: "Aapka Tata Salt 3 din mein khatam hoga based on current sales. Aur Maggi ka stock sirf 5 din chalega. Main abhi reorder suggestion bhej deta hoon supplier ko?"
    },
    {
      question: "Last month ka total profit kitna raha?",
      answer: "Pichle mahine aapka total profit ₹42,500 raha, jo pichle saal se 12% zyada hai. Sabse zyada margin Dairy products mein mila."
    },
    {
      question: "Which items are not selling fast?",
      answer: "Slow moving items are: Basmati Rice (5kg) and Dove Soap. Suggestion: Bundle them with fast-selling snacks to clear inventory."
    },
    {
      question: "Aaj ki total sales kitni hui?",
      answer: "Aaj ki total sales ₹8,420 hai. Kal ke mukable 15% increase hai, mostly cold drinks aur ice cream ki wajah se. Best growth!"
    },
    {
      question: "Kiska udhaar baaki hai?",
      answer: "Rahul Sharma ka ₹1,200 aur Priya Verma ka ₹850 outstanding hai. Kya main unhe payment reminder bhej doon?"
    },
    {
      question: "What is my estimated GST for this quarter?",
      answer: "Aapka estimated GST ₹12,450 hai. Input Tax Credit claim karne ke baad ye ₹8,200 ho jayega. Report generate ho gayi hai."
    },
    {
      question: "Help me find my top 5 customers.",
      answer: "Top 5 customers are: Amit, Suman, Rajesh, Neha, and Sunil. Amit ne iss mahine ₹12,000 ki shopping ki hai!"
    },
    {
      question: "Dukan ka kharcha kam kaise karein?",
      answer: "Energy usage analytics dikha raha hai ki AC 24°C par rakhein to mahine ke ₹1,500 bach sakte hain. Baaki sab control mein hai."
    }
  ]

  useEffect(() => {
    let isCancelled = false

    const runDemo = async () => {
      const step = chatSteps[currentStep % chatSteps.length]
      
      // Reset for next loop if needed, only if we have accumulated messages
      if (currentStep > 0 && currentStep % chatSteps.length === 0 && messages.length > 4) {
        if (!isCancelled) setMessages([])
      }

      await new Promise(r => setTimeout(r, 500))
      if (isCancelled) return

      // 1. Simulate User Typing
      if (!isCancelled) setIsTypingUser(true)
      
      for (let i = 0; i <= step.question.length; i++) {
        if (isCancelled) return
        setInputValue(step.question.slice(0, i))
        await new Promise(r => setTimeout(r, 20 + Math.random() * 30))
      }
      
      await new Promise(r => setTimeout(r, 300))
      if (isCancelled) return
      
      setIsTypingUser(false)
      setMessages(prev => [...prev, { id: Date.now() + "-u", text: step.question, role: 'user' }])
      setInputValue("")

      await new Promise(r => setTimeout(r, 400))
      if (isCancelled) return

      // 2. AI Thinking/Typing
      setIsTypingAI(true)
      await new Promise(r => setTimeout(r, 800))
      if (isCancelled) return
      
      setIsTypingAI(false)
      setMessages(prev => [...prev, { id: Date.now() + "-a", text: step.answer, role: 'assistant' }])

      await new Promise(r => setTimeout(r, 1500))
      if (isCancelled) return
      
      setCurrentStep(prev => prev + 1)
    }

    runDemo()
    
    return () => {
      isCancelled = true
    }
  }, [currentStep])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTypingAI])

  return (
    <div className="w-full max-w-2xl mx-auto bg-white backdrop-blur-xl border border-white/80 rounded-3xl overflow-hidden flex flex-col h-[520px] shadow-2xl transition-all duration-300">
      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth">
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 mt-1 ring-1 ring-primary/10">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              )}
              
              <div className={`
                max-w-[80%] rounded-2xl px-5 py-3 text-sm md:text-base leading-relaxed relative shadow-sm
                ${msg.role === 'user' 
                  ? 'bg-primary text-primary-foreground rounded-tr-none' 
                  : 'bg-[#F9FAFB] text-foreground border border-gray-100 rounded-tl-none'}
              `}>
                {msg.text}
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 mt-1 ring-1 ring-primary/10">
                  <User className="w-4 h-4 text-primary" />
                </div>
              )}
            </motion.div>
          ))}

          {isTypingAI && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4 justify-start"
            >
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 mt-1">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>
                <div className="bg-[#F9FAFB] text-foreground border border-gray-100 rounded-2xl rounded-tl-none px-5 py-3 shadow-sm">
                <MoreHorizontal className="w-5 h-5 animate-bounce text-muted-foreground" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Bar */}
      <div className="p-4 bg-white/60 border-t border-gray-100 backdrop-blur-md">
        <div className="relative flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-4 py-3 shadow-sm">
          <div className="flex-1 text-sm md:text-base text-foreground min-h-[20px] flex items-center italic">
            {inputValue}
            {isTypingUser && <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[2px] h-4 bg-primary ml-1" />}
            {!inputValue && !isTypingUser && <span className="text-muted-foreground/60 not-italic">Ask anything about your business...</span>}
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mic className={`w-5 h-5 transition-colors ${isTypingUser ? 'text-primary' : ''}`} />
            <div className="w-px h-4 bg-border" />
            <Send className={`w-5 h-5 transition-colors ${!isTypingUser && inputValue ? 'text-primary' : ''}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

