# Environment & Configuration Structure

This document explains the project's environment and configuration setup.

## Directory Structure

```
src/
├── environments/
│   ├── environment.ts          # Development environment config
│   └── environment.prod.ts     # Production environment config
├── app/
│   ├── constants/
│   │   └── api.constants.ts    # Centralized API endpoints
│   └── services/
│       └── auth.service.ts     # Service using environment config
├── main.ts
└── index.html

Root/
├── .env                         # Development environment variables
├── .env.example                # Example environment variables template
└── .env.production             # Production environment variables
```

## Configuration Files

### 1. Environment Files (`src/environments/`)

**environment.ts** (Development)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/auth'
};
```

**environment.prod.ts** (Production)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com/auth'
};
```

### 2. API Constants (`src/app/constants/api.constants.ts`)

Centralized endpoint definitions:
```typescript
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    SEND_OTP: '/send-otp',
    VERIFY_OTP: '/verify-otp'
  }
};
```

### 3. Environment Variables (`.env` files)

- `.env` - Local development variables
- `.env.example` - Template for environment variables (commit to repo)
- `.env.production` - Production environment variables

## How to Use

### In Services

```typescript
import { environment } from '../../environments/environment';
import { API_ENDPOINTS } from '../constants/api.constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;

  login(data: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${API_ENDPOINTS.AUTH.LOGIN}`,
      data
    );
  }
}
```

### Build for Different Environments

**Development:**
```bash
npm start
# or
ng serve
```

**Production:**
```bash
npm run build
# or
ng build --configuration=production
```

## Configuration Flow

1. **Environment Selection**: Angular automatically selects the right environment file based on build configuration
2. **API URL**: `environment.apiUrl` provides the base API URL
3. **Endpoints**: `API_ENDPOINTS` provides specific endpoint paths
4. **Final URL**: `${apiUrl}${endpoint}` creates the complete API path

## Example API Calls

```typescript
// Login
POST http://localhost:8080/auth/login

// Register
POST http://localhost:8080/auth/register

// Send OTP
POST http://localhost:8080/auth/send-otp

// Verify OTP
POST http://localhost:8080/auth/verify-otp
```

## Updating API Domain

To change the API domain:

### For Development:
Edit `src/environments/environment.ts`:
```typescript
apiUrl: 'http://your-new-domain:port/auth'
```

### For Production:
Edit `src/environments/environment.prod.ts`:
```typescript
apiUrl: 'https://your-production-domain.com/auth'
```

## Best Practices

1. ✅ **Never hardcode URLs** - Use environment files
2. ✅ **Centralize endpoints** - Use API_ENDPOINTS constants
3. ✅ **Use .env.example** - Template for developers
4. ✅ **Separate concerns** - Services handle API calls, components handle UI
5. ✅ **Environment-specific** - Different configs for dev/prod

## Adding New Endpoints

1. Add to `src/app/constants/api.constants.ts`:
```typescript
API_ENDPOINTS.NEW_FEATURE = {
  CREATE: '/new-feature',
  READ: '/new-feature/:id'
};
```

2. Use in service:
```typescript
newFeatureMethod(): Observable<any> {
  return this.http.get(
    `${this.apiUrl}${API_ENDPOINTS.NEW_FEATURE.READ}`
  );
}
```
