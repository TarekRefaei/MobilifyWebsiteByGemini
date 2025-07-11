'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Rocket } from 'lucide-react';
import { Card, CardContent } from '../ui';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: <Search className="w-8 h-8" />,
      title: 'Discovery & Strategy',
      description: 'We dive deep into your vision and goals, understanding your target audience and business objectives to create the perfect roadmap.',
    },
    {
      number: '02',
      icon: <Palette className="w-8 h-8" />,
      title: 'Design & Development',
      description: 'Our team builds your app with precision and care, focusing on user experience, performance, and beautiful design that represents your brand.',
    },
    {
      number: '03',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Launch & Support',
      description: 'We handle app store submission and provide ongoing support to ensure your app succeeds in the market and continues to evolve.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal dark:text-white mb-4">
            Your Clear Path to Launch
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our proven process ensures your app is built right, launched successfully, and supported long-term
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 z-0">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-electric-blue"
                  />
                </div>
              )}
              
              {/* Step number and icon */}
              <div className="relative z-10 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue text-white rounded-full mb-4 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 text-electric-blue rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dark-charcoal dark:text-white">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-dark-charcoal dark:text-white mb-2">
                Transparent Timeline
              </h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                Most projects are completed within 4-8 weeks, depending on complexity.
                We provide regular updates and maintain open communication throughout the entire process.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
