"use client";

import { Ticker } from "motion-plus/react";
import { motion } from "motion/react";

function Box({ src, title }) {
  return (
    <motion.div className="item" initial="hideInfo" whileHover="showInfo">
      <motion.img
        style={{ width: "100%", height: "100%" }}
        src={`/photos/boxart/${src}.png`}
        alt={title + " boxart"}
        variants={{
          hideInfo: { scale: 1, filter: "blur(0px)", opacity: 1 },
          showInfo: { scale: 0.9, filter: "blur(5px)", opacity: 0.3 },
        }}
      />
      <motion.div
        className="title"
        variants={{
          hideInfo: { opacity: 0, scale: 1.2 },
          showInfo: { opacity: 1, scale: 1 },
        }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
}

export default function TickerPage() {
  return (
    <div className="mx-auto flex items-center justify-center min-h-screen">
      <Ticker
        hoverFactor={0}
        items={[
          <Box src="sonic3" title="Sonic 3" />,
          <Box src="shinobi" title="Shinobi" />,
          <Box src="sonic1" title="Sonic 1" />,
          <Box src="streetsofrage2" title="Street Fighter 2" />,
        ]}
        style={{
          maskImage:
            "linear-gradient(to right, transparent 5%, black 10%, black 90%, transparent 95%)",
        }}
      />
      <Stylesheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function Stylesheet() {
  return (
    <style>
      {`
        #sandbox {
          align-items: stretch;
        }

        .container {
            display: flex;
            flex-direction: row;
            gap: 20px;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .item {
            width: 180px;
            height: 255px;
            overflow: hidden;
            position: relative;
        }

       .title {
            color: #f5f5f5;
            padding: 10px;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            text-shadow: 1px 1px 0px #000;
       }
      `}
    </style>
  );
}
