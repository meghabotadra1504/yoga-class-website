import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  User, 
  Settings, 
  LayoutDashboard, 
  Calendar, 
  Activity,
  ChevronRight
} from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[var(--color-base)] text-white pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome Back, <span className="gradient-text">{user?.name}</span>!</h1>
            <p className="text-slate-400">Manage your yoga practice and account settings</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500/30 transition-all text-slate-300 hover:text-red-400"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Panel */}
          <aside className="lg:col-span-1 space-y-4">
            {[
              { icon: LayoutDashboard, label: 'Overview', active: true },
              { icon: Calendar, label: 'My Schedule' },
              { icon: Activity, label: 'Performance' },
              { icon: Settings, label: 'Settings' }
            ].map((item, idx) => (
              <button 
                key={idx}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                  item.active 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.active && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-3 space-y-8">
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Completed Classes', value: '24', color: 'text-primary' },
                { label: 'Practice Hours', value: '38.5', color: 'text-secondary' },
                { label: 'Current Streak', value: '12 Days', color: 'text-accent' }
              ].map((stat, idx) => (
                <div key={idx} className="glass-card p-6 rounded-3xl border border-white/5">
                  <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Profile Info Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all"></div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold shadow-xl">
                  {user?.name?.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{user?.name}</h3>
                  <p className="text-slate-400 flex items-center gap-2 mt-1">
                    <User className="w-4 h-4" /> Professional Member
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Email Address</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Member Since</p>
                  <p className="font-medium">April 2026</p>
                </div>
              </div>
            </div>

            {/* Recent Activity Mock */}
            <div className="glass-card p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
              <div className="space-y-6">
                {[
                  { title: 'Morning Vinyasa Flow', date: 'Today, 08:30 AM', duration: '60 min' },
                  { title: 'Meditation Session', date: 'Yesterday, 06:00 PM', duration: '30 min' },
                  { title: 'Hatha Beginners', date: '03 Apr, 10:00 AM', duration: '45 min' }
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors">
                    <div>
                      <h4 className="font-bold">{activity.title}</h4>
                      <p className="text-sm text-slate-500">{activity.date}</p>
                    </div>
                    <span className="text-slate-400 font-mono text-sm">{activity.duration}</span>
                  </div>
                ))}
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}
