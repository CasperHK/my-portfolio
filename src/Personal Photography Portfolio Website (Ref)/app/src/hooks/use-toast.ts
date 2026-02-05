import { toast as sonnerToast } from 'sonner';

interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
}

export const useToast = () => {
  const toast = (options: ToastOptions) => {
    sonnerToast(options.title, {
      description: options.description,
      duration: options.duration || 4000,
    });
  };

  return { toast };
};

export default useToast;
