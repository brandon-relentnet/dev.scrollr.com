"use client";

import * as motion from "motion/react-client";
import { useRef } from "react";
import SvgIllustration from "@/components/ScrollrSVG";

export default function DraggableLogo() {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      ref={constraintsRef}
      className="flex items-center justify-center py-6"
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        className="size-[150px] pointer-events-auto"
      >
        <SvgIllustration
          width={150}
          height={150}
          className="cursor-grab animate-pulse"
        />
      </motion.div>
    </motion.div>
  );
}
