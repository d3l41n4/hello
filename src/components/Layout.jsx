import { motion } from 'framer-motion';
import { CustomButton } from '../components';
import { fadeAnimation, slideAnimation, headTextAnimation } from '../config/motion';

const Layout = ({ titles }) => {
  return (
    <motion.section className="home" {...slideAnimation('left')}>
      <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
        <CustomButton
          type="filled"
          title="About me"
          handleClick={() => (state.intro = false)}
          customStyles="w-fit px-4 py-2.5 font-bold text-sm"
        />
      </motion.div>
      <div className="scroll-container">
        {titles.map((title, index) => (
          <motion.div key={index} {...headTextAnimation}>
            <h1 className="head-text">
              {title} <br className="xl:block hidden"/>
            </h1>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Layout;
