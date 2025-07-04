import { useEffect, useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type AlertType = 'success' | 'error' | null;

interface FloatingAlertProps {
  message: string;
  type: AlertType;
  onDismiss: () => void;
  duration?: number;
}

export function FloatingAlert({
  message,
  type,
  onDismiss,
  duration = 5000,
}: FloatingAlertProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (type) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onDismiss, 300); // Wait for fade-out animation
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [type, duration, onDismiss]);

  if (!type) return null;

  const alertStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  };

  const icon = {
    success: <CheckCircle2 className="h-5 w-5 text-green-600" />,
    error: <XCircle className="h-5 w-5 text-red-600" />,
  };

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border p-4 shadow-lg transition-all duration-300',
        alertStyles[type],
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
      )}
      role="alert"
    >
      <div className="flex-shrink-0">{icon[type]}</div>
      <div className="text-sm font-medium">{message}</div>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onDismiss, 300);
        }}
        className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-500"
      >
        <span className="sr-only">Close</span>
        <XCircle className="h-5 w-5" />
      </button>
    </div>
  );
}
