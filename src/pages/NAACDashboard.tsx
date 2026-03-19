import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, BarChart3, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NAACDashboard: React.FC = () => {
  const criteria = [
    { title: "Extension Activities (3.4)", progress: 85, status: "Excellent" },
    { title: "Collaborations (3.5)", progress: 40, status: "Needs Attention" },
    { title: "Student Involvement (5.1)", progress: 92, status: "Excellent" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-[#FFB800]">NAAC Compliance Overview</h1>
        <p className="text-muted-foreground text-sm">Monitor accreditation metrics and automate AQAR reporting drafts.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: <FileText size={22} />, value: '6/10', label: 'Drafts Ready for AQAR', color: 'bg-primary/10 text-primary' },
          { icon: <Award size={22} />, value: 'A+', label: 'Projected Grade', color: 'bg-[#FFB800]/20 text-[#FFB800]' },
          { icon: <AlertCircle size={22} />, value: '2', label: 'Critical Metrics Alert', color: 'bg-destructive/10 text-destructive' },
        ].map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border p-5"
          >
            <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>{stat.icon}</div>
            <p className="font-display text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-card rounded-xl border border-border p-5"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display font-semibold">Criteria Health Status</h3>
          <Link to="/reports" className="text-xs text-primary font-medium flex items-center gap-1">Full Report <ArrowRight size={12} /></Link>
        </div>
        <div className="space-y-6">
          {criteria.map((c, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">{c.title}</span>
                <span className={`text-xs font-bold ${c.progress > 60 ? 'text-success' : 'text-warning'}`}>{c.progress}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: `${c.progress}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                  className={`h-full rounded-full ${c.progress > 60 ? 'bg-success' : 'bg-warning'}`} 
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NAACDashboard;
