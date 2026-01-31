import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FlowStep({ icon: Icon, title, description, index }: FlowStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 group"
    >
      {/* Connector Line */}
      <div className="absolute left-[21px] top-12 bottom-0 w-[1px] bg-border group-last:hidden" />
      
      {/* Icon Container */}
      <div className="relative z-10 flex-shrink-0">
        <div className={cn(
          "w-11 h-11 rounded-lg border border-white/10 bg-card flex items-center justify-center transition-all duration-300",
          "group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(106,227,255,0.15)]"
        )}>
          <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>
      </div>
      
      {/* Content */}
      <div className="pb-12 pt-1.5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed max-w-md group-hover:text-white/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
