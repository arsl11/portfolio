import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { feedbacks } from '../constants';
import { Feedback } from '../types';

type FeedbackCardProps = Feedback & {
  index: number
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">{'"'}</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img src={image} alt={`feedback_by-${name}`} className="w-10 h-10 rounded-full object-cover" />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7`}>
        {feedbacks.length !== 0 ? (
          feedbacks.map((feedback: Feedback, index: number) => (
            <FeedbackCard key={feedback.name} index={index} {...feedback} />
          ))
        ) : (
          <div className="w-full flex">
            <motion.p
              variants={fadeIn('', '', 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              {'There will soon be feedback about me here'}
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
