import { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import cls from 'classnames';

import styles from './Card.module.css';

function Card(props) {
  const { imgUrl, size='medium', id, shouldScale = true } = props;
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  function onErrorHandler() {
    setImgSrc(
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80'
    );
  }

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };
  const shouldHover = shouldScale && { whileHover: { ...scale } };

  return (
    <div className={styles.container}>
      <motion.div 
        { ...shouldHover }
        className={cls(styles.imgMotionWrapper, classMap[size])}
      >
        <Image
          src={imgSrc}
          alt="image"
          onError={onErrorHandler}
          fill
          className={styles.cardImg} 
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </motion.div>
    </div>
  );
}

export default Card;
