import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import LoadingSpinner from '@/components/LoadingSpinner';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { error } = await supabase.auth.getSession();
        if (error) {
          console.error('Auth callback error:', error.message);
          navigate('/?auth=error', { replace: true });
        } else {
          navigate('/?auth=success', { replace: true });
        }
      } catch (err) {
        console.error('Auth callback exception:', err);
        navigate('/?auth=error', { replace: true });
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return <LoadingSpinner />;
};

export default AuthCallback;
