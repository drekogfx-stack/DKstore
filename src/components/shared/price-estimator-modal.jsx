import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Check, Sparkles } from 'lucide-react'

export const PriceEstimatorModal = ({ isOpen, onClose }) => {
  const [serviceType, setServiceType] = useState(null)
  const [vfxType, setVfxType] = useState(null)
  const [customCharacter, setCustomCharacter] = useState(null)
  const [fps, setFps] = useState(null)
  const [scenes, setScenes] = useState(1)
  const [additionalEffects, setAdditionalEffects] = useState([])
  const [gfxServices, setGfxServices] = useState([])

  const resetForm = () => {
    setServiceType(null)
    setVfxType(null)
    setCustomCharacter(null)
    setFps(null)
    setScenes(1)
    setAdditionalEffects([])
    setGfxServices([])
  }

  const calculatePrice = () => {
    if (!serviceType || serviceType === "OTHER") return 0
    
    let price = 0
    
    if (serviceType === "VFX") {
      if (vfxType === "Custom") {
        price = 80
        if (customCharacter) price += 30
        if (fps) {
          if (fps > 60) price += 80
          else if (fps > 30) price += 20
        }
        if (scenes > 1) {
          price += (scenes - 1) * 100
        }
        price += additionalEffects.length * 10
      } else if (vfxType === "Premade") {
        price = 50
      }
    } else if (serviceType === "GFX") {
      if (gfxServices.includes("Logo")) price += 30
      if (gfxServices.includes("Banner")) price += 30
      if (gfxServices.includes("Animation")) price += 15
    }
    
    return price
  }

  const toggleEffect = (effect) => {
    setAdditionalEffects(prev =>
      prev.includes(effect) ? prev.filter(e => e !== effect) : [...prev, effect]
    )
  }

  const toggleGfxService = (service) => {
    setGfxServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  const openDiscord = () => {
    window.open("https://discord.gg/7FmWcHZucR", "_blank")
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 250 }}
          className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6 max-w-md w-full max-h-[85vh] overflow-y-auto scrollbar-hide shadow-2xl"
          onClick={e => e.stopPropagation()}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Header */}
          <div className="flex items-center justify-between mb-6 sticky top-0 bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-md py-3 -mt-2 px-1 z-10 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              <h2 className="text-xl font-bold text-white">Price Estimator</h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </motion.button>
          </div>

          <div className="space-y-5 pb-2">
            {/* Service Type Selection */}
            <div>
              <h3 className="text-sm font-medium text-white/80 mb-2 flex items-center gap-1">
                <span className="w-1 h-4 bg-white rounded-full"></span>
                Select Service Type
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {["VFX", "GFX", "OTHER"].map(type => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setServiceType(type)}
                    className={`relative p-3 rounded-xl border-2 transition-all duration-150 font-medium ${
                      serviceType === type
                        ? 'border-white text-white font-bold'
                        : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/90'
                    }`}
                  >
                    {type}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* VFX Options */}
            {serviceType === "VFX" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-2">VFX Type</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["Custom", "Premade"].map(type => (
                      <motion.button
                        key={type}
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setVfxType(type)}
                        className={`p-3 rounded-xl border-2 transition-all duration-150 font-medium ${
                          vfxType === type
                            ? 'border-white text-white font-bold'
                            : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/90'
                        }`}
                      >
                        {type}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {vfxType === "Custom" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-white/80 mb-2">Custom Character?</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {[true, false].map(val => (
                          <motion.button
                            key={val.toString()}
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setCustomCharacter(val)}
                            className={`p-3 rounded-xl border-2 transition-all duration-150 ${
                              customCharacter === val
                                ? 'border-white text-white font-bold'
                                : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/90'
                            }`}
                          >
                            {val ? "Yes" : "No"}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white/80 mb-2">Frame Rate (FPS)</h4>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[25, 30, 60, 120].map(value => (
                          <motion.button
                            key={value}
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFps(value)}
                            className={`p-2 rounded-xl border-2 text-sm transition-all duration-150 ${
                              fps === value
                                ? 'border-white text-white font-bold'
                                : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/90'
                            }`}
                          >
                            {value}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-white/80">Scenes</h4>
                        <span className="text-sm font-bold text-white bg-white/10 px-2 py-0.5 rounded-lg">
                          {scenes}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={scenes}
                        onChange={(e) => setScenes(parseInt(e.target.value))}
                        className="w-full accent-white h-2 rounded-lg appearance-none bg-white/10"
                        style={{
                          background: `linear-gradient(to right, white 0%, white ${(scenes-1)*11.11}%, rgba(255,255,255,0.1) ${(scenes-1)*11.11}%, rgba(255,255,255,0.1) 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-white/40 mt-1">
                        <span>1</span>
                        <span>5</span>
                        <span>10</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white/80 mb-2">Additional Effects</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["Sound Design", "Motion Graphics", "Extra Revisions", "Custom Assets"].map(effect => (
                          <motion.button
                            key={effect}
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => toggleEffect(effect)}
                            className={`p-2.5 rounded-xl border-2 text-xs flex items-center justify-center gap-1.5 transition-all duration-150 ${
                              additionalEffects.includes(effect)
                                ? 'border-white text-white font-bold'
                                : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/90'
                            }`}
                          >
                            {additionalEffects.includes(effect) && <Check className="w-3.5 h-3.5" />}
                            <span>{effect}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* GFX Options */}
            {serviceType === "GFX" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-2">Select Services</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {["Logo", "Banner", "Animation"].map(service => (
                      <motion.button
                        key={service}
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleGfxService(service)}
                        className={`p-3 rounded-xl border-2 text-xs flex items-center justify-center gap-1.5 transition-all duration-150 ${
                          gfxServices.includes(service)
                            ? 'border-white text-white font-bold'
                            : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/90'
                        }`}
                      >
                        {gfxServices.includes(service) && <Check className="w-3.5 h-3.5" />}
                        {service}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* OTHER Options */}
            {serviceType === "OTHER" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white/5 rounded-xl p-5 text-center border border-white/10">
                  <Sparkles className="w-8 h-8 text-white/50 mx-auto mb-2" />
                  <h3 className="text-base font-medium text-white mb-1">Custom Project</h3>
                  <p className="text-xs text-white/50 mb-4">
                    For custom projects, join our Discord
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={openDiscord}
                    className="bg-white text-black px-4 py-2 text-sm rounded-xl font-medium inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                  >
                    Join Discord
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Price Display */}
            {serviceType && serviceType !== "OTHER" && calculatePrice() > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-4 mt-4 border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Estimated Price:</span>
                  <span className="text-2xl font-bold text-white">${calculatePrice()}</span>
                </div>
                <p className="text-xs text-white/40 mt-1">
                  Final price may vary based on complexity
                </p>
              </motion.div>
            )}

            {/* Action Buttons */}
            {serviceType && serviceType !== "OTHER" && calculatePrice() > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex gap-2 pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openDiscord}
                  className="flex-1 bg-white text-black py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Order Now
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={resetForm}
                  className="px-5 py-3 rounded-xl border-2 border-white/20 text-sm font-medium text-white/80 hover:border-white/40 hover:text-white transition-all duration-150"
                >
                  Reset
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}