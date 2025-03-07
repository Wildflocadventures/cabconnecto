
import { useProviderAuth } from "@/hooks/useProviderAuth";
import { useCustomerAuth } from "@/hooks/useCustomerAuth";
import { AuthOptions } from "@/hooks/useAuth";

export { Car } from "@/hooks/useProviderAuth";

export const useAuthProfile = (options: AuthOptions = { redirectIfNotAuthenticated: true }) => {
  // This is a wrapper around the specific hooks for backward compatibility
  const providerAuth = useProviderAuth(options);
  const customerAuth = useCustomerAuth(options);

  // Determine which hook to use based on the user's role
  if (providerAuth.userProfile?.role === 'provider') {
    return providerAuth;
  } else {
    return customerAuth;
  }
};
