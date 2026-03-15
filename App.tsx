import { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { ClientsPage } from './components/Clients/ClientsPage';
import { CasesPage } from './components/Cases/CasesPage';
import { CalendarPage } from './components/Calendar/CalendarPage';
import { InvoicesPage } from './components/Invoices/InvoicesPage';
import { MessagesPage } from './components/Messages/MessagesPage';
import { AIAssistantPage } from './components/AI/AIAssistantPage';
import { AnalyticsPage } from './components/Analytics/AnalyticsPage';
import { SettingsPage } from './components/Settings/SettingsPage';

const pageTitles: Record<string, string> = {
  dashboard: 'لوحة التحكم',
  clients: 'العملاء',
  cases: 'القضايا',
  calendar: 'الأجندة',
  invoices: 'الفواتير',
  messages: 'الرسائل',
  'ai-assistant': 'المساعد الذكي',
  analytics: 'التحليلات',
  settings: 'الإعدادات',
};

export function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'clients':
        return <ClientsPage />;
      case 'cases':
        return <CasesPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'invoices':
        return <InvoicesPage />;
      case 'messages':
        return <MessagesPage />;
      case 'ai-assistant':
        return <AIAssistantPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-[Tajawal]" dir="rtl">
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isCollapsed={sidebarCollapsed}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title={pageTitles[currentPage] || 'لوحة التحكم'}
          toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          isCollapsed={sidebarCollapsed}
        />
        <main className="flex-1 overflow-y-auto bg-slate-50">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
